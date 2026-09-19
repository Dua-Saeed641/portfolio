import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav 
        aria-label="Main Navigation"
        className="w-full max-w-7xl mx-auto px-8 md:px-16 py-6 flex items-center justify-between"
      >
        <Link 
          href="/" 
          className="font-mono font-bold text-sm md:text-base tracking-wider uppercase text-foreground hover:opacity-75 transition-opacity"
        >
          DUA SAEED
        </Link>
        <ul className="flex items-center gap-8 md:gap-12">
          <li>
            <Link 
              href="#work" 
              className="font-mono text-xs md:text-sm font-medium tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors"
            >
              WORK
            </Link>
          </li>
          <li>
            <Link 
              href="#about" 
              className="font-mono text-xs md:text-sm font-medium tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className="font-mono text-xs md:text-sm font-medium tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

