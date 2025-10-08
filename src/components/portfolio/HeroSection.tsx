import React from "react";
import { HeroButton } from "@/components/ui/hero-button";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="space-y-8">
          {/* Main heading with gradient effect */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Lavanya Bolla</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-medium text-foreground/90">
              Python Full Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate Python full-stack developer with hands-on experience in building scalable, 
            intelligent, and user-friendly web applications using Django and Python.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <HeroButton variant="primary" size="lg" asChild>
              <a href="/Bolla_Lavanya_final_resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </HeroButton>
            <HeroButton variant="outline" size="lg" asChild>
              <a href="#contact">
                Contact Me
              </a>
            </HeroButton>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://linkedin.com/in/lavanya-bolla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card-gradient border border-border/20 text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-glow-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/lavanya-bolla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card-gradient border border-border/20 text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-glow-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:lavanya.bolla@email.com"
              className="p-3 rounded-full bg-card-gradient border border-border/20 text-muted-foreground hover:text-secondary hover:border-secondary/30 hover:shadow-glow-secondary transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 blur-xl float"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-secondary rounded-full opacity-20 blur-xl float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;