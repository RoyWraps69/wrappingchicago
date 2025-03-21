
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Globe } from 'lucide-react';

const ContactBar = () => {
  return (
    <div className="bg-brand-black">
      <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
          <div className="flex items-center text-white">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:3125971286" className="text-white hover:text-brand-gold hover:underline">(312) 597-1286</a>
            <span className="mx-3 hidden md:inline">|</span>
            <MessageSquare className="h-4 w-4 mr-2 hidden md:inline" />
            <a href="/contact" className="text-white hover:text-brand-gold hover:underline hidden md:inline">Get a Free Quote</a>
          </div>
          <div className="flex flex-wrap justify-end gap-4 md:gap-6 text-sm">
            <span className="text-brand-gold">Our Locations:</span>
            <a 
              href="https://wrappingchicago.com" 
              className="flex items-center text-white hover:text-brand-gold transition-colors"
            >
              <Globe className="w-4 h-4 mr-1 text-brand-gold" />
              Chicago
            </a>
            <a 
              href="https://centralimagewraps.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-brand-gold transition-colors"
            >
              <Globe className="w-4 h-4 mr-1 text-brand-gold" />
              Central IL
            </a>
            <a 
              href="https://lasvegascarwraps.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-brand-gold transition-colors"
            >
              <Globe className="w-4 h-4 mr-1 text-brand-gold" />
              Las Vegas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
