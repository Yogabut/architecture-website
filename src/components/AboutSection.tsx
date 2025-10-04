const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-gold/10 rounded-full">
                <span className="text-sm font-medium text-gold">About Us</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-light text-foreground mb-6 leading-tight">
                Our
                <br />
                <span className="text-gold font-normal">Philosophy</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-gold"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              For over two decades, we have been crafting architectural experiences that transcend 
              conventional boundaries. Our philosophy centers on the belief that great architecture 
              should not only be visually stunning but also deeply functional and sustainable.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We approach every project with meticulous attention to detail, innovative design thinking, 
              and a deep understanding of how spaces influence human experience. From residential 
              masterpieces to commercial landmarks, we create environments that inspire and endure.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="bg-card p-6 rounded-xl border border-border shadow-card">
                <h3 className="text-4xl font-heading text-gold mb-2 font-semibold">500+</h3>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border shadow-card">
                <h3 className="text-4xl font-heading text-gold mb-2 font-semibold">20+</h3>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-gold/5 to-gold/10 rounded-3xl shadow-elegant relative overflow-hidden border border-gold/20 p-12 flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
              <div>
                <h3 className="text-3xl font-heading text-foreground mb-6 font-light">Our Unique Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-gold rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                    <span className="text-muted-foreground text-lg">Sustainable Design Solutions</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-gold rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                    <span className="text-muted-foreground text-lg">Client-Centric Collaboration</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-gold rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                    <span className="text-muted-foreground text-lg">Innovation Meets Tradition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;