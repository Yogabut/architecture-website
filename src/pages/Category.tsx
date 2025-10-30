import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import architectureData from '@/lib/project';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CategoryPage = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  const layoutPattern = [
    { span: 'md:col-span-2 md:row-span-2', height: 'h-[650px]' },
    { span: 'md:col-span-1', height: 'h-[315px]' },
    { span: 'md:col-span-1', height: 'h-[315px]' },
    { span: 'md:col-span-1', height: 'h-[450px]' },
    { span: 'md:col-span-2 md:row-span-1', height: 'h-[450px]' },
    { span: 'md:col-span-1', height: 'h-[450px]' },
    { span: 'md:col-span-2 md:row-span-1', height: 'h-[380px]' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Elegant Header */}
      <header
        className="border-b border-border/40 bg-gradient-to-b from-white to-secondary/30"
        data-aos="fade-up"
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1" data-aos="fade-right">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
                Project 
                <br />
                <span className="bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--bronze))] to-[hsl(var(--gold-dark))] bg-clip-text text-transparent">
                  Categories
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Explore our diverse portfolio spanning seven specialized architectural disciplines, 
                each meticulously crafted to redefine spaces.
              </p>
            </div>

            {/* Right Stats */}
            <div
              className="grid grid-cols-3 divide-x divide-border"
              data-aos="fade-left"
            >
              {[
                { label: 'Categories', value: architectureData.categories.length },
                { label: 'Projects', value: architectureData.categories.reduce((acc, cat) => acc + cat.projects.length, 0) },
                { label: 'Years', value: '2' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left px-4">
                  <div className="text-4xl lg:text-5xl font-bold mb-1 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Masonry Grid */}
      <main className="max-w-[1800px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-auto">
          {architectureData.categories.map((category, index) => {
            const layout = layoutPattern[index % layoutPattern.length];
            const isHovered = hoveredCard === category.id;

            return (
              <article
                key={category.id}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                className={`${layout.span} ${layout.height} group relative overflow-hidden rounded-2xl bg-card cursor-pointer transition-all duration-500 hover:-translate-y-1`}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(`/categories/${category.id}`)}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isHovered
                        ? 'bg-gradient-to-t from-background via-background/5 to-background/2'
                        : 'bg-gradient-to-t from-background via-background/5 to-background/2'
                    }`}
                  />
                </div>

                {/* Gold Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Content */}
                <div className="relative h-full p-3 pl-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 ${
                        isHovered
                          ? 'bg-[hsl(var(--gold))]/20 border-[hsl(var(--gold))]/40'
                          : 'bg-white/80 border-border/60'
                      }`}
                    >
                      <Sparkles
                        className={`w-3.5 h-3.5 transition-colors ${
                          isHovered
                            ? 'text-[hsl(var(--gold))]'
                            : 'text-muted-foreground'
                        }`}
                      />
                      <span className="text-xs font-semibold text-foreground">
                        {category.projects.length} Projects
                      </span>
                    </div>

                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-500 ${
                        isHovered
                          ? 'bg-[hsl(var(--gold))] border-[hsl(var(--gold))] rotate-45 scale-110'
                          : 'bg-white/80 border-border/60 rotate-0 scale-100'
                      }`}
                    >
                      <ArrowUpRight
                        className={`w-5 h-5 transition-colors ${
                          isHovered ? 'text-white' : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2
                      className={`text-4xl lg:text-5xl font-bold text-foreground tracking-tight transition-all duration-300 ${
                        isHovered ? 'translate-x-2' : 'translate-x-0'
                      }`}
                    >
                      {category.name}
                    </h2>

                    <p
                      className={`text-sm lg:text-base text-gray-600 leading-relaxed transition-all duration-500 ${
                        layout.span.includes('row-span-2')
                          ? 'line-clamp-4'
                          : 'line-clamp-2'
                      } ${
                        isHovered
                          ? 'translate-x-2 opacity-100'
                          : 'translate-x-0 opacity-80'
                      }`}
                    >
                      {category.description}
                    </p>

                    <div
                      className={`flex items-center gap-2 text-sm font-semibold transition-all duration-500 ${
                        isHovered
                          ? 'translate-x-2 opacity-100 text-[hsl(var(--gold))]'
                          : 'translate-x-0 opacity-0 text-foreground'
                      }`}
                    >
                      <span>View Projects</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))]/0 via-[hsl(var(--gold))]/5 to-[hsl(var(--gold))]/0 transition-opacity duration-700 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;