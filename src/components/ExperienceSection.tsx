
import React from 'react';
import { Link2, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: "Lead Data Engineer",
    company: "Chapsea Group",
    period: "June 2023 - Present",
    location: "London, UK",
    description: [
      "Building a multi-million-dollar data infrastructure from scratch, implementing data pipelines and ETL processes",
      "Designing and developing a data warehouse using Snowflake and integrating with various data sources",
      "Leading a team of data engineers and setting technical direction for data initiatives",
      "Implementing data quality frameworks and governance policies"
    ],
    link: "https://www.chapsea.com"
  },
  {
    title: "Senior Data Engineer",
    company: "Lendi Group",
    period: "September 2021 - June 2023",
    location: "Sydney, Australia",
    description: [
      "Developed and maintained ETL pipelines using Python, Spark, and Airflow",
      "Built real-time data processing systems with Kafka and AWS services",
      "Implemented data models in Snowflake for business intelligence and analytics",
      "Collaborated with data scientists to create machine learning pipelines"
    ],
    link: "https://www.lendi.com.au"
  },
  {
    title: "Data Engineer",
    company: "Domain Group",
    period: "February 2020 - August 2021",
    location: "Sydney, Australia",
    description: [
      "Designed and implemented data ingestion pipelines from various sources",
      "Created ETL workflows using Python, SQL, and AWS services",
      "Developed data models for analytics and reporting purposes",
      "Optimized database performance and query efficiency"
    ],
    link: "https://www.domain.com.au"
  },
  {
    title: "Data Analyst",
    company: "Quantium",
    period: "January 2018 - January 2020",
    location: "Sydney, Australia",
    description: [
      "Performed data analysis and created visualization dashboards using Tableau",
      "Developed SQL queries for data extraction and analysis",
      "Collaborated with business stakeholders to understand requirements and deliver insights",
      "Provided data-driven recommendations to improve business processes"
    ],
    link: "https://www.quantium.com"
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
