import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/project-section";
import ConnectSection from "@/components/connect-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <ConnectSection />
      <FooterSection />
    </div>
  );
}