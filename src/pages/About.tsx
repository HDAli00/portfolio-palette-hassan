
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-portfolio-primary text-portfolio-text">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8 mb-16">
          <h1 className="text-4xl font-bold mb-8 text-center text-portfolio-text">About Me</h1>
          
          <div className="max-w-4xl mx-auto">
            <AboutSection />
            
            {/* Certifications Section */}
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8 text-portfolio-text">Certifications</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-portfolio-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="/certificates/dp600.webp" 
                    alt="DP-600 Certification" 
                    className="w-full h-auto rounded"
                  />
                  <h3 className="text-lg font-medium mt-4 mb-2 text-portfolio-text">Microsoft DP-600</h3>
                  <p className="text-sm text-portfolio-muted">
                    Microsoft Certified: Azure Data Engineer Associate
                  </p>
                </div>
                
                {/* More certification cards can be added here */}
              </div>
            </div>
            
            <div className="mt-20">
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
