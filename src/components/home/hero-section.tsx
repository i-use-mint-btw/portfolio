import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gray-800 dark:text-gray-100">Hi, I'm </span>
              <span className="text-primary dark:text-primary">John Dev</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              <span className="font-mono">&lt;</span>
              Full Stack Developer
              <span className="font-mono">/&gt;</span>
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
              I build robust and scalable web applications with modern technologies.
              Passionate about clean code, user experience, and solving complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 dark:border-primary dark:text-primary dark:hover:bg-primary/10">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" 
              alt="Developer Portrait" 
              className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
