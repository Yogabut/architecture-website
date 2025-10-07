import { Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading text-foreground mb-4 font-semibold">
              Arch<span className="text-gold">Studio</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Creating architectural excellence through innovative design, 
              sustainable practices, and unwavering commitment to quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-heading mb-4 font-medium">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-gold transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-foreground font-heading mb-4 font-medium">Connect</h4>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border-2 border-border bg-card flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border-2 border-border bg-card flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border-2 border-border bg-card flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 ArchStudio. All rights reserved. Designed with passion for architectural excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;