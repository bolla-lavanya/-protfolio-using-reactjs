import React from "react";
import { HeroButton } from "@/components/ui/hero-button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-lg text-primary-foreground shadow-glow-primary">
              LB
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#certifications"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Resume Button */}
          <HeroButton variant="outline" size="sm" asChild>
            <a href="/Bolla_Lavanya_final_resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </HeroButton>
        </nav>
      </div>
    </header>
  );
};

export default Header;