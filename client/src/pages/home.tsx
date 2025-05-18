import { useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/home/hero-section";
import ProjectCard from "@/components/home/project-card";
import SkillBar from "@/components/home/skill-bar";
import ContactForm from "@/components/home/contact-form";
import { projects } from "@/data/projects";
import { frontendSkills, backendSkills, tools } from "@/data/skills";
import { ChevronRight, Briefcase, GraduationCap, Github, Linkedin, Twitter, FileText, Mail, MapPin, Zap, Code, GitBranch, Smartphone, Accessibility, Gauge } from "lucide-react";

const Home = () => {
  // Get featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <div className="w-16 h-1 bg-primary dark:bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Check out some of my recent work. Each project showcases different skills ive picked up along the way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              asChild
              className="inline-flex items-center bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90"
            >
              <Link href="/projects">
                View All Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-primary dark:bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are the technologies and tools I've worked with throughout my career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                Frontend Development
              </h3>
              
              <div className="space-y-5">
                {frontendSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill}
                    categoryColor="bg-primary dark:bg-primary"
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                Backend Development
              </h3>
              
              <div className="space-y-5">
                {backendSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill}
                    categoryColor="bg-secondary dark:bg-secondary"
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
              Tools & Technologies
            </h3>
            
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, index) => {
                let IconComponent;
                switch(tool.icon) {
                  case 'github': IconComponent = Github; break;
                  default: IconComponent = Code;
                }
                
                return (
                  <div key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center">
                    <span className="mr-2">
                      <IconComponent className="h-5 w-5 text-primary dark:text-primary" />
                    </span>
                    <span>{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
