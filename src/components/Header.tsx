
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './header/Logo';
import DesktopNav from './header/DesktopNav';
import MobileNav from './header/MobileNav';
import ContactBar from './header/ContactBar';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative">
      <ContactBar />
      
      <nav className="bg-white shadow-lg relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Logo />
            
            <DesktopNav />
            
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4">
                <a 
                  href="tel:3125971286" 
                  className="flex items-center text-brand-navy hover:text-brand-red transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">(312) 597-1286</span>
                </a>
                <Link 
                  to="/contact" 
                  className="bg-brand-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Get Quote
                </Link>
              </div>
              
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-brand-navy hover:text-brand-red transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </nav>
    </header>
  );
};

export default Header;
