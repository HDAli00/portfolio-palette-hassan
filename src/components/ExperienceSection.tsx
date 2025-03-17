
import React from 'react';
import { Link2, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Zego",
    period: "January 2022 - Present",
    location: "London, UK",
    description: [
      "Lead full-stack development for core insurance products using React, TypeScript, and Node.js",
      "Built and maintained microservices architecture with Kubernetes and Docker",
      "Improved system performance resulting in 40% faster page load times",
      "Mentored junior developers and conducted code reviews to ensure code quality"
    ],
    link: "https://www.zego.com"
  },
  {
    title: "Full Stack Developer",
    company: "Onfido",
    period: "March 2019 - December 2021",
    location: "London, UK",
    description: [
      "Developed front-end components for identity verification platform using Angular and Vue.js",
      "Created RESTful APIs with Node.js, Express and MongoDB",
      "Implemented automated testing strategies using Jest and Cypress",
      "Collaborated with designers to enhance user experience across web platforms"
    ],
    link: "https://www.onfido.com"
  },
  {
    title: "Software Developer",
    company: "Revolut",
    period: "June 2017 - February 2019",
    location: "London, UK",
    description: [
      "Built and maintained features for banking application using React Native",
      "Developed backend services with Node.js and PostgreSQL",
      "Contributed to continuous integration/delivery pipeline",
      "Participated in agile development processes and sprint planning"
    ],
    link: "https://www.revolut.com"
  },
  {
    title: "Web Developer",
    company: "Freelance",
    period: "January 2015 - May 2017",
    location: "Remote",
    description: [
      "Designed and developed responsive websites for small businesses",
      "Built custom WordPress themes and plugins",
      "Created e-commerce solutions using WooCommerce and Shopify",
      "Provided ongoing maintenance and support for client websites"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="mt-10">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-2 flex items-center justify-between flex-wrap">
                <h3 className="text-xl font-semibold text-portfolio-text">
                  {exp.title} 
                  <span className="text-portfolio-accent ml-2">@ {exp.company}</span>
                </h3>
                {exp.link && (
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-muted hover:text-portfolio-accent flex items-center text-sm mt-1 sm:mt-0"
                  >
                    <Link2 size={14} className="mr-1" /> {exp.company} <ExternalLink size={12} className="ml-1" />
                  </a>
                )}
              </div>
              
              <div className="text-portfolio-muted mb-4 flex items-center flex-wrap gap-x-4 gap-y-1 text-sm">
                <span>{exp.period}</span>
                {exp.location && (
                  <>
                    <span className="hidden sm:block">•</span>
                    <span>{exp.location}</span>
                  </>
                )}
              </div>
              
              <ul className="list-disc list-outside pl-5 space-y-2 text-portfolio-muted">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-portfolio-text">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
