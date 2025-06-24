
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative bg-white">
      {/* Contact Bar */}
      <div className="bg-brand-navy text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center text-sm">
            <span>Call us now: (312) 597-1286 | Email: roy@chicagofleetwraps.com</span>
          </div>
        </div>
      </div>
      
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" 
                  alt="Wrapping Chicago Logo" 
                  className="h-12 w-12 mr-3"
                />
                <span className="text-2xl font-extrabold tracking-tight text-brand-navy uppercase">
                  Wrapping<span className="text-brand-red">Chicago</span>
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-brand-navy hover:text-brand-red transition-colors font-medium">
                Home
              </Link>
              <Link to="/services" className="text-brand-navy hover:text-brand-red transition-colors font-medium">
                Services
              </Link>
              <Link to="/gallery" className="text-brand-navy hover:text-brand-red transition-colors font-medium">
                Gallery
              </Link>
              <Link to="/pricing" className="text-brand-navy hover:text-brand-red transition-colors font-medium">
                Pricing
              </Link>
              <Link to="/locations" className="text-brand-navy hover:text-brand-red transition-colors font-medium">
                Locations
              </Link>
              <Link to="/faq" className="text-brand-navy hover:text-brand-red transition-colors font-medium">
                FAQ
              </Link>
              <Link to="/contact" className="text-brand-navy hover:text-brand-red transition-colors font-medium">
                Contact
              </Link>
            </div>
            
            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Desktop contact info */}
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
              
              {/* Mobile menu button */}
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
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t z-50">
            <div className="px-4 py-6">
              <div className="space-y-4">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block py-2 text-brand-navy hover:text-brand-red transition-colors font-medium text-lg"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={closeMobileMenu}
                  className="block py-2 text-brand-navy hover:text-brand-red transition-colors font-medium text-lg"
                >
                  Services
                </Link>
                <Link
                  to="/gallery"
                  onClick={closeMobileMenu}
                  className="block py-2 text-brand-navy hover:text-brand-red transition-colors font-medium text-lg"
                >
                  Gallery
                </Link>
                <Link
                  to="/pricing"
                  onClick={closeMobileMenu}
                  className="block py-2 text-brand-navy hover:text-brand-red transition-colors font-medium text-lg"
                >
                  Pricing
                </Link>
                <Link
                  to="/locations"
                  onClick={closeMobileMenu}
                  className="block py-2 text-brand-navy hover:text-brand-red transition-colors font-medium text-lg"
                >
                  Locations
                </Link>
                <Link
                  to="/faq"
                  onClick={closeMobileMenu}
                  className="block py-2 text-brand-navy hover:text-brand-red transition-colors font-medium text-lg"
                >
                  FAQ
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block py-2 text-brand-navy hover:text-brand-red transition-colors font-medium text-lg"
                >
                  Contact
                </Link>
              </div>
              
              <div className="border-t pt-6 mt-6">
                <div className="space-y-4">
                  <a
                    href="tel:3125971286"
                    className="flex items-center text-brand-navy hover:text-brand-red transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    <span className="font-medium">(312) 597-1286</span>
                  </a>
                </div>
                
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block mt-6 bg-brand-red text-white text-center py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
