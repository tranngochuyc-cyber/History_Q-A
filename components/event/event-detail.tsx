"use client";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Check,
  LockKeyhole,
} from "lucide-react";
import { events, formatYear } from "@/lib/data/events";
import type { HistoricalEvent } from "@/lib/types";
import { useProgress } from "../providers";
import { mastery } from "@/lib/game/progress";
import { EventImage, EventMeta, EventCard } from "./event-card";
export function EventDetail({ event }: { event: HistoricalEvent }) {
  const { data } = useProgress(),
    progress = mastery(data.answers, event.id),
    discovered = data.discovered.includes(event.id);
  return (
    <>
      <Link className="text-link back-link" href="/archive">
        <ArrowLeft size={16} /> Back to archive
      </Link>
      <div className="detail-hero">
        <div>
          <div className="eyebrow">
            ARCHIVAL RECORD / {event.era.toUpperCase()}
          </div>
          <h1>{event.title}</h1>
          <EventMeta event={event} />
          <p>{event.shortSummary}</p>
          <div className="chips">
            {event.categories.map((c) => (
              <span className="tag" key={c}>
                {c}
              </span>
            ))}
            <span className="tag">{event.scale}</span>
          </div>
        </div>
        <EventImage event={event} />
      </div>
      {event.imageAttribution && (
        <a
          className="image-credit"
          href={event.imageAttribution.url}
          target="_blank"
          rel="noreferrer"
        >
          {event.imageAttribution.title} · {event.imageAlt}
        </a>
      )}
      <div className="detail-layout">
        <article>
          {[
            ["The context", event.causes],
            ["What happened", event.whatHappened],
            ["What changed", event.consequences],
          ].map(([title, text]) => (
            <section key={title}>
              <div className="eyebrow">{title.toUpperCase()}</div>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
          <section className="sources">
            <h2>Follow the sources.</h2>
            <p>Read further and consider the context behind each account.</p>
            {event.sources.map((s) => (
              <a href={s.url} target="_blank" rel="noreferrer" key={s.url}>
                <BookOpen size={18} />
                <span>
                  <strong>{s.title}</strong>
                  <small>{s.publisher}</small>
                </span>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </section>
        </article>
        <aside className="record-sidebar">
          <div className="eyebrow">RECORD DETAILS</div>
          <dl>
            <dt>Date</dt>
            <dd>
              {event.id === "great-wave"
                ? "c. 1830–1832"
                : event.startDate && event.startYear > 0
                  ? new Date(`${event.startDate}T12:00:00Z`).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC",
                      },
                    )
                  : `${formatYear(event.startYear)}${event.endYear !== event.startYear ? ` – ${formatYear(event.endYear)}` : ""}`}
            </dd>
            <dt>Location</dt>
            <dd>{event.locationText}</dd>
            <dt>Key figures</dt>
            <dd>
              {event.keyFigures.length
                ? event.keyFigures.join(" · ")
                : "A collective historical experience"}
            </dd>
          </dl>
          <div className="mastery">
            <h3>
              {discovered ? (
                <>
                  <Check size={17} /> In your archive
                </>
              ) : (
                <>
                  <LockKeyhole size={17} /> Ready to discover
                </>
              )}
            </h3>
            <p>{progress.completed} distinct questions completed</p>
            <strong>{progress.accuracy}%</strong>
            <span>answer accuracy · {progress.total} attempts</span>
            <div className="progress-track">
              <div style={{ width: `${progress.accuracy}%` }} />
            </div>
            <Link className="button primary full" href="/play">
              Explore through play <ArrowUpRight size={16} />
            </Link>
          </div>
        </aside>
      </div>
      <section className="related-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">CONNECTED CHAPTERS</div>
            <h2>History doesn’t happen alone.</h2>
          </div>
        </div>
        <div className="event-grid">
          {event.relatedEvents
            .map((id) => events.find((e) => e.id === id))
            .filter((e): e is HistoricalEvent => !!e)
            .map((e) => (
              <EventCard
                key={e.id}
                event={e}
                discovered={data.discovered.includes(e.id)}
              />
            ))}
        </div>
      </section>
    </>
  );
}
