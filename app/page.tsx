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
        background: "rgba(17, 24, 39, 0.7)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "1rem",
        padding: "3rem 4rem",
        backdropFilter: "blur(12px)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
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
          background: "rgba(99, 102, 241, 0.15)",
          color: "#818cf8",
          border: "1px solid rgba(99, 102, 241, 0.3)",
          marginBottom: "1.5rem"
        }}>
          Milestone 0 — Project Foundation
        </div>
        
        <h1 className="hero-gradient-text" style={{
          fontSize: "2.75rem",
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: "1rem"
        }}>
          Dua Saeed Portfolio
        </h1>
        
        <p style={{
          color: "#9ca3af",
          fontSize: "1rem",
          lineHeight: 1.6
        }}>
          Next.js App Router, TypeScript, React, standard CSS/PostCSS, and <code style={{ color: "#e5e7eb", background: "rgba(255,255,255,0.08)", padding: "0.2rem 0.4rem", borderRadius: "0.25rem" }}>next/font</code> ready for upcoming portfolio sections.
        </p>
      </div>
    </main>
  );
}

