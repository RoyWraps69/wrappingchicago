
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ContactBar from './header/ContactBar';
import Logo from './header/Logo';
import DesktopNav from './header/DesktopNav';
import MobileNav from './header/MobileNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-brand-navy text-white">
      {/* Contact Information Bar */}
      <ContactBar />
      
      {/* Main Header */}
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden bg-brand-red hover:bg-red-700 text-white px-3 py-2 rounded"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="ml-1">Menu</span>
          </button>
          
          {/* Desktop Navigation */}
          <DesktopNav />
        </div>
        
        {/* Mobile Navigation */}
        <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
