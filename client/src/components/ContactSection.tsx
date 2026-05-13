/* ContactSection + Footer — Clean Professional Light
 * Pretendard 폰트, 카드 기반 레이아웃
 */
import { useReveal } from "@/hooks/useReveal";

export default function ContactSection() {
  const titleRef = useReveal();
  const contentRef = useReveal(0.1);

  return (
    <>
      <section id="contact" style={{ padding: "7rem 0", background: "#F8F9FC" }}>
        <div className="container">
          <div ref={titleRef} className="reveal" style={{ marginBottom: "4rem" }}>
            <div className="section-label" style={{ marginBottom: "0.6rem" }}>04 — 연락처</div>
            <h2 style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1A1D2E",
              letterSpacing: "-0.03em",
              margin: 0,
            }}>
              Contact
            </h2>
          </div>

          <div ref={contentRef} className="reveal">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
              {/* Left: CTA */}
              <div>
                <p style={{
                  fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                  fontSize: "1.1rem",
                  color: "#495057",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem",
                }}>
                  보안 프로젝트, 백엔드 개발, 인프라 구축 등<br />
                  어떤 협업이든 환영합니다.<br />
                  편하게 연락 주세요!
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { label: "이메일", value: "qowjdduswkd@naver.com", href: "mailto:qowjdduswkd@naver.com", icon: "✉️" },
                    { label: "GitHub", value: "github.com/jungyeons", href: "https://github.com/jungyeons", icon: "🐙" },
                  ].map(({ label, value, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1rem 1.25rem",
                        background: "#ffffff",
                        border: "1.5px solid #E9ECEF",
                        borderRadius: "10px",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "#3B5BDB";
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(59,91,219,0.12)";
                        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E9ECEF";
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                      }}
                    >
                      <span style={{ fontSize: "1.25rem" }}>{icon}</span>
                      <div>
                        <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#ADB5BD", letterSpacing: "0.08em", marginBottom: "0.15rem" }}>{label}</div>
                        <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#3B5BDB" }}>{value}</div>
                      </div>
                      <span style={{ marginLeft: "auto", color: "#CED4DA", fontSize: "1rem" }}>→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: Summary card */}
              <div
                style={{
                  background: "linear-gradient(135deg, #3B5BDB 0%, #4263EB 100%)",
                  borderRadius: "16px",
                  padding: "2.5rem",
                  color: "#ffffff",
                  boxShadow: "0 12px 40px rgba(59,91,219,0.25)",
                }}
              >
                <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                  배정연
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                  {[
                    { label: "직군", value: "보안 엔지니어" },
                    { label: "학력", value: "명지대 융합소프트웨어학부 졸업" },
                    { label: "자격증", value: "정보처리기사, SQLD" },
                    { label: "수상", value: "장려상 1, 우수상 2" },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: "flex", gap: "0.75rem" }}>
                      <span style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", minWidth: "48px", paddingTop: "1px" }}>{label}</span>
                      <span style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.88rem", fontWeight: 500, color: "#ffffff" }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1.25rem" }}>
                  <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.5rem" }}>핵심 역량</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {["보안 취약점 분석", "Spring Boot", "AWS/Docker", "CI/CD", "AI 통합"].map((tag) => (
                      <span key={tag} style={{
                        fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        padding: "0.2rem 0.6rem",
                        borderRadius: "4px",
                        background: "rgba(255,255,255,0.15)",
                        color: "#ffffff",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "1.75rem 0", background: "#ffffff", borderTop: "1px solid #E9ECEF" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <span style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.82rem", color: "#ADB5BD" }}>
            © 2026 배정연 — 보안 엔지니어 포트폴리오
          </span>
          <span style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.82rem", color: "#3B5BDB", fontWeight: 600 }}>
            Jung Yeon Bae
          </span>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
