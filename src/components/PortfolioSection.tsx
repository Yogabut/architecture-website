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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-light text-foreground mb-6">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our latest architectural achievements that showcase innovation, 
            sustainability, and timeless design excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-card border-border hover:shadow-elegant transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button variant="outline" size="sm" className="bg-white-soft/10 border-white-soft/20 text-white-soft hover:bg-white-soft hover:text-charcoal">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gold font-medium">{project.category}</span>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                
                <h3 className="text-xl font-heading text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;