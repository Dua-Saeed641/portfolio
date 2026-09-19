"use client";

import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";

export default function Navbar() {
  const { toggle } = useSidebar();

  return (
    <header className="w-full h-20 border-b border-foreground/20 bg-background sticky top-0 z-40 shrink-0 flex items-center px-5 md:px-8">

      {/* ── Mobile: DS circle button that opens the sidebar drawer ── */}
      <button
        onClick={toggle}
        aria-label="Open sidebar"
        className="md:hidden mr-4 group flex items-center justify-center focus:outline-none"
      >
        <div className="w-9 h-9 rounded-full border border-foreground flex items-center justify-center transition-transform group-hover:scale-105">
          <div className="w-7 h-7 rounded-full border border-foreground/40 flex items-center justify-center">
            <span className="font-mono text-[10px] font-bold tracking-tighter text-foreground">DS</span>
          </div>
        </div>
      </button>

      {/* Breadcrumb — Dua Saeed / Home */}
      <div className="font-mono text-sm md:text-base font-medium tracking-wide text-foreground flex items-center gap-2">
        <Link href="/" className="hover:opacity-75 transition-opacity">
          Dua Saeed
        </Link>
        <span className="text-foreground/35 font-light">/</span>
        <span className="text-foreground">Home</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Desktop nav links */}
      <nav aria-label="Top Navigation Links" className="hidden md:flex items-center gap-8 font-mono text-sm font-medium tracking-wide">
        <Link
          href="/resume.pdf"
          target="_blank"
          className="text-foreground/80 hover:text-foreground transition-colors hover:underline underline-offset-4"
        >
          Resume
        </Link>
        <Link
          href="#blog"
          className="text-foreground/80 hover:text-foreground transition-colors hover:underline underline-offset-4"
        >
          Blog
        </Link>
      </nav>

      {/* Mobile nav links (inline, no drawer) */}
      <nav aria-label="Mobile Top Navigation" className="md:hidden flex items-center gap-5 font-mono text-xs font-medium tracking-wide">
        <Link
          href="/resume.pdf"
          target="_blank"
          className="text-foreground/80 hover:text-foreground transition-colors"
        >
          Resume
        </Link>
        <Link
          href="#blog"
          className="text-foreground/80 hover:text-foreground transition-colors"
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}
