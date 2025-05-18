import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/home/project-card";
import { projects } from "@/data/projects";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique technologies from all projects
  const allTechnologies = [...new Set(
    projects.flatMap(project => project.technologies.map(tech => tech.name))
  )];
  
  // Filter projects based on selected technology
  const filteredProjects = filter 
    ? projects.filter(project => 
        project.technologies.some(tech => tech.name === filter)
      )
    : projects;

  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Projects
            </motion.h1>
            <motion.div 
              className="w-16 h-1 bg-primary dark:bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A showcase of my work, ranging from web applications to creative coding projects.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Filter by Technology</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter(null)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === null
                    ? "bg-primary text-white dark:bg-primary dark:text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                All
              </button>
              
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    filter === tech
                      ? "bg-primary text-white dark:bg-primary dark:text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No projects found with this technology</h3>
              <p className="text-gray-600 dark:text-gray-400">Try selecting a different filter</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects;
