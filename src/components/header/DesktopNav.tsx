
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageSquare, Phone, Home, Car, Image, Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <NavLink to="/">
        <Home className="mr-1 h-4 w-4" />
        Home
      </NavLink>
      <NavLink to="/ai-wrap-ideas" icon={Sparkles}>
        <Sparkles className="mr-1 h-4 w-4" />
        AI Wrap Designer
      </NavLink>
      <NavLink to="/services/fleet-wraps">
        <Car className="mr-1 h-4 w-4" />
        Services
      </NavLink>
      <NavLink to="/gallery">
        <Image className="mr-1 h-4 w-4" />
        Gallery
      </NavLink>
      <NavLink to="/about">
        <Info className="mr-1 h-4 w-4" />
        About
      </NavLink>
      <NavLink to="/contact">
        <Mail className="mr-1 h-4 w-4" />
        Contact
      </NavLink>
      
      <div className="flex gap-2 ml-2">
        <Button 
          variant="outline" 
          className="border-brand-gold/20 bg-white/10 text-gray-800 hover:bg-white/20"
          asChild
        >
          <Link to="/contact" className="inline-flex items-center">
            <MessageSquare className="mr-2 h-4 w-4" />
            Get a Quote
          </Link>
        </Button>
        
        <Button 
          variant="gold" 
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

export default DesktopNav;
