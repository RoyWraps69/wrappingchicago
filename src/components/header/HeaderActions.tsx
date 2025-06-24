
import React from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderActionsProps {
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

const HeaderActions: React.FC<HeaderActionsProps> = ({ 
  isMobileMenuOpen, 
  onToggleMobileMenu 
}) => {
  return (
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
        <a 
          href="/contact" 
          className="bg-brand-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          Get Quote
        </a>
      </div>
      
      {/* Mobile menu button */}
      <button
        onClick={onToggleMobileMenu}
        className="md:hidden p-2 text-brand-navy hover:text-brand-red transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default HeaderActions;
