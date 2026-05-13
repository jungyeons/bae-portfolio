/* Home.tsx — Clean Professional Light Portfolio
 * Design: Pretendard Variable 폰트, 인디고 블루 강조색
 * Background: #F8F9FC / #FFFFFF 교차
 */
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div style={{ background: "#F8F9FC", color: "#1A1D2E", minHeight: "100vh" }}>
      <Navigation />
      <ScrollProgress />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handle = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", background: "#E9ECEF", zIndex: 200 }}>
      <div style={{
        height: "100%",
        width: `${progress}%`,
        background: "linear-gradient(to right, #3B5BDB, #4263EB)",
        transition: "width 0.1s linear",
        boxShadow: "0 0 6px rgba(59,91,219,0.4)",
      }} />
    </div>
  );
}
