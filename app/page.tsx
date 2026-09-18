export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      textAlign: "center"
    }}>
      <div style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: "1rem",
        padding: "3rem 4rem",
        backdropFilter: "blur(12px)",
        boxShadow: "0 20px 40px rgba(44, 37, 35, 0.08)",
        maxWidth: "600px",
        width: "100%"
      }}>
        <div style={{
          display: "inline-block",
          fontSize: "0.85rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          padding: "0.35rem 0.85rem",
          borderRadius: "9999px",
          background: "rgba(99, 102, 241, 0.1)",
          color: "#4f46e5",
          border: "1px solid rgba(99, 102, 241, 0.2)",
          marginBottom: "1.5rem"
        }}>
          Milestone 2 — Paper Grid Background
        </div>
        
        <h1 className="hero-gradient-text" style={{
          fontSize: "2.75rem",
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: "1rem"
        }}>
          Hi, I&apos;m Dua Saeed.
        </h1>
        
        <p style={{
          color: "var(--text-muted)",
          fontSize: "1rem",
          lineHeight: 1.6
        }}>
          Next.js App Router, TypeScript, React, standard CSS/PostCSS, and <code style={{ color: "var(--foreground)", background: "rgba(44,37,35,0.06)", padding: "0.2rem 0.4rem", borderRadius: "0.25rem" }}>next/font</code> ready for upcoming portfolio sections.
        </p>
      </div>
    </main>
  );
}

