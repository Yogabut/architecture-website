import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-heading font-semibold text-foreground">
              Arch<span className="text-gold">Studio</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-gold text-white hover:shadow-gold transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-gold text-white hover:shadow-gold transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
