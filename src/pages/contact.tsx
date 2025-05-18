import { motion } from "framer-motion";
import ContactForm from "@/components/home/contact-form";
import { Mail, MapPin, Zap, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
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
              Get In Touch
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
              Have a project in mind or just want to chat? Feel free to reach out!
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-10">
            <motion.div 
              className="md:w-2/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-primary dark:text-primary">Contact Information</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary dark:text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a 
                        href="mailto:john.dev@example.com" 
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        john.dev@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary dark:text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <Zap className="h-5 w-5 text-primary dark:text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Availability</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Available for freelance
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Connect With Me</h3>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary dark:text-primary">My Schedule</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  All times are in Pacific Standard Time (PST).
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-3/5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactForm />
              
              <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3">Project Request</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  For project inquiries, please include the following details in your message:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Project type and scope</li>
                  <li>Estimated timeline</li>
                  <li>Budget range</li>
                  <li>Any specific technologies required</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  I'll get back to you within 24-48 hours with an initial assessment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
