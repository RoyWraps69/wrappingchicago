
import React from 'react';
import { Link } from 'react-router-dom';
import { cities } from '@/data/cities';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import ContactItem from './location/ContactItem';

const Footer = () => {
  // Split cities into two columns
  const halfwayThrough = Math.ceil(cities.length / 2);
  const firstHalf = cities.slice(0, halfwayThrough);
  const secondHalf = cities.slice(halfwayThrough);

  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wrapping Chicago</h3>
            <p className="mb-4">
              The leading provider of premium vehicle wraps in the Greater Chicago area. 
              We specialize in fleet wraps, color change wraps, and commercial graphics.
            </p>
            <ul className="space-y-2">
              <li>
                <ContactItem icon={MapPin} title="">
                  <span>4711 N. Lamon Ave<br />Chicago, IL 60630</span>
                </ContactItem>
              </li>
              <li>
                <ContactItem icon={Phone} title="">
                  <span>(312) 597-1286</span>
                </ContactItem>
              </li>
              <li>
                <ContactItem icon={Mail} title="">
                  <span>roy@wrappingchicago.com</span>
                </ContactItem>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/fleet-wraps" className="hover:text-brand-red transition-colors">Fleet Wraps</Link></li>
              <li><Link to="/services/color-change-wraps" className="hover:text-brand-red transition-colors">Color Change Wraps</Link></li>
              <li><Link to="/services/commercial-graphics" className="hover:text-brand-red transition-colors">Commercial Graphics</Link></li>
              <li><Link to="/services/partial-wraps" className="hover:text-brand-red transition-colors">Partial Wraps</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-red transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors">Get a Quote</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Locations We Serve</h3>
            <ul className="space-y-2">
              {firstHalf.map((city) => (
                <li key={city.slug}>
                  <Link 
                    to={`/vehicle-wraps-${city.slug}-il`} 
                    className="hover:text-brand-red transition-colors"
                  >
                    {city.name}, IL
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">More Locations</h3>
            <ul className="space-y-2">
              {secondHalf.map((city) => (
                <li key={city.slug}>
                  <Link 
                    to={`/vehicle-wraps-${city.slug}-il`} 
                    className="hover:text-brand-red transition-colors"
                  >
                    {city.name}, IL
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/locations" className="text-brand-red hover:underline">
                  View All Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Sister Companies Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <h3 className="text-xl font-bold mb-4 text-center">Our Locations Across the US</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-brand-red" />
              <a 
                href="https://wrappingchicago.com" 
                className="hover:text-brand-red transition-colors"
              >
                Wrapping Chicago
              </a>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-brand-red" />
              <a 
                href="https://centralimagewraps.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-red transition-colors"
              >
                Central Image Wraps
              </a>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-brand-red" />
              <a 
                href="https://lasvegascarwraps.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-red transition-colors"
              >
                Las Vegas Car Wraps
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-4 pt-4 text-center">
          <p>© {new Date().getFullYear()} Wrapping Chicago. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
