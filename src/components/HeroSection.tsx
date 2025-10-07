import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Fade in on mount
    setIsVisible(true);

    // Parallax effect on scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax values
  const textParallax = scrollY * 0.5;
  const imageParallax = scrollY * 0.3;
  const bgParallax = scrollY * 0.2;
  const fadeOut = 1 - scrollY / 500;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated Background with Parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background to-gold/5 transition-transform duration-100"
        style={{ transform: `translateY(${bgParallax}px)` }}
      ></div>

      {/* Floating geometric shapes with parallax */}
      <div 
        className="absolute top-20 right-20 w-32 h-32 border-2 border-gold/20 rounded-full animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.1}deg)` }}
      ></div>
      <div 
        className="absolute bottom-40 left-20 w-24 h-24 border-2 border-gold/20 rotate-45"
        style={{ transform: `translateY(${-scrollY * 0.3}px) rotate(${45 + scrollY * 0.15}deg)` }}
      ></div>

      {/* Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content with Parallax */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              transform: `translateY(${textParallax}px)`,
              opacity: fadeOut > 0 ? fadeOut : 0
            }}
          >
            {/* Main Heading with stagger animation */}
            <div className="space-y-2">
              <h1 
                className="text-6xl md:text-7xl font-heading font-bold text-foreground leading-[1.1] transition-all duration-700"
                style={{ 
                  transitionDelay: '100ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)'
                }}
              >
                Crafting Your
              </h1>
              <h1 
                className="text-6xl md:text-7xl font-heading font-bold leading-[1.1] transition-all duration-700"
                style={{ 
                  transitionDelay: '300ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)'
                }}
              >
                <span className="bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent">
                  Dream Spaces
                </span>
              </h1>
              <h1 
                className="text-6xl md:text-7xl font-heading font-bold text-foreground leading-[1.1] transition-all duration-700"
                style={{ 
                  transitionDelay: '500ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)'
                }}
              >
                Into Reality
              </h1>
            </div>

            {/* Description */}
            <p 
              className="text-lg text-muted-foreground leading-relaxed max-w-lg transition-all duration-700"
              style={{ 
                transitionDelay: '700ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              Experience architectural excellence where every design tells a story. 
              We blend innovative thinking with timeless aesthetics.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 transition-all duration-700"
              style={{ 
                transitionDelay: '900ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-gold to-amber-500 text-white hover:shadow-xl hover:shadow-gold/50 hover:scale-105 transition-all duration-300 px-8 py-6 text-base font-semibold group rounded-lg"
                onClick={() => scrollToSection('contact')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gold/40 text-foreground hover:bg-gold/10 hover:border-gold hover:scale-105 transition-all duration-300 px-8 py-6 text-base font-semibold rounded-lg"
                onClick={() => scrollToSection('portfolio')}
              >
                Explore Work
              </Button>
            </div>
          </div>

          {/* Right Image Collage with Parallax */}
          <div 
            className="relative lg:block hidden h-[550px] w-full"
            style={{ 
              transform: `translateY(${imageParallax}px)`,
              opacity: fadeOut > 0 ? fadeOut : 0
            }}
          >
            
            {/* Image 1 - Large, Top Right with individual parallax */}
            <div 
              className="absolute top-0 right-0 w-[300px] h-[280px] rounded-2xl overflow-hidden border-4 border-background shadow-2xl transform transition-all duration-500 z-30 hover:scale-105 hover:rotate-0"
              style={{ 
                transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.02}deg)`,
                transitionDelay: '200ms',
                opacity: isVisible ? 1 : 0
              }}
            >
              <img
                src={heroImage}
                alt="Architecture Project 1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Image 2 - Medium, Center Left with parallax */}
            <div 
              className="absolute top-[120px] left-[20px] w-[260px] h-[300px] rounded-2xl overflow-hidden border-4 border-background shadow-2xl transform transition-all duration-500 z-20 hover:scale-105 hover:rotate-0"
              style={{ 
                transform: `translateY(${scrollY * 0.25}px) rotate(${3 + scrollY * 0.03}deg)`,
                transitionDelay: '400ms',
                opacity: isVisible ? 1 : 0
              }}
            >
              <img
                src={heroImage}
                alt="Architecture Project 2"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Image 3 - Small, Bottom Right with parallax */}
            <div 
              className="absolute bottom-0 right-[80px] w-[200px] h-[180px] rounded-2xl overflow-hidden border-4 border-background shadow-2xl transform transition-all duration-500 z-10 hover:scale-105 hover:rotate-0"
              style={{ 
                transform: `translateY(${scrollY * 0.35}px) rotate(${-6 + scrollY * 0.04}deg)`,
                transitionDelay: '600ms',
                opacity: isVisible ? 1 : 0
              }}
            >
              <img
                src={heroImage}
                alt="Architecture Project 3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Decorative Elements with parallax */}
            <div 
              className="absolute top-[60px] left-[240px] w-16 h-16 bg-gold/20 rounded-xl transform -z-10"
              style={{ 
                transform: `translateY(${-scrollY * 0.2}px) rotate(${45 + scrollY * 0.1}deg)` 
              }}
            ></div>
            <div 
              className="absolute bottom-[160px] right-[20px] w-12 h-12 border-2 border-gold/30 rounded-lg transform -z-10"
              style={{ 
                transform: `translateY(${scrollY * 0.18}px) rotate(${12 + scrollY * 0.08}deg)` 
              }}
            ></div>
            
            {/* Small Badge with fade */}
            <div 
              className="absolute top-[320px] right-[220px] bg-background/95 backdrop-blur-md rounded-lg px-4 py-2.5 border border-gold/20 shadow-lg z-40 transition-all duration-500"
              style={{ 
                transitionDelay: '800ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)'
              }}
            >
              <div className="text-sm font-bold text-gold">500+ Projects</div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator with pulse */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce transition-opacity duration-300"
        style={{ opacity: scrollY < 100 ? 1 : 0 }}
      >
        <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;