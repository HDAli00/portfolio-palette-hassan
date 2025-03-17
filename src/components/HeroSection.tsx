
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-20">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            Hi, I'm <span className="text-portfolio-accent">Hassan Ali</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-portfolio-muted mb-6">
            Data Engineer
          </h2>
          <p className="text-lg text-portfolio-muted mb-8 leading-relaxed">
            I'm a Data Engineer with a passion for transforming raw data into valuable insights.
            Specializing in building scalable data pipelines, ETL processes, and data warehousing solutions
            to help organizations make data-driven decisions.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="https://github.com/HDAli00" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-portfolio-secondary hover:bg-portfolio-secondary/80 text-portfolio-text px-4 py-2 rounded-md transition-colors"
            >
              <Github size={20} /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/hd-ali/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-portfolio-secondary hover:bg-portfolio-secondary/80 text-portfolio-text px-4 py-2 rounded-md transition-colors"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a 
              href="mailto:contact@hassanali.dev"
              className="flex items-center gap-2 bg-portfolio-secondary hover:bg-portfolio-secondary/80 text-portfolio-text px-4 py-2 rounded-md transition-colors"
            >
              <Mail size={20} /> Contact
            </a>
          </div>
          
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="inline-flex items-center text-portfolio-accent hover:text-portfolio-accent/80 cursor-pointer transition-colors font-medium"
          >
            Learn more about me <ArrowRight size={16} className="ml-2" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
