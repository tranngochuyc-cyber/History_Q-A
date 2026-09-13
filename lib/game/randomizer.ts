import type { HistoricalEvent } from "../types";
export function chooseEvents(
  pool: HistoricalEvent[],
  shown: Record<string, number>,
  discovered: string[],
  played: string[],
  rng = Math.random,
): string[] {
  const remaining = [...pool],
    chosen: HistoricalEvent[] = [];
  while (remaining.length && chosen.length < 3) {
    const minimum = Math.min(...remaining.map((e) => shown[e.id] ?? 0));
    const eligible = remaining.filter((e) => (shown[e.id] ?? 0) === minimum);
    const weights = eligible.map((e) => {
      let w =
        (discovered.includes(e.id) ? 1 : 3) * (played.includes(e.id) ? 0.3 : 1);
      for (const previous of chosen) {
        if (previous.categories[0] === e.categories[0]) w *= 0.45;
        if (previous.era === e.era) w *= 0.65;
        if (previous.countries.some((c) => e.countries.includes(c))) w *= 0.5;
        if (previous.difficulty === e.difficulty) w *= 0.8;
      }
      return w;
    });
    let draw = rng() * weights.reduce((a, b) => a + b, 0),
      index = weights.length - 1;
    for (let i = 0; i < weights.length; i++) {
      draw -= weights[i];
      if (draw <= 0) {
        index = i;
        break;
      }
    }
    const picked = eligible[index];
    chosen.push(picked);
    remaining.splice(remaining.indexOf(picked), 1);
  }
  return chosen.map((e) => e.id);
}
