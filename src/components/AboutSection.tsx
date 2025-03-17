
import React from 'react';
import { Code, Server, Star, Globe } from 'lucide-react';

const technologies = [
  { category: "Frontend", skills: ["React", "Angular", "Vue.js", "Next.js", "HTML5", "CSS3/SCSS", "JavaScript/TypeScript"] },
  { category: "Backend", skills: ["Node.js", "Express", "NestJS", "Python", "PHP", "Laravel", "RESTful APIs", "GraphQL"] },
  { category: "Mobile", skills: ["Flutter", "React Native", "iOS", "Android"] },
  { category: "Others", skills: ["AWS", "Firebase", "Docker", "CI/CD", "Git", "PostgreSQL", "MongoDB", "Redis"] },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-portfolio-text leading-relaxed mb-6">
              I'm a Software Engineer with 8+ years of experience building web and mobile applications 
              for startups and established companies. My journey in software development started with 
              a deep curiosity about how digital products work and has evolved into a passion for 
              creating elegant solutions to complex problems.
            </p>
            <p className="text-portfolio-text leading-relaxed mb-6">
              I specialize in full-stack development, with a particular focus on creating seamless, 
              responsive user experiences and robust backend architectures. My experience spans 
              across various domains including fintech, e-commerce, and enterprise solutions.
            </p>
            <p className="text-portfolio-text leading-relaxed">
              When I'm not coding, I enjoy staying up-to-date with the latest tech trends, 
              contributing to open-source projects, and mentoring aspiring developers.
            </p>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-portfolio-secondary p-5 rounded-lg">
                <div className="bg-portfolio-primary/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Code size={24} className="text-portfolio-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
                <p className="text-portfolio-muted text-sm">
                  Creating responsive, interactive user interfaces with modern JavaScript frameworks.
                </p>
              </div>
              
              <div className="bg-portfolio-secondary p-5 rounded-lg">
                <div className="bg-portfolio-primary/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Server size={24} className="text-portfolio-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
                <p className="text-portfolio-muted text-sm">
                  Building scalable APIs and services with Node.js and modern backend frameworks.
                </p>
              </div>
              
              <div className="bg-portfolio-secondary p-5 rounded-lg">
                <div className="bg-portfolio-primary/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe size={24} className="text-portfolio-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Mobile Development</h3>
                <p className="text-portfolio-muted text-sm">
                  Developing cross-platform mobile applications using Flutter and React Native.
                </p>
              </div>
              
              <div className="bg-portfolio-secondary p-5 rounded-lg">
                <div className="bg-portfolio-primary/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Star size={24} className="text-portfolio-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cloud Services</h3>
                <p className="text-portfolio-muted text-sm">
                  Deploying and managing applications on AWS and other cloud platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-portfolio-secondary p-5 rounded-lg">
                <h4 className="text-lg font-medium mb-4 text-portfolio-accent">{tech.category}</h4>
                <ul className="space-y-2">
                  {tech.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-portfolio-muted flex items-center">
                      <span className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
