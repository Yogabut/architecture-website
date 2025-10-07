import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const CTASection = () => {
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
      { threshold: 0.2 }
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

  const transformText = "Transform";
  const visionText = "Your Vision?";

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gold/5 via-background to-gold/10 relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `scale(${0.8 + scrollY * 0.4}) translate(${scrollY * 50}px, ${-scrollY * 30}px)`
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `scale(${0.8 + scrollY * 0.4}) translate(${-scrollY * 50}px, ${scrollY * 30}px)`
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div 
          className={`inline-block mb-6 px-4 py-1 bg-gold/10 rounded-full border border-gold/20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="text-sm font-medium text-gold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
            Get Started
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-heading font-light text-foreground mb-8 leading-tight">
          <span 
            className={`block transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Ready to{' '}
            <span className="inline-flex">
              {transformText.split('').map((char, i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${200 + i * 40}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </span>
          <span 
            className="text-gold font-normal inline-flex transition-all duration-700 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            {visionText.split('').map((char, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${500 + i * 30}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </h2>

        {/* Description */}
        <p 
          className={`text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Let's collaborate to create architectural excellence that reflects your unique vision 
          and transforms spaces into extraordinary experiences.
        </p>

        {/* Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Button 
            size="lg"
            className="bg-gradient-gold text-white hover:shadow-gold transition-all duration-500 px-10 py-6 text-lg font-medium group rounded-full hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-border text-foreground hover:bg-secondary transition-all duration-500 px-10 py-6 text-lg rounded-full hover:scale-105 hover:border-gold/40"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "Free", label: "Initial Consultation", delay: 1100 },
            { value: "24/7", label: "Project Support", delay: 1200 },
            { value: "100%", label: "Satisfaction Guarantee", delay: 1300 }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`bg-card border border-border rounded-2xl p-6 shadow-card transition-all duration-700 hover:-translate-y-2 hover:shadow-elegant hover:border-gold/30 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <h3 className="text-3xl font-heading text-gold mb-2 font-semibold transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-gold to-amber-600 transition-all duration-500 w-0 group-hover:w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;