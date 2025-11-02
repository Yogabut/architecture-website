import HeaderSection from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";


const Index = () => {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      <HeroSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Index;
