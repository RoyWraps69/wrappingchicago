
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const CompanyInfo = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img 
          src="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" 
          alt="Wrapping Chicago Logo" 
          className="h-12 w-12 mr-3"
        />
        <h3 className="text-2xl font-bold tracking-tight uppercase text-white">Wrapping<span className="text-brand-red">Chicago</span></h3>
      </div>
      
      <p className="text-white/70 mb-6">
        Chicago's premier vehicle wrap company specializing in commercial fleet wraps, 
        color change wraps, and custom graphics that turn your vehicles into powerful mobile advertising.
      </p>
      
      <ul className="space-y-3">
        <li className="flex items-start p-3 bg-gray-800 border border-gray-600 rounded-lg">
          <div className="flex items-center justify-center w-10 h-10 rounded-full mr-3 flex-shrink-0 bg-brand-red text-white">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <span className="text-white font-medium">4711 N. Lamon Ave<br />Chicago, IL 60630</span>
          </div>
        </li>
        <li className="flex items-start p-3 bg-gray-800 border border-gray-600 rounded-lg">
          <div className="flex items-center justify-center w-10 h-10 rounded-full mr-3 flex-shrink-0 bg-brand-red text-white">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <a href="tel:3125971286" className="text-white font-medium hover:text-brand-red transition-colors">(312) 597-1286</a>
          </div>
        </li>
        <li className="flex items-start p-3 bg-gray-800 border border-gray-600 rounded-lg">
          <div className="flex items-center justify-center w-10 h-10 rounded-full mr-3 flex-shrink-0 bg-brand-red text-white">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <a href="mailto:roy@chicagofleetwraps.com" className="text-white font-medium hover:text-brand-red transition-colors">roy@chicagofleetwraps.com</a>
          </div>
        </li>
      </ul>
      
      {/* Social Icons */}
      <div className="mt-6 flex gap-3">
        <a href="https://www.facebook.com/wrappingchicago" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Facebook size={18} />
        </a>
        <a href="https://www.instagram.com/wrappingchicago" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Instagram size={18} />
        </a>
        <a href="https://www.tiktok.com/@wrappingchicago" target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.326-1.963-1.326-3.082v-.256h-3.068v14.146c0 1.563-1.27 2.833-2.833 2.833s-2.833-1.27-2.833-2.833 1.27-2.833 2.833-2.833c.31 0 .608.05.887.143v-3.146a5.91 5.91 0 0 0-.887-.067c-3.308 0-5.99 2.682-5.99 5.99s2.682 5.99 5.99 5.99 5.99-2.682 5.99-5.99V9.321a9.305 9.305 0 0 0 5.449 1.748V7.996a6.18 6.18 0 0 1-2.632-2.434z"/>
          </svg>
        </a>
        <a href="https://twitter.com/wrappingchicago" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Twitter size={18} />
        </a>
      </div>
    </div>
  );
};

export default CompanyInfo;
