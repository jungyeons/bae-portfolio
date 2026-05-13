/* SkillsSection — Dark Brutalism
 * Grid layout with category cards
 * Animated skill tags on reveal
 */
import { useReveal } from "@/hooks/useReveal";

const skillCategories = [
  {
    category: "Security",
    icon: "🛡",
    skills: [
      "SQL Injection", "XSS (Stored/Reflected)", "CSRF", "SSRF", "SSTI",
      "OWASP Top 10", "Burp Suite", "OWASP ZAP", "모바일 앱 취약점 분석",
      "리패키징", "코드 변조",
    ],
    highlight: true,
  },
  {
    category: "Backend",
    icon: "⚙",
    skills: [
      "Java 11/17", "Spring Framework", "Spring Boot", "Spring MVC",
      "Spring Security", "JPA", "Hibernate", "QueryDSL", "RMI",
    ],
  },
  {
    category: "Frontend",
    icon: "◈",
    skills: [
      "React", "React Native", "Redux", "Expo",
      "HTML5", "CSS3", "JavaScript (ES6+)", "JSP", "Thymeleaf",
    ],
  },
  {
    category: "Infra & DevOps",
    icon: "☁",
    skills: [
      "AWS EC2", "S3", "RDS", "ALB", "Auto Scaling",
      "Docker", "GitHub Actions", "Nginx", "Jenkins", "Ubuntu Server",
    ],
  },
  {
    category: "Database",
    icon: "◎",
    skills: [
      "MySQL", "Oracle SQL", "Redis (캐싱 전략)", "MongoDB", "ERD 설계",
    ],
  },
  {
    category: "AI & Data",
    icon: "◆",
    skills: [
      "Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib",
      "DBSCAN", "K-Means", "Fuzzy Clustering", "LightGBM", "PyTorch",
    ],
  },
  {
    category: "Message Queue",
    icon: "⇄",
    skills: ["Apache Kafka", "비동기 메시지 처리", "스트림 처리"],
  },
  {
    category: "Tools & Testing",
    icon: "◇",
    skills: [
      "Git", "GitHub", "GitLab", "Jira", "Notion", "Postman",
      "Figma", "Enterprise Architect", "JUnit 5", "Mockito", "Swagger",
    ],
  },
  {
    category: "System",
    icon: "▣",
    skills: [
      "Linux 기반 배포", "운영체제 구현 (Java)", "Shell 기반 시스템 분석",
      "파일 권한 관리", "계정 관리",
    ],
  },
];

export default function SkillsSection() {
  const titleRef = useReveal();

  return (
    <section
      id="skills"
      style={{
        padding: "8rem 0",
        background: "#0D0D0D",
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
            02 — COMPETENCIES
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
            SKILLS
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

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5px",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {skillCategories.map((cat, idx) => (
            <SkillCard key={cat.category} cat={cat} delay={idx * 0.05} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .container {
            padding-left: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function SkillCard({
  cat,
  delay,
}: {
  cat: (typeof skillCategories)[0];
  delay: number;
}) {
  const ref = useReveal(0.1);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        transitionDelay: `${delay}s`,
        background: "#0A0A0A",
        padding: "2rem",
        borderLeft: cat.highlight ? "2px solid #00E5FF" : "2px solid transparent",
        transition: "background 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "#111111";
        if (!cat.highlight) {
          (e.currentTarget as HTMLDivElement).style.borderLeftColor = "rgba(0,229,255,0.4)";
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "#0A0A0A";
        if (!cat.highlight) {
          (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent";
        }
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <span
          style={{
            fontSize: "1rem",
            color: cat.highlight ? "#00E5FF" : "rgba(240,237,232,0.5)",
          }}
        >
          {cat.icon}
        </span>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: cat.highlight ? "#00E5FF" : "rgba(240,237,232,0.6)",
            fontWeight: 700,
          }}
        >
          {cat.category.toUpperCase()}
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {cat.skills.map((skill) => (
          <span
            key={skill}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              padding: "0.2rem 0.55rem",
              border: `1px solid ${cat.highlight ? "rgba(0,229,255,0.25)" : "rgba(255,255,255,0.1)"}`,
              color: cat.highlight ? "rgba(0,229,255,0.75)" : "rgba(240,237,232,0.5)",
              background: cat.highlight ? "rgba(0,229,255,0.04)" : "transparent",
              letterSpacing: "0.03em",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
