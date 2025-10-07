import { useState, useEffect, useRef } from 'react';
import { FileText, Palette, RotateCcw, Building2 } from "lucide-react";

const processSteps = [
  {
    icon: FileText,
    title: "Brief",
    description: "We begin with understanding your vision, requirements, and dreams for the space."
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our team creates innovative design solutions that exceed your expectations."
  },
  {
    icon: RotateCcw,
    title: "Revision",
    description: "Collaborative refinement process ensuring every detail meets your standards."
  },
  {
    icon: Building2,
    title: "Realization",
    description: "Expert project management bringing your architectural vision to life."
  }
];

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(217, 164, 65, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className={`inline-block mb-4 px-4 py-1 bg-gold/10 rounded-full transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-sm font-medium text-gold">How We Work</span>
          </div>
          
          <h2 
            className={`text-5xl md:text-6xl font-heading font-light text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our <span className="text-gold font-normal">Process</span>
          </h2>
          
          <div 
            className={`h-1 bg-gradient-gold mx-auto mb-8 rounded-full transition-all duration-1000 delay-200 ${
              isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'
            }`}
          />
          
          <p 
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            A structured approach that ensures excellence at every stage, 
            from initial concept to final realization.
          </p>
        </div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border transform -translate-y-1/2 hidden lg:block">
            <div 
              className="h-full bg-gradient-to-r from-gold via-amber-500 to-gold transition-all duration-1500 delay-500"
              style={{ 
                width: isVisible ? `${scrollY * 100}%` : '0%',
                boxShadow: '0 0 10px rgba(217, 164, 65, 0.5)'
              }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div 
                  key={index} 
                  className={`relative text-center group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    transitionDelay: `${500 + index * 150}ms`,
                  }}
                >
                  {/* Step Number */}
                  <div 
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-bold text-sm z-10 hidden lg:flex shadow-lg transition-all duration-500 ${
                      isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                    }`}
                    style={{ 
                      transitionDelay: `${700 + index * 150}ms`,
                      boxShadow: '0 4px 20px rgba(217, 164, 65, 0.4)'
                    }}
                  >
                    {index + 1}
                  </div>
                  
                  <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 mt-8 lg:mt-12 hover:border-gold/30 relative overflow-hidden group">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gold/20 relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-8 w-8 text-gold transition-transform duration-500 group-hover:scale-110 relative z-10" />
                      <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-heading text-foreground mb-4 font-medium relative transition-colors duration-300 group-hover:text-gold">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed relative">
                      {step.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-amber-600 transition-all duration-500 w-0 group-hover:w-full" />
                  </div>

                  {/* Connection arrow for large screens */}
                  {index < processSteps.length - 1 && (
                    <div 
                      className={`absolute top-1/2 -right-4 transform -translate-y-1/2 hidden lg:block transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${800 + index * 150}ms` }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative blur elements */}
      <div 
        className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl transition-opacity duration-1000"
        style={{ opacity: isVisible ? scrollY * 0.5 : 0 }}
      />
      <div 
        className="absolute bottom-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl transition-opacity duration-1000"
        style={{ opacity: isVisible ? scrollY * 0.4 : 0 }}
      />
    </section>
  );
};

export default ProcessSection;