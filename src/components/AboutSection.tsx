
import React from 'react';
import { Database, Server, BarChart, Layers } from 'lucide-react';

const technologies = [
  { category: "Data Engineering", skills: ["Python", "SQL", "PySpark", "Airflow", "ETL/ELT"] },
  { category: "Cloud & Big Data", skills: ["Azure", "Databricks", "Azure Data Factory", "Azure Synapse", "Azure DevOps"] },
  { category: "Databases", skills: ["PostgreSQL", "MySQL", "DynamoDB", "SQL Server"] },
  { category: "Others", skills: ["Docker", "CI/CD", "Git", "Terraform"] },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-10 bg-portfolio-secondary/30 rounded-lg mb-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading mb-10">About Me</h2>
        
        <div className="grid grid-cols-1 gap-12">
          <div>
            <p className="text-portfolio-text leading-relaxed mb-6">
              I'm a Data Engineer with expertise in designing and implementing data pipelines, ETL processes, 
              and data warehousing solutions. My passion lies in transforming complex data challenges into 
              efficient, scalable solutions that drive business value.
            </p>
            <p className="text-portfolio-text leading-relaxed mb-6">
              With a strong foundation in both software engineering and data technologies, I bridge the gap 
              between raw data and actionable insights. I've worked across various industries including finance, 
              healthcare, and e-commerce, building data infrastructure that enables advanced analytics and 
              machine learning applications.
            </p>
            <p className="text-portfolio-text leading-relaxed">
              When I'm not working with data, I enjoy keeping up with the latest advancements in big data 
              technologies, writing blogs on interesting topics and mentoring aspiring data engineers.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-8 text-portfolio-text">Technologies I Work With</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-portfolio-secondary p-5 rounded-lg hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-medium mb-4 text-portfolio-accent">{tech.category}</h4>
                  <ul className="space-y-2">
                    {tech.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-portfolio-muted flex items-center">
                        <span className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
