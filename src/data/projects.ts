export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with shopping cart, user accounts, and payment processing.",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: [
      { name: "React", color: "blue" },
      { name: "Node.js", color: "green" },
      { name: "MongoDB", color: "purple" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A productivity app with drag-and-drop functionality, labels, and collaborative features.",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: [
      { name: "Vue.js", color: "cyan" },
      { name: "Firebase", color: "yellow" },
      { name: "Tailwind", color: "red" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Interactive data visualization dashboard with real-time updates and customizable views.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: [
      { name: "React", color: "blue" },
      { name: "D3.js", color: "teal" },
      { name: "Express", color: "indigo" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    title: "Social Media App",
    description: "A mobile-first social platform with real-time messaging and content sharing.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: [
      { name: "React Native", color: "blue" },
      { name: "GraphQL", color: "pink" },
      { name: "AWS", color: "orange" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive developer portfolio showcasing projects and skills with dark mode support.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: [
      { name: "React", color: "blue" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "Framer Motion", color: "purple" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 6,
    title: "Weather Application",
    description: "Real-time weather forecasting app with location detection and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: [
      { name: "JavaScript", color: "yellow" },
      { name: "OpenWeather API", color: "blue" },
      { name: "Leaflet.js", color: "green" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];
