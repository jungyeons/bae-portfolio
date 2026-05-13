/* Home.tsx — Dark Brutalism Portfolio
 * Design: Bebas Neue display, Space Grotesk body, JetBrains Mono mono
 * Colors: #0A0A0A bg, #F0EDE8 text, #00E5FF accent
 * Layout: Fixed left nav, full-width sections
 */
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div
      style={{
        background: "#0A0A0A",
        color: "#F0EDE8",
        minHeight: "100vh",
      }}
    >
      <Navigation />

      {/* Main content with left padding for desktop nav */}
      <main style={{ paddingLeft: "0" }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Scroll progress bar */}
      <ScrollProgress />
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "rgba(255,255,255,0.05)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "#00E5FF",
          transition: "width 0.1s linear",
          boxShadow: "0 0 8px rgba(0,229,255,0.6)",
        }}
      />
    </div>
  );
}

import { useState, useEffect } from "react";
