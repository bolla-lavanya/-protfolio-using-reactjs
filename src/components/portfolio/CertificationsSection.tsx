import React from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Python Programming Certification",
      issuer: "Hacker Rank",
      date: "2022",
      description: "Comprehensive certification covering Python fundamentals, OOP, and advanced programming concepts.",
      credentialUrl: "/python_basic%20certificate%20(4).pdf",
      badgeColor: "bg-gradient-primary"
    },
    {
      title: "Java Script",
      issuer: "Hacer Rank",
      date: "2022",
      description: "Certification in JavaScript covering fundamentals, DOM manipulation, ES6+ features, and building interactive web applications.",
      credentialUrl: "/javascript_basic%20certificate%20(1).pdf",
      badgeColor: "bg-gradient-secondary"
    },
    {
      title: "SQL Database Management",
      issuer: "Hacker Rank",
      date: "2025",
      description: "Professional certification in SQL query optimization, database design, and data management.",
      credentialUrl: "/sql_intermediate%20certificate.pdf",
      badgeColor: "bg-gradient-accent"
    },
    {
      title: "CSS Certification",
      issuer: "Hacker Rank",
      date: "2022",
      description: "Modern JavaScript certification covering ES6+ features, DOM manipulation, and async programming.",
      credentialUrl:"/css%20certificate.pdf",
      badgeColor: "bg-gradient-primary"
    },
    {
      title: "Microsoft Technology Associate",
      issuer: "Microsoft Corporation",
      date: "2022",
      description: "Fundamental programming concepts and software development best practices certification.",
      credentialUrl: "/Cert53152745212.pdf",
      badgeColor: "bg-gradient-secondary"
    },
    {
      title: "AWS Academy For Cloud Foundations",
      issuer: "AWS",
      date: "2022",
      description: "AWS Cloud Foundations certification covering core cloud concepts, AWS services, security, architecture, pricing, and support models.",
      credentialUrl: "/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20221208-30-59ubdf.pdf",

      badgeColor: "bg-gradient-accent"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-card-gradient/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications and continuous learning milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card-gradient border border-border/20 p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-glow-primary hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${cert.badgeColor} shadow-glow-primary group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {cert.date}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-glow transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-sm font-medium text-primary/80">
                  {cert.issuer}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Action */}
              <div className="mt-6">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors duration-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Credential
                </a>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "6+", label: "Certifications" },
            { number: "100%", label: "Completion Rate" },
            { number: "2+", label: "Years Learning" },
            { number: "95%", label: "Average Score" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card-gradient border border-border/20 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;