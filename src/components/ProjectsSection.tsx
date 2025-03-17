
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Link2 } from 'lucide-react';

const projects = [
  {
    title: "FinTech Dashboard",
    description: "A comprehensive financial analytics dashboard built with React and D3.js, featuring real-time data visualization and user portfolio management.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React", "TypeScript", "D3.js", "Firebase", "Material UI"],
    live: "https://fintech-dashboard.example.com",
    github: "https://github.com/hassandiv/fintech-dashboard"
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with product management, cart functionality, and payment processing using Stripe integration.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["Angular", "Node.js", "MongoDB", "Express", "Stripe API"],
    live: "https://shop.example.com",
    github: "https://github.com/hassandiv/ecommerce-platform"
  },
  {
    title: "Health Tracking App",
    description: "A mobile application for tracking health metrics, workout routines, and nutrition data with personalized insights.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    technologies: ["Flutter", "Firebase", "RESTful API", "Google Fit API"],
    live: "https://health-app.example.com",
    github: "https://github.com/hassandiv/health-tracker"
  },
  {
    title: "Content Management System",
    description: "A custom CMS built for digital content creators with advanced editing tools, media management, and SEO optimization.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["Vue.js", "Laravel", "MySQL", "GraphQL", "AWS S3"],
    live: "https://cms.example.com",
    github: "https://github.com/hassandiv/content-cms"
  }
];

// Filter options
const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProjects = filter 
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-20 bg-portfolio-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Projects</h2>
        
        <div className="mb-10 flex flex-wrap gap-2">
          <button 
            className={`px-3 py-1 text-sm rounded-full ${!filter ? 'bg-portfolio-accent text-white' : 'bg-portfolio-secondary text-portfolio-muted hover:bg-portfolio-primary'}`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {allTechnologies.map((tech, index) => (
            <button 
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${filter === tech ? 'bg-portfolio-accent text-white' : 'bg-portfolio-secondary text-portfolio-muted hover:bg-portfolio-primary'}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-portfolio-text">{project.title}</h3>
              
              <p className="text-portfolio-muted mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-portfolio-primary px-2 py-1 rounded text-xs text-portfolio-muted">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-portfolio-muted hover:text-portfolio-accent transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-portfolio-muted hover:text-portfolio-accent transition-colors"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
