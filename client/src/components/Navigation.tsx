/* Navigation — Dark Brutalism style
 * Fixed left sidebar on desktop, top bar on mobile
 * Active section tracking via IntersectionObserver
 */
import { useEffect, useState } from "react";

const navItems = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Desktop: Fixed left vertical nav */}
      <nav className="fixed left-0 top-0 h-full z-50 hidden lg:flex flex-col items-center justify-between py-10 px-6 w-20">
        {/* Logo mark */}
        <div
          className="cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.1rem",
              color: "#00E5FF",
              letterSpacing: "0.1em",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            JYB
          </div>
        </div>

        {/* Nav items */}
        <div className="flex flex-col items-center gap-8">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                color: activeSection === id ? "#00E5FF" : "rgba(240,237,232,0.35)",
                transition: "color 0.2s ease",
                background: "none",
                border: "none",
                padding: "0",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Bottom line */}
        <div
          style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, rgba(0,229,255,0.5), transparent)",
          }}
        />
      </nav>

      {/* Mobile: Top bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
        style={{
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.2rem",
              color: "#00E5FF",
              letterSpacing: "0.1em",
            }}
          >
            JYB
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#F0EDE8", background: "none", border: "none" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "22px" }}>
              <span
                style={{
                  display: "block",
                  height: "1px",
                  background: mobileOpen ? "#00E5FF" : "#F0EDE8",
                  transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
                  transition: "all 0.2s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "1px",
                  background: "#F0EDE8",
                  opacity: mobileOpen ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "1px",
                  background: mobileOpen ? "#00E5FF" : "#F0EDE8",
                  transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                  transition: "all 0.2s ease",
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              background: "rgba(10,10,10,0.98)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "1.5rem 1.5rem",
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
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: activeSection === id ? "#00E5FF" : "rgba(240,237,232,0.6)",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  background: "none",
                  border: "none",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "rgba(255,255,255,0.05)",
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
