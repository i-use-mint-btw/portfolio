import { useState } from "react";
import { Link, useLocation } from "wouter";
import { MobileMenu } from "@/components/ui/mobile-menu";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold">
            &lt;<span className="text-primary dark:text-primary">Dev</span>
            <span className="text-secondary dark:text-secondary">Portfolio</span>/&gt;
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {NavLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`font-medium transition-colors ${
                location === link.path 
                  ? "text-primary dark:text-primary" 
                  : "hover:text-primary dark:hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} links={NavLinks} />
    </header>
  );
};

export default Header;
