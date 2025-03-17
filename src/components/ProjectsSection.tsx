
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Link2 } from 'lucide-react';

const projects = [
  {
    title: "Data Pipeline Framework",
    description: "A scalable ETL framework built with Python, Airflow, and AWS services to process terabytes of data from multiple sources into a centralized data warehouse.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    technologies: ["Python", "Airflow", "AWS", "Snowflake", "dbt"],
    github: "https://github.com/HDAli00/data-pipeline-framework"
  },
  {
    title: "Real-time Analytics Platform",
    description: "A streaming data processing system using Kafka and Spark Streaming to provide real-time insights and anomaly detection for IoT device data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["Kafka", "Spark", "Python", "Elasticsearch", "Kibana"],
    github: "https://github.com/HDAli00/realtime-analytics"
  },
  {
    title: "Data Quality Monitoring",
    description: "An automated system to monitor data quality metrics, detect anomalies, and alert stakeholders about potential data issues before they impact business decisions.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    technologies: ["Python", "Pandas", "Great Expectations", "Docker", "Grafana"],
    github: "https://github.com/HDAli00/data-quality-monitoring"
  },
  {
    title: "Customer Data Platform",
    description: "A comprehensive solution to collect, process, and analyze customer data from various touchpoints, creating unified customer profiles for marketing and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["Python", "AWS", "Redshift", "PostgreSQL", "Tableau"],
    github: "https://github.com/HDAli00/customer-data-platform"
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
