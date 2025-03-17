
import React from 'react';
import { Database, Server, BarChart, Layers } from 'lucide-react';

const technologies = [
  { category: "Data Engineering", skills: ["Python", "SQL", "PySpark", "Airflow", "Kafka", "Hadoop", "ETL/ELT"] },
  { category: "Cloud & Big Data", skills: ["AWS", "Azure", "Snowflake", "Databricks", "Azure Data Factory", "Google BigQuery"] },
  { category: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "SQL Server"] },
  { category: "Others", skills: ["Docker", "Kubernetes", "CI/CD", "Git", "Jenkins", "Terraform", "Linux/Unix"] },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
              technologies, contributing to open-source projects, and mentoring aspiring data engineers.
            </p>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-portfolio-secondary p-5 rounded-lg">
                <div className="bg-portfolio-primary/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Database size={24} className="text-portfolio-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Engineering</h3>
                <p className="text-portfolio-muted text-sm">
                  Building robust ETL pipelines and data processing systems with Python, Spark, and Airflow.
                </p>
              </div>
              
              <div className="bg-portfolio-secondary p-5 rounded-lg">
                <div className="bg-portfolio-primary/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Server size={24} className="text-portfolio-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cloud & Big Data</h3>
                <p className="text-portfolio-muted text-sm">
                  Implementing scalable data solutions on AWS, Azure, and using technologies like Snowflake and Databricks.
                </p>
              </div>
              
              <div className="bg-portfolio-secondary p-5 rounded-lg">
                <div className="bg-portfolio-primary/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart size={24} className="text-portfolio-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>
                <p className="text-portfolio-muted text-sm">
                  Creating data models and analytics solutions to derive meaningful insights from complex datasets.
                </p>
              </div>
              
              <div className="bg-portfolio-secondary p-5 rounded-lg">
                <div className="bg-portfolio-primary/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Layers size={24} className="text-portfolio-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Architecture</h3>
                <p className="text-portfolio-muted text-sm">
                  Designing scalable and efficient data warehouses and data lakes for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-portfolio-secondary p-5 rounded-lg">
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
    </section>
  );
};

export default AboutSection;
