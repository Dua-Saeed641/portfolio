import Link from "next/link";

export default function Sidebar() {
  return (
    <aside 
      aria-label="Sidebar Navigation" 
      className="hidden md:flex flex-col justify-between w-52 h-screen sticky top-0 shrink-0 bg-background border-r border-foreground/10 px-6 py-8"
    >
      <div className="space-y-8">
        {/* Editorial Logo / Mark */}
        <div className="space-y-3">
          <div className="w-7 h-7 border border-foreground/30 flex items-center justify-center font-mono text-[11px] font-bold tracking-tighter text-foreground/80">
            DS
          </div>
          <Link 
            href="/" 
            className="block font-mono text-[12px] font-bold tracking-wider uppercase text-foreground hover:opacity-75 transition-opacity"
          >
            DUA SAEED
          </Link>
        </div>

        {/* Sidebar Navigation */}
        <nav aria-label="Sidebar Links">
          <ul className="space-y-4">
            <li>
              <Link 
                href="/" 
                className="font-mono text-[12px] tracking-widest uppercase text-foreground/75 hover:text-foreground transition-colors block"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="#work" 
                className="font-mono text-[12px] tracking-widest uppercase text-foreground/75 hover:text-foreground transition-colors block"
              >
                WORK
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className="font-mono text-[12px] tracking-widest uppercase text-foreground/75 hover:text-foreground transition-colors block"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="font-mono text-[12px] tracking-widest uppercase text-foreground/75 hover:text-foreground transition-colors block"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer copyright note */}
      <div className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">
        &copy; {new Date().getFullYear()}
      </div>
    </aside>
  );
}

