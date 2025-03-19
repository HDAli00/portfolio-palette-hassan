
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-portfolio-primary">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-screen -mt-20">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-portfolio-text">404</h1>
          <p className="text-xl text-portfolio-muted mb-8">Oops! Page not found</p>
          <Link to="/" className="text-portfolio-accent hover:text-portfolio-accent/80 underline">
            Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
