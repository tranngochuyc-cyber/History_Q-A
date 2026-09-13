"use client";
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
          key={item}
          className={`chip ${value[key].includes(item) ? "selected" : ""}`}
          aria-pressed={value[key].includes(item)}
          onClick={() => toggle(key, item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
  return (
    <div className={`filters ${compact ? "compact" : ""}`}>
      <fieldset>
        <legend>
          <Globe2 size={17} /> Geographic scope
        </legend>
        <p>Choose any countries. Leave empty to explore the world.</p>
        <div className="filter-tools">
          <button
            type="button"
            className="text-link"
            onClick={() =>
              onChange({ ...value, countries: countries.map((c) => c.id) })
            }
          >
            Select all
          </button>
          <button
            type="button"
            className="text-link"
            onClick={() => onChange({ ...value, countries: [] })}
          >
            Clear countries
          </button>
        </div>
        <label className="search-box">
          <Search size={17} />
          <input
            aria-label="Search countries"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search countries…"
          />
        </label>
        <div className="country-grid">
          {countries
            .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
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
        <legend>Region / continent</legend>
        <p>
          Regions narrow your selected countries. Multiple choices within a
          group are combined.
        </p>
        {chips("regions", regions)}
      </fieldset>
      <fieldset>
        <legend>Historical era</legend>
        <p>No selection includes all eras.</p>
        {chips("eras", ERAS)}
      </fieldset>
      <fieldset>
        <legend>Follow a thread</legend>
        {chips("categories", CATEGORIES)}
      </fieldset>
      <fieldset>
        <legend>Difficulty</legend>
        <div className="chips">
          {(["All", "Easy", "Medium", "Hard"] as const).map((d) => (
            <button
              type="button"
              key={d}
              className={`chip ${value.difficulty === d ? "selected" : ""}`}
              aria-pressed={value.difficulty === d}
              onClick={() => onChange({ ...value, difficulty: d })}
            >
              {d}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="active-filters" aria-label="Active filters">
        {(["countries", "regions", "eras", "categories"] as const).flatMap(
          (key) =>
            value[key].map((item) => (
              <button
                type="button"
                key={key + item}
                onClick={() => toggle(key, item)}
              >
                {key === "countries" ? countryName(item) : item}
                <X size={12} />
                <span className="sr-only">Remove filter</span>
              </button>
            )),
        )}
      </div>
    </div>
  );
}
