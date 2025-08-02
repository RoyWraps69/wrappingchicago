
import React, { useState } from 'react';
import ContactBar from './header/ContactBar';
import Logo from './header/Logo';
import DesktopNav from './header/DesktopNav';
import MobileNav from './header/MobileNav';
import HeaderActions from './header/HeaderActions';

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
      <ContactBar />
      
      <nav className="bg-white shadow-lg sticky top-0 z-50" id="navigation">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Logo />
            <DesktopNav />
            <HeaderActions 
              isMobileMenuOpen={isMobileMenuOpen}
              onToggleMobileMenu={toggleMobileMenu}
            />
          </div>
        </div>
        
        <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </nav>
    </header>
  );
};

export default Header;
