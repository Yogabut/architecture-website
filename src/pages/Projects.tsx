/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MapPin, User, Calendar, Sparkles } from "lucide-react";
import architectureData from "@/lib/project";
import AOS from "aos";
import "aos/dist/aos.css";

const CategoryProjectsPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const category = architectureData.categories.find(
    (cat) => cat.id === categoryId
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section
        className="relative h-[60vh] overflow-hidden"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
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
      <section ref={sectionRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`inline-block mb-8 px-4 py-1 bg-gold/10 rounded-full transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="text-sm font-medium text-gold">Portfolio</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-heading font-light text-foreground mb-16 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Featured <span className="text-gold font-normal">{category.name}</span>{" "}
            Projects
          </h2>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
            {category.projects.map((project, index) => {
              // Pattern layout yang bervariasi
              const patterns = [
                "md:col-span-2 md:row-span-2", // Large
                "md:col-span-1", // Small
                "md:col-span-1", // Small
                "md:col-span-1", // Small
                "md:col-span-2 md:row-span-1", // Wide
                "md:col-span-1 md:row-span-2", // Tall
                "md:col-span-2 md:row-span-1", // Wide
              ];

              const heights = [
                "h-[650px]", // Large
                "h-[315px]", // Small
                "h-[315px]", // Small
                "h-[450px]", // Tall
                "h-[450px]", // Wide
                "h-[450px]", // Tall
                "h-[380px]", // Wide
              ];

              const gridClass = patterns[index % patterns.length];
              const heightClass = heights[index % heights.length];

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  categoryId={category.id}
                  gridClass={gridClass}
                  heightClass={heightClass}
                  delay={index * 100}
                  index={index} // ✅ kirim index
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

// Project Card Component
interface ProjectCardProps {
  project: any;
  categoryId: string;
  gridClass: string;
  heightClass: string;
  delay?: number;
  index?: number; // ✅ tambahkan index
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  categoryId,
  gridClass,
  heightClass,
  delay,
  index = 0,
}) => {
  const navigate = useNavigate();

  // Hitung arah animasi berdasarkan posisi kolom (2 kolom → kiri/kanan)
  const aosDirection = index % 2 === 0 ? "fade-right" : "fade-left";

  return (
    <Card
      className={`${gridClass} ${heightClass} group relative overflow-hidden border border-border transition-all duration-700 bg-card hover:-translate-y-2 rounded-2xl cursor-pointer`}
      style={{ transitionDelay: `${delay}ms` }}
      data-aos={aosDirection} // ✅ arah dinamis
      onClick={() => navigate(`/categories/${categoryId}/projects/${project.id}`)}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/95" />

        {/* Gold Line on Hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-white text-2xl lg:text-3xl font-bold leading-tight">
            {project.title}
          </h3>

          <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 group-hover:mt-3 group-hover:mb-3">
            <p className="text-gray-200 text-sm lg:text-base leading-relaxed line-clamp-3">
              {project.philosophy}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm text-gray-300 mt-3">
            <div className="flex items-start gap-2">
              <User className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <span className="line-clamp-2">{project.client}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <span className="line-clamp-2">{project.location}</span>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        {/* Gold Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))]/0 via-[hsl(var(--gold))]/5 to-[hsl(var(--gold))]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
    </Card>
  );
};

export default CategoryProjectsPage;
