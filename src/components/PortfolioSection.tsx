import { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    title: "Zenith Residence",
    category: "Residential",
    description: "A contemporary masterpiece blending minimalist design with natural elements, creating a serene living environment.",
    year: "2024"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    title: "Metropolitan Tower",
    category: "Commercial",
    description: "Modern office complex featuring sustainable design principles and innovative workspace solutions.",
    year: "2023"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
    title: "Serenity Villa",
    category: "Luxury Residential",
    description: "Luxury villa with infinity pool and panoramic views, seamlessly integrating indoor and outdoor living.",
    year: "2024"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800",
    title: "Urban Loft",
    category: "Residential",
    description: "Industrial-chic living space with exposed concrete and floor-to-ceiling windows.",
    year: "2024"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=800",
    title: "Skyline Plaza",
    category: "Commercial",
    description: "Mixed-use development combining retail, office, and residential spaces in perfect harmony.",
    year: "2023"
  },
  {
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800",
    title: "Coastal Retreat",
    category: "Luxury Residential",
    description: "Beachfront villa with organic architecture that flows with the natural landscape.",
    year: "2024"
  }
];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      className="py-20 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div 
            className={`inline-block mb-4 px-4 py-1 bg-gold/10 rounded-full transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-sm font-medium text-gold">Our Work</span>
          </div>
          
          <h2 
            className={`text-5xl md:text-6xl font-heading font-light text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Featured <span className="text-gold font-normal">Projects</span>
          </h2>
          
          <div 
            className={`h-1 bg-gradient-gold mx-auto rounded-full transition-all duration-1000 delay-200 ${
              isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'
            }`}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <Card className="group overflow-hidden border border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full mb-3">
                      {project.category}
                    </span>
                    <h5 className="text-white text-xl font-heading mb-2 font-bold">
                      {project.title} · {project.year}
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;