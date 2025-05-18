import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Skill } from "@/data/skills";

interface SkillBarProps {
  skill: Skill;
  categoryColor: string;
}

const SkillBar = ({ skill, categoryColor }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      // Animate skill bar width after a small delay
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level]);
  
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full">
        <div 
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${categoryColor}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
