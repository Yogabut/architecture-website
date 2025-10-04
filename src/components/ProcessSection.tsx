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
  return (
    <section id="process" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-gold/10 rounded-full">
            <span className="text-sm font-medium text-gold">How We Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-light text-foreground mb-6">
            Our <span className="text-gold font-normal">Process</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A structured approach that ensures excellence at every stage, 
            from initial concept to final realization.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-gold transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-bold text-sm z-10 hidden lg:flex shadow-gold">
                  {index + 1}
                </div>
                
                <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 mt-8 lg:mt-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-gold/20">
                    <step.icon className="h-8 w-8 text-gold" />
                  </div>
                  
                  <h3 className="text-2xl font-heading text-foreground mb-4 font-medium">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;