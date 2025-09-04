import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white-soft">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading text-gold mb-6">Architecture Studio</h3>
            <p className="text-gray-light leading-relaxed mb-6 max-w-md">
              Creating architectural masterpieces that blend innovation with timeless elegance. 
              Transforming visions into extraordinary living and working spaces.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-gray-light/30 text-gray-light hover:bg-gold hover:text-charcoal hover:border-gold">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-light/30 text-gray-light hover:bg-gold hover:text-charcoal hover:border-gold">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-light/30 text-gray-light hover:bg-gold hover:text-charcoal hover:border-gold">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-light/30 text-gray-light hover:bg-gold hover:text-charcoal hover:border-gold">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading text-white-soft mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Portfolio', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-light hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading text-white-soft mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Architectural Design',
                'Interior Design', 
                'Landscape Architecture',
                'BIM & 3D Modeling',
                'Construction Consultation'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-light">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-slate/30" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-light text-sm mb-4 md:mb-0">
            © 2024 Architecture Studio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-light hover:text-gold text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-light hover:text-gold text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <Button 
              variant="outline" 
              size="sm"
              onClick={scrollToTop}
              className="border-gold/30 text-gold hover:bg-gold hover:text-charcoal"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;