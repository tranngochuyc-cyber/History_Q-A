"use client";
import Link from "next/link";
import {useProgress} from "./providers";
import {recommend} from "@/lib/discovery";
import {events,formatEventYear} from "@/lib/data/events";
import {EventCard} from "./event/event-card";
export function HomeDiscovery(){
 const {data,ready}=useProgress();
 const recent=(data.recent??[]).map(id=>events.find(e=>e.id===id)).filter(e=>!!e).slice(0,4);
 const recommendations=recommend(data).filter(e=>!data.discovered.includes(e.id)).slice(0,5);
 return <>
 {ready&&recent.length>0&&<section className="section continue-exploring"><div className="eyebrow">TIẾP TỤC KHÁM PHÁ</div><div className="recent-history">{recent.map(e=><Link key={e.id} href={"/event/"+e.slug}><span>{formatEventYear(e)}</span><strong>{e.title}</strong><small>{e.locationText}</small></Link>)}</div></section>}
 <section className="section personalized"><div className="section-heading"><div><div className="eyebrow">GỢI Ý CHO BẠN</div><h2>{data.discovered.length||recent.length?"Theo dấu những điều bạn tò mò.":"Bắt đầu từ một câu chuyện mới."}</h2></div><Link href="/archive" className="text-link">Khám phá tất cả →</Link></div><div className="event-rail">{recommendations.map(e=><EventCard key={e.id} event={e}/>)}</div></section>
 </>;
}
