"use client";
import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { EventImage } from "./event/event-card";
import { eventById, formatEventYear } from "@/lib/data/events";
const slides = [
  ["constantinople", "Tranh tái hiện của Benjamin-Constant, 1876"],
  ["apollo-11", "Buzz Aldrin trên Mặt Trăng, ảnh của Neil Armstrong"],
  ["great-wave", "Tranh khắc gỗ của Hokusai"],
  ["french-revolution", "Tranh tái hiện cuộc tấn công ngục Bastille"],
  ["dien-bien-phu", "Ảnh lịch sử tại Điện Biên Phủ"],
  ["berlin-wall", "Ảnh lịch sử bức tường Berlin"],
  ["meiji-restoration", "Chân dung Thiên hoàng Minh Trị"],
  ["magna-carta", "Bản Đại Hiến chương Magna Carta"],
  ["suez-canal", "Tranh khánh thành kênh đào Suez"],
  ["american-independence", "Bản Tuyên ngôn Độc lập Hoa Kỳ"],
] as const;
export function HeroRotation() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, reduced]);
  const [id, note] = slides[index];
  const event = eventById(id);
  return (
    <div className="cinematic-visual hero-rotation">
      <div className="hero-rotation-frame" key={id}>
        <EventImage event={{ ...event, imageAlt: note }} />
      </div>
      <div className="cinematic-note">
        <span>
          GHI CHÉP LỊCH SỬ · {formatEventYear(event)} · {index + 1}/10
        </span>
        <strong>{event.title}</strong>
        <small>{note}</small>
        <button
          type="button"
          className="rotation-toggle"
          onClick={() => {
            if (reduced) setIndex((i) => (i + 1) % slides.length);
            else setPaused((p) => !p);
          }}
          aria-label={
            reduced
              ? "Xem ảnh tiếp theo"
              : paused
                ? "Tiếp tục đổi ảnh"
                : "Tạm dừng đổi ảnh"
          }
        >
          {paused || reduced ? <Play size={14} /> : <Pause size={14} />}{" "}
          {reduced ? "Ảnh tiếp theo" : paused ? "Tiếp tục" : "Tạm dừng"}
        </button>
      </div>
    </div>
  );
}
