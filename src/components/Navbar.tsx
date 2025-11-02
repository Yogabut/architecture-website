import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "About", path: "/about", type: "link" },
    { name: "Services", path: "/services", type: "link" },
    { name: "Portfolio", path: "/categories", type: "link" },
    { name: "Testimonial", path: "/testimonial", type: "link" },
    { name: "Contact", path: "contact", type: "section" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById("contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/arch.png" className="h-12" alt="Studio Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => 
              item.type === "section" ? (
                <button
                  key={item.name}
                  onClick={scrollToContact}
                  className="text-sm font-medium text-gold hover:text-amber-600 transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-amber-600"
                      : "text-gold hover:text-amber-600"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gold hover:text-amber-600 transition"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-slate-800/40 bg-slate-950/70 backdrop-blur-md rounded-b-xl">
            {menuItems.map((item) =>
              item.type === "section" ? (
                <button
                  key={item.name}
                  onClick={scrollToContact}
                  className="block w-full text-right py-2 text-sm font-medium text-gold hover:text-amber-600 transition-colors pr-2"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block w-full text-right py-2 text-sm font-medium transition-colors pr-2 ${
                    location.pathname === item.path
                      ? "text-amber-600"
                      : "text-gold hover:text-amber-600"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;