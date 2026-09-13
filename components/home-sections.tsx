"use client";
import { vi } from "@/lib/i18n";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Globe2 } from "lucide-react";
import { events } from "@/lib/data/events";
import { countries } from "@/lib/data/countries";
import { DEFAULT_SETTINGS } from "@/lib/config";
import { useProgress } from "./providers";
import { EventCard } from "./event/event-card";
export function HomeSections() {
  const { data, ready, update } = useProgress();
  const now = new Date(),
    date = `${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const today = ready ? events.filter((e) => e.startDate?.endsWith(date)) : [];
  const featured = today.length
    ? today
    : events.filter((e) =>
        ["constantinople", "great-wave", "apollo-11"].includes(e.id),
      );
  const regions = [
    "Europe",
    "Asia",
    "Africa",
    "Americas",
    "Middle East",
    "Oceania",
  ];
  return (
    <>
      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">TUYỂN CHỌN TỪ KHO LỊCH SỬ</div>
            <h2>
              {today.length
                ? "Ngày này năm xưa."
                : "Những thời khắc thay đổi thế giới."}
            </h2>
          </div>
          <Link className="text-link" href="/archive">
            Khám phá toàn bộ {events.length} sự kiện <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="event-grid">
          {featured.slice(0, 3).map((e) => (
            <EventCard
              key={e.id}
              event={e}
              discovered={data.discovered.includes(e.id)}
            />
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">KHÁM PHÁ KHÔNG BIÊN GIỚI</div>
            <h2>Mỗi vùng đất, một hành trình.</h2>
          </div>
          <Globe2 size={27} color="var(--gold)" />
        </div>
        <div className="region-grid">
          {regions.map((region) => {
            const count = events.filter((e) =>
              e.countries.some((id) =>
                countries.some(
                  (c) =>
                    c.id === id &&
                    (c.continent === region || c.region === region),
                ),
              ),
            ).length;
            return (
              <Link
                className="region-tile"
                href="/play"
                key={vi(region)}
                onClick={() =>
                  update((p) => ({
                    ...p,
                    settings: { ...DEFAULT_SETTINGS, regions: [region] },
                  }))
                }
              >
                <span>
                  <strong>{vi(region)}</strong>
                  <small>{count} sự kiện để khám phá</small>
                </span>
                <ArrowUpRight size={20} />
              </Link>
            );
          })}
        </div>
      </section>
      <section className="section archive-preview">
        <div className="section-heading">
          <div>
            <div className="eyebrow">KHO LỊCH SỬ CỦA BẠN</div>
            <h2>{data.discovered.length} khám phá trong kho lịch sử của bạn.</h2>
            <p>
              {data.discovered.length
                ? "Gặp lại những thời khắc đã khám phá và tìm mối liên hệ giữa chúng."
                : "Mỗi hành trình đều để lại dấu ấn. Chơi để lưu những câu chuyện và theo dõi tiến bộ của bạn."}
            </p>
          </div>
          <Link href="/archive?status=discovered" className="text-link">
            Kho lịch sử của bạn <ArrowRight size={16} />
          </Link>
        </div>
        <div className="event-grid">
          {(data.discovered.length
            ? events.filter((e) => data.discovered.includes(e.id))
            : events.filter((e) =>
                ["qin-unification", "dien-bien-phu", "nz-suffrage"].includes(
                  e.id,
                ),
              )
          )
            .slice(0, 3)
            .map((e) => (
              <EventCard
                key={e.id}
                event={e}
                discovered={data.discovered.includes(e.id)}
                locked={!data.discovered.includes(e.id)}
              />
            ))}
        </div>
      </section>
    </>
  );
}
