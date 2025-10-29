import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-gold/5"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-gold/20 rotate-45"></div>

      {/* Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 
                data-aos="fade-right"
                data-aos-delay="100"
                className="text-6xl md:text-7xl font-heading font-bold text-foreground leading-[1.1]"
              >
                Crafting Your
              </h1>
              <h1 
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-6xl md:text-7xl font-heading font-bold leading-[1.1]"
              >
                <span className="bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent">
                  Dream Spaces
                </span>
              </h1>
              <h1 
                data-aos="fade-right"
                data-aos-delay="500"
                className="text-6xl md:text-7xl font-heading font-bold text-foreground leading-[1.1]"
              >
                Into Reality
              </h1>
            </div>

            {/* Description */}
            <p 
              data-aos="fade-up"
              data-aos-delay="700"
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Experience architectural excellence where every design tells a story. 
              We blend innovative thinking with timeless aesthetics.
            </p>

            {/* CTA Buttons */}
            <div 
              data-aos="fade-up"
              data-aos-delay="900"
              className="flex flex-wrap gap-4"
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

          {/* Right Image Collage */}
          <div className="relative lg:block hidden h-[550px] w-full">
            
            {/* Image 1 - Large, Top Right */}
            <div 
              data-aos="fade-left"
              data-aos-delay="200"
              className="absolute top-0 right-0 w-[300px] h-[280px] rounded-2xl overflow-hidden border-4 border-background shadow-2xl z-30 hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                alt="Architecture Project 1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Image 2 - Medium, Center Left */}
            <div 
              data-aos="fade-right"
              data-aos-delay="400"
              className="absolute top-[120px] left-[20px] w-[260px] h-[300px] rounded-2xl overflow-hidden border-4 border-background shadow-2xl z-20 hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
                alt="Architecture Project 2"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Image 3 - Small, Bottom Right */}
            <div 
              data-aos="fade-up"
              data-aos-delay="600"
              className="absolute bottom-0 right-[80px] w-[200px] h-[180px] rounded-2xl overflow-hidden border-4 border-background shadow-2xl z-10 hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
                alt="Architecture Project 3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Decorative Elements */}
            <div 
              data-aos="zoom-in"
              data-aos-delay="300"
              className="absolute top-[60px] left-[240px] w-16 h-16 bg-gold/20 rounded-xl -z-10"
            ></div>
            <div 
              data-aos="zoom-in"
              data-aos-delay="500"
              className="absolute bottom-[160px] right-[20px] w-12 h-12 border-2 border-gold/30 rounded-lg -z-10"
            ></div>
            
            {/* Small Badge */}
            <div 
              data-aos="zoom-in"
              data-aos-delay="800"
              className="absolute top-[320px] right-[220px] bg-background/95 backdrop-blur-md rounded-lg px-4 py-2.5 border border-gold/20 shadow-lg z-40"
            >
              <div className="text-sm font-bold text-gold">500+ Projects</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;