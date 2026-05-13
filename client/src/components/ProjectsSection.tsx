/* ProjectsSection — Dark Brutalism
 * Editorial numbered project list
 * Expandable detail cards
 */
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const projects = [
  {
    num: "01",
    title: "웹·모바일·클라우드 통합 모의해킹",
    category: "Security",
    period: "2025 — 2026",
    stack: ["Java", "Spring Boot", "React", "Android", "AWS EC2", "S3", "Burp Suite", "OWASP ZAP"],
    role: "웹·앱 개발, 취약점 주입 및 공격 수행, 모바일 공격 시나리오 설계 및 실행",
    contributions: [
      "웹 21개, 앱 23개 기능에 취약점 발생 구조 설계 및 주입",
      "모바일 앱 리패키징 및 코드 변조 기반 악성 앱 시나리오 설계 및 실행",
      "XSS, SQL Injection, 파일 업로드 취약점 구현 및 공격 재현",
      "Burp Suite 기반 요청 인터셉트 및 패킷 변조 수행",
      "웹 취약점을 통한 세션 탈취 및 권한 상승 공격 구현",
      "웹·앱 취약점을 연계한 공격 흐름 설계",
    ],
    performance: "웹·모바일 환경에서 취약점 설계부터 공격 수행까지 전 과정 경험 확보. 공격 체인 기반 침투 테스트 역량 강화.",
  },
  {
    num: "02",
    title: "OWASP Top 10 기반 웹 취약점 분석",
    category: "Security",
    period: "2025",
    stack: ["Spring Boot", "MySQL", "Burp Suite", "OWASP ZAP"],
    role: "웹 취약점 분석 및 공격 시나리오 설계, 취약점 재현 수행",
    contributions: [
      "OWASP Top 10 기준 주요 웹 취약점 분석 및 공격 수행",
      "IDOR, Stored XSS, 파일 업로드 취약점 직접 재현 및 검증",
      "Burp Suite를 활용한 HTTP 요청 인터셉트 및 패킷 변조 수행",
      "취약점별 공격 흐름 정리 및 영향도 분석",
    ],
    performance: "취약점 분석부터 공격 재현까지 수행 경험 확보. 실제 서비스 환경에서 발생 가능한 보안 위협 대응 역량 강화.",
  },
  {
    num: "03",
    title: "리눅스 서버 취약점 자동 점검 시스템",
    category: "Security / Automation",
    period: "2025",
    stack: ["Python", "Linux", "Shell Script"],
    role: "취약점 점검 로직 설계 및 자동화 스크립트 개발",
    contributions: [
      "주요정보통신기반시설 취약점 점검 가이드 기반 점검 항목 분석",
      "Linux 명령어 기반 시스템 정보 수집 및 보안 상태 점검 자동화",
      "계정, 파일 권한, 서비스 영역 취약점 진단 로직 구현",
      "점검 결과를 JSON, Excel, PDF 형태로 자동 리포트 생성",
    ],
    performance: "수작업 기반 점검 프로세스를 자동화하여 분석 효율 향상. 실무형 보안 점검 및 리포팅 자동화 경험 확보.",
  },
  {
    num: "04",
    title: "AI 기반 부동산 매물 추천 플랫폼 (ZOOP)",
    category: "Infra / Backend",
    period: "2025.03 — 2025.06",
    stack: ["Spring Boot 3", "MySQL", "Docker", "EC2", "Nginx", "GitHub Actions", "Maven", "S3"],
    role: "인프라 환경 설계 및 운영, CI/CD 구축, 보안 설정 및 시스템 최적화",
    contributions: [
      "EC2 인스턴스 성능 업그레이드 및 Self-hosted GitHub Actions Runner 구성",
      "Docker Compose 기반 통합 배포 환경 구축 및 Maven + Docker 빌드 최적화",
      "Nginx를 이용한 포트 라우팅 및 SSL 리버스 프록시 적용 (80 → 443)",
      "무중단 배포 + 헬스체크, Secrets 관리 및 디스크 자동 정리 자동화",
      "Github Actions 과금 문제 해결을 위한 대체 CI/CD 파이프라인 운영",
    ],
    performance: "빌드 및 배포 자동화, 보안 강화를 포함한 전체 인프라 구성 경험 확보. 조직의 과금 문제에 대한 주도적인 기술 대응 능력 입증.",
  },
  {
    num: "05",
    title: "AI 기반 자동차 서비스 통합 시스템",
    category: "AI / Backend",
    period: "2024",
    stack: ["Python", "FastAPI", "LangChain", "ChromaDB", "PyTorch", "LightGBM", "Swagger"],
    role: "백엔드 API 개발, AI 시스템 설계 및 통합 서비스 구현",
    contributions: [
      "LangChain 기반 LLM 연동, 차량 정보 기반 광고 문구 자동 생성 기능 구현",
      "FastAPI 기반 질문-응답 챗봇 시스템 설계 (약관 안내, 시세 비교 포함)",
      "ChromaDB 벡터 저장소 구성, 유사 뉴스 검색 및 요약 기능 구현",
      "Swagger UI 연동하여 API 테스트 및 문서화 진행",
    ],
    performance: "다양한 AI 기능을 하나의 API 서버에 통합하여 사용자 중심의 복합 서비스 제공 경험 확보.",
  },
  {
    num: "06",
    title: "마이크로서비스 아키텍처 기반 배달 서비스",
    category: "Backend / MSA",
    period: "2024",
    stack: ["Spring Boot", "Kafka", "Docker", "Eureka", "Jenkins"],
    role: "백엔드 개발, 시스템 아키텍처 설계 및 MSA 환경 구성",
    contributions: [
      "각 기능별 독립된 마이크로서비스 설계 및 구현",
      "서비스 간 비동기 통신을 위한 Kafka 기반 메시지 큐 구성",
      "Docker를 통한 서비스 컨테이너화 및 Jenkins 자동 배포 환경 구축",
      "서비스 디스커버리를 위한 Eureka 서버 구성 및 각 모듈 등록",
    ],
    performance: "분산 환경에서의 서비스 독립성과 확장성을 고려한 설계 경험. 비동기 데이터 처리 구조에 대한 실질적 경험.",
  },
  {
    num: "07",
    title: "중고차 거래 웹사이트",
    category: "Full-Stack",
    period: "2024",
    stack: ["Java 11", "Spring MVC", "JSP", "MySQL", "AWS EC2", "S3"],
    role: "웹 서비스 설계 및 백엔드·프론트엔드 개발, 데이터베이스 구조 설계",
    contributions: [
      "Spring MVC 기반 웹 서비스 구조 설계 및 주요 기능 구현",
      "차량 등록, 검색, 필터링 기능 개발",
      "MySQL 기반 데이터 모델 설계 및 차량·사용자 데이터 관리 구조 구축",
      "LLM과 RAG를 이용한 중고차 광고 문구 생성기 구현",
    ],
    performance: "웹 서비스 구조 및 데이터 흐름에 대한 이해도 향상. 실제 서비스 관점에서 시스템 설계 및 구현 경험 확보.",
  },
  {
    num: "08",
    title: "Clustering을 통한 맞춤형 보험 추천 시스템",
    category: "AI / Data",
    period: "2023",
    stack: ["Python", "Pandas", "NumPy", "DBSCAN", "K-Means", "Fuzzy Clustering", "Matplotlib"],
    role: "데이터 분석 및 추천 모델 개발",
    contributions: [
      "보험 상품 데이터 전처리 및 정규화 수행",
      "DBSCAN, K-Means, Fuzzy Clustering 알고리즘 적용하여 고객 그룹별 맞춤 추천 모델 설계",
      "각 모델 성능 비교 분석 및 시각화를 통한 추천 기준 도출",
    ],
    performance: "다양한 데이터를 활용해 고객 맞춤형 서비스 설계 경험. 클러스터링 기법 실무 적용 경험 확보.",
  },
  {
    num: "09",
    title: "분산 구조 기반 보험사 손해 사정 시스템",
    category: "Backend / Distributed",
    period: "2023",
    stack: ["Java", "RMI", "MySQL", "Enterprise Architect"],
    role: "분산 시스템 설계 및 클라이언트-서버 통신 개발",
    contributions: [
      "Java RMI를 활용해 서버와 클라이언트 간 분산 처리 구조 구현",
      "보험 고객, 계약, 보상청구 등 각 기능별 서버를 모듈화하여 설계",
      "시스템 전체 흐름도를 Enterprise Architect를 통해 시각화, 클래스 다이어그램 작성",
    ],
    performance: "분산 환경에서 각 모듈 간 효율적인 통신 설계 경험. 시스템 확장성과 유지보수성 향상 실습.",
  },
  {
    num: "10",
    title: "컴퓨터 구조 소프트웨어 구현",
    category: "System / Low-level",
    period: "2023",
    stack: ["Java", "Git", "Enterprise Architect"],
    role: "컴퓨터 하드웨어 구조 모델링 및 소프트웨어 구현",
    contributions: [
      "폰 노이만 아키텍처를 바탕으로 CPU, 메모리, 입출력 장치의 동작 구조를 Java로 구현",
      "메모리 주소 레지스터(MAR), 메모리 버퍼 레지스터(MBR), 시스템 버스 흐름을 코드로 재현",
      "연산 및 제어 흐름을 프로그래밍으로 시뮬레이션하여 하드웨어 동작 원리 체득",
    ],
    performance: "컴퓨터의 논리적 동작 구조를 깊이 있게 학습하고 구현.",
  },
  {
    num: "11",
    title: "범죄 데이터 기반 범죄율 예측 모델",
    category: "AI / Data",
    period: "2023",
    stack: ["R", "RStudio", "KNN 알고리즘", "ggplot2"],
    role: "데이터 분석 및 예측 모델 설계",
    contributions: [
      "범죄율 관련 데이터를 수집 및 정제하여 지역별 범죄 발생 패턴 분석",
      "KNN 알고리즘을 적용해 범죄 발생 가능성 예측 모델 개발",
      "ggplot2를 활용한 데이터 시각화 및 분석 결과 인사이트 제공",
    ],
    performance: "사회적 데이터 분석을 통한 문제 해결 능력 배양. 데이터 기반 예측 모델 개발 경험 확보.",
  },
];

const categoryColors: Record<string, string> = {
  Security: "#00E5FF",
  "Security / Automation": "#00E5FF",
  "Infra / Backend": "#7FDBFF",
  "AI / Backend": "#A8DAFF",
  "Backend / MSA": "#7FDBFF",
  "Full-Stack": "#B0C4DE",
  "AI / Data": "#A8DAFF",
  "Backend / Distributed": "#7FDBFF",
  "System / Low-level": "#B0C4DE",
};

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const titleRef = useReveal();

  return (
    <section
      id="projects"
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
            03 — PROJECT EXPERIENCE
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
            PROJECTS
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

        {/* Project list */}
        <div>
          {projects.map((project, idx) => (
            <ProjectItem
              key={project.num}
              project={project}
              isExpanded={expanded === project.num}
              onToggle={() =>
                setExpanded(expanded === project.num ? null : project.num)
              }
              delay={idx * 0.04}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .container {
            padding-left: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectItem({
  project,
  isExpanded,
  onToggle,
  delay,
}: {
  project: (typeof projects)[0];
  isExpanded: boolean;
  onToggle: () => void;
  delay: number;
}) {
  const ref = useReveal(0.1);
  const catColor = categoryColors[project.category] || "#00E5FF";

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        transitionDelay: `${delay}s`,
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Header row */}
      <div
        onClick={onToggle}
        style={{
          display: "grid",
          gridTemplateColumns: "80px 1fr auto auto",
          alignItems: "center",
          gap: "1.5rem",
          padding: "1.75rem 0",
          cursor: "pointer",
          borderLeft: isExpanded ? `2px solid ${catColor}` : "2px solid transparent",
          paddingLeft: isExpanded ? "1.5rem" : "0",
          transition: "border-color 0.2s ease, padding-left 0.2s ease, background 0.2s ease",
          background: isExpanded ? "rgba(0,229,255,0.02)" : "transparent",
        }}
        onMouseEnter={(e) => {
          if (!isExpanded) {
            (e.currentTarget as HTMLDivElement).style.borderLeftColor = "rgba(0,229,255,0.3)";
            (e.currentTarget as HTMLDivElement).style.paddingLeft = "0.75rem";
          }
        }}
        onMouseLeave={(e) => {
          if (!isExpanded) {
            (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent";
            (e.currentTarget as HTMLDivElement).style.paddingLeft = "0";
          }
        }}
      >
        {/* Number */}
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.5rem",
            color: isExpanded ? catColor : "rgba(240,237,232,0.2)",
            transition: "color 0.2s ease",
          }}
        >
          {project.num}
        </div>

        {/* Title + category */}
        <div>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              fontWeight: 600,
              color: "#F0EDE8",
              marginBottom: "0.25rem",
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: catColor,
              letterSpacing: "0.1em",
              opacity: 0.7,
            }}
          >
            {project.category}
          </div>
        </div>

        {/* Period */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "rgba(240,237,232,0.3)",
            letterSpacing: "0.05em",
            whiteSpace: "nowrap",
          }}
        >
          {project.period}
        </div>

        {/* Toggle icon */}
        <div
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isExpanded ? catColor : "rgba(240,237,232,0.3)",
            fontSize: "1.2rem",
            transition: "transform 0.2s ease, color 0.2s ease",
            transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </div>
      </div>

      {/* Expanded detail */}
      {isExpanded && (
        <div
          style={{
            paddingLeft: "calc(80px + 1.5rem + 1.5rem)",
            paddingBottom: "2.5rem",
            paddingRight: "2rem",
          }}
        >
          {/* Tech stack */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(240,237,232,0.35)",
                marginBottom: "0.6rem",
              }}
            >
              TECH STACK
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {project.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    padding: "0.2rem 0.6rem",
                    border: "1px solid rgba(0,229,255,0.2)",
                    color: "rgba(0,229,255,0.7)",
                    background: "rgba(0,229,255,0.04)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Role */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(240,237,232,0.35)",
                marginBottom: "0.5rem",
              }}
            >
              ROLE
            </div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(240,237,232,0.65)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {project.role}
            </p>
          </div>

          {/* Contributions */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(240,237,232,0.35)",
                marginBottom: "0.75rem",
              }}
            >
              MAJOR CONTRIBUTION
            </div>
            <div>
              {project.contributions.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "0.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: catColor,
                      fontSize: "0.7rem",
                      marginTop: "0.2rem",
                      flexShrink: 0,
                    }}
                  >
                    ›
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(240,237,232,0.6)",
                      lineHeight: 1.6,
                    }}
                  >
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance */}
          <div
            style={{
              padding: "1rem 1.25rem",
              background: "rgba(0,229,255,0.04)",
              borderLeft: `2px solid ${catColor}`,
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: catColor,
                marginBottom: "0.4rem",
                opacity: 0.7,
              }}
            >
              PERFORMANCE
            </div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(240,237,232,0.65)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {project.performance}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
