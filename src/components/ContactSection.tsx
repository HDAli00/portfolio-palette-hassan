
import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would normally connect to a backend service
    console.log('Form submitted');
    // Show success message or redirect
    alert('Thank you for your message! I will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-portfolio-text mb-6 leading-relaxed">
              I'm always open to discussing new projects, opportunities in software development, 
              or just having a chat about technology. Feel free to reach out through the form 
              or via my social links.
            </p>
            
            <div className="flex flex-col gap-4 mb-8">
              <a 
                href="mailto:contact@hassanali.dev" 
                className="flex items-center gap-3 text-portfolio-text hover:text-portfolio-accent transition-colors"
              >
                <div className="bg-portfolio-secondary p-3 rounded-full">
                  <Mail size={20} className="text-portfolio-accent" />
                </div>
                contact@hassanali.dev
              </a>
              
              <a 
                href="https://github.com/hassandiv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-portfolio-text hover:text-portfolio-accent transition-colors"
              >
                <div className="bg-portfolio-secondary p-3 rounded-full">
                  <Github size={20} className="text-portfolio-accent" />
                </div>
                github.com/hassandiv
              </a>
              
              <a 
                href="https://www.linkedin.com/in/hd-ali/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-portfolio-text hover:text-portfolio-accent transition-colors"
              >
                <div className="bg-portfolio-secondary p-3 rounded-full">
                  <Linkedin size={20} className="text-portfolio-accent" />
                </div>
                linkedin.com/in/hd-ali
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-muted mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-4 py-2 bg-portfolio-secondary border border-portfolio-secondary/50 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent text-portfolio-text"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-muted mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-2 bg-portfolio-secondary border border-portfolio-secondary/50 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent text-portfolio-text"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-muted mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required
                  className="w-full px-4 py-2 bg-portfolio-secondary border border-portfolio-secondary/50 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent text-portfolio-text"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-muted mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required
                  className="w-full px-4 py-2 bg-portfolio-secondary border border-portfolio-secondary/50 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent text-portfolio-text"
                />
              </div>
              
              <button 
                type="submit"
                className="flex items-center gap-2 bg-portfolio-accent hover:bg-portfolio-accent/80 text-white px-6 py-3 rounded-md transition-colors"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
