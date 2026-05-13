/* SkillsSection — Interactive Skills with Click-to-Expand
 * 기술 태그 클릭 시 숙련도 설명 모달/패널 표시
 * Pretendard 폰트 기반
 */
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

type Skill = {
  name: string;
  level: "상" | "중" | "하";
  desc: string;
};

type Category = {
  category: string;
  icon: string;
  color: string;
  bgColor: string;
  skills: Skill[];
};

const skillCategories: Category[] = [
  {
    category: "Security",
    icon: "🛡️",
    color: "#E03131",
    bgColor: "#FFF5F5",
    skills: [
      { name: "SQL Injection", level: "상", desc: "UNION-based, Blind, Error-based 등 다양한 기법으로 직접 공격 재현 및 대응 방안 도출 경험 보유." },
      { name: "XSS (Stored/Reflected)", level: "상", desc: "Stored XSS 및 Reflected XSS를 직접 구현하고 세션 탈취 공격 체인 설계 경험 보유." },
      { name: "CSRF / SSRF / SSTI", level: "중", desc: "각 취약점의 발생 원리를 이해하고 실습 환경에서 공격 시나리오를 재현한 경험 보유." },
      { name: "OWASP Top 10", level: "상", desc: "OWASP Top 10 기준 전반적인 웹 취약점 분석 및 공격 재현, 영향도 분석 보고서 작성 경험." },
      { name: "Burp Suite", level: "상", desc: "HTTP 요청 인터셉트, 패킷 변조, Repeater/Intruder 활용 취약점 검증 실무 경험 보유." },
      { name: "OWASP ZAP", level: "중", desc: "자동화 스캔 및 수동 테스트를 병행하여 웹 취약점 탐지에 활용한 경험 보유." },
      { name: "모바일 앱 취약점 분석", level: "중", desc: "Android 앱 리패키징, 코드 변조, 악성 앱 시나리오 설계 및 실행 경험 보유." },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#2F9E44",
    bgColor: "#F4FCF5",
    skills: [
      { name: "Java 11/17", level: "상", desc: "Java 기반 백엔드 개발을 다수 프로젝트에서 주도적으로 수행. 스트림, 람다, 제네릭 등 현대적 Java 문법에 능숙." },
      { name: "Spring Boot", level: "상", desc: "Spring Boot 3.x 기반 REST API 설계 및 구현, 다수 프로젝트에서 메인 백엔드 개발자로 참여." },
      { name: "Spring Security", level: "중", desc: "JWT 기반 인증/인가 구현, 세션 관리 및 접근 제어 로직 설계 경험 보유." },
      { name: "JPA / Hibernate", level: "중", desc: "Entity 설계, 연관관계 매핑, JPQL 및 QueryDSL을 활용한 복잡한 쿼리 작성 경험." },
      { name: "Spring MVC", level: "상", desc: "Spring Legacy 및 Boot 환경에서 MVC 패턴 기반 웹 서비스 구조 설계 및 구현 경험." },
      { name: "MyBatis", level: "중", desc: "Spring-MyBatis 연동 CRUD 구현 및 동적 쿼리 작성 경험 보유." },
    ],
  },
  {
    category: "Frontend",
    icon: "🖥️",
    color: "#1971C2",
    bgColor: "#EEF6FF",
    skills: [
      { name: "React", level: "중", desc: "React Hooks, 컴포넌트 설계, 상태 관리(Redux) 활용 경험. 다수 프로젝트에서 프론트엔드 개발 참여." },
      { name: "React Native", level: "하", desc: "Expo 기반 모바일 앱 개발 경험 보유. 기본적인 UI 구성 및 네이티브 모듈 연동 가능." },
      { name: "JavaScript (ES6+)", level: "중", desc: "비동기 처리(Promise/async-await), 모듈 시스템, 구조 분해 할당 등 현대 JS 문법 활용 가능." },
      { name: "HTML5 / CSS3", level: "중", desc: "시맨틱 마크업, Flexbox/Grid 레이아웃, 반응형 디자인 구현 경험 보유." },
      { name: "JSP / Thymeleaf", level: "중", desc: "Spring 기반 서버사이드 렌더링 템플릿 엔진 활용 경험 보유." },
    ],
  },
  {
    category: "Infra & DevOps",
    icon: "☁️",
    color: "#E67700",
    bgColor: "#FFF9EC",
    skills: [
      { name: "AWS EC2 / S3 / RDS", level: "중", desc: "EC2 인스턴스 구성, S3 파일 스토리지 연동, RDS 데이터베이스 운영 경험 보유." },
      { name: "Docker", level: "중", desc: "Docker Compose 기반 멀티 컨테이너 환경 구성, 이미지 빌드 및 배포 자동화 경험." },
      { name: "GitHub Actions", level: "중", desc: "CI/CD 파이프라인 구축, Self-hosted Runner 운영, 자동 빌드/테스트/배포 경험 보유." },
      { name: "Nginx", level: "중", desc: "리버스 프록시 설정, SSL 인증서 적용(Let's Encrypt), 포트 라우팅 구성 경험 보유." },
      { name: "Jenkins", level: "하", desc: "Jenkins 기반 CI/CD 파이프라인 구성 및 자동 배포 환경 구축 경험 보유." },
      { name: "Linux / Ubuntu", level: "중", desc: "Ubuntu 서버 운영, 파일 권한 관리, 서비스 설정, Shell 스크립트 작성 경험 보유." },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "#862E9C",
    bgColor: "#F9F0FF",
    skills: [
      { name: "MySQL", level: "상", desc: "복잡한 JOIN, 서브쿼리, 인덱스 최적화, 트랜잭션 관리 경험. 다수 프로젝트에서 메인 DB로 활용." },
      { name: "Oracle SQL", level: "중", desc: "SQLD 자격증 보유. PL/SQL, 윈도우 함수, 계층형 쿼리 작성 가능." },
      { name: "Redis", level: "하", desc: "캐싱 전략 설계 및 세션 스토어 활용 경험. 기본적인 데이터 구조 활용 가능." },
      { name: "ERD 설계", level: "중", desc: "Enterprise Architect 및 ERDCloud를 활용한 데이터 모델 설계 경험 보유." },
    ],
  },
  {
    category: "AI & Data",
    icon: "🤖",
    color: "#0C8599",
    bgColor: "#E3FAFC",
    skills: [
      { name: "Python", level: "중", desc: "데이터 분석, 자동화 스크립트, FastAPI 백엔드 개발 등 다양한 용도로 활용." },
      { name: "LangChain / LLM", level: "중", desc: "LangChain 기반 LLM 연동, RAG 파이프라인 구성, ChromaDB 벡터 저장소 활용 경험." },
      { name: "FastAPI", level: "중", desc: "Python 기반 REST API 서버 구현, Swagger 문서화, 비동기 처리 경험 보유." },
      { name: "Scikit-learn / ML", level: "중", desc: "DBSCAN, K-Means, Fuzzy Clustering, KNN, LightGBM 등 다양한 ML 알고리즘 적용 경험." },
      { name: "Pandas / NumPy", level: "중", desc: "데이터 전처리, 정규화, 분석 파이프라인 구성 경험 보유." },
    ],
  },
  {
    category: "Message Queue",
    icon: "📨",
    color: "#5C7CFA",
    bgColor: "#EEF2FF",
    skills: [
      { name: "Apache Kafka", level: "중", desc: "MSA 환경에서 서비스 간 비동기 메시지 처리 및 스트림 처리 파이프라인 구성 경험 보유." },
    ],
  },
  {
    category: "Tools & Testing",
    icon: "🔧",
    color: "#495057",
    bgColor: "#F8F9FA",
    skills: [
      { name: "Git / GitHub", level: "상", desc: "브랜치 전략(Git Flow), PR 기반 협업, 코드 리뷰 경험 보유. 다수 팀 프로젝트에서 형상 관리 담당." },
      { name: "JUnit 5 / Mockito", level: "중", desc: "단위 테스트 및 통합 테스트 작성, Mock 객체를 활용한 의존성 격리 테스트 경험." },
      { name: "Postman / Swagger", level: "상", desc: "API 설계 및 테스트, Swagger UI를 통한 API 문서화 경험 보유." },
      { name: "Figma", level: "하", desc: "UI/UX 설계 협업 도구로 활용. 기본적인 와이어프레임 및 프로토타입 제작 가능." },
      { name: "Jira / Notion", level: "중", desc: "애자일 기반 프로젝트 관리, 스프린트 계획 및 이슈 트래킹 경험 보유." },
    ],
  },
];

const levelConfig = {
  상: { label: "상급", color: "#2F9E44", bg: "#F4FCF5", bar: 90 },
  중: { label: "중급", color: "#1971C2", bg: "#EEF6FF", bar: 60 },
  하: { label: "입문", color: "#868E96", bg: "#F8F9FA", bar: 30 },
};

export default function SkillsSection() {
  const titleRef = useReveal();
  const [selectedSkill, setSelectedSkill] = useState<{ skill: Skill; catColor: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Security");

  const currentCat = skillCategories.find((c) => c.category === activeCategory)!;

  return (
    <section id="skills" style={{ padding: "7rem 0", background: "#F8F9FC" }}>
      <div className="container">
        {/* Header */}
        <div ref={titleRef} className="reveal" style={{ marginBottom: "3rem" }}>
          <div className="section-label" style={{ marginBottom: "0.6rem" }}>02 — 기술 스택</div>
          <h2 style={{
            fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#1A1D2E",
            letterSpacing: "-0.03em",
            margin: "0 0 0.75rem",
          }}>
            Skills
          </h2>
          <p style={{
            fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            fontSize: "0.9rem",
            color: "#868E96",
            margin: 0,
          }}>
            기술 태그를 클릭하면 숙련도와 상세 설명을 확인할 수 있습니다.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => { setActiveCategory(cat.category); setSelectedSkill(null); }}
              style={{
                fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                fontWeight: activeCategory === cat.category ? 700 : 500,
                fontSize: "0.85rem",
                padding: "0.45rem 1rem",
                borderRadius: "20px",
                border: `1.5px solid ${activeCategory === cat.category ? cat.color : "#E9ECEF"}`,
                background: activeCategory === cat.category ? cat.bgColor : "#ffffff",
                color: activeCategory === cat.category ? cat.color : "#868E96",
                cursor: "pointer",
                transition: "all 0.15s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <span>{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills panel */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }}>
          {/* Left: skill tags */}
          <div
            className="card-base"
            style={{ padding: "2rem" }}
          >
            <div style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: currentCat.color,
              marginBottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span>{currentCat.icon}</span>
              {currentCat.category}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {currentCat.skills.map((skill) => {
                const isSelected = selectedSkill?.skill.name === skill.name;
                const lv = levelConfig[skill.level];
                return (
                  <button
                    key={skill.name}
                    onClick={() => setSelectedSkill(isSelected ? null : { skill, catColor: currentCat.color })}
                    style={{
                      fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: "0.875rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      border: `1.5px solid ${isSelected ? currentCat.color : "#E9ECEF"}`,
                      background: isSelected ? currentCat.bgColor : "#ffffff",
                      color: isSelected ? currentCat.color : "#495057",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      boxShadow: isSelected ? `0 2px 8px ${currentCat.color}22` : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = currentCat.color;
                        (e.currentTarget as HTMLButtonElement).style.color = currentCat.color;
                        (e.currentTarget as HTMLButtonElement).style.background = currentCat.bgColor;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "#E9ECEF";
                        (e.currentTarget as HTMLButtonElement).style.color = "#495057";
                        (e.currentTarget as HTMLButtonElement).style.background = "#ffffff";
                      }
                    }}
                  >
                    {skill.name}
                    <span style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      padding: "0.1rem 0.4rem",
                      borderRadius: "4px",
                      background: lv.bg,
                      color: lv.color,
                    }}>{lv.label}</span>
                  </button>
                );
              })}
            </div>
            <p style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: "0.75rem",
              color: "#ADB5BD",
              marginTop: "1.25rem",
              marginBottom: 0,
            }}>
              👆 태그를 클릭하면 상세 설명이 표시됩니다
            </p>
          </div>

          {/* Right: detail panel */}
          <div>
            {selectedSkill ? (
              <div
                className="card-base"
                style={{
                  padding: "2rem",
                  borderLeft: `3px solid ${selectedSkill.catColor}`,
                  animation: "fadeInUp 0.25s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <div>
                    <div style={{
                      fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                      fontWeight: 800,
                      fontSize: "1.2rem",
                      color: "#1A1D2E",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.35rem",
                    }}>
                      {selectedSkill.skill.name}
                    </div>
                    <span style={{
                      display: "inline-block",
                      fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "4px",
                      background: levelConfig[selectedSkill.skill.level].bg,
                      color: levelConfig[selectedSkill.skill.level].color,
                    }}>
                      {levelConfig[selectedSkill.skill.level].label}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    style={{
                      background: "#F8F9FA",
                      border: "none",
                      borderRadius: "6px",
                      width: "28px",
                      height: "28px",
                      cursor: "pointer",
                      color: "#868E96",
                      fontSize: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    ×
                  </button>
                </div>

                {/* Level bar */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                    <span style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.75rem", color: "#868E96" }}>숙련도</span>
                    <span style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: levelConfig[selectedSkill.skill.level].color }}>
                      {levelConfig[selectedSkill.skill.level].bar}%
                    </span>
                  </div>
                  <div style={{ height: "6px", background: "#F1F3F5", borderRadius: "3px", overflow: "hidden" }}>
                    <div style={{
                      height: "100%",
                      width: `${levelConfig[selectedSkill.skill.level].bar}%`,
                      background: selectedSkill.catColor,
                      borderRadius: "3px",
                      transition: "width 0.6s cubic-bezier(0.23,1,0.32,1)",
                    }} />
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                  fontSize: "0.9rem",
                  color: "#495057",
                  lineHeight: 1.8,
                  margin: 0,
                }}>
                  {selectedSkill.skill.desc}
                </p>
              </div>
            ) : (
              <div
                className="card-base"
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "220px",
                  background: "#FAFBFF",
                  border: "1.5px dashed #E9ECEF",
                  boxShadow: "none",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem", opacity: 0.4 }}>👈</div>
                <p style={{
                  fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                  fontSize: "0.88rem",
                  color: "#ADB5BD",
                  textAlign: "center",
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  왼쪽에서 기술 태그를 클릭하면<br />숙련도와 상세 설명을 확인할 수 있습니다.
                </p>
              </div>
            )}

            {/* Level legend */}
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {Object.entries(levelConfig).map(([key, val]) => (
                <div key={key} style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: val.color, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.75rem", color: "#868E96" }}>{val.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          #skills .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
