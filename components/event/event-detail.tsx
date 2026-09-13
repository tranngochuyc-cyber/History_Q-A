"use client";
import { vi } from "@/lib/i18n";
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
        <ArrowLeft size={16} /> Về kho lịch sử
      </Link>
      <div className="detail-hero">
        <div>
          <div className="eyebrow">
            HỒ SƠ LỊCH SỬ / {vi(event.era).toUpperCase()}
          </div>
          <h1>{event.title}</h1>
          <EventMeta event={event} />
          <p>{event.shortSummary}</p>
          <div className="chips">
            {event.categories.map((c) => (
              <span className="tag" key={vi(c)}>
                {vi(c)}
              </span>
            ))}
            <span className="tag">{vi(event.scale)}</span>
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
            ["Bối cảnh", event.causes],
            ["Diễn biến", event.whatHappened],
            ["Tác động", event.consequences],
          ].map(([title, text]) => (
            <section key={title}>
              <div className="eyebrow">{title.toUpperCase()}</div>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
          <section className="sources">
            <h2>Tìm hiểu từ nguồn tư liệu.</h2>
            <p>Đọc thêm và tìm hiểu bối cảnh của từng nguồn tư liệu.</p>
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
          <div className="eyebrow">CHI TIẾT SỰ KIỆN</div>
          <dl>
            <dt>Niên đại</dt>
            <dd>
              {event.id === "great-wave"
                ? "Khoảng 1830–1832"
                : event.startDate && event.startYear > 0
                  ? new Date(`${event.startDate}T12:00:00Z`).toLocaleDateString(
                      "vi-VN",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC",
                      },
                    )
                  : `${formatYear(event.startYear)}${event.endYear !== event.startYear ? ` – ${formatYear(event.endYear)}` : ""}`}
            </dd>
            <dt>Địa điểm</dt>
            <dd>{event.locationText}</dd>
            <dt>Nhân vật tiêu biểu</dt>
            <dd>
              {event.keyFigures.length
                ? event.keyFigures.join(" · ")
                : "Sự kiện gắn với nhiều cộng đồng"}
            </dd>
          </dl>
          <div className="mastery">
            <h3>
              {discovered ? (
                <>
                  <Check size={17} /> Đã có trong kho lịch sử
                </>
              ) : (
                <>
                  <LockKeyhole size={17} /> Sẵn sàng khám phá
                </>
              )}
            </h3>
            <p>{progress.completed} câu hỏi khác nhau đã hoàn thành</p>
            <strong>{progress.accuracy}%</strong>
            <span>độ chính xác · {progress.total} lượt trả lời</span>
            <div className="progress-track">
              <div style={{ width: `${progress.accuracy}%` }} />
            </div>
            <Link className="button primary full" href="/play">
              Khám phá qua trò chơi <ArrowUpRight size={16} />
            </Link>
          </div>
        </aside>
      </div>
      <section className="related-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">NHỮNG CÂU CHUYỆN LIÊN QUAN</div>
            <h2>Lịch sử luôn có những mối liên hệ.</h2>
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
