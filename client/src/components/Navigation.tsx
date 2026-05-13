/* Navigation — Clean Professional Light
 * 상단 고정 네비게이션, 스크롤 시 배경 blur
 * Pretendard 폰트 기반
 */
import { useEffect, useState } from "react";

const navItems = [
  { id: "hero", label: "홈" },
  { id: "about", label: "소개" },
  { id: "skills", label: "기술 스택" },
  { id: "projects", label: "프로젝트" },
  { id: "contact", label: "연락처" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E9ECEF" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          style={{
            fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#3B5BDB",
            background: "none",
            border: "none",
            letterSpacing: "-0.01em",
          }}
        >
          배정연
        </button>

        {/* Desktop nav */}
        <div
          className="hidden lg:flex"
          style={{ gap: "0.25rem", alignItems: "center" }}
        >
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                fontWeight: activeSection === id ? 600 : 400,
                fontSize: "0.9rem",
                color: activeSection === id ? "#3B5BDB" : "#495057",
                background: activeSection === id ? "#EEF2FF" : "none",
                border: "none",
                padding: "0.45rem 0.9rem",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== id) {
                  (e.currentTarget as HTMLButtonElement).style.background = "#F8F9FC";
                  (e.currentTarget as HTMLButtonElement).style.color = "#3B5BDB";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== id) {
                  (e.currentTarget as HTMLButtonElement).style.background = "none";
                  (e.currentTarget as HTMLButtonElement).style.color = "#495057";
                }
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="btn-primary"
            style={{ marginLeft: "0.75rem", padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
          >
            연락하기
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", padding: "0.5rem", color: "#1A1D2E" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "22px" }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: "2px",
                  background: "#1A1D2E",
                  borderRadius: "2px",
                  transition: "all 0.2s ease",
                  transform: mobileOpen
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                    : i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                    : "none"
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "#ffffff",
            borderTop: "1px solid #E9ECEF",
            padding: "1rem 2rem 1.5rem",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                fontWeight: activeSection === id ? 600 : 400,
                fontSize: "0.95rem",
                color: activeSection === id ? "#3B5BDB" : "#495057",
                padding: "0.75rem 0",
                borderBottom: "1px solid #F1F3F5",
                background: "none",
                border: "none",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "#F1F3F5",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
