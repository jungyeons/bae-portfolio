/* AboutSection — Clean Professional Light
 * 카드 기반 레이아웃, Pretendard 폰트
 */
import { useReveal } from "@/hooks/useReveal";

const experiences = [
  { period: "2025.11 — 2026.04", title: "SK쉴더스 클라우드&보안 전문가 양성 캠프", desc: "SQL Injection, XSS 등 주요 공격 분석 및 대응 방안 도출. AWS, 쿠버네티스, 네트워크 실습을 통한 인프라 역량 강화." },
  { period: "2024.12 — 2025.06", title: "남궁성의 백엔드 개발 부트캠프", desc: "Spring-MyBatis / SpringBoot-JPA CRUD 학습. 운영체제, SQL, 디자인패턴 심화 학습." },
  { period: "2025.03 — 2025.06", title: "부동산 매물 추천 플랫폼 ZOOP", desc: "AWS EC2·Docker·GitHub Actions 기반 인프라 구축. Nginx SSL 무중단 배포 환경 설계·운영." },
  { period: "2023.03 — 2024.02", title: "2023 중소벤처기업부 SW 아카데미", desc: "액자 판매 기업과 협업하여 웹사이트 제작. 보닥 보험 데이터 기반 맞춤형 보험 추천 시스템 구현." },
  { period: "2022.09 — 2022.11", title: "MapleStory Super Hackathon", desc: "넥슨 해커톤 개발 트랙 선발. Lua 언어로 메이플스토리 월드 슈팅 게임 제작 및 수료." },
];

const awards = [
  { title: "SK쉴더스 생성형 AI를 활용한 클라우드/보안 전문가 양성 캠프 3기 최종 프로젝트", award: "장려상", year: "2026" },
  { title: "2023년 SW/컨텐츠분야 벤처스타트업 아카데미 (이노비즈협회 & 명지대학교)", award: "우수상", year: "2024" },
  { title: "2023 중소벤처기업부 벤처스타트업 아카데미 사업 소감문 경진대회 (명지대학교 SW인재육성사업단)", award: "우수상", year: "2024" },
];

const certs = {
  done: ["정보처리기사", "SQLD (SQL 개발자)", "네트워크관리사 2급"],
  inProgress: ["리눅스마스터 2급 1차 합격"],
};

export default function AboutSection() {
  const titleRef = useReveal();
  const leftRef = useReveal(0.1);
  const rightRef = useReveal(0.1);

  return (
    <section id="about" style={{ padding: "7rem 0", background: "#ffffff" }}>
      <div className="container">
        {/* Section header */}
        <div ref={titleRef} className="reveal" style={{ marginBottom: "4rem" }}>
          <div className="section-label" style={{ marginBottom: "0.6rem" }}>01 — 소개</div>
          <h2 style={{
            fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#1A1D2E",
            letterSpacing: "-0.03em",
            margin: 0,
          }}>
            About Me
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Left */}
          <div ref={leftRef} className="reveal">
            {/* Education */}
            <div className="card-base" style={{ padding: "1.75rem", marginBottom: "1.5rem" }}>
              <div className="section-label" style={{ marginBottom: "1rem" }}>학력</div>
              <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#1A1D2E" }}>
                명지대학교 융합소프트웨어학부
              </div>
              <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.85rem", color: "#868E96", marginTop: "0.3rem" }}>
                학사 졸업 · 2024년 2월
              </div>
            </div>

            {/* Awards */}
            <div className="card-base" style={{ padding: "1.75rem", marginBottom: "1.5rem" }}>
              <div className="section-label" style={{ marginBottom: "1rem" }}>수상</div>
              {awards.map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: i < awards.length - 1 ? "1rem" : 0, paddingBottom: i < awards.length - 1 ? "1rem" : 0, borderBottom: i < awards.length - 1 ? "1px solid #F1F3F5" : "none" }}>
                  <span style={{
                    flexShrink: 0,
                    background: "#EEF2FF",
                    color: "#3B5BDB",
                    fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    padding: "0.2rem 0.55rem",
                    borderRadius: "4px",
                    marginTop: "2px",
                  }}>{a.award}</span>
                  <div>
                    <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontWeight: 500, fontSize: "0.88rem", color: "#1A1D2E", lineHeight: 1.5 }}>{a.title}</div>
                    <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.78rem", color: "#868E96", marginTop: "0.15rem" }}>{a.year}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="card-base" style={{ padding: "1.75rem" }}>
              <div className="section-label" style={{ marginBottom: "1rem" }}>자격증</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#3B5BDB", marginBottom: "0.6rem", letterSpacing: "0.05em" }}>취득 완료</div>
                  {certs.done.map((c) => (
                    <div key={c} style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.4rem" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#3B5BDB", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.85rem", color: "#1A1D2E", fontWeight: 500 }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#868E96", marginBottom: "0.6rem", letterSpacing: "0.05em" }}>취득 중</div>
                  {certs.inProgress.map((c) => (
                    <div key={c} style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.4rem" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#CED4DA", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.85rem", color: "#868E96" }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div ref={rightRef} className="reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>경력 & 활동</div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "10px", top: "12px", bottom: "0", width: "1px", background: "#E9ECEF" }} />
              {experiences.map((exp, i) => (
                <div key={i} style={{ paddingLeft: "2.25rem", paddingBottom: "2rem", position: "relative" }}>
                  <div style={{
                    position: "absolute", left: "0", top: "10px",
                    width: "20px", height: "20px", borderRadius: "50%",
                    background: "#ffffff", border: "2px solid #3B5BDB",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    zIndex: 1,
                  }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3B5BDB" }} />
                  </div>
                  <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.75rem", color: "#3B5BDB", fontWeight: 600, marginBottom: "0.3rem", letterSpacing: "0.02em" }}>{exp.period}</div>
                  <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1A1D2E", marginBottom: "0.35rem" }}>{exp.title}</div>
                  <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.83rem", color: "#868E96", lineHeight: 1.65 }}>{exp.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
