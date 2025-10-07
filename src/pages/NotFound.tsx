import { useEffect, useState } from "react";
import { Home, Search, ArrowLeft, Building2 } from "lucide-react";

const NotFound = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const pathname = window.location.pathname;

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-background to-gold/5 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 transition-transform duration-300"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(217, 164, 65, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
          }}
        />
      </div>

      {/* Floating Elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-gold/10 rounded-full animate-float"
          style={{
            width: `${20 + (i % 3) * 15}px`,
            height: `${20 + (i % 3) * 15}px`,
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + (i % 3)}s`
          }}
        />
      ))}

      {/* Blur decorations */}
      <div 
        className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl transition-transform duration-300"
        style={{
          transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl transition-transform duration-300"
        style={{
          transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)`
        }}
      />

      {/* Content */}
      <div className="text-center relative z-10 px-6 animate-fadeIn">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-gold/20 to-gold/5 rounded-3xl flex items-center justify-center border border-gold/30 animate-bounce-slow">
              <Building2 className="w-16 h-16 text-gold" />
            </div>
            <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-2xl animate-pulse" />
          </div>
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-500 to-gold mb-4 animate-slideUp">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-heading font-light text-foreground mb-4 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          Page <span className="text-gold font-normal">Not Found</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed animate-slideUp" style={{ animationDelay: '0.3s' }}>
          Oops! The architectural blueprint you're looking for doesn't exist. 
          Let's get you back to designing greatness.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <a
            href="/"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-amber-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Back to Home
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;