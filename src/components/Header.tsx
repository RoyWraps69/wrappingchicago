
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Sparkles, Globe, MessageSquare } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-brand-navy text-white">
      {/* Contact Information Bar */}
      <div className="bg-brand-red">
        <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
            <div className="flex items-center text-white">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:3125971286" className="text-white hover:underline">(312) 597-1286</a>
              <span className="mx-3 hidden md:inline">|</span>
              <MessageSquare className="h-4 w-4 mr-2 hidden md:inline" />
              <a href="/contact" className="text-white hover:underline hidden md:inline">Get a Free Quote</a>
            </div>
            <div className="flex flex-wrap justify-end gap-4 md:gap-6 text-sm">
              <span className="text-white/70">Our Locations:</span>
              <a 
                href="https://wrappingchicago.com" 
                className="flex items-center hover:text-white/80 transition-colors"
              >
                <Globe className="w-4 h-4 mr-1 text-white" />
                Chicago
              </a>
              <a 
                href="https://centralimagewraps.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-white/80 transition-colors"
              >
                <Globe className="w-4 h-4 mr-1 text-white" />
                Central IL
              </a>
              <a 
                href="https://lasvegascarwraps.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-white/80 transition-colors"
              >
                <Globe className="w-4 h-4 mr-1 text-white" />
                Las Vegas
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-2xl font-bold">
              Wrapping Chicago
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
              AI Wrap Designer
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
            
            <div className="flex gap-2 ml-2">
              <Button 
                variant="outline" 
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <Link to="/contact" className="inline-flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Get a Quote
                </Link>
              </Button>
              
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
            </div>
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
              AI Wrap Designer
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
            
            <div className="pt-4 flex flex-col gap-3">
              <Button 
                variant="outline" 
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 w-full justify-center"
                asChild
              >
                <Link to="/contact" className="inline-flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Get a Quote
                </Link>
              </Button>
              
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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
