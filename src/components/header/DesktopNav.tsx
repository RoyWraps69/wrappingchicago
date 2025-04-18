
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';
import ServiceMenu from './ServiceMenu';

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/ai-wrap-ideas" icon={Sparkles}>
        AI Wrap Designer
      </NavLink>
      <ServiceMenu />
      <NavLink to="/gallery">
        Gallery
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/contact">
        Contact
      </NavLink>
      
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
  );
};

export default DesktopNav;
