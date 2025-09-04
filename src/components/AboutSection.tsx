const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-heading font-light text-foreground mb-6">
                About Our
                <br />
                <span className="text-gold">Philosophy</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-gold rounded-full"></div>
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
              <div>
                <h3 className="text-3xl font-heading text-gold mb-2">500+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-heading text-gold mb-2">20+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-dark rounded-2xl shadow-elegant relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-heading text-white-soft mb-4">Our Unique Approach</h3>
                <ul className="space-y-3 text-gray-light">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    Sustainable Design Solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    Client-Centric Collaboration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    Innovation Meets Tradition
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