import { HeroSection } from "@/components/HeroSection";
import { CoreConcept } from "@/components/CoreConcept";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CoreConcept />
      <Features />
    </div>
  );
};

export default Index;