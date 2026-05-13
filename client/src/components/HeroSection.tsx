/* HeroSection — Dark Brutalism
 * Full-viewport hero with oversized typography
 * Animated entrance with clip-path reveal
 */
import { useEffect, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663648231466/5XNBhSTJDxWGqcgWLgFEiq/hero_bg-WaMSz7LZHPtt7TWBPDZw3x.webp";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0A0A0A",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
          zIndex: 0,
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(10,10,10,0.95) 40%, rgba(10,10,10,0.5) 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, #0A0A0A, transparent)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 3,
          paddingLeft: "7rem",
          paddingTop: "2rem",
        }}
      >
        {/* Pre-title */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            color: "#00E5FF",
            marginBottom: "1.5rem",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          SECURITY ENGINEER
        </div>

        {/* Main name */}
        <div
          style={{
            overflow: "hidden",
            marginBottom: "0.5rem",
          }}
        >
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 12vw, 11rem)",
              lineHeight: 0.9,
              color: "#F0EDE8",
              letterSpacing: "0.02em",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(100%)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.3s",
              margin: 0,
            }}
          >
            JUNG YEON
          </h1>
        </div>
        <div style={{ overflow: "hidden", marginBottom: "2.5rem" }}>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 12vw, 11rem)",
              lineHeight: 0.9,
              color: "#00E5FF",
              letterSpacing: "0.02em",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(100%)",
              transition: "opacity 0.8s ease 0.45s, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.45s",
              margin: 0,
            }}
          >
            BAE
          </h1>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            color: "rgba(240,237,232,0.65)",
            maxWidth: "480px",
            lineHeight: 1.7,
            marginBottom: "3rem",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s",
          }}
        >
          탄탄한 개발 실력을 갖춘 보안 엔지니어.
          <br />
          웹·모바일·클라우드 취약점 분석부터 인프라 구축까지.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.9s, transform 0.6s ease 0.9s",
          }}
        >
          <button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              padding: "0.85rem 2rem",
              background: "#00E5FF",
              color: "#0A0A0A",
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.target as HTMLButtonElement).style.boxShadow = "0 8px 25px rgba(0,229,255,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.transform = "translateY(0)";
              (e.target as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              padding: "0.85rem 2rem",
              background: "transparent",
              color: "#F0EDE8",
              border: "1px solid rgba(240,237,232,0.3)",
              cursor: "pointer",
              fontWeight: 500,
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.borderColor = "#00E5FF";
              (e.target as HTMLButtonElement).style.color = "#00E5FF";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.borderColor = "rgba(240,237,232,0.3)";
              (e.target as HTMLButtonElement).style.color = "#F0EDE8";
            }}
          >
            CONTACT
          </button>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "5rem",
            flexWrap: "wrap",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.6s ease 1.1s",
          }}
        >
          {[
            { num: "11+", label: "Projects" },
            { num: "2", label: "Certifications" },
            { num: "2", label: "Awards" },
            { num: "2026", label: "Available" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem",
                  color: "#00E5FF",
                  lineHeight: 1,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "rgba(240,237,232,0.4)",
                  letterSpacing: "0.15em",
                  marginTop: "0.25rem",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 3,
          opacity: loaded ? 0.5 : 0,
          transition: "opacity 0.6s ease 1.3s",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            color: "rgba(240,237,232,0.5)",
            writingMode: "vertical-rl",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "50px",
            background: "linear-gradient(to bottom, rgba(0,229,255,0.6), transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
