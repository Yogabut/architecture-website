import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    details: ["123 Architecture Avenue", "Design District, NY 10001"]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@architecturestudio.com", "projects@architecturestudio.com"]
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"]
  }
];

const ContactSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-light text-foreground mb-6">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your architectural journey? Contact us today for a consultation 
            and let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border shadow-soft">
            <h3 className="text-2xl font-heading text-foreground mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                  <Input placeholder="Your full name" className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background border-border" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Project Type</label>
                <Input placeholder="e.g., Residential, Commercial, Interior Design" className="bg-background border-border" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                <Textarea 
                  placeholder="Tell us about your project, budget, timeline, and any specific requirements..."
                  className="bg-background border-border min-h-32"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-gold text-charcoal hover:shadow-gold transition-all duration-500"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:shadow-soft transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-charcoal" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="p-0 overflow-hidden bg-card border-border">
              <div className="w-full h-64 bg-gradient-dark flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
                <div className="text-center z-10">
                  <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h4 className="text-white-soft font-medium mb-2">Our Location</h4>
                  <p className="text-gray-light text-sm">Interactive map coming soon</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;