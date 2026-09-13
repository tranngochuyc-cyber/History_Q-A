import type { Question } from "../types";
export function yearPoints(answer: number, target: number) {
  const d = Math.abs(answer - target);
  return d === 0
    ? 100
    : d <= 1
      ? 90
      : d <= 5
        ? 70
        : d <= 10
          ? 40
          : d <= 25
            ? 20
            : 0;
}
export function scoreAnswer(
  q: Question,
  answer: string | boolean | number,
  streak: number,
) {
  const correct = answer === q.answer;
  const base =
    q.type === "year"
      ? yearPoints(Number(answer), q.answer)
      : correct
        ? 100
        : 0;
  const multiplier = { Easy: 1, Medium: 1.25, Hard: 1.5 }[q.difficulty];
  const bonus = correct ? Math.min(streak, 10) * 10 : 0;
  return { correct, points: Math.round(base * multiplier) + bonus };
}
