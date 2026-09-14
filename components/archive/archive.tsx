"use client";
import {useState} from "react";
import {useSearchParams} from "next/navigation";
import {Search,SlidersHorizontal} from "lucide-react";
import {useProgress} from "../providers";
import {EventCard} from "../event/event-card";
import {FilterPanel} from "../filters";
import {vi} from "@/lib/i18n";
import {countryName} from "@/lib/data/countries";
import {events} from "@/lib/data/events";
import {DEFAULT_SETTINGS} from "@/lib/config";
import {filterEvents} from "@/lib/game/filters";
import {matchesSearch,searchSuggestions} from "@/lib/discovery";
import type {Filters} from "@/lib/types";
export function Archive(){
 const {data}=useProgress(),params=useSearchParams();
 const [search,setSearch]=useState(params.get("q")??""),[status,setStatus]=useState(params.get("status")??"all"),
 [filters,setFilters]=useState<Filters>({...DEFAULT_SETTINGS,categories:params.get("category")?[params.get("category")!]:[],eras:params.get("era")?[params.get("era")!]:[]}),
 [showFilters,setShowFilters]=useState(false),[limit,setLimit]=useState(12),[sort,setSort]=useState("old");
 const matching=filterEvents(events,filters).filter(e=>matchesSearch(e,search)&&(status==="all"||status==="saved"?(status!=="saved"||(data.bookmarks??[]).includes(e.id)):status==="discovered"?data.discovered.includes(e.id):!data.discovered.includes(e.id)));
 matching.sort((a,b)=>sort==="az"?a.title.localeCompare(b.title,"vi"):sort==="new"?b.startYear-a.startYear:sort==="recent"?data.discovered.indexOf(b.id)-data.discovered.indexOf(a.id):a.startYear-b.startYear);
 const reset=()=>{setFilters({...DEFAULT_SETTINGS});setSearch("");setStatus("all");setLimit(12);};
 return <>
 <div className="page-heading"><div className="eyebrow">{events.length} CÂU CHUYỆN · {new Set(events.flatMap(e=>e.countries)).size} QUỐC GIA</div><h1>Kho lịch sử</h1><p>Khám phá lịch sử nhân loại qua thời kỳ, quốc gia và chủ đề.</p></div>
 <div className="archive-toolbar"><label className="search-box"><Search size={18}/><input aria-label="Tìm trong kho lịch sử" placeholder="Tên sự kiện, quốc gia, năm…" value={search} onChange={e=>{setSearch(e.target.value);setLimit(12);}}/></label>
 <button className="button" aria-expanded={showFilters} aria-controls="archive-filters" onClick={()=>setShowFilters(!showFilters)}><SlidersHorizontal size={16}/>Quốc gia · Thời kỳ · Chủ đề</button></div>
 {!search&&<div className="chips search-suggestions">{searchSuggestions.map(s=><button key={s} className="chip" onClick={()=>{setSearch(s);setLimit(12);}}>{s}</button>)}</div>}
 {showFilters&&<div id="archive-filters" className="archive-filter-panel"><FilterPanel compact value={filters} onChange={f=>{setFilters(f);setLimit(12);}}/></div>}
 <div className="chips active-discovery-filters">{(["countries","regions","eras","categories"] as const).flatMap(key=>filters[key].map(item=><button key={key+item} className="chip selected" onClick={()=>{setFilters({...filters,[key]:filters[key].filter(v=>v!==item)});setLimit(12);}}>{key==="countries"?countryName(item):vi(item)} ×</button>))}</div>
 <div className="archive-tabs"><div className="chips">{[["all","Tất cả"],["discovered","Đã khám phá"],["saved","Đã lưu"],["undiscovered","Chưa khám phá"]].map(([id,label])=><button key={id} className={"chip "+(id===status?"selected":"")} aria-pressed={id===status} onClick={()=>{setStatus(id);setLimit(12);}}>{label}</button>)}</div>
 <label>Sắp xếp <select value={sort} onChange={e=>setSort(e.target.value)}><option value="old">Cũ → mới</option><option value="new">Mới → cũ</option><option value="az">A–Z</option><option value="recent">Mới khám phá</option></select></label></div>
 <div className="archive-result-count"><span>{matching.length} sự kiện</span><button className="text-link" onClick={reset}>Xóa bộ lọc</button></div>
 {matching.length?<><div className="event-grid">{matching.slice(0,limit).map(e=><EventCard key={e.id} event={e} discovered={data.discovered.includes(e.id)}/>)}</div>{matching.length>limit&&<div className="load-more"><button className="button" onClick={()=>setLimit(limit+12)}>Xem thêm ({matching.length-limit})</button></div>}</>:<div className="empty-state"><h2>{status==="saved"?"Chưa có sự kiện đã lưu":"Không có kết quả"}</h2><p>{status==="saved"?"Lưu những câu chuyện bạn muốn quay lại sau.":"Không tìm thấy sự kiện phù hợp với bộ lọc hiện tại."}</p><button className="button" onClick={reset}>Khám phá kho lịch sử</button></div>}
 </>;
}

