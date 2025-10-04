import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gold/5 via-background to-gold/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1 bg-gold/10 rounded-full">
          <span className="text-sm font-medium text-gold">Get Started</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-heading font-light text-foreground mb-8 leading-tight">
          Ready to Transform
          <br />
          <span className="text-gold font-normal">Your Vision?</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's collaborate to create architectural excellence that reflects your unique vision 
          and transforms spaces into extraordinary experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="bg-gradient-gold text-white hover:shadow-gold transition-all duration-500 px-10 py-6 text-lg font-medium group rounded-full"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-border text-foreground hover:bg-secondary transition-all duration-500 px-10 py-6 text-lg rounded-full"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <h3 className="text-3xl font-heading text-gold mb-2 font-semibold">Free</h3>
            <p className="text-muted-foreground">Initial Consultation</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <h3 className="text-3xl font-heading text-gold mb-2 font-semibold">24/7</h3>
            <p className="text-muted-foreground">Project Support</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <h3 className="text-3xl font-heading text-gold mb-2 font-semibold">100%</h3>
            <p className="text-muted-foreground">Satisfaction Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;