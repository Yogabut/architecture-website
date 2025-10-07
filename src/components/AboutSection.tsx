import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x: x * 20, y: y * 20 });
    }
  };

  const philosophy = "Philosophy";
  const stats = [
    { value: "500+", label: "Projects Done" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "25+", label: "Years Experience" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-secondary/30 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 transition-transform duration-300"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(217, 164, 65, 0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              {/* Badge with animation */}
              <div 
                className={`inline-block mb-4 px-4 py-1 bg-gold/10 rounded-full border border-gold/20 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <span className="text-sm font-medium text-gold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl font-heading font-light text-foreground mb-6 leading-tight">
                <span 
                  className={`inline-block transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  Our
                </span>
                <br />
                <span className="text-gold font-normal inline-flex">
                  {philosophy.split('').map((char, i) => (
                    <span
                      key={i}
                      className={`inline-block transition-all duration-500 hover:scale-110 hover:-translate-y-1 cursor-default ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ 
                        transitionDelay: `${300 + i * 40}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </h2>

              {/* Line decoration */}
              <div 
                className={`h-1 bg-gradient-gold rounded-full transition-all duration-1000 ${
                  isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              />
            </div>

            {/* Paragraphs */}
            <p 
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              For over two decades, we have been crafting architectural experiences that transcend 
              conventional boundaries. Our philosophy centers on the belief that great architecture 
              should not only be visually stunning but also deeply functional and sustainable.
            </p>

            <p 
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '850ms' }}
            >
              We approach every project with meticulous attention to detail, innovative design thinking, 
              and a deep understanding of how spaces influence human experience. From residential 
              masterpieces to commercial landmarks, we create environments that inspire and endure.
            </p>

            {/* Stats Bar with hover effects */}
            <div 
              className={`flex flex-wrap items-center gap-12 pt-16 mt-16 border-t border-border max-w-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-12">
                  <div
                    className="cursor-pointer group"
                    onMouseEnter={() => setHoveredStat(i)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div className={`text-4xl font-bold text-gold mb-1 transition-all duration-300 ${
                      hoveredStat === i ? 'scale-110 drop-shadow-[0_0_10px_rgba(217,164,65,0.5)]' : ''
                    }`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm text-muted-foreground transition-colors duration-300 ${
                      hoveredStat === i ? 'text-gold' : ''
                    }`}>
                      {stat.label}
                    </div>
                    {hoveredStat === i && (
                      <div className="h-0.5 bg-gold mt-2 animate-[expand_0.3s_ease-out]" />
                    )}
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-12 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element - Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div 
                className={`col-span-2 relative group overflow-hidden rounded-2xl shadow-elegant transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ 
                  transitionDelay: '400ms',
                  transform: isVisible ? `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` : undefined
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" 
                  alt="Modern Architecture" 
                  className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
                  style={{
                    transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Overlay info on hover */}
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-sm font-medium mb-1">Featured Project</div>
                  <div className="text-xs text-white/80">Modern Architecture Design</div>
                </div>
              </div>
              
              {/* Small Images */}
              <div 
                className={`relative group overflow-hidden rounded-2xl shadow-elegant transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ 
                  transitionDelay: '550ms',
                  transform: isVisible ? `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px)` : undefined
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600" 
                  alt="Interior Design" 
                  className="w-full h-[240px] object-cover transition-all duration-700 group-hover:scale-110"
                  style={{
                    transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-sm font-medium mb-1">Featured Project</div>
                  <div className="text-xs text-white/80">Modern Architecture Design</div>
                </div>
              </div>
              
              <div 
                className={`relative group overflow-hidden rounded-2xl shadow-elegant transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ 
                  transitionDelay: '700ms',
                  transform: isVisible ? `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` : undefined
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600" 
                  alt="Architectural Detail" 
                  className="w-full h-[240px] object-cover transition-all duration-700 group-hover:scale-110"
                  style={{
                    transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-sm font-medium mb-1">Featured Project</div>
                  <div className="text-xs text-white/80">Modern Architecture Design</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements with animation */}
            <div 
              className={`absolute -top-8 -right-8 w-32 h-32 bg-gold/10 rounded-full blur-3xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ 
                transitionDelay: '800ms',
                transform: isVisible ? `translate(${mousePos.x * 0.5}px, ${mousePos.y * -0.5}px) scale(1)` : undefined
              }}
            />
            <div 
              className={`absolute -bottom-8 -left-8 w-40 h-40 bg-gold/5 rounded-full blur-3xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ 
                transitionDelay: '900ms',
                transform: isVisible ? `translate(${mousePos.x * -0.4}px, ${mousePos.y * 0.4}px) scale(1)` : undefined
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;