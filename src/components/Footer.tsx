
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-secondary py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-portfolio-text text-center md:text-left">
              © {new Date().getFullYear()} Hassan Ali. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/HDAli00"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-muted hover:text-portfolio-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hd-ali/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-muted hover:text-portfolio-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@hassanali.dev"
              className="text-portfolio-muted hover:text-portfolio-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
