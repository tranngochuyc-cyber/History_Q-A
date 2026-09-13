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
      <nav aria-label="Main navigation">
        {[
          ["/", "Explore", Compass],
          ["/play", "Play", Play],
          ["/archive", "Archive", Library],
          ["/stats", "Stats", ChartNoAxesColumn],
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
        Begin a journey <ArrowUpRight size={16} />
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
      <span>The past is a world worth exploring.</span>
      <Link href="/about">
        About & how to play <ArrowUpRight size={14} />
      </Link>
    </footer>
  );
}
