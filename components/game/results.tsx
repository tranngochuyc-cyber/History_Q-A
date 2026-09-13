"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Compass, Trophy } from "lucide-react";
import type { GameSession } from "@/lib/types";
import { eventById } from "@/lib/data/events";
import { performance } from "@/lib/game/progress";
import { startSession } from "@/lib/game/game-state";
import { useProgress } from "../providers";
import { achievements } from "@/lib/game/achievements";
export function GameResults({ game }: { game: GameSession }) {
  const { data, update } = useProgress(),
    router = useRouter(),
    stats = performance(game.answers);
  const discovered = [...new Set(game.answers.map((a) => a.eventId))],
    newEvents = discovered.filter((id) => !game.initialDiscovered.includes(id));
  const countryCount = new Set(
    discovered.flatMap((id) => eventById(id).countries),
  ).size;
  const cats = [
    ...new Set(discovered.flatMap((id) => eventById(id).categories)),
  ]
    .map((name) => ({
      name,
      ...performance(
        game.answers.filter((a) =>
          eventById(a.eventId).categories.includes(name),
        ),
      ),
    }))
    .sort((a, b) => b.accuracy - a.accuracy || b.total - a.total);
  const unlocked = achievements(data).filter((a) => a.unlocked);
  return (
    <div className="results-page reveal">
      <Compass size={52} strokeWidth={1} />
      <div className="eyebrow">EXPEDITION COMPLETE</div>
      <h1>A little closer to the past.</h1>
      <p>Every answer is a connection. Every discovery stays with you.</p>
      <div className="final-score">
        <span>FINAL SCORE</span>
        <strong>{game.score.toLocaleString()}</strong>
      </div>
      <div className="stat-grid">
        <div>
          <strong>{stats.accuracy}%</strong>
          <span>Accuracy</span>
        </div>
        <div>
          <strong>
            {stats.correct} / {stats.total}
          </strong>
          <span>Correct answers</span>
        </div>
        <div>
          <strong>{stats.incorrect}</strong>
          <span>Incorrect answers</span>
        </div>
        <div>
          <strong>×{game.bestStreak}</strong>
          <span>Best streak</span>
        </div>
        <div>
          <strong>{newEvents.length}</strong>
          <span>New discoveries</span>
        </div>
        <div>
          <strong>{countryCount}</strong>
          <span>Countries explored</span>
        </div>
      </div>
      <div className="result-categories">
        <div>
          <span>STRONGEST THREAD</span>
          <strong>
            {cats[0]?.name ?? "—"} · {cats[0]?.accuracy ?? 0}%
          </strong>
        </div>
        <div>
          <span>ROOM TO EXPLORE</span>
          <strong>
            {cats.at(-1)?.name ?? "—"} · {cats.at(-1)?.accuracy ?? 0}%
          </strong>
        </div>
      </div>
      {unlocked.length > 0 && (
        <div className="achievement-inline">
          <Trophy size={18} />
          <span>
            Achievements earned: {unlocked.map((a) => a.name).join(" · ")}
          </span>
        </div>
      )}
      <div className="button-row">
        <button
          className="button primary"
          onClick={() => {
            update((p) => ({
              ...p,
              active: startSession(game.settings, p.discovered),
            }));
            router.push("/game");
          }}
        >
          Play again <ArrowRight size={17} />
        </button>
        <Link className="button" href="/play">
          Change filters
        </Link>
        <Link className="button ghost" href="/archive?status=discovered">
          View discovered events
        </Link>
      </div>
      <div className="journey-log">
        <h2>Your journey in {stats.total} moments</h2>
        {game.answers.map((a, i) => (
          <Link href={`/event/${eventById(a.eventId).slug}`} key={a.id}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{eventById(a.eventId).title}</strong>
            <span className={a.correct ? "success-text" : "muted"}>
              {a.correct ? "Correct" : "Reviewed"} · +{a.points}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
