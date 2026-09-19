export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24">
      <section aria-label="Hero" className="border-l-2 border-foreground/20 pl-6 md:pl-10 space-y-6">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-foreground">
          Hi, I&apos;m Dua Saeed.
        </h1>
        
        <p className="font-sans text-xl sm:text-2xl md:text-3xl text-foreground/80 font-normal">
          I&apos;m a Data Engineer
        </p>
        
        <div className="pt-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-widest uppercase text-foreground/70 bg-foreground/5 border border-foreground/15 px-3.5 py-1.5 rounded-full">
            Open to work <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </section>
    </main>
  );
}


