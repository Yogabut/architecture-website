import { useState, useEffect, useRef } from 'react';
import { Building, Home, Trees, Monitor, HardHat } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Building,
    title: "Architectural Design",
    description: "Complete architectural solutions from concept to completion, focusing on innovative and sustainable design principles."
  },
  {
    icon: Home,
    title: "Interior Design",
    description: "Sophisticated interior spaces that reflect your lifestyle while maintaining harmony with the architectural vision."
  },
  {
    icon: Trees,
    title: "Landscape Architecture",
    description: "Seamless integration of built and natural environments creating stunning outdoor living experiences."
  },
  {
    icon: Monitor,
    title: "BIM & 3D Modeling",
    description: "Advanced digital modeling and visualization services for precise planning and stunning presentations."
  },
  {
    icon: HardHat,
    title: "Construction Consultation",
    description: "Expert guidance throughout the construction process ensuring design integrity and quality execution."
  }
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
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

    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x: x * 30, y: y * 30 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const ourText = "Our";
  const servicesText = "Services";

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(217, 164, 65, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gold/20 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
            transform: `translate(${mousePos.x * (0.2 + i * 0.1)}px, ${mousePos.y * (0.2 + i * 0.1)}px)`,
            opacity: scrollY * 0.6,
            transition: 'transform 0.5s ease-out'
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div 
            className={`inline-block mb-4 px-4 py-1 bg-gold/10 rounded-full border border-gold/20 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{ 
              transitionDelay: '100ms',
              transform: isVisible ? `translateY(${-10 + scrollY * 10}px)` : undefined
            }}
          >
            <span className="text-sm font-medium text-gold flex items-center gap-2 justify-center">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
              What We Offer
            </span>
          </div>

          {/* Heading with letter animation */}
          <h2 className="text-5xl md:text-6xl font-heading font-light text-foreground mb-6">
            <span className="inline-flex">
              {ourText.split('').map((char, i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-500 hover:scale-110 hover:-translate-y-1 cursor-default ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${200 + i * 50}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
            {' '}
            <span className="text-gold font-normal inline-flex">
              {servicesText.split('').map((char, i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-500 hover:scale-110 hover:-translate-y-1 cursor-default ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${400 + i * 50}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h2>

          {/* Line decoration */}
          <div 
            className={`h-1 bg-gradient-gold mx-auto mb-8 rounded-full transition-all duration-1000 ${
              isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          />

          {/* Description */}
          <p 
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              transitionDelay: '900ms',
              transform: isVisible ? `translateY(${-5 + scrollY * 5}px)` : undefined
            }}
          >
            Comprehensive architectural solutions tailored to bring your vision to life with 
            precision, creativity, and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const row = Math.floor(index / 3);
            const col = index % 3;
            
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${1000 + index * 100}ms`,
                  transform: isVisible 
                    ? `translate(${mousePos.x * (0.1 + col * 0.05)}px, ${mousePos.y * (0.1 + row * 0.05)}px)` 
                    : undefined
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card 
                  className={`p-8 bg-card border border-border hover:shadow-elegant transition-all duration-500 group h-full relative overflow-hidden ${
                    hoveredCard === index ? '-translate-y-3 border-gold/40' : ''
                  }`}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out]" />
                  </div>

                  {/* Icon container */}
                  <div className={`w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mb-6 border border-gold/20 relative transition-all duration-500 ${
                    hoveredCard === index ? 'scale-110 rotate-6 shadow-lg shadow-gold/20' : ''
                  }`}>
                    <Icon className={`h-8 w-8 text-gold transition-all duration-500 ${
                      hoveredCard === index ? 'scale-110' : ''
                    }`} />
                    
                    {/* Icon glow effect */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl animate-pulse" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-heading text-foreground mb-4 font-medium relative transition-colors duration-300 group-hover:text-gold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative">
                    {service.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-amber-600 transition-all duration-500 ${
                    hoveredCard === index ? 'w-full' : 'w-0'
                  }`} />

                  {/* Corner decoration */}
                  <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/20 rounded-tr-lg transition-all duration-500 ${
                    hoveredCard === index ? 'scale-110 border-gold/60' : 'scale-0'
                  }`} />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Decorative blur elements */}
        <div 
          className="absolute top-20 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? scrollY * 0.5 : 0,
            transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px) scale(${1 + scrollY * 0.3})`
          }}
        />
        <div 
          className="absolute bottom-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? scrollY * 0.4 : 0,
            transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px) scale(${1 + scrollY * 0.2})`
          }}
        />
      </div>

      <style>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;