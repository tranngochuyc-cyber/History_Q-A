"use client";
import { vi } from "@/lib/i18n";
import Image from "next/image";
import { BookmarkButton } from "../bookmark-button";
import { imagePresentation } from "@/lib/data/image-presentation";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, LockKeyhole, Check, Compass } from "lucide-react";
import type { HistoricalEvent } from "@/lib/types";
import { countryName } from "@/lib/data/countries";
import { formatEventYear } from "@/lib/data/events";
export function EventImage({
  event,
  hideYear = false,
}: {
  event: HistoricalEvent;
  hideYear?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const framing = imagePresentation[event.id] ?? { fit: "cover", position: "center center" };
  return (
    <div
      className={`event-image era-${event.era.toLowerCase().replace(" ", "-")}`}
    >
      {event.image && !failed ? (
        <>
        {framing.fit === "contain" && <div className="historical-image-fill" aria-hidden="true" style={{ backgroundImage: `url("${event.image}")` }} />}
        <Image
          src={event.image}
          alt={
            hideYear
              ? `Ảnh lịch sử liên quan đến ${event.title}`
              : event.imageAlt
          }
          fill
          sizes="(max-width:600px) 100vw, (max-width:1000px) 50vw, 33vw"
          onError={() => setFailed(true)}
          style={{ objectFit: framing.fit, objectPosition: framing.position }}
        />
        </>
      ) : (
        <div className="artifact-fallback">
          <Compass strokeWidth={0.6} size={90} />
          <span>{hideYear ? "CHƯA RÕ NIÊN ĐẠI" : formatEventYear(event)}</span>
          <small>{event.locationText}</small>
        </div>
      )}
      <span className="image-index">
        CQ / {event.id.slice(0, 3).toUpperCase()}
      </span>
    </div>
  );
}
export function EventMeta({
  event,
  hideYear = false,
}: {
  event: HistoricalEvent;
  hideYear?: boolean;
}) {
  return (
    <div className="event-meta">
      <span>{hideYear ? "NIÊN ĐẠI CẦN KHÁM PHÁ" : formatEventYear(event)}</span>
      <span>{event.countries.map(countryName).join(" · ")}</span>
    </div>
  );
}
export function EventCard({
  event,
  onSelect,
  discovered,
  hideYear = false,
  locked = false,
}: {
  event: HistoricalEvent;
  onSelect?: () => void;
  discovered?: boolean;
  hideYear?: boolean;
  locked?: boolean;
}) {
  const inner = (
    <>
      <EventImage event={event} hideYear={hideYear} />
      <div className="event-card-body">
        <div className="card-top">
          <span className="tag" data-category={event.categories[0]}>
            {vi(event.categories[0])}
          </span>
          <span>{vi(event.scale)}</span>
        </div>
        <EventMeta event={event} hideYear={hideYear} />
        <h3>{event.title}</h3>
        <p>{event.shortSummary}</p>
        <div className="card-bottom">
          <span>
            {discovered ? (
              <>
                <Check size={13} /> Đã khám phá
              </>
            ) : locked ? (
              <>
                <LockKeyhole size={13} /> Khám phá để lưu
              </>
            ) : (
              "Khám phá sự kiện"
            )}
          </span>
          <ArrowUpRight size={17} />
        </div>
      </div>
    </>
  );
  const cardClass = `event-card era-${event.era.toLowerCase().replace(" ", "-")}`;
  return onSelect ? (
    <button
      className={cardClass}
      onClick={onSelect}
      aria-label={`Khám phá ${event.title}`}
    >
      {inner}
    </button>
  ) : (
    <div className="discovery-card"><Link className={cardClass} href={`/event/${event.slug}`}>
      {inner}
    </Link><BookmarkButton id={event.id} /></div>
  );
}



