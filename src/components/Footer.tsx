
import React from 'react';
import { Link } from 'react-router-dom';
import { cities } from '@/data/cities';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Chicago Fleet Wraps</h3>
            <p className="mb-4">
              The leading provider of premium vehicle wraps in the Greater Chicago area. 
              We specialize in fleet wraps, color change wraps, and commercial graphics.
            </p>
            <p>
              123 Wrap Avenue<br />
              Chicago, IL 60601<br />
              (773) 555-1234<br />
              info@chicagofleetwraps.com
            </p>
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
            <ul className="grid grid-cols-2 gap-2">
              {cities.map((city) => (
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
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Chicago Fleet Wraps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
