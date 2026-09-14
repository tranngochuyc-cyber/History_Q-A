import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { events, questions } from "../lib/data/events";
import { countries } from "../lib/data/countries";
import { DEFAULT_SETTINGS } from "../lib/config";
import { emptyProgress, performance } from "../lib/game/progress";
import { startSession, transition } from "../lib/game/game-state";
import { filterEvents } from "../lib/game/filters";
import { chooseEvents } from "../lib/game/randomizer";
import { yearPoints, scoreAnswer } from "../lib/game/scoring";
import { parseProgress, mergeProgress } from "../lib/storage/local";
test("seed integrity: diverse events, valid relations, sources and questions", () => {
  assert.ok(events.length >= 30);
  assert.equal(new Set(events.map((e) => e.id)).size, events.length);
  for (const e of events) {
    assert.ok(e.image?.startsWith('/images/'), `${e.id} needs a local historical image`);
    assert.ok(existsSync(`public${e.image}`), `${e.id} image is missing`);
    assert.ok(e.summary.split(/\s+/).length >= 80, `${e.id} brief too short`);
    assert.ok(e.summary.split(/\s+/).length <= 180);
    assert.ok(
      e.countries.every((id) => countries.some((c) => c.id === id)),
      e.id,
    );
    assert.ok(e.relatedEvents.every((id) => events.some((v) => v.id === id)));
    assert.ok(e.sources.every((s) => s.url.startsWith("https://")));
    assert.ok(questions.filter((q) => q.eventId === e.id).length >= 2);
  }
  assert.deepEqual(
    new Set(questions.map((q) => q.type)),
    new Set(["multiple-choice"]),
  );
});
test("filters combine groups with AND and values within groups with OR", () => {
  const f = {
    ...DEFAULT_SETTINGS,
    countries: ["VN", "JP"],
    categories: ["War"],
  };
  assert.ok(
    filterEvents(events, f).every(
      (e) =>
        e.countries.some((c) => ["VN", "JP"].includes(c)) &&
        e.categories.includes("War"),
    ),
  );
  assert.equal(filterEvents(events, { ...f, regions: ["Oceania"] }).length, 0);
});
test("randomizer never repeats while enough unseen options remain", () => {
  const shown: Record<string, number> = {};
  for (let i = 0; i < Math.floor(events.length / 3); i++) {
    const picks = chooseEvents(events, shown, [], [], () => 0.42);
    assert.equal(picks.length, 3);
    assert.equal(new Set(picks).size, 3);
    for (const id of picks) {
      assert.equal(shown[id], undefined);
      shown[id] = 1;
    }
  }
});
test("small pools produce unique choices and prefer least-seen", () => {
  const pool = events.slice(0, 2);
  assert.equal(chooseEvents(pool, {}, [], []).length, 2);
  const result = chooseEvents(
    events.slice(0, 5),
    { [events[0].id]: 5 },
    [],
    [],
    () => 0,
  );
  assert.ok(!result.includes(events[0].id));
});
test("scoring boundaries and streak reset semantics", () => {
  assert.deepEqual(
    [0, 1, 5, 10, 25, 26].map((d) => yearPoints(1900 + d, 1900)),
    [100, 90, 70, 40, 20, 0],
  );
  const q = questions.find((q) => q.type === "multiple-choice")!;
  assert.equal(
    scoreAnswer({ ...q, difficulty: "Hard" }, q.answer, 3).points,
    180,
  );
  assert.equal(scoreAnswer(q, Number(q.answer) + 1, 3).correct, false);
});
test("all game lengths complete, answer submissions are idempotent, save restores", () => {
  for (const rounds of [10, 20, 30, 50]) {
    let p = emptyProgress();
    p.active = startSession(
      { ...DEFAULT_SETTINGS, rounds },
      [],
      "test-" + rounds,
    );
    const used = new Map<string, Set<string>>();
    for (let i = 0; i < rounds; i++) {
      assert.equal(p.active!.phase, "SELECT_EVENT");
      p = transition(p, { type: "ANSWER", value: "0" });
      assert.equal(p.answers.length, i);
      p = transition(p, { type: "SELECT", eventId: p.active!.choices[0] });
      const q = questions.find((q) => q.id === p.active!.questionId)!;
      const prior = used.get(q.eventId) ?? new Set();
      if (prior.size < questions.filter((x) => x.eventId === q.eventId).length)
        assert.ok(!prior.has(q.id));
      prior.add(q.id);
      used.set(q.eventId, prior);
      p = transition(p, { type: "CONTINUE" });
      const roundtrip = parseProgress(JSON.stringify(p));
      assert.ok(roundtrip);
      p = roundtrip;
      p = transition(p, { type: "ANSWER", value: q.answer });
      const duplicate = transition(p, { type: "ANSWER", value: q.answer });
      assert.equal(duplicate, p);
      p = transition(p, { type: "NEXT" });
    }
    assert.equal(p.active!.phase, "GAME_COMPLETE");
    assert.equal(p.games.length, 1);
    assert.equal(performance(p.answers).accuracy, 100);
    assert.equal(p.active!.bestStreak, rounds);
    assert.equal(p.answers.length, rounds);
    assert.equal(transition(p, { type: "NEXT" }), p);
  }
});
test("wrong answers reset streak", () => {
  let p = emptyProgress();
  p.active = startSession({ ...DEFAULT_SETTINGS }, [], "invalid");
  p = transition(p, { type: "SELECT", eventId: p.active.choices[0] });
  p = transition(p, { type: "CONTINUE" });
  const q = questions.find((q) => q.id === p.active!.questionId)!;
  p = transition(p, { type: "ANSWER", value: q.answer });
  p = transition(p, { type: "NEXT" });
  p = transition(p, { type: "SELECT", eventId: p.active!.choices[0] });
  p = transition(p, { type: "CONTINUE" });
  p = transition(p, {
    type: "ANSWER",
    value: "1",
  });
  assert.equal(p.active!.streak, 0);
});
test("corrupt storage is rejected; merge deduplicates answers", () => {
  assert.equal(parseProgress("{oops"), null);
  assert.equal(
    parseProgress(JSON.stringify({ ...emptyProgress(), active: {} })),
    null,
  );
  const p = emptyProgress();
  assert.deepEqual(mergeProgress(p, p), p);
});

test("every question has four unique choices and one valid answer", () => {
  for (const q of questions) {
    assert.equal(q.type, "multiple-choice");
    if (q.type !== "multiple-choice") continue;
    assert.equal(q.options.length, 4, q.id);
    assert.equal(new Set(q.options.map(o => o.text)).size, 4, q.id);
    assert.equal(q.options.filter(o => o.id === q.answer).length, 1, q.id);
    for (const option of q.options) {
      assert.equal(scoreAnswer(q, option.id, 0).correct, option.id === q.answer);
    }
  }
});

