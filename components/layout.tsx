"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Hourglass,
  ArrowUpRight,
  Compass,
  Play,
  Library,
  ChartNoAxesColumn,
} from "lucide-react";
import { APP_NAME } from "@/lib/config";
export function Navbar() {
  const path = usePathname();
  return (
    <header className="navbar">
      <Link href="/" className="brand">
        <Hourglass size={24} />
        {APP_NAME}
        <span className="brand-dot">.</span>
      </Link>
      <nav aria-label="Điều hướng chính">
        {[
          ["/", "Khám phá", Compass],
          ["/play", "Chơi", Play],
          ["/archive", "Bộ sưu tập", Library],
          ["/stats", "Thống kê", ChartNoAxesColumn],
        ].map(([href, label, Icon]) => (
          <Link
            key={String(href)}
            href={String(href)}
            aria-current={path === href ? "page" : undefined}
            className={path === href ? "active" : ""}
          >
            <Icon size={16} />
            <span>{String(label)}</span>
          </Link>
        ))}
      </nav>
      <Link href="/play" className="nav-cta">
        Bắt đầu hành trình <ArrowUpRight size={16} />
      </Link>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <Link href="/" className="brand">
        <Hourglass size={18} />
        {APP_NAME}
      </Link>
      <span>Quá khứ là một thế giới đáng khám phá.</span>
      <Link href="/about">
        Giới thiệu và cách chơi <ArrowUpRight size={14} />
      </Link>
    </footer>
  );
}
