import React, { useState } from "react";
import { HeroButton } from "@/components/ui/hero-button";
import { Mail, Linkedin, Github, Send, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities, interesting projects, 
                and meaningful collaborations. Whether you have a question or just 
                want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="mailto:lavanya.bolla@email.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card-gradient border border-border/20 hover:border-primary/30 hover:shadow-glow-primary transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">bollalavanya24@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/bolla-lavanya-349850232/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card-gradient border border-border/20 hover:border-secondary/30 hover:shadow-glow-secondary transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-secondary text-secondary-foreground shadow-glow-secondary group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">Connect with me professionally</div>
                </div>
              </a>

              <a
                href="https://github.com/bolla-lavanya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card-gradient border border-border/20 hover:border-accent/30 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-accent text-accent-foreground shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">GitHub</div>
                  <div className="text-sm text-muted-foreground">View my code and projects</div>
                </div>
              </a>
            </div>

            {/* Additional Info */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Available for remote work worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>Response time: Usually within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card-gradient border border-border/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-border/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <HeroButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full group"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </HeroButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;