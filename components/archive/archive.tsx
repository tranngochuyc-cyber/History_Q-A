"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, Library } from "lucide-react";
import { useProgress } from "../providers";
import { EventCard } from "../event/event-card";
import { FilterPanel } from "../filters";
import { events } from "@/lib/data/events";
import { DEFAULT_SETTINGS } from "@/lib/config";
import { filterEvents } from "@/lib/game/filters";
import type { Filters } from "@/lib/types";
export function Archive() {
  const { data, ready } = useProgress(),
    params = useSearchParams();
  const [search, setSearch] = useState(""),
    [status, setStatus] = useState(
      params.get("status") === "discovered" ? "discovered" : "all",
    ),
    [filters, setFilters] = useState<Filters>({ ...DEFAULT_SETTINGS }),
    [showFilters, setShowFilters] = useState(false),
    [limit, setLimit] = useState(12);
  const matching = filterEvents(events, filters).filter(
    (e) =>
      `${e.title} ${e.shortSummary} ${e.locationText}`
        .toLocaleLowerCase("vi-VN")
        .includes(search.toLowerCase()) &&
      (status === "all" ||
        (status === "discovered"
          ? data.discovered.includes(e.id)
          : !data.discovered.includes(e.id))),
  );
  const activeCount =
    filters.countries.length +
    filters.regions.length +
    filters.eras.length +
    filters.categories.length +
    (filters.difficulty === "All" ? 0 : 1);
  return (
    <>
      <div className="page-heading archive-heading">
        <div>
          <div className="eyebrow">KHO LỊCH SỬ CHRONOQUEST</div>
          <h1>Một thế giới đáng ghi nhớ.</h1>
          <p>
            Khám phá toàn bộ sự kiện. Hoàn thành câu hỏi để lưu những câu chuyện
            vào kho lịch sử cá nhân.
          </p>
        </div>
        <div className="collection-counter">
          <Library size={24} />
          <strong>
            {ready ? data.discovered.length : "—"}{" "}
            <span>/ {events.length}</span>
          </strong>
          <span>SỰ KIỆN ĐÃ KHÁM PHÁ</span>
        </div>
      </div>
      <div className="progress-track">
        <div
          style={{
            width: `${(data.discovered.length / events.length) * 100}%`,
          }}
        />
      </div>
      <div className="archive-toolbar">
        <label className="search-box">
          <Search size={18} />
          <input
            placeholder="Tìm trong kho lịch sử…"
            aria-label="Tìm trong kho lịch sử"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setLimit(12);
            }}
          />
        </label>
        <button
          className={`button ${showFilters ? "selected" : ""}`}
          aria-expanded={showFilters}
          aria-controls="archive-filters"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal size={16} /> Bộ lọc{" "}
          {activeCount > 0 && `(${activeCount})`}
        </button>
      </div>
      {showFilters && (
        <div id="archive-filters" className="archive-filter-panel">
          <FilterPanel
            compact
            value={filters}
            onChange={(f) => {
              setFilters(f);
              setLimit(12);
            }}
          />
          <button
            className="text-link"
            onClick={() => setFilters({ ...DEFAULT_SETTINGS })}
          >
            Đặt lại bộ lọc
          </button>
        </div>
      )}
      <div className="archive-tabs">
        <div className="chips">
          {[
            ["all", "Tất cả sự kiện"],
            ["discovered", "Đã khám phá"],
            ["undiscovered", "Chưa khám phá"],
          ].map(([id, label]) => (
            <button
              className={`chip ${status === id ? "selected" : ""}`}
              aria-pressed={status === id}
              key={id}
              onClick={() => {
                setStatus(id);
                setLimit(12);
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <span>{matching.length} sự kiện</span>
      </div>
      {matching.length ? (
        <>
          <div className="event-grid">
            {matching.slice(0, limit).map((e) => (
              <EventCard
                key={e.id}
                event={e}
                discovered={data.discovered.includes(e.id)}
                locked={!data.discovered.includes(e.id)}
              />
            ))}
          </div>
          {matching.length > limit && (
            <div className="load-more">
              <button className="button" onClick={() => setLimit(limit + 12)}>
                Xem thêm sự kiện ({matching.length - limit} còn lại)
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <Library size={40} />
          <h2>Không có sự kiện phù hợp.</h2>
          <p>
            {status === "discovered" && !data.discovered.length
              ? "Kho lịch sử bắt đầu từ hành trình đầu tiên của bạn."
              : "Hãy thử bỏ bớt bộ lọc."}
          </p>
          <button
            className="button"
            onClick={() => {
              setFilters({ ...DEFAULT_SETTINGS });
              setSearch("");
              setStatus("all");
            }}
          >
            Đặt lại bộ lọc
          </button>
        </div>
      )}
    </>
  );
}
