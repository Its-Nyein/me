import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import { ProjectSection } from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import TimelineSection from "./components/TimelineSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <TimelineSection />
      <AboutSection />
    </>
  );
}
