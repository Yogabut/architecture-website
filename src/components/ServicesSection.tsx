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
  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-gold/10 rounded-full">
            <span className="text-sm font-medium text-gold">What We Offer</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-light text-foreground mb-6">
            Our <span className="text-gold font-normal">Services</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive architectural solutions tailored to bring your vision to life with 
            precision, creativity, and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gold/20">
                <service.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-4 font-medium">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;