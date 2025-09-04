import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-heading font-light text-white-soft mb-8 leading-tight">
          Ready to Transform
          <br />
          <span className="bg-gradient-gold bg-clip-text text-transparent">Your Vision?</span>
        </h2>

        <p className="text-xl text-gray-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's collaborate to create architectural excellence that reflects your unique vision 
          and transforms spaces into extraordinary experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="bg-gradient-gold text-charcoal hover:shadow-gold transition-all duration-500 px-8 py-4 text-lg font-medium group"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            className="border-white-soft/30 text-white-soft hover:bg-white-soft hover:text-charcoal transition-all duration-500 px-8 py-4 text-lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-heading text-gold mb-2">Free</h3>
            <p className="text-gray-light">Initial Consultation</p>
          </div>
          <div>
            <h3 className="text-2xl font-heading text-gold mb-2">24/7</h3>
            <p className="text-gray-light">Project Support</p>
          </div>
          <div>
            <h3 className="text-2xl font-heading text-gold mb-2">100%</h3>
            <p className="text-gray-light">Satisfaction Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;