
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { blogs, getAllTechnologies } from '@/data/BlogsData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Get all unique technologies for filtering
const allTechnologies = getAllTechnologies();

const Blogs = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredBlogs = filter 
    ? blogs.filter(blog => blog.technologies.includes(filter))
    : blogs;

  return (
    <div className="min-h-screen bg-portfolio-primary">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-8 pt-32 pb-24">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Blog</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-4xl font-bold mb-12 text-portfolio-text text-center">Technical Blog</h1>
        
        <div className="mb-14 flex flex-wrap gap-3 justify-center">
          <button 
            className={`px-4 py-2 text-sm rounded-full transition-colors ${!filter ? 'bg-portfolio-accent text-white' : 'bg-portfolio-secondary text-portfolio-muted hover:bg-portfolio-primary'}`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {allTechnologies.map((tech, index) => (
            <button 
              key={index}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${filter === tech ? 'bg-portfolio-accent text-white' : 'bg-portfolio-secondary text-portfolio-muted hover:bg-portfolio-primary'}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredBlogs.map((blog, index) => (
            <div key={index} className="bg-portfolio-secondary rounded-lg p-8 shadow-lg hover:shadow-xl transition-all group">
              <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="flex items-center mb-4 text-portfolio-muted text-sm">
                <Calendar size={14} className="mr-2" />
                <span>{blog.date}</span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-portfolio-text">{blog.title}</h3>
              
              <p className="text-portfolio-muted mb-6">{blog.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-portfolio-primary px-3 py-1 rounded text-xs text-portfolio-muted">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  {blog.github && (
                    <a 
                      href={blog.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-portfolio-muted hover:text-portfolio-accent transition-colors"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  )}
                </div>
                
                <Link to={`/blogs/${blog.id}`}>
                  <Button variant="ghost" className="text-portfolio-accent hover:text-portfolio-accent hover:bg-portfolio-primary/40">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blogs;
