import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-900">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className={`px-3 py-1 bg-${tech.color}-100 dark:bg-${tech.color}-900 text-${tech.color}-800 dark:text-${tech.color}-100 rounded-full text-xs`}
              >
                {tech.name}
              </span>
            ))}
          </div>
          <div className="flex justify-between">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary dark:text-primary hover:underline flex items-center gap-1 text-sm"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary dark:text-primary hover:underline flex items-center gap-1 text-sm"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
