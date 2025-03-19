import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blogs' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/#contact' },
  { name: 'Resume', path: '/resume.pdf', isExternal: true }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    return location.pathname.startsWith(path);
  };

  const renderNavItem = (item) => {
    if (item.isExternal) {
      return (
        <a
          key={item.path}
          href={item.path}
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

    if (item.path.startsWith('/#')) {
      return (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            "nav-link text-sm font-medium hover:text-portfolio-accent cursor-pointer transition-colors",
            isActive(item.path) ? "text-portfolio-accent" : "text-portfolio-text"
          )}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        className={cn(
          "nav-link text-sm font-medium hover:text-portfolio-accent cursor-pointer transition-colors",
          isActive(item.path) ? "text-portfolio-accent" : "text-portfolio-text"
        )}
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </Link>
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
        <Link to="/" className="text-xl font-bold text-portfolio-text">
          Hassan<span className="text-portfolio-accent">.</span>
        </Link>

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
            <div key={item.path}>
              {item.isExternal ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-4 rounded-md transition-colors text-portfolio-text hover:bg-portfolio-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name === 'Resume' && <FileText size={16} />}
                  {item.name}
                </a>
              ) : item.path.startsWith('/#') ? (
                <Link
                  to={item.path}
                  className={cn(
                    "py-2 px-4 rounded-md transition-colors",
                    isActive(item.path) 
                      ? "bg-portfolio-accent text-white" 
                      : "text-portfolio-text hover:bg-portfolio-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "py-2 px-4 rounded-md transition-colors",
                    isActive(item.path) 
                      ? "bg-portfolio-accent text-white" 
                      : "text-portfolio-text hover:bg-portfolio-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
