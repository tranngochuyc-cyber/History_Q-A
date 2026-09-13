"use client";
import { vi } from "@/lib/i18n";
import Link from "next/link";
import { EventImage } from "../event/event-card";
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
      <div className="eyebrow">HOÀN THÀNH HÀNH TRÌNH</div>
      <h1>Hiểu thêm một phần quá khứ.</h1>
      <p>Mỗi câu trả lời nối thêm hiểu biết. Mỗi khám phá đều được lưu lại.</p>
      <div className="final-score">
        <span>TỔNG ĐIỂM</span>
        <strong>{game.score.toLocaleString("vi-VN")}</strong>
      </div>
      <div className="stat-grid">
        <div>
          <strong>{stats.accuracy}%</strong>
          <span>Độ chính xác</span>
        </div>
        <div>
          <strong>
            {stats.correct} / {stats.total}
          </strong>
          <span>Câu trả lời đúng</span>
        </div>
        <div>
          <strong>{stats.incorrect}</strong>
          <span>Câu trả lời sai</span>
        </div>
        <div>
          <strong>×{game.bestStreak}</strong>
          <span>Chuỗi đúng dài nhất</span>
        </div>
        <div>
          <strong>{newEvents.length}</strong>
          <span>Khám phá mới</span>
        </div>
        <div>
          <strong>{countryCount}</strong>
          <span>Quốc gia đã khám phá</span>
        </div>
      </div>
      <div className="result-categories">
        <div>
          <span>CHỦ ĐỀ NỔI BẬT</span>
          <strong>
            {vi(cats[0]?.name ?? "—")} · {cats[0]?.accuracy ?? 0}%
          </strong>
        </div>
        <div>
          <span>CHỦ ĐỀ CẦN TÌM HIỂU</span>
          <strong>
            {vi(cats.at(-1)?.name ?? "—")} · {cats.at(-1)?.accuracy ?? 0}%
          </strong>
        </div>
      </div>
      {unlocked.length > 0 && (
        <div className="achievement-inline">
          <Trophy size={18} />
          <span>Cột mốc đã đạt: {unlocked.map((a) => a.name).join(" · ")}</span>
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
          Chơi lại <ArrowRight size={17} />
        </button>
        <Link className="button" href="/play">
          Đổi bộ lọc
        </Link>
        <Link className="button ghost" href="/archive?status=discovered">
          Xem sự kiện đã khám phá
        </Link>
      </div>
      <div className="journey-log">
        <h2>Hành trình qua {stats.total} thời khắc</h2>
        {game.answers.map((a, i) => (
          <Link href={`/event/${eventById(a.eventId).slug}`} key={a.id}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <EventImage event={eventById(a.eventId)} />
            <strong>{eventById(a.eventId).title}</strong>
            <span className={a.correct ? "success-text" : "muted"}>
              {a.correct ? "Đúng" : "Đã ôn lại"} · +{a.points}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
