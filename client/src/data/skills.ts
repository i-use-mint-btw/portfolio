import { ReactNode } from "react";

export interface Skill {
  name: string;
  level: number;
}

export interface Tool {
  name: string;
  icon: string;
}

export const frontendSkills: Skill[] = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "Vue.js", level: 80 },
  { name: "Tailwind CSS", level: 85 }
];

export const backendSkills: Skill[] = [
  { name: "Node.js", level: 85 },
  { name: "Express", level: 82 },
  { name: "MongoDB", level: 78 },
  { name: "SQL", level: 75 },
  { name: "GraphQL", level: 70 }
];

export const tools: Tool[] = [
  { name: "Git", icon: "github" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
  { name: "Figma", icon: "figma" },
  { name: "CLI", icon: "code" },
  { name: "Jira", icon: "jira" },
  { name: "CI/CD", icon: "git-branch" },
  { name: "Responsive Design", icon: "smartphone" },
  { name: "Accessibility", icon: "accessibility" },
  { name: "Performance Optimization", icon: "gauge" }
];
