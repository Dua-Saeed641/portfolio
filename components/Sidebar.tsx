"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Compass, Award, Database, Send, X } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

const NAV_ITEMS = [
  { href: "/",             label: "Home",         icon: Home },
  { href: "#about",        label: "Profile",      icon: User },
  { href: "#projects",     label: "Projects",     icon: Compass },
  { href: "#achievements", label: "Achievements", icon: Award },
  { href: "#tech-stack",   label: "Tech Stack",   icon: Database },
  { href: "#contact",      label: "Contact",      icon: Send },
];

function DSLogo({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle sidebar"
      className="group flex items-center justify-center focus:outline-none"
    >
      <div className="w-11 h-11 rounded-full border border-foreground flex items-center justify-center transition-transform group-hover:scale-105">
        <div className="w-9 h-9 rounded-full border border-foreground/40 flex items-center justify-center">
          <span className="font-mono text-xs font-bold tracking-tighter text-foreground">DS</span>
        </div>
      </div>
    </button>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { open, toggle, close } = useSidebar();

  const content = (
    <>
      {/* Nav Links */}
      <nav
        aria-label="Sidebar Links"
        className="w-full flex-1 pb-8 overflow-y-auto"
        style={{ paddingTop: "20px" }}
      >
        <ul className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href === "/" && pathname === "/");

            return (
              <li key={item.label} className="w-full">
                <Link
                  href={item.href}
                  onClick={close}
                  className={`flex flex-col items-center gap-1.5 py-1 px-2 transition-colors ${
                    isActive
                      ? "text-[#d94e34]"
                      : "text-foreground/75 hover:text-foreground"
                  }`}
                >
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                  <span className="font-mono text-[10px] font-medium tracking-tight capitalize text-center">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );

  return (
    <>
      {/* ── DESKTOP sidebar — sticky, always visible ─────────────── */}
      <aside
        aria-label="Sidebar Navigation"
        className="hidden md:flex flex-col items-center w-24 min-h-screen sticky top-0 shrink-0 bg-background border-r border-foreground/20 select-none"
      >
        {/* Logo cell */}
        <div className="w-full h-20 shrink-0 border-b border-foreground/20 flex items-center justify-center">
          <DSLogo />
        </div>
        {content}
      </aside>

      {/* ── MOBILE drawer — slides in from left ──────────────────── */}
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-[1px] z-40 md:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <aside
        aria-label="Sidebar Navigation"
        aria-hidden={!open}
        className={`fixed top-0 left-0 h-full w-64 bg-background border-r border-foreground/20 z-50 flex flex-col md:hidden
          transition-transform duration-300 ease-in-out select-none
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer header with DS logo + close button */}
        <div className="w-full h-20 shrink-0 border-b border-foreground/20 flex items-center justify-between px-5">
          <DSLogo />
          <button
            onClick={close}
            aria-label="Close sidebar"
            className="p-1 text-foreground/60 hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Same nav links, wider labels on mobile */}
        <nav
          aria-label="Sidebar Links Mobile"
          className="w-full flex-1 pb-8 overflow-y-auto"
          style={{ paddingTop: "20px" }}
        >
          <ul className="flex flex-col gap-1 px-3">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href === "/" && pathname === "/");
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "text-[#d94e34] bg-[#d94e34]/[0.06]"
                        : "text-foreground/75 hover:text-foreground hover:bg-foreground/[0.04]"
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                    <span className="font-mono text-sm font-medium tracking-wide">
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
