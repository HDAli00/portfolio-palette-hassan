
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Resume', id: 'resume', isExternal: true, href: '/resume.pdf' },
  { name: 'Contact', id: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section
      const sections = navItems
        .filter(item => !item.isExternal)
        .map(item => item.id);
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderNavItem = (item) => {
    if (item.isExternal) {
      return (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-medium text-portfolio-text hover:text-portfolio-accent cursor-pointer transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {item.name === 'Resume' && <FileText size={16} />}
          {item.name}
        </a>
      );
    }

    return (
      <ScrollLink
        key={item.id}
        to={item.id}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className={cn(
          "nav-link text-sm font-medium hover:text-portfolio-accent cursor-pointer transition-colors",
          activeSection === item.id ? "text-portfolio-accent" : "text-portfolio-text"
        )}
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </ScrollLink>
    );
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-portfolio-primary bg-opacity-90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-portfolio-text">
          Hassan<span className="text-portfolio-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map(renderNavItem)}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-text hover:text-portfolio-accent" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-portfolio-secondary p-4 shadow-md transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <div key={item.id}>
              {item.isExternal ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-4 rounded-md transition-colors text-portfolio-text hover:bg-portfolio-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name === 'Resume' && <FileText size={16} />}
                  {item.name}
                </a>
              ) : (
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={cn(
                    "py-2 px-4 rounded-md transition-colors",
                    activeSection === item.id 
                      ? "bg-portfolio-accent text-white" 
                      : "text-portfolio-text hover:bg-portfolio-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
