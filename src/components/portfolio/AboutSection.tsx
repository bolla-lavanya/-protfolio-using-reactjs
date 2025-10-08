import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get to know more about my journey and passion
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-primary p-1 shadow-glow-primary">
                <div className="w-full h-full rounded-2xl bg-card-gradient flex items-center justify-center">
                  <img
                    src="/lavanya_passize.jpeg"
                    alt="Lavanya Bolla"
                    className="w-72 h-72 rounded-xl object-cover"
                  />
                </div>
              </div>
              <div className="absolute -z-10 top-8 left-8 w-80 h-80 rounded-2xl bg-gradient-secondary opacity-30 blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/90 leading-relaxed">
                I'm a passionate Python Full Stack Developer with a strong
                foundation in building scalable web applications. My journey in
                software development has been driven by curiosity and the desire
                to create solutions that make a real impact.
              </p>

              <p className="text-foreground/90 leading-relaxed">
                With hands-on experience in Django, Python, and modern web
                technologies, I specialize in developing intelligent and
                user-friendly applications. I believe in writing clean,
                maintainable code and following best practices to deliver robust
                solutions.
              </p>

              <p className="text-foreground/90 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies,
                contributing to open-source projects, and staying up-to-date
                with the latest trends in web development.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 rounded-xl bg-card-gradient border border-border/20">
                <div className="text-2xl font-bold text-primary">6 months</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card-gradient border border-border/20">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
