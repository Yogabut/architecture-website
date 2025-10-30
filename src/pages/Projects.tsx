/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MapPin, User, Calendar, Sparkles } from "lucide-react";
import architectureData from "@/lib/project";

const CategoryProjectsPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const category = architectureData.categories.find(
    (cat) => cat.id === categoryId
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Category not found
          </h1>
          <Link to="/categories" className="text-gold hover:underline">
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  const groupedProjects = [];
  for (let i = 0; i < category.projects.length; i += 3) {
    groupedProjects.push(category.projects.slice(i, i + 3));
  }

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-gray-600 hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Categories</span>
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-border/60">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-foreground">
                  {category.projects.length} Projects
                </span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section ref={sectionRef} className="py-24 space-y-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`inline-block mb-8 px-4 py-1 bg-gold/10 rounded-full transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="text-sm font-medium text-gold">Portfolio</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-heading font-light text-foreground mb-12 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Featured <span className="text-gold font-normal">{category.name}</span>{" "}
            Projects
          </h2>
        </div>

        {/* Alternating asymmetric sections */}
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {groupedProjects.map((group, index) => {
            const isEven = index % 2 === 0;
            const [main, ...others] = group;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {isEven ? (
                  <>
                    <ProjectCardLarge project={main} delay={index * 100} />
                    <div className="flex flex-col gap-2">
                      {others.map((p, i) => (
                        <ProjectCardSmall
                          key={p.id}
                          project={p}
                          delay={index * 100 + i * 100}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                      {others.map((p, i) => (
                        <ProjectCardSmall
                          key={p.id}
                          project={p}
                          delay={index * 100 + i * 100}
                        />
                      ))}
                    </div>
                    <ProjectCardLarge project={main} delay={index * 100} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

// ---

// Large Project Card
interface ProjectProps {
  project: any;
  delay?: number;
}

const ProjectCardLarge: React.FC<ProjectProps> = ({ project, delay }) => (
  <Card
    className="group relative overflow-hidden border border-border transition-all duration-700 bg-card hover:-translate-y-2"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative h-[573px] overflow-hidden">
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
      
      {/* Konten Teks */}
      <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col justify-end transition-all duration-500">
        
        {/* Title */}
        <h3 className="text-white text-3xl font-bold leading-tight mb-2">
            {project.title}
        </h3>
        
        {/* Description - Muncul saat hover dengan zoom */}
        <p className="text-gray-200 text-base mb-3 opacity-0 h-0 scale-90
                      transition-all duration-500 origin-bottom-left
                      group-hover:opacity-100 group-hover:h-auto group-hover:mt-2 group-hover:scale-100">
          {project.philosophy}
        </p>

        {/* Location, Client, Year - Selalu ada */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span>{project.location}</span>
          </div>
          <span className="text-gray-500">•</span>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-gray-500" />
            <span>{project.client}</span>
          </div>
          <span className="text-gray-500">•</span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>{project.year}</span>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

//  Small Project Card
const ProjectCardSmall: React.FC<ProjectProps> = ({ project, delay }) => (
  <Card
    className="group relative overflow-hidden border border-border transition-all duration-700 bg-card hover:-translate-y-2"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative h-[280px] overflow-hidden">
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90" />


      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end transition-all duration-500">
        {/* Title */}
        <h4 className="text-white text-2xl font-bold leading-tight mb-1">
            {project.title}
        </h4>

        {/* Description - Muncul saat hover dengan zoom */}
        <p className="text-gray-200 text-sm mb-2 opacity-0 h-0 scale-90
                      transition-all duration-500 origin-bottom-left
                      group-hover:opacity-100 group-hover:h-auto group-hover:mt-1 group-hover:scale-100">
          {project.philosophy}
        </p>

        {/* Location, Client, Year - Selalu ada */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gray-500" />
            <span>{project.location}</span>
          </div>
          <span className="text-gray-500">•</span>
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-gray-500" />
            <span>{project.client}</span>
          </div>
          <span className="text-gray-500">•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-gray-500" />
            <span>{project.year}</span>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export default CategoryProjectsPage;