import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, Instagram } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg md:text-xl text-muted-foreground mb-4">Hello.</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            I'm <span className="text-primary">Tatineni Karthik Sai</span>
          </h1>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            VLSI, Embedded & IoT
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A passionate ECE engineer with a knack for VLSI, Embedded Systems, automation, IOT.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToProjects} className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View My Work
              <ArrowDown className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://www.instagram.com/_karthik._.14/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:karthiktatineni34@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/karthiktatineni" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/karthik-tatineni/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};
