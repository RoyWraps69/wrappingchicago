
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageSquare, Phone, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';
import ServiceMenu from './ServiceMenu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

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
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white/80 hover:text-white transition-all flex items-center relative font-medium after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-brand-red after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 bg-transparent">
                <DollarSign className="mr-1 h-4 w-4" />
                Pricing
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-48 p-2 bg-white">
                  <Link 
                    to="/pricing" 
                    className="block px-3 py-2 text-sm text-brand-navy hover:bg-gray-100 rounded-md"
                  >
                    <DollarSign className="inline mr-2 h-4 w-4" />
                    Pricing & Packages
                  </Link>
                  <Link 
                    to="/locations" 
                    className="block px-3 py-2 text-sm text-brand-navy hover:bg-gray-100 rounded-md"
                  >
                    <MapPin className="inline mr-2 h-4 w-4" />
                    Service Areas
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
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
