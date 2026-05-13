/* AboutSection — Dark Brutalism
 * Asymmetric layout: left text block, right timeline
 */
import { useReveal } from "@/hooks/useReveal";

const experiences = [
  {
    period: "2025.11 — 2026.04",
    title: "SK쉴더스 클라우드&보안 전문가 양성 캠프",
    desc: "SQL Injection, XSS 등 주요 공격 분석 및 대응 방안 도출. AWS, 쿠버네티스, 네트워크 실습을 통한 인프라 역량 강화.",
  },
  {
    period: "2024.12 — 2025.06",
    title: "남궁성의 백엔드 개발 부트캠프",
    desc: "Spring-MyBatis / SpringBoot-JPA CRUD 학습. 운영체제, SQL, 디자인패턴 심화 학습.",
  },
  {
    period: "2025.03 — 2025.06",
    title: "부동산 매물 추천 플랫폼 ZOOP",
    desc: "AWS EC2·Docker·GitHub Actions 기반 인프라 구축. Nginx SSL 무중단 배포 환경 설계·운영.",
  },
  {
    period: "2023.03 — 2024.02",
    title: "2023 중소벤처기업부 SW 아카데미",
    desc: "액자 판매 기업과 협업하여 웹사이트 제작. 보닥 보험 데이터 기반 맞춤형 보험 추천 시스템 구현.",
  },
  {
    period: "2022.09 — 2022.11",
    title: "MapleStory Super Hackathon",
    desc: "넥슨 해커톤 개발 트랙 선발. Lua 언어로 메이플스토리 월드 슈팅 게임 제작 및 수료.",
  },
];

const awards = [
  "2023 벤처 스타트업 아카데미 (SW/컨텐츠 분야) — 우수상",
  "2023 중소벤처기업부 벤처스타트업 아카데미 사업 소감문 경진대회 — 우수상",
];

const certs = {
  done: ["정보처리기사", "SQLD (SQL 개발자)"],
  inProgress: ["네트워크관리사 2급 필기 합격", "리눅스마스터 2급 1차 합격"],
};

export default function AboutSection() {
  const titleRef = useReveal();
  const leftRef = useReveal(0.1);
  const rightRef = useReveal(0.1);

  return (
    <section
      id="about"
      style={{
        padding: "8rem 0",
        background: "#0A0A0A",
        position: "relative",
      }}
    >
      <div className="container" style={{ paddingLeft: "6rem" }}>
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
            01 — INTRODUCTION
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
            ABOUT ME
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

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left: Bio + Awards + Certs */}
          <div ref={leftRef} className="reveal">
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.05rem",
                color: "rgba(240,237,232,0.75)",
                lineHeight: 1.8,
                marginBottom: "3rem",
              }}
            >
              명지대 융합소프트웨어학부를 졸업하고 보안과 개발 양쪽에 깊이 있는 역량을 쌓아온 엔지니어입니다.
              웹·모바일·클라우드 취약점 분석부터 백엔드 개발, 인프라 구축까지 폭넓은 경험을 보유하고 있습니다.
            </p>

            {/* Education */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "#00E5FF",
                  marginBottom: "1rem",
                }}
              >
                EDUCATION
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.95rem",
                  color: "#F0EDE8",
                  fontWeight: 500,
                }}
              >
                명지대학교 융합소프트웨어학부
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: "rgba(240,237,232,0.4)",
                  marginTop: "0.25rem",
                }}
              >
                학사 졸업 · 2024년 2월
              </div>
            </div>

            {/* Awards */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "#00E5FF",
                  marginBottom: "1rem",
                }}
              >
                AWARDS
              </div>
              {awards.map((a, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(240,237,232,0.7)",
                    paddingLeft: "1rem",
                    borderLeft: "1px solid rgba(0,229,255,0.3)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.5,
                  }}
                >
                  {a}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "#00E5FF",
                  marginBottom: "1rem",
                }}
              >
                CERTIFICATIONS
              </div>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      color: "rgba(240,237,232,0.35)",
                      letterSpacing: "0.1em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    DONE
                  </div>
                  {certs.done.map((c) => (
                    <div
                      key={c}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.85rem",
                        color: "#F0EDE8",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {c}
                    </div>
                  ))}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      color: "rgba(240,237,232,0.35)",
                      letterSpacing: "0.1em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    IN PROGRESS
                  </div>
                  {certs.inProgress.map((c) => (
                    <div
                      key={c}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(240,237,232,0.55)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Experience timeline */}
          <div ref={rightRef} className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "#00E5FF",
                marginBottom: "2rem",
              }}
            >
              EXPERIENCE
            </div>
            <div style={{ position: "relative" }}>
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: "6px",
                  top: "8px",
                  bottom: "0",
                  width: "1px",
                  background: "rgba(255,255,255,0.1)",
                }}
              />
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  style={{
                    paddingLeft: "2rem",
                    paddingBottom: "2.5rem",
                    position: "relative",
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "8px",
                      width: "13px",
                      height: "13px",
                      borderRadius: "50%",
                      border: "1px solid #00E5FF",
                      background: "#0A0A0A",
                      zIndex: 1,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: "rgba(0,229,255,0.6)",
                      letterSpacing: "0.05em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {exp.period}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#F0EDE8",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {exp.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.8rem",
                      color: "rgba(240,237,232,0.5)",
                      lineHeight: 1.6,
                    }}
                  >
                    {exp.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          #about .container {
            padding-left: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
