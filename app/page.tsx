export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 py-12">
      <section aria-label="Hero" className="space-y-4 md:space-y-6 flex flex-col items-center justify-center max-w-4xl mx-auto">

        {/* ── Main Headline ──────────────────────────────────────────
            "Hi, I'm" in muted charcoal, "Dua Saeed." in portfolio red.
            `whitespace-nowrap` on the name keeps it on one line.        */}
        <h1
          className="font-serif leading-[1.08] tracking-tight text-foreground text-center"
          style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)", fontWeight: 700 }}
        >
          <span className="text-foreground/70">Hi, I&apos;m </span>
          <span style={{ color: "#d94e34", whiteSpace: "nowrap" }}>Dua Saeed.</span>
        </h1>

        {/* ── Subtitle ───────────────────────────────────────────── */}
        <p
          className="font-sans tracking-tight text-center"
          style={{ fontSize: "clamp(1.4rem, 4vw, 3.5rem)", fontWeight: 400 }}
        >
          <span className="text-foreground/55">I&apos;m a </span>
          <span className="font-bold text-foreground">Data Engineer</span>
        </p>

        {/* ── Open to Work badge ─────────────────────────────────── */}
        <div className="pt-4 md:pt-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm tracking-widest uppercase text-foreground/80 bg-foreground/[0.04] border border-foreground/15 px-5 py-2.5 rounded-full">
            Open to work <span aria-hidden="true">&rarr;</span>
          </span>
        </div>

      </section>
    </div>
  );
}
