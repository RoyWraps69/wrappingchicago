
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Globe, Facebook } from 'lucide-react';

const ContactBar = () => {
  return (
    <div className="bg-black border-b-2 border-white/20">
      <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center text-white text-sm md:text-base w-full sm:w-auto justify-center sm:justify-start mb-2 sm:mb-0">
            <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 sm:mr-2 text-brand-red" />
            <a href="tel:3125971286" className="text-white hover:text-brand-red transition-all whitespace-nowrap font-medium">(312) 597-1286</a>
            <span className="mx-2 hidden sm:inline text-white/50">|</span>
            <MessageSquare className="h-3 w-3 md:h-4 md:w-4 mr-1 sm:mr-2 hidden sm:inline text-brand-red" />
            <Link to="/contact" className="text-white hover:text-brand-red transition-all hidden sm:inline font-medium">Get a Free Quote</Link>
          </div>
          
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 md:gap-6 text-xs md:text-sm w-full sm:w-auto">
            <span className="text-white/70 hidden sm:inline font-medium">Our Locations:</span>
            <div className="flex items-center space-x-3 md:space-x-4">
              <a 
                href="https://www.wrappingchicago.com" 
                className="flex items-center hover:text-brand-red transition-all"
                aria-label="Chicago vehicle wraps location"
              >
                <Globe className="w-3 h-3 md:w-4 md:h-4 mr-1 text-brand-red" />
                <span className="whitespace-nowrap text-white hover:text-brand-red font-medium">Chicago</span>
              </a>
              <a 
                href="https://www.centralimagewraps.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-brand-red transition-all"
                aria-label="Central Illinois vehicle wraps location"
              >
                <Globe className="w-3 h-3 md:w-4 md:h-4 mr-1 text-brand-red" />
                <span className="whitespace-nowrap text-white hover:text-brand-red font-medium">Central IL</span>
              </a>
              <a 
                href="https://www.lasvegascarwraps.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-brand-red transition-all"
                aria-label="Las Vegas vehicle wraps location"
              >
                <Globe className="w-3 h-3 md:w-4 md:h-4 mr-1 text-brand-red" />
                <span className="whitespace-nowrap text-white hover:text-brand-red font-medium">Las Vegas</span>
              </a>
              
              {/* Social Media Links */}
              <span className="text-white/50 hidden lg:inline">|</span>
              <a 
                href="https://www.facebook.com/wrappingchicago" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-brand-red transition-all hidden lg:flex"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-3 h-3 md:w-4 md:h-4 text-brand-red" />
              </a>
              <a 
                href="https://www.tiktok.com/@wrappingchicago" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-brand-red transition-all hidden lg:flex"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.326-1.963-1.326-3.082v-.256h-3.068v14.146c0 1.563-1.27 2.833-2.833 2.833s-2.833-1.27-2.833-2.833 1.27-2.833 2.833-2.833c.31 0 .608.05.887.143v-3.146a5.91 5.91 0 0 0-.887-.067c-3.308 0-5.99 2.682-5.99 5.99s2.682 5.99 5.99 5.99 5.99-2.682 5.99-5.99V9.321a9.305 9.305 0 0 0 5.449 1.748V7.996a6.18 6.18 0 0 1-2.632-2.434z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
