import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    title: "Zenith Residence",
    category: "Residential",
    description: "A contemporary masterpiece blending minimalist design with natural elements, creating a serene living environment.",
    year: "2024"
  },
  {
    image: project2,
    title: "Metropolitan Tower",
    category: "Commercial",
    description: "Modern office complex featuring sustainable design principles and innovative workspace solutions.",
    year: "2023"
  },
  {
    image: project3,
    title: "Serenity Villa",
    category: "Luxury Residential",
    description: "Luxury villa with infinity pool and panoramic views, seamlessly integrating indoor and outdoor living.",
    year: "2024"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-gold/10 rounded-full">
            <span className="text-sm font-medium text-gold">Our Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-light text-foreground mb-6">
            Featured <span className="text-gold font-normal">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of distinguished projects that showcase our commitment to 
            design excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <p className="text-background text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-heading text-foreground mb-2 font-medium">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.year}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;