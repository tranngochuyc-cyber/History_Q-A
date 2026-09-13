import type { Progress } from "../types";
import { events } from "../data/events";
export function achievements(p: Progress) {
  const countries = new Set(
    events
      .filter((e) => p.discovered.includes(e.id))
      .flatMap((e) => e.countries),
  ).size;
  const correctIn = (test: (id: string) => boolean) =>
    p.answers.filter((a) => a.correct && test(a.eventId)).length;
  return [
    {
      id: "time-traveler",
      name: "Time Traveler",
      description: "Discover 25 events",
      value: p.discovered.length,
      target: 25,
    },
    {
      id: "historian",
      name: "Historian",
      description: "Answer 100 questions",
      value: p.answers.length,
      target: 100,
    },
    {
      id: "world-explorer",
      name: "World Explorer",
      description: "Discover events from 10 countries",
      value: countries,
      target: 10,
    },
    {
      id: "perfect-round",
      name: "Perfect Round",
      description: "Complete a journey with 100% accuracy",
      value: p.games.filter(
        (g) =>
          g.answers.length === g.settings.rounds &&
          g.answers.every((a) => a.correct),
      ).length,
      target: 1,
    },
    {
      id: "ancient-scholar",
      name: "Ancient Scholar",
      description: "Answer 20 Ancient questions correctly",
      value: correctIn((id) =>
        events.some((e) => e.id === id && e.era === "Ancient"),
      ),
      target: 20,
    },
    {
      id: "cold-warrior",
      name: "Cold Warrior",
      description: "Answer 20 Cold War questions correctly",
      value: correctIn((id) =>
        events.some((e) => e.id === id && e.tags.includes("Cold War")),
      ),
      target: 20,
    },
  ].map((a) => ({ ...a, unlocked: a.value >= a.target }));
}
