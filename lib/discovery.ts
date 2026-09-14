import { events } from "./data/events";
import { countryName } from "./data/countries";
import { vi, searchText } from "./i18n";
import type { HistoricalEvent, Progress } from "./types";
export const searchSuggestions = ["Việt Nam", "Nhật Bản", "Chiến tranh Lạnh", "Cách mạng", "Không gian", "Thế chiến II"];
export function matchesSearch(e: HistoricalEvent, query: string) {
 const text=searchText([e.title,e.summary,e.locationText,...e.countries.map(countryName),vi(e.era),...e.categories.map(vi),String(e.startYear),...e.tags].join(" "));
 return searchText(query).split(/\s+/).filter(Boolean).every(w=>text.includes(w));
}
export function recommend(data: Pick<Progress,"discovered"|"answers"|"recent">, current?: HistoricalEvent) {
 const recent=data.recent??[];
 const interests=events.filter(e=>[...data.discovered,...recent,...data.answers.map(a=>a.eventId)].includes(e.id));
 const affinity=(a:HistoricalEvent,b:HistoricalEvent)=>a.countries.filter(c=>b.countries.includes(c)).length*3+a.categories.filter(c=>b.categories.includes(c)).length*2+(a.era===b.era?1:0);
 const score=(e:HistoricalEvent)=>(current?affinity(e,current)*20:interests.reduce((n,i)=>n+affinity(e,i)*(1+data.answers.filter(a=>a.eventId===i.id).length),0))+(!data.discovered.includes(e.id)?5:0)+(!recent.includes(e.id)?3:0);
 return events.filter(e=>e.id!==current?.id).sort((a,b)=>score(b)-score(a)||b.importance-a.importance||a.id.localeCompare(b.id));
}

