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
      name: "Lữ khách thời gian",
      description: "Khám phá 25 sự kiện",
      value: p.discovered.length,
      target: 25,
    },
    {
      id: "historian",
      name: "Nhà sử học",
      description: "Trả lời 100 câu hỏi",
      value: p.answers.length,
      target: 100,
    },
    {
      id: "world-explorer",
      name: "Nhà thám hiểm",
      description: "Khám phá sự kiện từ 10 quốc gia",
      value: countries,
      target: 10,
    },
    {
      id: "perfect-round",
      name: "Hành trình hoàn hảo",
      description: "Hoàn thành hành trình với độ chính xác 100%",
      value: p.games.filter(
        (g) =>
          g.answers.length === g.settings.rounds &&
          g.answers.every((a) => a.correct),
      ).length,
      target: 1,
    },
    {
      id: "ancient-scholar",
      name: "Học giả cổ đại",
      description: "Trả lời đúng 20 câu hỏi thời cổ đại",
      value: correctIn((id) =>
        events.some((e) => e.id === id && e.era === "Ancient"),
      ),
      target: 20,
    },
    {
      id: "cold-warrior",
      name: "Am hiểu Chiến tranh Lạnh",
      description: "Trả lời đúng 20 câu hỏi về Chiến tranh Lạnh",
      value: correctIn((id) =>
        events.some((e) => e.id === id && e.tags.includes("Cold War")),
      ),
      target: 20,
    },
  ].map((a) => ({ ...a, unlocked: a.value >= a.target }));
}
