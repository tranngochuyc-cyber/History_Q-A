"use client";
import { vi } from "@/lib/i18n";
import Link from "next/link";
import { Trophy, LockKeyhole, ArrowRight, Check } from "lucide-react";
import { useProgress } from "../providers";
import { events } from "@/lib/data/events";
import { countries } from "@/lib/data/countries";
import { CATEGORIES, ERAS } from "@/lib/config";
import { performance } from "@/lib/game/progress";
import { achievements } from "@/lib/game/achievements";
export function Stats() {
  const { data, ready } = useProgress();
  if (!ready)
    return <div className="loading-skeleton" aria-label="Đang tải thống kê" />;
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
  const eraStats = ERAS.map(name => ({ name, ...performance(data.answers.filter(a=>events.some(e=>e.id===a.eventId && e.era===name))) }));
  const strengths = [...countryStats,...categories,...eraStats].filter(r=>r.total>0).sort((a,b)=>b.accuracy-a.accuracy||b.total-a.total).slice(0,5);
  const gaps = ERAS.map(name=>{ const pool=events.filter(e=>e.era===name); return {name,total:pool.length,seen:pool.filter(e=>data.discovered.includes(e.id)).length}; }).sort((a,b)=>a.seen/a.total-b.seen/b.total).slice(0,3);
  return (
    <>
      <div className="page-heading">
        <div className="eyebrow">BẢN ĐỒ KHÁM PHÁ CỦA BẠN</div>
        <h1>Nhìn lại hành trình đã qua.</h1>
        <p>Từng khám phá nhỏ mở rộng hiểu biết về thế giới.</p>
      </div>
      {!stats.total && (
        <div className="notice">
          <span>Hành trình đang chờ khám phá đầu tiên của bạn.</span>
          <Link className="text-link" href="/play">
            Bắt đầu hành trình <ArrowRight size={15} />
          </Link>
        </div>
      )}
      <div className="stat-grid dashboard-stats">
        {[
          [stats.total, "Câu hỏi đã trả lời"],
          [new Set(events.filter(e=>data.discovered.includes(e.id)).map(e=>e.era)).size, "Thời kỳ đã khám phá"],
          [`${stats.accuracy}%`, "Độ chính xác"],
          [data.games.length, "Hành trình hoàn thành"],
          [data.discovered.length, "Sự kiện đã khám phá"],
          [countryCount, "Quốc gia đã khám phá"],
          [`×${streak}`, "Chuỗi đúng dài nhất"],
          [
            data.answers
              .reduce((n, a) => n + a.points, 0)
              .toLocaleString("vi-VN"),
            "Tổng điểm",
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
          <div className="eyebrow">THEO DÒNG CHỦ ĐỀ</div>
          <h2>Theo chủ đề</h2>
          <PerformanceBars rows={categories} />
        </section>
        <section className="performance-panel">
          <div className="eyebrow">QUA CÁC VÙNG ĐẤT</div>
          <h2>Theo quốc gia</h2>
          {countryStats.length ? (
            <PerformanceBars rows={countryStats} />
          ) : (
            <p className="empty-small">
              Chơi một vòng để bắt đầu ghi dấu hiểu biết của bạn.
            </p>
          )}
        </section>
      </div>
      <div className="stats-insights"><section className="performance-panel"><h2>Thế mạnh của bạn</h2>{strengths.length ? <PerformanceBars rows={strengths.map(r=>({...r,name:vi(r.name)}))}/> : <p>Trả lời câu hỏi để nhận gợi ý theo kết quả của bạn.</p>}</section><section className="performance-panel"><h2>Nên khám phá thêm</h2><p>Tỷ lệ sự kiện đã khám phá trong mỗi thời kỳ.</p>{gaps.map(g=><Link className="exploration-gap" key={g.name} href={"/archive?era="+encodeURIComponent(g.name)}><span>{vi(g.name)}</span><strong>{Math.round(g.seen/g.total*100)}%</strong><div className="progress-track"><div style={{width:(g.seen/g.total*100)+"%"}}/></div></Link>)}</section></div>
      <section className="achievements-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">MỖI CỘT MỐC LÀ MỘT KHỞI ĐẦU</div>
            <h2>Dấu ấn người khám phá.</h2>
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
                    <Check size={13} /> Đã đạt
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
        <div key={vi(r.name)}>
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
            aria-label={`${vi(r.name)}: ${r.correct} đúng trên ${r.total}`}
          >
            <div style={{ width: `${r.accuracy}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}


