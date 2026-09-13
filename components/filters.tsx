"use client";
import { vi, searchText } from "@/lib/i18n";
import { useState } from "react";
import { Search, X, Globe2 } from "lucide-react";
import { CATEGORIES, ERAS } from "@/lib/config";
import { countries, regions, countryName } from "@/lib/data/countries";
import type { Filters } from "@/lib/types";
export function FilterPanel({
  value,
  onChange,
  compact = false,
}: {
  value: Filters;
  onChange: (v: Filters) => void;
  compact?: boolean;
}) {
  const [search, setSearch] = useState("");
  function toggle(
    key: "countries" | "regions" | "eras" | "categories",
    item: string,
  ) {
    onChange({
      ...value,
      [key]: value[key].includes(item)
        ? value[key].filter((v) => v !== item)
        : [...value[key], item],
    });
  }
  const chips = (key: "regions" | "eras" | "categories", items: string[]) => (
    <div className="chips">
      {items.map((item) => (
        <button
          type="button"
          key={vi(item)}
          className={`chip ${value[key].includes(item) ? "selected" : ""}`}
          aria-pressed={value[key].includes(item)}
          onClick={() => toggle(key, item)}
        >
          {vi(item)}
        </button>
      ))}
    </div>
  );
  return (
    <div className={`filters ${compact ? "compact" : ""}`}>
      <fieldset>
        <legend>
          <Globe2 size={17} /> Phạm vi địa lý
        </legend>
        <p>Chọn quốc gia bạn muốn. Để trống để khám phá toàn thế giới.</p>
        <div className="filter-tools">
          <button
            type="button"
            className="text-link"
            onClick={() =>
              onChange({ ...value, countries: countries.map((c) => c.id) })
            }
          >
            Chọn tất cả
          </button>
          <button
            type="button"
            className="text-link"
            onClick={() => onChange({ ...value, countries: [] })}
          >
            Bỏ chọn quốc gia
          </button>
        </div>
        <label className="search-box">
          <Search size={17} />
          <input
            aria-label="Tìm quốc gia"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm quốc gia…"
          />
        </label>
        <div className="country-grid">
          {countries
            .filter((c) => searchText(c.name).includes(searchText(search)))
            .map((c) => (
              <label
                className={value.countries.includes(c.id) ? "checked" : ""}
                key={c.id}
              >
                <input
                  type="checkbox"
                  checked={value.countries.includes(c.id)}
                  onChange={() => toggle("countries", c.id)}
                />
                <span>{c.name}</span>
                <small>{c.code}</small>
              </label>
            ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Khu vực / châu lục</legend>
        <p>
          Khu vực giới hạn các quốc gia đã chọn. Bạn có thể chọn nhiều mục trong
          cùng một nhóm.
        </p>
        {chips("regions", regions)}
      </fieldset>
      <fieldset>
        <legend>Thời kỳ lịch sử</legend>
        <p>Để trống để chọn tất cả thời kỳ.</p>
        {chips("eras", ERAS)}
      </fieldset>
      <fieldset>
        <legend>Chủ đề khám phá</legend>
        {chips("categories", CATEGORIES)}
      </fieldset>
      <fieldset>
        <legend>Độ khó</legend>
        <div className="chips">
          {(["All", "Easy", "Medium", "Hard"] as const).map((d) => (
            <button
              type="button"
              key={vi(d)}
              className={`chip ${value.difficulty === d ? "selected" : ""}`}
              aria-pressed={value.difficulty === d}
              onClick={() => onChange({ ...value, difficulty: d })}
            >
              {vi(d)}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="active-filters" aria-label="Bộ lọc đang áp dụng">
        {(["countries", "regions", "eras", "categories"] as const).flatMap(
          (key) =>
            value[key].map((item) => (
              <button
                type="button"
                key={key + item}
                onClick={() => toggle(key, item)}
              >
                {key === "countries" ? countryName(item) : vi(item)}
                <X size={12} />
                <span className="sr-only">Bỏ bộ lọc</span>
              </button>
            )),
        )}
      </div>
    </div>
  );
}
