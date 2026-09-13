"use client";
import Link from "next/link";
import { Trophy, LockKeyhole, ArrowRight, Check } from "lucide-react";
import { useProgress } from "../providers";
import { events } from "@/lib/data/events";
import { countries } from "@/lib/data/countries";
import { CATEGORIES } from "@/lib/config";
import { performance } from "@/lib/game/progress";
import { achievements } from "@/lib/game/achievements";
export function Stats() {
  const { data, ready } = useProgress();
  if (!ready)
    return <div className="loading-skeleton" aria-label="Loading statistics" />;
  const stats = performance(data.answers),
    countryCount = new Set(
      events
        .filter((e) => data.discovered.includes(e.id))
        .flatMap((e) => e.countries),
    ).size;
  const streak = Math.max(
    0,
    ...data.games.map((g) => g.bestStreak),
    data.active?.bestStreak ?? 0,
  );
  const categories = CATEGORIES.map((name) => ({
    name,
    ...performance(
      data.answers.filter((a) =>
        events.some((e) => e.id === a.eventId && e.categories.includes(name)),
      ),
    ),
  }));
  const countryStats = countries
    .map((c) => ({
      name: c.name,
      ...performance(
        data.answers.filter((a) =>
          events.some((e) => e.id === a.eventId && e.countries.includes(c.id)),
        ),
      ),
    }))
    .filter((c) => c.total > 0)
    .sort((a, b) => b.total - a.total);
  return (
    <>
      <div className="page-heading">
        <div className="eyebrow">YOUR PERSONAL ATLAS</div>
        <h1>Look how far you’ve traveled.</h1>
        <p>Small discoveries add up to a wider view of the world.</p>
      </div>
      {!stats.total && (
        <div className="notice">
          <span>Your atlas is waiting for its first discovery.</span>
          <Link className="text-link" href="/play">
            Begin a journey <ArrowRight size={15} />
          </Link>
        </div>
      )}
      <div className="stat-grid dashboard-stats">
        {[
          [stats.total, "Questions answered"],
          [stats.correct, "Correct answers"],
          [`${stats.accuracy}%`, "Accuracy"],
          [data.games.length, "Journeys completed"],
          [data.discovered.length, "Events discovered"],
          [countryCount, "Countries explored"],
          [`×${streak}`, "Longest streak"],
          [
            data.answers.reduce((n, a) => n + a.points, 0).toLocaleString(),
            "Total score",
          ],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="performance-grid">
        <section className="performance-panel">
          <div className="eyebrow">FOLLOWING THE THREADS</div>
          <h2>By category</h2>
          <PerformanceBars rows={categories} />
        </section>
        <section className="performance-panel">
          <div className="eyebrow">ACROSS THE MAP</div>
          <h2>By country</h2>
          {countryStats.length ? (
            <PerformanceBars rows={countryStats} />
          ) : (
            <p className="empty-small">
              Play a round to begin mapping your knowledge.
            </p>
          )}
        </section>
      </div>
      <section className="achievements-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">MILESTONES, NOT FINISH LINES</div>
            <h2>The marks of an explorer.</h2>
          </div>
          <Trophy size={28} />
        </div>
        <div className="achievement-grid">
          {achievements(data).map((a) => (
            <div
              key={a.id}
              className={`achievement ${a.unlocked ? "unlocked" : ""}`}
            >
              {a.unlocked ? <Trophy size={25} /> : <LockKeyhole size={25} />}
              <h3>{a.name}</h3>
              <p>{a.description}</p>
              <div className="progress-track">
                <div
                  style={{
                    width: `${Math.min(100, (a.value / a.target) * 100)}%`,
                  }}
                />
              </div>
              <span>
                {a.unlocked ? (
                  <>
                    <Check size={13} /> Earned
                  </>
                ) : (
                  `${Math.min(a.value, a.target)} / ${a.target}`
                )}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
function PerformanceBars({
  rows,
}: {
  rows: { name: string; total: number; accuracy: number; correct: number }[];
}) {
  return (
    <div className="performance-bars">
      {rows.map((r) => (
        <div key={r.name}>
          <div>
            <span>{r.name}</span>
            <strong>
              {r.total ? `${r.accuracy}%` : "—"}{" "}
              <small>
                ({r.correct}/{r.total})
              </small>
            </strong>
          </div>
          <div
            className="progress-track"
            role="img"
            aria-label={`${r.name}: ${r.correct} correct of ${r.total}`}
          >
            <div style={{ width: `${r.accuracy}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
