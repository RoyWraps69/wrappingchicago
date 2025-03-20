
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-brand-navy text-white">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-2xl font-bold">
              Chicago Fleet Wraps
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-brand-red transition-colors">
              Home
            </Link>
            <Link to="/ai-wrap-ideas" className="hover:text-brand-red transition-colors flex items-center">
              <Sparkles className="mr-1 h-4 w-4" />
              AI Wrap Ideas
            </Link>
            <Link to="/services/fleet-wraps" className="hover:text-brand-red transition-colors">
              Services
            </Link>
            <Link to="/gallery" className="hover:text-brand-red transition-colors">
              Gallery
            </Link>
            <Link to="/about" className="hover:text-brand-red transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-brand-red transition-colors">
              Contact
            </Link>
            
            <Button 
              variant="default" 
              className="bg-brand-red hover:bg-red-700 text-white"
              asChild
            >
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                (312) 597-1286
              </a>
            </Button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <Link 
              to="/" 
              className="hover:text-brand-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/ai-wrap-ideas" 
              className="hover:text-brand-red transition-colors flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Sparkles className="mr-1 h-4 w-4" />
              AI Wrap Ideas
            </Link>
            <Link 
              to="/services/fleet-wraps" 
              className="hover:text-brand-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className="hover:text-brand-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className="hover:text-brand-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-brand-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button 
              variant="default" 
              className="bg-brand-red hover:bg-red-700 text-white w-full justify-center"
              asChild
            >
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                (312) 597-1286
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
