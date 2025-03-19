
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-primary text-portfolio-text">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Brief About Section with CTA */}
        <section className="py-20 bg-portfolio-secondary/30">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-portfolio-text">About Me</h2>
            <p className="text-lg text-portfolio-muted mb-8 leading-relaxed">
              I'm a Data Engineer with expertise in designing and implementing data pipelines, ETL processes, 
              and data warehousing solutions. My passion lies in transforming complex data challenges into 
              efficient, scalable solutions that drive business value.
            </p>
            <Link to="/about">
              <Button className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white">
                Learn More About Me <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Blog Preview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-portfolio-text">Latest Blogs</h2>
            <p className="text-lg text-portfolio-muted mb-8 leading-relaxed max-w-2xl mx-auto">
              Check out my latest projects and technical blogs where I share my experiences
              and insights from building data engineering solutions.
            </p>
            <Link to="/blogs">
              <Button className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white">
                View All Blogs <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
