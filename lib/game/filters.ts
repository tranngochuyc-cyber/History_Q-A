import type { Filters, HistoricalEvent } from "../types";
import { countries } from "../data/countries";
export function filterEvents(events: HistoricalEvent[], filters: Filters) {
  return events.filter(
    (e) =>
      (!filters.countries.length ||
        e.countries.some((c) => filters.countries.includes(c))) &&
      (!filters.regions.length ||
        e.countries.some((id) =>
          countries.some(
            (c) =>
              c.id === id &&
              (filters.regions.includes(c.region) ||
                filters.regions.includes(c.continent)),
          ),
        )) &&
      (!filters.eras.length || filters.eras.includes(e.era)) &&
      (!filters.categories.length ||
        e.categories.some((c) => filters.categories.includes(c))) &&
      (filters.difficulty === "All" || e.difficulty === filters.difficulty),
  );
}
