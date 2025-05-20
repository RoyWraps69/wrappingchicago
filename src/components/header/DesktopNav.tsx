
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageSquare, Phone, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';
import ServiceMenu from './ServiceMenu';

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center justify-between w-full">
      <div className="flex items-center space-x-7">
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
        <NavLink to="/pricing" icon={DollarSign}>
          Pricing
        </NavLink>
        <NavLink to="/locations" icon={MapPin}>
          Locations
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </div>
      
      <div className="flex gap-3 ml-4">
        <Button 
          variant="outline"
          asChild
        >
          <Link to="/contact" className="inline-flex items-center" aria-label="Request a quote for vehicle wraps">
            <MessageSquare className="mr-2 h-4 w-4" />
            <span className="whitespace-nowrap">Get a Quote</span>
          </Link>
        </Button>
        
        <Button 
          variant="gradient"
          animation="glow"
          asChild
        >
          <a href="tel:3125971286" className="inline-flex items-center" aria-label="Call for vehicle wrap services">
            <Phone className="mr-2 h-4 w-4" />
            <span className="whitespace-nowrap">(312) 597-1286</span>
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default DesktopNav;
