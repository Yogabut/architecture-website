import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern architectural design"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-20">
        <div className="inline-block mb-6 px-6 py-2 bg-secondary rounded-full">
          <span className="text-sm font-medium text-gold">Premium Architecture Studio</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-light text-foreground mb-6 leading-tight animate-fade-in">
          Designing Timeless
          <br />
          <span className="text-gold font-normal">Spaces</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up">
          Where innovation meets elegance. We transform visions into architectural masterpieces 
          that stand the test of time.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="bg-gradient-gold text-white hover:shadow-gold transition-all duration-500 px-10 py-6 text-lg font-medium group rounded-full"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-border text-foreground hover:bg-secondary transition-all duration-500 px-10 py-6 text-lg rounded-full"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;