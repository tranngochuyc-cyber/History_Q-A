import type { Progress, GameAnswer } from "../types";
import { DEFAULT_SETTINGS } from "../config";
export const emptyProgress = (): Progress => ({
  version: 1,
  answers: [],
  games: [],
  discovered: [],
  active: null,
  settings: { ...DEFAULT_SETTINGS },
});
export function performance(answers: GameAnswer[]) {
  const correct = answers.filter((a) => a.correct).length;
  return {
    total: answers.length,
    correct,
    incorrect: answers.length - correct,
    accuracy: answers.length ? Math.round((correct / answers.length) * 100) : 0,
  };
}
export function mastery(answers: GameAnswer[], eventId: string) {
  const a = answers.filter((a) => a.eventId === eventId);
  return {
    ...performance(a),
    completed: new Set(a.map((v) => v.questionId)).size,
  };
}
