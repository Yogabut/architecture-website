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
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-gold/10 rounded-full">
            <span className="text-sm font-medium text-gold">Contact</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-light text-foreground mb-6">
            Get In <span className="text-gold font-normal">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start your architectural journey with us. We're here to answer your questions 
            and discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-10 border border-border bg-card shadow-card">
            <form className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                <Input 
                  placeholder="John Doe" 
                  className="border-border bg-background"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="border-border bg-background"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={6}
                  className="border-border bg-background"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-gold text-white hover:shadow-gold transition-all duration-500 py-6 rounded-full"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 border border-border rounded-xl bg-card hover:shadow-elegant transition-all duration-300 hover:border-gold/30">
                <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center text-center flex-shrink-0 border border-gold/20">
                    <info.icon className="h-7 w-7 text-gold" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-heading text-foreground mb-3 font-semibold">{info.title}</h3>
                    <div className="space-y-1.5">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground leading-relaxed text-[15px]">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;