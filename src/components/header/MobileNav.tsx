
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageSquare, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <nav 
      className="md:hidden fixed inset-0 z-50 bg-brand-black/95 backdrop-blur-sm flex flex-col overflow-y-auto pt-16 pb-6 px-4"
      aria-label="Mobile navigation"
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full"
        aria-label="Close menu"
      >
        <X className="h-6 w-6" />
      </button>
      
      <div className="flex flex-col space-y-3 mt-4">
        <NavLink to="/" onClick={onClose} className="text-white text-lg p-3 hover:bg-brand-grey/30 rounded-lg">
          Home
        </NavLink>
        <NavLink to="/ai-wrap-ideas" onClick={onClose} className="text-white text-lg p-3 hover:bg-brand-grey/30 rounded-lg flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-brand-gold" />
          AI Wrap Designer
        </NavLink>
        <NavLink to="/services/fleet-wraps" onClick={onClose} className="text-white text-lg p-3 hover:bg-brand-grey/30 rounded-lg">
          Services
        </NavLink>
        <NavLink to="/gallery" onClick={onClose} className="text-white text-lg p-3 hover:bg-brand-grey/30 rounded-lg">
          Gallery
        </NavLink>
        <NavLink to="/about" onClick={onClose} className="text-white text-lg p-3 hover:bg-brand-grey/30 rounded-lg">
          About
        </NavLink>
        <NavLink to="/contact" onClick={onClose} className="text-white text-lg p-3 hover:bg-brand-grey/30 rounded-lg">
          Contact
        </NavLink>
      </div>
      
      <div className="mt-auto pt-6 flex flex-col gap-3">
        <Button 
          variant="outline" 
          size="lg"
          className="border-brand-gold/30 bg-white/10 text-white hover:bg-white/20 w-full justify-center py-6 rounded-xl text-lg"
          asChild
        >
          <Link to="/contact" className="inline-flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" />
            Get a Free Quote
          </Link>
        </Button>
        
        <Button 
          variant="gold" 
          size="lg"
          className="w-full justify-center py-6 rounded-xl text-lg"
          asChild
        >
          <a href="tel:3125971286" className="inline-flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            (312) 597-1286
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default MobileNav;
