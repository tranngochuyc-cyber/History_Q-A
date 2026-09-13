import type { Progress, Settings, GameSession, GameAnswer } from "../types";
import { emptyProgress } from "../game/progress";
import { events, questions } from "../data/events";
export const STORAGE_KEY = "chronoquest.v1";
const initial = { data: emptyProgress(), ready: false, warning: "" };
let snapshot = initial;
const listeners = new Set<() => void>();
const eventIds = new Set(events.map((e) => e.id)),
  questionIds = new Set(questions.map((q) => q.id));
function object(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === "object" && !Array.isArray(v);
}
function strings(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === "string");
}
function validSettings(v: unknown): v is Settings {
  return (
    object(v) &&
    [10, 20, 30, 50].includes(Number(v.rounds)) &&
    ["All", "Easy", "Medium", "Hard"].includes(String(v.difficulty)) &&
    ["countries", "regions", "eras", "categories"].every((k) => strings(v[k]))
  );
}
function validAnswer(v: unknown): v is GameAnswer {
  return (
    object(v) &&
    typeof v.id === "string" &&
    typeof v.sessionId === "string" &&
    eventIds.has(String(v.eventId)) &&
    questionIds.has(String(v.questionId)) &&
    typeof v.correct === "boolean" &&
    typeof v.points === "number" &&
    Number.isFinite(v.points) &&
    ["string", "number", "boolean"].includes(typeof v.answer) &&
    typeof v.at === "string"
  );
}
function validGame(v: unknown): v is GameSession {
  return (
    object(v) &&
    typeof v.id === "string" &&
    typeof v.startedAt === "string" &&
    validSettings(v.settings) &&
    [
      "SELECT_EVENT",
      "EVENT_BRIEF",
      "QUESTION",
      "QUESTION_RESULT",
      "GAME_COMPLETE",
    ].includes(String(v.phase)) &&
    typeof v.round === "number" &&
    v.round >= 1 &&
    v.round <= v.settings.rounds &&
    ["score", "streak", "bestStreak"].every(
      (k) => typeof v[k] === "number" && Number.isFinite(v[k]),
    ) &&
    strings(v.choices) &&
    v.choices.length > 0 &&
    v.choices.every((id) => eventIds.has(id)) &&
    object(v.shown) &&
    Object.values(v.shown).every(
      (n) => typeof n === "number" && Number.isFinite(n),
    ) &&
    strings(v.initialDiscovered) &&
    Array.isArray(v.answers) &&
    v.answers.every(validAnswer) &&
    (["SELECT_EVENT", "GAME_COMPLETE"].includes(String(v.phase)) ||
      (eventIds.has(String(v.selected)) &&
        questionIds.has(String(v.questionId))))
  );
}
export function parseProgress(raw: string): Progress | null {
  try {
    const p: unknown = JSON.parse(raw);
    if (
      !object(p) ||
      p.version !== 1 ||
      !Array.isArray(p.answers) ||
      !p.answers.every(validAnswer) ||
      !Array.isArray(p.games) ||
      !p.games.every(validGame) ||
      !strings(p.discovered) ||
      !p.discovered.every((id) => eventIds.has(id)) ||
      !validSettings(p.settings) ||
      (p.active !== null && !validGame(p.active))
    )
      return null;
    return p as unknown as Progress;
  } catch {
    return null;
  }
}
function emit() {
  listeners.forEach((fn) => fn());
}
function hydrate() {
  if (snapshot.ready) return;
  let data = emptyProgress(),
    warning = "";
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = parseProgress(raw);
      if (parsed) data = parsed;
      else
        warning =
          "The saved journey could not be read. A fresh archive is ready.";
    }
  } catch {
    warning = "Local storage is unavailable. Progress is kept for this visit.";
  }
  snapshot = { data, ready: true, warning };
  emit();
}
export function subscribe(listener: () => void) {
  listeners.add(listener);
  hydrate();
  return () => {
    listeners.delete(listener);
  };
}
export const getSnapshot = () => snapshot;
export const getServerSnapshot = () => initial;
export function updateProgress(fn: (p: Progress) => Progress) {
  hydrate();
  const data = fn(snapshot.data);
  if (data === snapshot.data) return;
  let warning = snapshot.warning;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    warning = "Your browser could not save progress. Keep this tab open.";
  }
  snapshot = { data, ready: true, warning };
  emit();
}
export function mergeProgress(local: Progress, remote: Progress): Progress {
  const answers = [
    ...new Map(
      [...remote.answers, ...local.answers].map((a) => [a.id, a]),
    ).values(),
  ].sort((a, b) => a.at.localeCompare(b.at));
  const games = [
    ...new Map(
      [...remote.games, ...local.games].map((g) => [g.id, g]),
    ).values(),
  ];
  return {
    ...local,
    answers,
    games,
    discovered: [...new Set([...remote.discovered, ...local.discovered])],
    active: local.active ?? remote.active,
  };
}
