
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
      <NavLink to="/" onClick={onClose}>
        Home
      </NavLink>
      <NavLink to="/ai-wrap-ideas" icon={Sparkles} onClick={onClose}>
        AI Wrap Designer
      </NavLink>
      <NavLink to="/services/fleet-wraps" onClick={onClose}>
        Services
      </NavLink>
      <NavLink to="/gallery" onClick={onClose}>
        Gallery
      </NavLink>
      <NavLink to="/about" onClick={onClose}>
        About
      </NavLink>
      <NavLink to="/contact" onClick={onClose}>
        Contact
      </NavLink>
      
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
  );
};

export default MobileNav;
