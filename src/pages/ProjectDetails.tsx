import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, User, Calendar, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import architectureData from '@/lib/project';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectDetailPage: React.FC = () => {
  const { categoryId, projectId } = useParams<{ categoryId: string; projectId: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Find category and project
  const category = architectureData.categories.find(cat => cat.id === categoryId);
  const project = category?.projects.find(proj => proj.id === projectId);

  // Auto-rotate images
  useEffect(() => {
    if (!project) return;
    
    const interval = setInterval(() => {
      setSelectedImage(prev => (prev + 1) % project.images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [project]);

  if (!category || !project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/categories" className="text-gold hover:underline">
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  // Get other projects in same category
  const otherProjects = category.projects.filter(p => p.id !== projectId).slice(0, 3);

  const handlePrevImage = () => {
    setSelectedImage(prev => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleNextImage = () => {
    setSelectedImage(prev => (prev + 1) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden" data-aos="fade-in">
        {/* Image with Ken Burns effect */}
        <div className="absolute inset-0">
          <img
            src={project.images[selectedImage]}
            alt={project.title}
            className="w-full h-full object-cover animate-ken-burns"
            key={selectedImage}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Image Thumbnails Navigation - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-3 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gold/50 scrollbar-track-transparent">
          {project.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                selectedImage === index
                  ? 'ring-4 ring-gold scale-110'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {selectedImage === index && (
                <div className="absolute inset-0 bg-gold/20" />
              )}
            </button>
          ))}
        </div>

        {/* Project Title - Bottom Left */}
        <div className="absolute bottom-14 left-0 right-0">
          <div className="max-w-7xl mx-auto px-8 pb-12">
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-ken-burns {
          animation: ken-burns 10s ease-in-out infinite;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thumb-gold\\/50::-webkit-scrollbar-thumb {
          background-color: rgba(212, 155, 45, 0.5);
          border-radius: 2px;
        }
        
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}</style>

      {/* Project Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Info */}
              <div data-aos="fade-up">
                <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.philosophy}
                  </p>
                </div>
              </div>

              {/* Project Images Grid */}
              <div data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-3xl font-bold text-foreground mb-6">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Details Card - Sticky */}
              <div className="bg-card border border-border/60 rounded-2xl p-8 sticky top-24" data-aos="fade-left">
                <h3 className="text-xl font-bold text-foreground mb-6">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium">Client</span>
                    </div>
                    <p className="text-foreground font-semibold">{project.client}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">Location</span>
                    </div>
                    <p className="text-foreground font-semibold">{project.location}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">Year</span>
                    </div>
                    <p className="text-foreground font-semibold">{project.year}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-medium">Category</span>
                    </div>
                    <p className="text-foreground font-semibold">{category.name}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-border/60" />

                {/* CTA inside card */}
                <div>
                  <h4 className="text-base font-bold text-foreground mb-2">Interested in a similar project?</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Let's discuss how we can bring your vision to life.
                  </p>
                  <Link to="/contact">
                    <button className="w-full px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:shadow-gold transition-all duration-300 flex items-center justify-center gap-2 group">
                      <span>Get in Touch</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;