import AboutSection from "@/components/ui/HomePage/AboutSection/AboutSection";
import Education from "@/components/ui/HomePage/Education/Education";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import SkillSection from "@/components/ui/HomePage/SkillSection/SkillSection";

export default function Home() {
  return (
    <div
     //className="max-w-[1440px]  mx-auto text-white"
    >
      <HeroSection />
      <AboutSection />
      <Education />
      <SkillSection />
    </div>
  );
}
