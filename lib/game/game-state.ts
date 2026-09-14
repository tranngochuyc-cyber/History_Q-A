import type { GameSession, Progress, Settings, Question } from "../types";
import { events, questions } from "../data/events";
import { filterEvents } from "./filters";
import { chooseEvents } from "./randomizer";
import { scoreAnswer } from "./scoring";
export function startSession(
  settings: Settings,
  discovered: string[],
  id = crypto.randomUUID(),
): GameSession {
  if (![10, 20, 30, 50].includes(settings.rounds))
    throw new Error("Choose a supported journey length.");
  const pool = filterEvents(events, settings);
  if (pool.length < 3)
    throw new Error("Select at least three matching events.");
  const choices = chooseEvents(pool, {}, discovered, []);
  return {
    id,
    startedAt: new Date().toISOString(),
    settings,
    phase: "SELECT_EVENT",
    round: 1,
    score: 0,
    streak: 0,
    bestStreak: 0,
    choices,
    shown: Object.fromEntries(choices.map((id) => [id, 1])),
    answers: [],
    initialDiscovered: [...discovered],
  };
}
export function nextQuestion(
  eventId: string,
  session: GameSession,
  history: Progress["answers"],
): Question {
  const qs = questions.filter((q) => q.eventId === eventId);
  const count = (q: Question) =>
    session.answers.filter((a) => a.questionId === q.id).length;
  const min = Math.min(...qs.map(count));
  const eligible = qs.filter((q) => count(q) === min);
  const preferred = eligible.find((q) => q.id === qs[(session.round - 1) % qs.length].id);
  if (preferred) return preferred;
  return [...eligible].sort(
    (a, b) =>
      history.filter((h) => h.questionId === a.id).length -
      history.filter((h) => h.questionId === b.id).length,
  )[0];
}
export type Action =
  | { type: "SELECT"; eventId: string }
  | { type: "CONTINUE" }
  | { type: "ANSWER"; value: string | number | boolean }
  | { type: "NEXT" };
export function transition(progress: Progress, action: Action): Progress {
  const game = progress.active;
  if (!game) return progress;
  let next: GameSession = { ...game };
  if (
    action.type === "SELECT" &&
    game.phase === "SELECT_EVENT" &&
    game.choices.includes(action.eventId)
  ) {
    const q = nextQuestion(action.eventId, game, progress.answers);
    next = {
      ...next,
      selected: action.eventId,
      questionId: q.id,
      phase: "EVENT_BRIEF",
    };
  } else if (action.type === "CONTINUE" && game.phase === "EVENT_BRIEF")
    next.phase = "QUESTION";
  else if (action.type === "ANSWER" && game.phase === "QUESTION") {
    const q = questions.find((q) => q.id === game.questionId);
    if (!q) return progress;
    if (
      q.type === "year" &&
      (!Number.isInteger(action.value) ||
        Number(action.value) < -5000 ||
        Number(action.value) > 2100 ||
        action.value === 0)
    )
      return progress;
    if (q.type === "true-false" && typeof action.value !== "boolean")
      return progress;
    if (
      q.type === "multiple-choice" &&
      !q.options.some((o) => o.id === action.value)
    )
      return progress;
    const { correct, points } = scoreAnswer(q, action.value, game.streak),
      streak = correct ? game.streak + 1 : 0;
    const answer = {
      id: `${game.id}-${game.round}`,
      sessionId: game.id,
      eventId: q.eventId,
      questionId: q.id,
      answer: action.value,
      correct,
      points,
      at: new Date().toISOString(),
    };
    next = {
      ...next,
      phase: "QUESTION_RESULT",
      score: game.score + points,
      streak,
      bestStreak: Math.max(game.bestStreak, streak),
      answers: [...game.answers, answer],
    };
    return {
      ...progress,
      active: next,
      answers: [...progress.answers, answer],
      discovered: [...new Set([...progress.discovered, q.eventId])],
    };
  } else if (action.type === "NEXT" && game.phase === "QUESTION_RESULT") {
    if (game.round >= game.settings.rounds) {
      next = {
        ...next,
        phase: "GAME_COMPLETE",
        completedAt: new Date().toISOString(),
      };
      return {
        ...progress,
        active: next,
        games: [...progress.games.filter((g) => g.id !== next.id), next],
      };
    }
    const choices = chooseEvents(
      filterEvents(events, game.settings),
      game.shown,
      progress.discovered,
      game.answers.map((a) => a.eventId),
    );
    const shown = { ...game.shown };
    for (const id of choices) shown[id] = (shown[id] ?? 0) + 1;
    next = {
      ...next,
      phase: "SELECT_EVENT",
      round: game.round + 1,
      choices,
      shown,
      selected: undefined,
      questionId: undefined,
    };
  } else return progress;
  return { ...progress, active: next };
}

