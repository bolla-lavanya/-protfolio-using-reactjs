import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/lavanya-bolla/portfolio",
      liveUrl: "https://lavanya-portfolio.com"
    },
    {
      title: "E-commerce App",
      description: "An online store built with Django and React for full-stack experience.",
      technologies: ["Django", "React", "REST API", "MySQL"],
      githubUrl: "https://github.com/lavanya-bolla/ecommerce",
      liveUrl: ""
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with authentication and comments.",
      technologies: ["Python", "Django", "Bootstrap", "SQL"],
      githubUrl: "https://github.com/lavanya-bolla/blog-platform",
      liveUrl: ""
    }
  ];

  // ProjectCard defined inside this file
  const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl }) => {
    return (
      <div className="group p-6 rounded-2xl bg-card-gradient border border-border/20 hover:border-primary/30 hover:shadow-glow-primary transition-all duration-500 hover:-translate-y-2">
        <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary-glow transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-6 bg-card-gradient/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Some of the projects I have worked on
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
