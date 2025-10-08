import React from "react";
import { Code, Database, Globe, GitBranch, Server, Palette } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8" />,
      skills: ["Python", "Django", "REST APIs", "SQL"]
    },
    {
      title: "Frontend Development", 
      icon: <Globe className="h-8 w-8" />,
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8" />,
      skills: ["MySQL"]
    },
    {
      title: "Programming",
      icon: <Code className="h-8 w-8" />,
      skills: ["Python", "JavaScript", "SQL", "Object-Oriented Programming", "Data Structures"]
    },
   
    
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card-gradient/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card-gradient border border-border/20 hover:border-primary/30 hover:shadow-glow-primary transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-glow transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-12">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: "Python & Django", level: 80 },
              { skill: "Frontend Development", level: 85 },
              { skill: "Database Design", level: 80 },
              { skill: "API Development", level: 70 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;