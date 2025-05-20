
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Globe } from 'lucide-react';

const ContactBar = () => {
  return (
    <div className="bg-black border-b border-white/10">
      <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center text-white/80 text-sm md:text-base w-full sm:w-auto justify-center sm:justify-start mb-2 sm:mb-0">
            <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 sm:mr-2" />
            <a href="tel:3125971286" className="text-white hover:text-brand-red transition-all whitespace-nowrap">(312) 597-1286</a>
            <span className="mx-2 hidden sm:inline">|</span>
            <MessageSquare className="h-3 w-3 md:h-4 md:w-4 mr-1 sm:mr-2 hidden sm:inline" />
            <Link to="/contact" className="text-white hover:text-brand-red transition-all hidden sm:inline">Get a Free Quote</Link>
          </div>
          
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 md:gap-6 text-xs md:text-sm w-full sm:w-auto">
            <span className="text-white/50 hidden sm:inline">Our Locations:</span>
            <div className="flex space-x-3 md:space-x-4">
              <a 
                href="https://www.wrappingchicago.com" 
                className="flex items-center hover:text-brand-red transition-all"
                aria-label="Chicago vehicle wraps location"
              >
                <Globe className="w-3 h-3 md:w-4 md:h-4 mr-1 text-brand-red" />
                <span className="whitespace-nowrap text-white/80 hover:text-white">Chicago</span>
              </a>
              <a 
                href="https://www.centralimagewraps.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-brand-red transition-all"
                aria-label="Central Illinois vehicle wraps location"
              >
                <Globe className="w-3 h-3 md:w-4 md:h-4 mr-1 text-brand-red" />
                <span className="whitespace-nowrap text-white/80 hover:text-white">Central IL</span>
              </a>
              <a 
                href="https://www.lasvegascarwraps.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-brand-red transition-all"
                aria-label="Las Vegas vehicle wraps location"
              >
                <Globe className="w-3 h-3 md:w-4 md:h-4 mr-1 text-brand-red" />
                <span className="whitespace-nowrap text-white/80 hover:text-white">Las Vegas</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
