"use client";
import { Bookmark } from "lucide-react";
import { useProgress } from "./providers";
export function BookmarkButton({id}:{id:string}) {
 const {data,ready,update}=useProgress(), saved=(data.bookmarks??[]).includes(id);
 return <button type="button" className="bookmark-button" disabled={!ready} aria-pressed={saved} aria-label={saved?"Bỏ lưu sự kiện":"Lưu sự kiện"} onClick={()=>update(p=>({...p,bookmarks:saved?(p.bookmarks??[]).filter(x=>x!==id):[...(p.bookmarks??[]),id]}))}>
 <Bookmark size={18} fill={saved?"currentColor":"none"}/><span>{saved?"Đã lưu":"Lưu"}</span></button>;
}
