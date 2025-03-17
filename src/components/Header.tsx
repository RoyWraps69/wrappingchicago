
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-brand-navy text-white">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold">
              Chicago Fleet Wraps
            </Link>
          </div>
          
          <nav className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
            <Link to="/" className="hover:text-brand-red transition-colors">
              Home
            </Link>
            <Link to="/services" className="hover:text-brand-red transition-colors">
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
            
            <Button variant="default" className="bg-brand-red hover:bg-red-700 text-white">
              <Phone className="mr-2 h-4 w-4" />
              (773) 555-1234
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
