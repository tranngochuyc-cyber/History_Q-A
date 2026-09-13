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
        .toLowerCase()
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
          <div className="eyebrow">THE CHRONOQUEST COLLECTION</div>
          <h1>A world worth remembering.</h1>
          <p>
            Explore the full collection. Play a journey to make these stories
            part of your personal archive.
          </p>
        </div>
        <div className="collection-counter">
          <Library size={24} />
          <strong>
            {ready ? data.discovered.length : "—"}{" "}
            <span>/ {events.length}</span>
          </strong>
          <span>EVENTS DISCOVERED</span>
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
            placeholder="Search the archive…"
            aria-label="Search the archive"
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
          <SlidersHorizontal size={16} /> Filters{" "}
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
            Reset filters
          </button>
        </div>
      )}
      <div className="archive-tabs">
        <div className="chips">
          {[
            ["all", "All events"],
            ["discovered", "Discovered"],
            ["undiscovered", "Undiscovered"],
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
        <span>{matching.length} events</span>
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
                Load more events ({matching.length - limit} remaining)
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <Library size={40} />
          <h2>No historical events match.</h2>
          <p>
            {status === "discovered" && !data.discovered.length
              ? "Your collection begins with your first journey."
              : "Try removing one or more filters."}
          </p>
          <button
            className="button"
            onClick={() => {
              setFilters({ ...DEFAULT_SETTINGS });
              setSearch("");
              setStatus("all");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
