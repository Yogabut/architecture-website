import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=100&h=100&fit=crop&crop=face",
    quote: "Working with this team was an absolute dream. They transformed our vision into a reality that exceeded all our expectations. The attention to detail and innovative design approach is truly remarkable.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "Our new office space has completely transformed how we work. The design is both functional and inspiring, creating an environment where creativity and productivity flourish.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "Property Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote: "Professional, innovative, and reliable. This architectural team delivered a luxury development that sets new standards in the market. Exceptional work from start to finish.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-gold/10 rounded-full">
            <span className="text-sm font-medium text-gold">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-light text-foreground mb-6">
            What Our <span className="text-gold font-normal">Clients Say</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by clients worldwide for delivering exceptional architectural experiences 
            that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group">
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center pt-4 border-t border-border">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gold/20"
                />
                <div>
                  <h4 className="text-foreground font-medium">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;