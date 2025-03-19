
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { blogs, getAllTechnologies } from '@/data/BlogsData';

// Get all unique technologies for filtering
const allTechnologies = getAllTechnologies();

const Blogs = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredBlogs = filter 
    ? blogs.filter(blog => blog.technologies.includes(filter))
    : blogs;

  return (
    <div className="min-h-screen bg-portfolio-primary">
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-20">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Blogs</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-4xl font-bold mb-8 text-portfolio-text">Technical Blogs</h1>
        
        <div className="mb-10 flex flex-wrap gap-2">
          <button 
            className={`px-3 py-1 text-sm rounded-full ${!filter ? 'bg-portfolio-accent text-white' : 'bg-portfolio-secondary text-portfolio-muted hover:bg-portfolio-primary'}`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {allTechnologies.map((tech, index) => (
            <button 
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${filter === tech ? 'bg-portfolio-accent text-white' : 'bg-portfolio-secondary text-portfolio-muted hover:bg-portfolio-primary'}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.map((blog, index) => (
            <div key={index} className="bg-portfolio-secondary rounded-lg p-6 shadow-lg hover:shadow-xl transition-all group">
              <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-portfolio-text">{blog.title}</h3>
              
              <p className="text-portfolio-muted mb-4">{blog.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-portfolio-primary px-2 py-1 rounded text-xs text-portfolio-muted">
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
                    Read More <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
