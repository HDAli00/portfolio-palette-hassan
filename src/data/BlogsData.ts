
export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  content: string;
  date: string; // Add date field
}

export const blogs: Blog[] = [
  {
    id: "data-pipeline-framework",
    title: "Data Pipeline Framework",
    description: "A scalable ETL framework built with Python, Airflow, and AWS services to process terabytes of data from multiple sources into a centralized data warehouse.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    technologies: ["Python", "Airflow", "AWS", "Snowflake", "dbt"],
    github: "https://github.com/HDAli00/data-pipeline-framework",
    content: "As a Data Engineer, I architected and implemented an ETL framework using Python, Airflow, and AWS services. The system processes terabytes of data from multiple sources into a centralized Snowflake data warehouse. This solution improved data processing times by 65% and reduced infrastructure costs by 40%.",
    date: "April 12, 2023"
  },
  {
    id: "real-time-analytics-platform",
    title: "Real-time Analytics Platform",
    description: "A streaming data processing system using Kafka and Spark Streaming to provide real-time insights and anomaly detection for IoT device data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["Kafka", "Spark", "Python", "Elasticsearch", "Kibana"],
    github: "https://github.com/HDAli00/realtime-analytics",
    content: "I designed and built a real-time analytics platform that processes streaming data from IoT devices. Using Kafka for message queuing and Spark Streaming for data processing, the platform provides real-time insights and anomaly detection. The solution visualizes results through Kibana dashboards, enabling immediate operational responses to critical events.",
    date: "July 3, 2023"
  },
  {
    id: "data-quality-monitoring",
    title: "Data Quality Monitoring",
    description: "An automated system to monitor data quality metrics, detect anomalies, and alert stakeholders about potential data issues before they impact business decisions.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    technologies: ["Python", "Pandas", "Great Expectations", "Docker", "Grafana"],
    github: "https://github.com/HDAli00/data-quality-monitoring",
    content: "I developed an automated data quality monitoring system that tracks key metrics, detects anomalies, and alerts stakeholders about potential issues before they impact business decisions. The solution uses Great Expectations for data validation, Docker for containerization, and Grafana for visualization. This proactive approach to data quality has prevented several critical data issues from affecting downstream consumers.",
    date: "September 19, 2023"
  },
  {
    id: "customer-data-platform",
    title: "Customer Data Platform",
    description: "A comprehensive solution to collect, process, and analyze customer data from various touchpoints, creating unified customer profiles for marketing and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["Python", "AWS", "Redshift", "PostgreSQL", "Tableau"],
    github: "https://github.com/HDAli00/customer-data-platform",
    content: "I led the development of a customer data platform that consolidates data from various touchpoints to create unified customer profiles. The solution collects, processes, and analyzes customer data using AWS services and Redshift for data warehousing. The platform enables marketing teams to create targeted campaigns and provides analytics teams with comprehensive customer insights through Tableau visualizations.",
    date: "November 28, 2023"
  }
];

export const getAllTechnologies = (): string[] => {
  return [...new Set(blogs.flatMap(blog => blog.technologies))];
};
