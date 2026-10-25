/* ProjectsSection — Clean Professional Light
 * 카드 기반, 클릭 시 상세 펼침
 * Pretendard 폰트
 */
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const projects = [
  {
    num: "01", title: "웹, 모바일, 클라우드 통합 모의해킹", category: "Security", period: "2026.02 — 2026.04",
    color: "#E03131", bgColor: "#FFF5F5",
    stack: ["React", "Spring Boot", "Android", "AWS EC2", "Burp Suite", "jadx", "OWASP ZAP"],
    role: "6명 팀 팀장. 기획, 공격 대상 웹과 앱 개발, 웹과 앱 침투테스트",
    contributions: [
      "공격 대상 웹(React, Spring Boot)과 앱을 직접 개발하고 웹 21개, 앱 23개 기능에 취약점 발생 구조 설계",
      "주요정보통신기반시설, 전자금융기반시설 기준으로 판단 기준을 통일하고 재현 과정, 원인, 영향, 개선방안 형식으로 기록",
      "SQL Injection, SSTI(Thymeleaf), SSRF, OS 명령 실행, jspx 파일 업로드 우회, IDOR, Stored XSS 재현",
      "쿠키 변조와 세션 토큰 재사용으로 관리자 권한 획득, 포인트 파라미터 변조 등 비즈니스 로직 취약점 검증",
      "Burp Suite와 jadx로 리패키징, 코드 변조 기반 악성 앱 시나리오 설계 및 실행",
    ],
    performance: "웹 18개, 앱 20개 항목의 원인과 개선방안을 하나의 보고서로 정리. 최종 프로젝트 장려상(팀 수상).",
  },
  {
    num: "02", title: "OWASP Top 10 기반 웹 취약점 분석", category: "Security", period: "2025",
    color: "#E03131", bgColor: "#FFF5F5",
    stack: ["Spring Boot", "MySQL", "Burp Suite", "OWASP ZAP"],
    role: "웹 취약점 분석 및 공격 시나리오 설계, 취약점 재현 수행",
    contributions: [
      "OWASP Top 10 기준 주요 웹 취약점 분석 및 공격 수행",
      "IDOR, Stored XSS, 파일 업로드 취약점 직접 재현 및 검증",
      "Burp Suite를 활용한 HTTP 요청 인터셉트 및 패킷 변조 수행",
      "취약점별 공격 흐름 정리 및 영향도 분석",
    ],
    performance: "취약점 분석부터 공격 재현까지 직접 수행하며 실제 서비스에서 발생할 수 있는 보안 위협과 대응 방법을 정리.",
  },
  {
    num: "03", title: "생성형 AI를 활용한 Linux 서버 취약점 자동 점검", category: "Security / Automation", period: "2025.11 — 2026.01",
    color: "#E67700", bgColor: "#FFF9EC",
    stack: ["Python", "Shell Script", "RHEL 7.9", "VMware", "생성형 AI"],
    role: "취약점 점검 로직 설계 및 자동화 스크립트 개발",
    contributions: [
      "주요정보통신기반시설 취약점 점검 가이드 기반으로 계정, 파일 권한, 서비스 설정 점검 항목 분석",
      "생성형 AI로 점검 명령, 판정 로직, Python과 Shell 코드 초안 생성",
      "VMware RHEL 7.9에 항목별 정상 상태와 취약 상태를 직접 구성해 두 상태를 정확히 구분하는지 검증한 항목만 반영",
      "점검 결과를 JSON, Excel, PDF 형태로 자동 리포트 생성, 조치 후 재점검까지 같은 리포트로 관리",
    ],
    performance: "AI로 작업 속도를 높이되 결과는 기준과 대조해 검증하는 점검 자동화 구조를 완성.",
  },
  {
    num: "04", title: "부동산 매물 추천 플랫폼 (ZOOP)", category: "Infra / Backend", period: "2025.03 — 2025.06",
    color: "#1971C2", bgColor: "#EEF6FF",
    stack: ["Spring Boot 3", "MySQL", "Docker", "EC2", "Nginx", "GitHub Actions", "Maven"],
    role: "인프라 환경 설계 및 운영, CI/CD 구축, 보안 설정 및 시스템 최적화",
    contributions: [
      "GitHub Actions 과금 문제를 EC2의 GitHub Actions 자체 러너로 해결해 추가 과금 없이 자동 배포 유지",
      "Docker Compose 기반 통합 배포 환경 구축 및 Maven과 Docker 빌드 최적화",
      "Nginx를 이용한 포트 라우팅 및 SSL 리버스 프록시 적용 (80 → 443)",
      "헬스체크 기반 블루그린 무중단 배포, Secrets 관리, 미사용 Docker 이미지 자동 정리",
    ],
    performance: "빌드와 배포 자동화, 보안 설정을 포함한 운영 환경 전체를 직접 구성하고 운영.",
  },
  {
    num: "05", title: "생성형 AI 기반 중고차 거래 서비스 (TrustRide)", category: "AI / Backend", period: "2024.12 — 2025.02",
    color: "#0C8599", bgColor: "#E3FAFC",
    stack: ["Java 11", "Spring MVC (Legacy)", "Spring Security", "MyBatis", "JSP", "MySQL", "Python", "FastAPI", "LangChain", "ChromaDB", "Swagger"],
    role: "Spring Legacy 버전 백엔드와 DB 설계, AI 접목 버전의 LLM 광고 문구 생성 API 개발과 Spring, FastAPI 연동",
    contributions: [
      "주문, 결제, 배송, 차량 상태 변경을 하나의 트랜잭션으로 묶고 체크 예외까지 롤백되도록 주문 처리 로직 구현",
      "쿠폰 사용을 조건부 UPDATE 한 문장으로 처리해 중복 사용과 다른 사용자의 쿠폰 사용 방지",
      "MyBatis resultMap의 collection 매핑과 카테고리 셀프 조인으로 차량과 이미지 목록을 한 번의 쿼리로 조회",
      "Spring Security 커스텀 AuthenticationProvider로 사용자와 관리자 로그인을 하나의 폼에서 처리하고 BCrypt로 비밀번호 검증",
      "Python, FastAPI로 RAG 기반 차량 광고 문구 생성 API 구현 (데이터 전처리, Upstage 임베딩, ChromaDB 유사도 검색)",
      "Spring과 FastAPI를 RestTemplate으로 연동하고 약관 챗봇, 차량 추천, 뉴스 요약 기능을 하나의 FastAPI 앱으로 통합",
    ],
    performance: "같은 서비스를 Spring Legacy 버전과 AI 접목 버전으로 두 번 만들며, 트랜잭션과 데이터 정합성, 웹 서비스와 생성형 AI 기능을 연결하는 구조를 익힘.",
  },
  {
    num: "06", title: "마이크로서비스 아키텍처 기반 배달 서비스", category: "Backend / MSA", period: "2022.09 — 2022.12",
    color: "#2F9E44", bgColor: "#F4FCF5",
    stack: ["Spring Boot", "Kafka", "Docker", "Eureka"],
    role: "백엔드 개발 (Order Service, Delivery Service), MSA 환경 구성",
    contributions: [
      "Spring Boot로 Order Service와 Delivery Service 설계 및 구현",
      "서비스 간 비동기 통신을 위한 Kafka 기반 메시지 큐 구성",
      "Docker를 통한 서비스 컨테이너화",
      "서비스 디스커버리를 위한 Eureka 서버 구성 및 각 모듈 등록",
    ],
    performance: "분산 환경에서의 서비스 독립성과 확장성을 고려한 설계 경험. 비동기 데이터 처리 구조에 대한 실질적 경험.",
  },
  {
    num: "07", title: "Clustering을 통한 맞춤형 보험 추천 시스템", category: "AI / Data", period: "2023",
    color: "#0C8599", bgColor: "#E3FAFC",
    stack: ["Python", "Pandas", "NumPy", "DBSCAN", "K-Means", "Fuzzy Clustering", "Matplotlib"],
    role: "팀장, 데이터 분석 및 추천 모델 개발",
    contributions: [
      "보험 상품 데이터 전처리 및 정규화 수행",
      "DBSCAN, K-Means, Fuzzy Clustering 알고리즘 적용하여 고객 그룹별 맞춤 추천 모델 설계",
      "각 모델 성능 비교 분석 및 시각화를 통한 추천 기준 도출",
    ],
    performance: "다양한 데이터를 활용해 고객 맞춤형 서비스 설계 경험. 클러스터링 기법 적용 경험 확보.",
  },
  {
    num: "08", title: "분산 구조 기반 보험사 손해 사정 시스템", category: "Backend / Distributed", period: "2023",
    color: "#495057", bgColor: "#F8F9FA",
    stack: ["Java", "RMI", "MySQL"],
    role: "분산 시스템 설계 및 클라이언트-서버 통신 개발",
    contributions: [
      "Java RMI를 활용해 서버와 클라이언트 간 분산 처리 구조 구현",
      "보험 고객, 계약, 보상청구 등 각 기능별 서버를 모듈화하여 설계",
      "시스템 전체 흐름도와 클래스 다이어그램 작성",
    ],
    performance: "분산 환경에서 각 모듈 간 효율적인 통신 설계 경험. 시스템 확장성과 유지보수성 향상 실습.",
  },
  {
    num: "09", title: "컴퓨터 구조 소프트웨어 구현", category: "System / Low-level", period: "2023",
    color: "#495057", bgColor: "#F8F9FA",
    stack: ["Java", "Git"],
    role: "컴퓨터 하드웨어 구조 모델링 및 소프트웨어 구현",
    contributions: [
      "폰 노이만 아키텍처를 바탕으로 CPU, 메모리, 입출력 장치의 동작 구조를 Java로 구현",
      "메모리 주소 레지스터(MAR), 메모리 버퍼 레지스터(MBR), 시스템 버스 흐름을 코드로 재현",
      "연산 및 제어 흐름을 프로그래밍으로 시뮬레이션하여 하드웨어 동작 원리 체득",
    ],
    performance: "컴퓨터의 논리적 동작 구조를 깊이 있게 학습하고 구현.",
  },
  {
    num: "10", title: "범죄 데이터 기반 범죄율 예측 모델", category: "AI / Data", period: "2023",
    color: "#0C8599", bgColor: "#E3FAFC",
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

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const titleRef = useReveal();

  return (
    <section id="projects" style={{ padding: "7rem 0", background: "#ffffff" }}>
      <div className="container">
        <div ref={titleRef} className="reveal" style={{ marginBottom: "4rem" }}>
          <div className="section-label" style={{ marginBottom: "0.6rem" }}>03 — 프로젝트</div>
          <h2 style={{
            fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#1A1D2E",
            letterSpacing: "-0.03em",
            margin: 0,
          }}>
            Projects
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {projects.map((p, idx) => (
            <ProjectCard
              key={p.num}
              project={p}
              isExpanded={expanded === p.num}
              onToggle={() => setExpanded(expanded === p.num ? null : p.num)}
              delay={idx * 0.04}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, isExpanded, onToggle, delay }: {
  project: typeof projects[0];
  isExpanded: boolean;
  onToggle: () => void;
  delay: number;
}) {
  const ref = useReveal(0.08);
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        transitionDelay: `${delay}s`,
        background: "#ffffff",
        border: `1.5px solid ${isExpanded ? p.color : "#E9ECEF"}`,
        borderRadius: "12px",
        overflow: "hidden",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        boxShadow: isExpanded ? `0 4px 20px ${p.color}18` : "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      {/* Header */}
      <div
        onClick={onToggle}
        style={{
          display: "grid",
          gridTemplateColumns: "56px 1fr auto auto",
          alignItems: "center",
          gap: "1rem",
          padding: "1.25rem 1.5rem",
          cursor: "pointer",
          background: isExpanded ? p.bgColor : "#ffffff",
          transition: "background 0.2s ease",
        }}
      >
        <div style={{
          fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
          fontWeight: 800,
          fontSize: "1.3rem",
          color: isExpanded ? p.color : "#CED4DA",
          letterSpacing: "-0.02em",
          transition: "color 0.2s ease",
        }}>
          {p.num}
        </div>
        <div>
          <div style={{
            fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            fontWeight: 700,
            fontSize: "0.98rem",
            color: "#1A1D2E",
            marginBottom: "0.2rem",
          }}>
            {p.title}
          </div>
          <span style={{
            fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            fontSize: "0.72rem",
            fontWeight: 600,
            color: p.color,
            background: p.bgColor,
            padding: "0.15rem 0.55rem",
            borderRadius: "4px",
          }}>
            {p.category}
          </span>
        </div>
        <div style={{
          fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
          fontSize: "0.78rem",
          color: "#ADB5BD",
          whiteSpace: "nowrap",
        }}>
          {p.period}
        </div>
        <div style={{
          width: "28px", height: "28px",
          borderRadius: "50%",
          background: isExpanded ? p.color : "#F1F3F5",
          color: isExpanded ? "#ffffff" : "#868E96",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.1rem",
          fontWeight: 300,
          transition: "all 0.2s ease",
          transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
          flexShrink: 0,
        }}>
          +
        </div>
      </div>

      {/* Detail */}
      {isExpanded && (
        <div style={{ padding: "0 1.5rem 1.75rem", borderTop: `1px solid ${p.color}22` }}>
          <div style={{ paddingTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {/* Left */}
            <div>
              <div style={{ marginBottom: "1.25rem" }}>
                <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#868E96", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>TECH STACK</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.stack.map((s) => (
                    <span key={s} style={{
                      fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      padding: "0.25rem 0.65rem",
                      borderRadius: "6px",
                      background: p.bgColor,
                      color: p.color,
                      border: `1px solid ${p.color}30`,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#868E96", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>ROLE</div>
                <p style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.85rem", color: "#495057", lineHeight: 1.7, margin: 0 }}>{p.role}</p>
              </div>
            </div>
            {/* Right */}
            <div>
              <div style={{ marginBottom: "1.25rem" }}>
                <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#868E96", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>CONTRIBUTION</div>
                {p.contributions.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.6rem", marginBottom: "0.45rem", alignItems: "flex-start" }}>
                    <span style={{ color: p.color, fontWeight: 700, fontSize: "0.8rem", marginTop: "0.2rem", flexShrink: 0 }}>›</span>
                    <span style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.83rem", color: "#495057", lineHeight: 1.65 }}>{c}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "0.9rem 1rem", background: p.bgColor, borderRadius: "8px", borderLeft: `3px solid ${p.color}` }}>
                <div style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.7rem", fontWeight: 700, color: p.color, letterSpacing: "0.08em", marginBottom: "0.35rem" }}>PERFORMANCE</div>
                <p style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontSize: "0.83rem", color: "#495057", lineHeight: 1.65, margin: 0 }}>{p.performance}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
