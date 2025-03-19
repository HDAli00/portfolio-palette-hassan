
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import { Link } from 'react-router-dom';

const About = () => {
  // List of certificates - this would ideally come from a backend or API
  const certificates = [
    {
      src: "/certificates/dp600.webp",
      alt: "DP-600 Certification",
      title: "Microsoft DP-600",
      description: "Microsoft Certified: Azure Data Engineer Associate"
    },
    {
      src: "/certificates/dp100.png",
      alt: "DP-100 Certification",
      title: "Microsoft DP-100",
      description: "Microsoft Certified: Azure Data Scientist Associate"
    },
    {
      src: "/certificates/AZ900.png",
      alt: "AZ-900 Certification",
      title: "Microsoft AZ-900",
      description: "Microsoft Certified: Azure Fundamentals"
    },
    {
      src: "/certificates/databricks.png",
      alt: "Databricks Certification",
      title: "Databricks",
      description: "Certified Databricks Data Engineer Associate"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-primary text-portfolio-text">
      <Navbar />
      
      <main className="pt-28 pb-20 bg-portfolio-primary">
        <div className="container mx-auto px-4 md:px-8 mb-16">
          <h1 className="text-4xl font-bold mb-12 text-center text-portfolio-text">About Me</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-portfolio-secondary/60 p-8 rounded-lg shadow-sm mb-24">
              <AboutSection />
            </div>
            
            {/* Certifications Section */}
            <div className="bg-portfolio-secondary/60 p-8 rounded-lg shadow-sm mb-24">
              <h2 className="text-2xl font-bold mb-8 text-portfolio-text">Certifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certificates.map((cert, index) => (
                  <div key={index} className="bg-portfolio-secondary p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                      src={cert.src} 
                      alt={cert.alt} 
                      className="w-full h-auto rounded border border-portfolio-secondary/50"
                    />
                    <h3 className="text-lg font-medium mt-4 mb-2 text-portfolio-text">{cert.title}</h3>
                    <p className="text-sm text-portfolio-muted">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-portfolio-secondary/60 p-8 rounded-lg shadow-sm mb-24">
              <ExperienceSection />
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/blogs" className="inline-flex items-center text-portfolio-accent hover:text-portfolio-accent/80 font-medium">
                Check out my technical blogs <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
