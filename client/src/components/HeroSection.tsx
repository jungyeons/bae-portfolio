/* HeroSection — Clean Professional Light
 * 좌측 텍스트 + 우측 프로필 사진
 * Pretendard Variable 폰트
 */
import { useEffect, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663648231466/5XNBhSTJDxWGqcgWLgFEiq/hero_light-DjvwU86UQqZ7dBLqf9FFJW.webp";
const PROFILE_IMG = "/profile_98448890.webp";

const stats = [
  { num: "11+", label: "프로젝트" },
  { num: "3", label: "수상" },
  { num: "2", label: "자격증" },
  { num: "2026", label: "취업 준비 중" },
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
  });

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#F8F9FC",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image (right side) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.7,
          zIndex: 0,
        }}
      />
      {/* Left fade overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #F8F9FC 45%, rgba(248,249,252,0.3) 75%, transparent 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 4rem",
          paddingTop: "80px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left: Text content */}
        <div>
          {/* Badge */}
          <div style={{ ...fade(0.1), marginBottom: "1.25rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "#EEF2FF",
                color: "#3B5BDB",
                fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                padding: "0.35rem 0.85rem",
                borderRadius: "20px",
                border: "1px solid rgba(59,91,219,0.2)",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3B5BDB", display: "inline-block" }} />
              DEVELOPER & SECURITY ENGINEER
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              ...fade(0.2),
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "#1A1D2E",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: "0 0 0.5rem",
            }}
          >
            배정연
          </h1>
          <h2
            style={{
              ...fade(0.3),
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "#3B5BDB",
              letterSpacing: "-0.01em",
              margin: "0 0 1.75rem",
            }}
          >
            Jung Yeon Bae
          </h2>

          {/* Tagline */}
          <p
            style={{
              ...fade(0.4),
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontWeight: 400,
              fontSize: "1.05rem",
              color: "#495057",
              lineHeight: 1.85,
              maxWidth: "480px",
              marginBottom: "2.5rem",
            }}
          >
          개발과 보안, 두 가지를 모두 갖춘 엔지니어.<br />
          백엔드 개발부터 인프라 구축, 보안 취약점 분석까지<br />
          폭넓은 기술 스택으로 문제를 해결합니다.
          </p>

          {/* CTA */}
          <div style={{ ...fade(0.5), display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              프로젝트 보기
            </button>
            <button
              className="btn-outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              연락하기
            </button>
          </div>

          {/* Stats */}
          <div style={{ ...fade(0.65), display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
            {stats.map(({ num, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.75rem",
                    color: "#3B5BDB",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                    fontSize: "0.78rem",
                    color: "#868E96",
                    marginTop: "0.3rem",
                    fontWeight: 400,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile photo */}
        <div
          style={{
            ...fade(0.35),
            flexShrink: 0,
          }}
          className="hidden lg:block"
        >
          <div
            style={{
              position: "relative",
              width: "260px",
            }}
          >
            {/* Decorative ring */}
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                borderRadius: "50%",
                border: "2px solid rgba(59,91,219,0.15)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-24px",
                borderRadius: "50%",
                border: "1px solid rgba(59,91,219,0.07)",
                zIndex: 0,
              }}
            />
            <img
              src={PROFILE_IMG}
              alt="배정연 프로필"
              style={{
                width: "260px",
                height: "320px",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "16px",
                boxShadow: "0 20px 60px rgba(59,91,219,0.18), 0 8px 24px rgba(0,0,0,0.08)",
                position: "relative",
                zIndex: 1,
                border: "3px solid #ffffff",
              }}
            />
            {/* Badge overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#3B5BDB",
                color: "#ffffff",
                fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                padding: "0.4rem 1rem",
                borderRadius: "20px",
                whiteSpace: "nowrap",
                zIndex: 2,
                boxShadow: "0 4px 12px rgba(59,91,219,0.35)",
              }}
            >
              Developer & Security
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          zIndex: 3,
          opacity: loaded ? 0.5 : 0,
          transition: "opacity 0.6s ease 1.2s",
        }}
      >
        <span
          style={{
            fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "#868E96",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #3B5BDB, transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
        }
        @media (max-width: 1024px) {
          #hero > div:nth-child(3) {
            grid-template-columns: 1fr !important;
            padding: 0 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
