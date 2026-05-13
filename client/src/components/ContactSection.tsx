/* ContactSection + Footer — Dark Brutalism
 * Minimal contact with large CTA typography
 */
import { useReveal } from "@/hooks/useReveal";

export default function ContactSection() {
  const titleRef = useReveal();
  const contentRef = useReveal(0.1);

  return (
    <>
      <section
        id="contact"
        style={{
          padding: "8rem 0 6rem",
          background: "#0D0D0D",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background text */}
        <div
          style={{
            position: "absolute",
            bottom: "-2rem",
            right: "-2rem",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "20vw",
            color: "rgba(255,255,255,0.02)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "0.02em",
          }}
        >
          CONTACT
        </div>

        <div className="container" style={{ paddingLeft: "6rem", position: "relative", zIndex: 1 }}>
          {/* Section header */}
          <div ref={titleRef} className="reveal" style={{ marginBottom: "5rem" }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                color: "#00E5FF",
                marginBottom: "0.75rem",
              }}
            >
              04 — CONTACT
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "#F0EDE8",
                letterSpacing: "0.02em",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              GET IN TOUCH
            </h2>
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.1)",
                marginTop: "2rem",
                maxWidth: "600px",
              }}
            />
          </div>

          <div ref={contentRef} className="reveal">
            {/* Large CTA text */}
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                color: "rgba(240,237,232,0.6)",
                maxWidth: "560px",
                lineHeight: 1.8,
                marginBottom: "4rem",
              }}
            >
              보안 프로젝트, 백엔드 개발, 인프라 구축 등
              <br />
              어떤 협업이든 환영합니다.
            </p>

            {/* Contact info grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "2rem",
                maxWidth: "700px",
              }}
            >
              {[
                {
                  label: "EMAIL",
                  value: "qowjdduswkd@naver.com",
                  href: "mailto:qowjdduswkd@naver.com",
                },
                {
                  label: "GITHUB",
                  value: "github.com/jungyeons",
                  href: "https://github.com/jungyeons",
                },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      color: "rgba(240,237,232,0.3)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {label}
                  </div>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.9rem",
                      color: "#F0EDE8",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(0,229,255,0.3)",
                      paddingBottom: "2px",
                      transition: "color 0.2s ease, border-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLAnchorElement).style.color = "#00E5FF";
                      (e.target as HTMLAnchorElement).style.borderBottomColor = "#00E5FF";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLAnchorElement).style.color = "#F0EDE8";
                      (e.target as HTMLAnchorElement).style.borderBottomColor = "rgba(0,229,255,0.3)";
                    }}
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "2rem 0",
          background: "#0A0A0A",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="container"
          style={{
            paddingLeft: "6rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "rgba(240,237,232,0.25)",
              letterSpacing: "0.1em",
            }}
          >
            © 2026 JUNG YEON BAE — SECURITY ENGINEER
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "rgba(0,229,255,0.3)",
              letterSpacing: "0.1em",
            }}
          >
            PORTFOLIO
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          #contact .container,
          footer .container {
            padding-left: 1.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
