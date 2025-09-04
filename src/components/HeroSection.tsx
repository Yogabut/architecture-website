import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-heading font-light text-white-soft mb-8 leading-tight">
            Designing
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent font-normal">
              Timeless Spaces
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-light mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            We create architectural masterpieces that blend innovation with timeless elegance, 
            transforming your vision into extraordinary living spaces.
          </p>

          <Button 
            variant="default" 
            size="lg"
            className="bg-gradient-gold text-charcoal hover:shadow-gold transition-all duration-500 px-8 py-4 text-lg font-medium group"
          >
            Get Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;