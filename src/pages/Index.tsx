
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Element as ScrollElement } from 'react-scroll';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Add scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-primary text-portfolio-text">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <ScrollElement name="about" className="reveal">
          <AboutSection />
        </ScrollElement>
        
        <ScrollElement name="experience" className="reveal">
          <ExperienceSection />
        </ScrollElement>
        
        {/* Projects section replaced with a link to the Blogs page */}
        <section id="projects" className="py-20 bg-portfolio-secondary/30 reveal">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="section-heading mb-8">Projects</h2>
            <p className="text-portfolio-muted max-w-2xl mx-auto mb-8">
              Check out my latest projects and technical blogs where I share my experiences
              and insights from building data engineering solutions.
            </p>
            <Link to="/blogs">
              <Button className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white">
                View All Projects <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        
        <ScrollElement name="contact" className="reveal">
          <ContactSection />
        </ScrollElement>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
