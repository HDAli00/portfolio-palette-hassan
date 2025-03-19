
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { blogs, Blog } from '@/data/BlogsData';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  
  useEffect(() => {
    // Find the blog post by ID
    const foundBlog = blogs.find(blog => blog.id === id);
    setBlog(foundBlog || null);
  }, [id]);
  
  if (!blog) {
    return (
      <div className="min-h-screen bg-portfolio-primary flex items-center justify-center">
        <p className="text-portfolio-text">Loading...</p>
      </div>
    );
  }

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
              <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{blog.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <Link to="/blogs">
          <Button variant="ghost" className="mb-6 -ml-2 text-portfolio-muted hover:text-portfolio-accent">
            <ArrowLeft size={16} className="mr-1" /> Back to Blogs
          </Button>
        </Link>
        
        <div className="bg-portfolio-secondary rounded-lg p-6 md:p-8 shadow-lg">
          <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-text">{blog.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.technologies.map((tech, index) => (
              <span key={index} className="bg-portfolio-primary px-2 py-1 rounded text-xs text-portfolio-muted">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-portfolio-muted text-lg">{blog.description}</p>
            <div className="mt-6 text-portfolio-text">
              <p>{blog.content}</p>
              
              {/* In a real app, more detailed content would go here */}
              <p className="mt-4">
                This is just a placeholder for what would be a more detailed blog post. In a real implementation, 
                this would contain comprehensive information about the project, including challenges faced, solutions implemented,
                and lessons learned. The content could also include code snippets, diagrams, and more detailed explanations
                of the technologies used.
              </p>
            </div>
          </div>
          
          {blog.github && (
            <div className="mt-8 pt-6 border-t border-portfolio-primary">
              <a 
                href={blog.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md bg-portfolio-primary hover:bg-portfolio-primary/70 text-portfolio-text transition-colors"
              >
                <Github size={18} className="mr-2" /> View Project on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
