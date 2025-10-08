import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/20 bg-card-gradient/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and name */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground shadow-glow-primary">
              LB
            </div>
            <div>
              <div className="font-semibold text-foreground">Lavanya Bolla</div>
              <div className="text-sm text-muted-foreground">Python Full Stack Developer</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/bolla-lavanya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/lavanya-bolla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:lavanya.bolla@email.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {currentYear} Lavanya Bolla. 
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a
                href="/Bolla_Lavanya_final_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                Resume
              </a>
              <a
                href="#about"
                className="hover:text-primary transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-primary transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;