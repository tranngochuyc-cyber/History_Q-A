"use client";
import {useRef,useState} from "react";
import Link from "next/link";
import {Search,X} from "lucide-react";
import {events,formatEventYear} from "@/lib/data/events";
import {matchesSearch,searchSuggestions} from "@/lib/discovery";
export function GlobalSearch(){
 const dialog=useRef<HTMLDialogElement>(null),[query,setQuery]=useState("");
 const results=query.trim()?events.filter(e=>matchesSearch(e,query)).slice(0,7):[];
 return <><button type="button" className="search-launch" aria-label="Tìm kiếm lịch sử" onClick={()=>dialog.current?.showModal()}><Search size={20}/></button>
 <dialog ref={dialog} className="global-search" aria-label="Tìm kiếm lịch sử">
 <div className="search-dialog-top"><label className="search-box"><Search size={18}/><input aria-label="Tìm kiếm lịch sử" placeholder="Sự kiện, quốc gia, thời kỳ, năm…" value={query} onChange={e=>setQuery(e.target.value)}/></label><button type="button" aria-label="Đóng tìm kiếm" onClick={()=>dialog.current?.close()}><X size={20}/></button></div>
 {!query.trim()?<><h3>TÌM KIẾM GỢI Ý</h3><div className="chips">{searchSuggestions.map(s=><button className="chip" key={s} onClick={()=>setQuery(s)}>{s}</button>)}</div></>:results.length?<ul className="search-results">{results.map(e=><li key={e.id}><Link href={"/event/"+e.slug} onClick={()=>dialog.current?.close()}><strong>{e.title}</strong><span>{formatEventYear(e)} · {e.locationText}</span></Link></li>)}</ul>:<p>Không tìm thấy sự kiện phù hợp. Hãy thử từ khóa khác.</p>}
 <Link className="text-link" href={"/archive?q="+encodeURIComponent(query)} onClick={()=>dialog.current?.close()}>Xem trong kho lịch sử →</Link></dialog></>;
}
