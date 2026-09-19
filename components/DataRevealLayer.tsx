"use client";

import { useEffect, useRef, useState } from "react";

// ─── Fragment positions (corners → dense, center → sparse) ───────────────────

const FRAGMENTS = [
  // ═══════════════════════════════════════════════════════
  // CENTER — O(log n) focal notation (positioned above title line)
  // ═══════════════════════════════════════════════════════
  { text: "O(log n)", x: 50, y: 32, size: 28, opacity: 0.70 },

  // ═══════════════════════════════════════════════════════
  // INNER RING — very sparse whispers (38–62% on each axis)
  // ═══════════════════════════════════════════════════════
  { text: "DIVIDE",    x: 42, y: 42, size: 9,  opacity: 0.35 },
  { text: "CONQUER",   x: 57, y: 57, size: 9,  opacity: 0.35 },
  { text: "n/2",       x: 55, y: 44, size: 10, opacity: 0.40 },
  { text: "n/2",       x: 45, y: 56, size: 10, opacity: 0.38 },
  { text: "log₂",      x: 47, y: 61, size: 9,  opacity: 0.38 },
  { text: "T(n/2)",    x: 58, y: 41, size: 9,  opacity: 0.38 },

  // ═══════════════════════════════════════════════════════
  // MID RING — medium density (20–38% and 62–80%)
  // ═══════════════════════════════════════════════════════
  { text: "PIPELINE",  x: 30, y: 38, size: 10, opacity: 0.48 },
  { text: "BINARY",    x: 68, y: 36, size: 10, opacity: 0.50 },
  { text: "PARTITION", x: 34, y: 62, size: 9,  opacity: 0.46 },
  { text: "MERGE",     x: 70, y: 65, size: 10, opacity: 0.50 },
  { text: "RECURSION", x: 26, y: 28, size: 9,  opacity: 0.48 },
  { text: "DEPTH",     x: 74, y: 25, size: 9,  opacity: 0.48 },
  { text: "TREE",      x: 22, y: 72, size: 11, opacity: 0.52 },
  { text: "NODE",      x: 76, y: 72, size: 9,  opacity: 0.48 },
  { text: "SELECT *",  x: 24, y: 52, size: 9,  opacity: 0.48 },
  { text: "GROUP BY",  x: 74, y: 50, size: 9,  opacity: 0.48 },
  { text: "2,094",     x: 36, y: 25, size: 11, opacity: 0.52 },
  { text: "SEARCH",    x: 65, y: 75, size: 10, opacity: 0.50 },
  { text: "JOIN",      x: 28, y: 78, size: 11, opacity: 0.52 },
  { text: "INDEX",     x: 72, y: 28, size: 9,  opacity: 0.50 },

  // ═══════════════════════════════════════════════════════
  // OUTER RING — denser (10–22% and 78–90%)
  // ═══════════════════════════════════════════════════════
  { text: "SCHEMA",    x: 14, y: 30, size: 10, opacity: 0.58 },
  { text: "AGGREGATE", x: 14, y: 50, size: 9,  opacity: 0.56 },
  { text: "STREAM",    x: 14, y: 68, size: 10, opacity: 0.58 },
  { text: "FASTAPI",   x: 82, y: 30, size: 9,  opacity: 0.56 },
  { text: "POSTGRESQL",x: 84, y: 50, size: 9,  opacity: 0.56 },
  { text: "ETL",       x: 82, y: 68, size: 13, opacity: 0.60 },
  { text: "FROM",      x: 30, y: 14, size: 9,  opacity: 0.56 },
  { text: "WHERE",     x: 50, y: 12, size: 10, opacity: 0.58 },
  { text: "LIMIT 100", x: 70, y: 14, size: 9,  opacity: 0.56 },
  { text: "MODEL",     x: 30, y: 86, size: 10, opacity: 0.58 },
  { text: "BATCH",     x: 50, y: 88, size: 10, opacity: 0.58 },
  { text: "LOAD",      x: 70, y: 86, size: 9,  opacity: 0.56 },
  { text: "2.6M+",     x: 88, y: 14, size: 12, opacity: 0.60 },
  { text: "2026",      x: 12, y: 14, size: 11, opacity: 0.58 },
  { text: "878.26",    x: 88, y: 86, size: 10, opacity: 0.58 },
  { text: "164.35",    x: 12, y: 86, size: 10, opacity: 0.58 },

  // ═══════════════════════════════════════════════════════
  // CORNERS — most cluttered (0–15%)
  // ═══════════════════════════════════════════════════════

  // TOP-LEFT
  { text: "SELECT *",   x: 3,  y: 3,  size: 10, opacity: 0.70 },
  { text: "FROM",       x: 10, y: 5,  size: 9,  opacity: 0.65 },
  { text: "WHERE",      x: 3,  y: 9,  size: 9,  opacity: 0.68 },
  { text: "JOIN ON id", x: 11, y: 13, size: 8,  opacity: 0.62 },
  { text: "NULL",       x: 4,  y: 17, size: 10, opacity: 0.66 },
  { text: "QUERY",      x: 13, y: 7,  size: 9,  opacity: 0.65 },
  { text: "ROWS",       x: 7,  y: 22, size: 8,  opacity: 0.60 },
  { text: "0x1F4A",     x: 3,  y: 26, size: 7,  opacity: 0.55 },
  { text: "COUNT()",    x: 18, y: 4,  size: 8,  opacity: 0.62 },
  { text: "v2.4.1",     x: 16, y: 18, size: 7,  opacity: 0.55 },
  { text: "errors: 0",  x: 6,  y: 32, size: 7,  opacity: 0.52 },

  // TOP-RIGHT
  { text: "ORDER BY ts",x: 96, y: 3,  size: 9,  opacity: 0.68 },
  { text: "POSTGRESQL", x: 88, y: 7,  size: 8,  opacity: 0.65 },
  { text: "AVG()",      x: 97, y: 11, size: 9,  opacity: 0.68 },
  { text: "TABLE",      x: 90, y: 16, size: 10, opacity: 0.70 },
  { text: "LTTB",       x: 82, y: 4,  size: 9,  opacity: 0.65 },
  { text: "PDS4",       x: 96, y: 20, size: 7,  opacity: 0.58 },
  { text: "TRANSFORM",  x: 84, y: 22, size: 8,  opacity: 0.62 },
  { text: "sys_log",    x: 92, y: 26, size: 7,  opacity: 0.55 },
  { text: "56.8%",      x: 78, y: 8,  size: 10, opacity: 0.66 },
  { text: "94.2",       x: 97, y: 30, size: 8,  opacity: 0.58 },
  { text: "latency14ms",x: 88, y: 32, size: 7,  opacity: 0.52 },

  // BOTTOM-LEFT
  { text: "PIPELINE",   x: 3,  y: 74, size: 10, opacity: 0.68 },
  { text: "ANALYSIS",   x: 10, y: 80, size: 9,  opacity: 0.65 },
  { text: "DATA",       x: 4,  y: 86, size: 12, opacity: 0.72 },
  { text: "API",        x: 14, y: 90, size: 9,  opacity: 0.66 },
  { text: "SQL",        x: 4,  y: 94, size: 13, opacity: 0.72 },
  { text: "SCHEMA",     x: 15, y: 96, size: 8,  opacity: 0.62 },
  { text: "row 1209",   x: 5,  y: 68, size: 7,  opacity: 0.55 },
  { text: "COLUMNS",    x: 18, y: 85, size: 8,  opacity: 0.60 },
  { text: "T(n) =",     x: 8,  y: 97, size: 8,  opacity: 0.58 },
  { text: "0.94",       x: 20, y: 93, size: 9,  opacity: 0.62 },
  { text: "JOIN",       x: 3,  y: 60, size: 10, opacity: 0.62 },

  // BOTTOM-RIGHT
  { text: "FASTAPI",    x: 96, y: 74, size: 9,  opacity: 0.66 },
  { text: "ETL",        x: 88, y: 80, size: 11, opacity: 0.70 },
  { text: "2,094",      x: 97, y: 86, size: 10, opacity: 0.68 },
  { text: "0.94",       x: 86, y: 93, size: 9,  opacity: 0.65 },
  { text: "LTTB",       x: 96, y: 93, size: 9,  opacity: 0.65 },
  { text: "errors: 0",  x: 80, y: 97, size: 7,  opacity: 0.55 },
  { text: "INDEX",      x: 93, y: 68, size: 9,  opacity: 0.63 },
  { text: "BATCH",      x: 82, y: 88, size: 8,  opacity: 0.62 },
  { text: "AVG()",      x: 97, y: 60, size: 9,  opacity: 0.63 },
  { text: "sys_log",    x: 90, y: 97, size: 7,  opacity: 0.55 },
  { text: "n log n",    x: 78, y: 95, size: 9,  opacity: 0.62 },

  // EDGE midpoints
  { text: "> data",     x: 2,  y: 44, size: 8,  opacity: 0.58 },
  { text: "• pipelines",x: 2,  y: 50, size: 8,  opacity: 0.55 },
  { text: "• insights", x: 2,  y: 56, size: 8,  opacity: 0.52 },
  { text: "Data /",     x: 88, y: 44, size: 8,  opacity: 0.55 },
  { text: "Systems /",  x: 88, y: 50, size: 8,  opacity: 0.52 },
  { text: "Decisions",  x: 88, y: 56, size: 8,  opacity: 0.50 },
  { text: "T(1) = Ω",  x: 35, y: 2,  size: 8,  opacity: 0.55 },
  { text: "O(n log n)", x: 55, y: 2,  size: 8,  opacity: 0.55 },
  { text: "Θ(n²)",      x: 42, y: 98, size: 8,  opacity: 0.55 },
  { text: "O(1)",       x: 60, y: 98, size: 8,  opacity: 0.55 },
] as const;

const REVEAL_RADIUS = 155;
const LERP = 0.10;

export default function DataRevealLayer() {
  const layerRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -9999, y: -9999 });
  const current = useRef({ x: -9999, y: -9999 });
  const rafId = useRef<number>(0);
  const started = useRef(false);

  // Only render fragments on true pointer (mouse) devices — hides
  // everything on touch/mobile, including the O(log n) center piece.
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchOnly = window.matchMedia("(pointer: coarse)").matches;
    if (!reducedMotion && !touchOnly) {
      setIsPointerDevice(true);
    }
  }, []);

  useEffect(() => {
    if (!isPointerDevice) return;

    const layer = layerRef.current;
    if (!layer) return;

    function applyMask(x: number, y: number) {
      if (!layer) return;
      const mask = `radial-gradient(circle ${REVEAL_RADIUS}px at ${x}px ${y}px, black 25%, transparent 100%)`;
      layer.style.maskImage = mask;
      (layer.style as CSSStyleDeclaration & { webkitMaskImage: string }).webkitMaskImage = mask;
    }

    function animate() {
      current.current.x += (target.current.x - current.current.x) * LERP;
      current.current.y += (target.current.y - current.current.y) * LERP;
      applyMask(current.current.x, current.current.y);
      rafId.current = requestAnimationFrame(animate);
    }

    function onPointerMove(e: PointerEvent) {
      // Ignore touch events that fire as pointer events
      if (e.pointerType === "touch") return;
      const layer = layerRef.current;
      if (!layer) return;

      const rect = layer.getBoundingClientRect();

      // Strict boundary check: do NOT reveal anything if cursor is outside main container
      // (e.g., when pointer is over sidebar, navbar, footer, or outside window)
      const isInside = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );

      if (!isInside) {
        target.current = { x: -9999, y: -9999 };
        return;
      }

      // Calculate relative coordinates inside the main container
      target.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      if (!started.current) {
        started.current = true;
        current.current = { ...target.current };
        rafId.current = requestAnimationFrame(animate);
      }
    }

    function onPointerLeave() {
      target.current = { x: -9999, y: -9999 };
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [isPointerDevice]);

  // Don't render anything on mobile/touch — prevents O(log n) from
  // appearing over hero text and avoids unused DOM nodes.
  if (!isPointerDevice) return null;

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        // z-index 0: behind main content (z-10)
        zIndex: 0,
        pointerEvents: "none",
        // Initially fully transparent — mask reveals on pointer move inside main area
        maskImage: "linear-gradient(transparent, transparent)",
        WebkitMaskImage: "linear-gradient(transparent, transparent)",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      {FRAGMENTS.map((frag, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${frag.x}%`,
            top: `${frag.y}%`,
            fontSize: `${frag.size}px`,
            opacity: frag.opacity,
            fontFamily: "ui-monospace, 'Space Mono', 'Courier New', monospace",
            fontWeight: frag.size >= 20 ? 600 : frag.size >= 12 ? 500 : 400,
            color: "#1c1917",
            letterSpacing: frag.size >= 20 ? "0.02em" : "0.04em",
            whiteSpace: "nowrap",
            lineHeight: 1,
            transform: "translate(-50%, -50%)",
          }}
        >
          {frag.text}
        </span>
      ))}
    </div>
  );
}
