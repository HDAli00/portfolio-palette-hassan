
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Element as ScrollElement } from 'react-scroll';

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
        
        <ScrollElement name="projects" className="reveal">
          <ProjectsSection />
        </ScrollElement>
        
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
