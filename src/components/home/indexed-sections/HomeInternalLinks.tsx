
import React from 'react';
import { Link } from 'react-router-dom';

const HomeInternalLinks: React.FC = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Explore All Our Pages</h2>
        <p className="mb-4 text-gray-700">Browse our complete catalog of vehicle wrap services and locations:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-brand-navy">Main Pages</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="text-brand-red hover:underline">Home</Link></li>
              <li><Link to="/about" className="text-brand-navy hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-brand-navy hover:text-brand-red transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-brand-navy hover:text-brand-red transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-brand-navy hover:text-brand-red transition-colors">Sitemap</Link></li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-brand-navy">Primary Services</h3>
            <ul className="space-y-1">
              <li><Link to="/services" className="text-brand-navy hover:text-brand-red transition-colors">All Services</Link></li>
              <li><Link to="/services/car-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Car Wraps</Link></li>
              <li><Link to="/services/truck-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Truck Wraps</Link></li>
              <li><Link to="/services/van-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Van Wraps</Link></li>
              <li><Link to="/services/fleet-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Fleet Wraps</Link></li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-brand-navy">Specialty Wraps</h3>
            <ul className="space-y-1">
              <li><Link to="/services/color-change-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Color Change</Link></li>
              <li><Link to="/services/commercial-graphics" className="text-brand-navy hover:text-brand-red transition-colors">Commercial Graphics</Link></li>
              <li><Link to="/services/partial-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Partial Wraps</Link></li>
              <li><Link to="/services/designer-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Designer Wraps</Link></li>
              <li><Link to="/services/luxury-exotic-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Luxury Wraps</Link></li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-brand-navy">Top Locations</h3>
            <ul className="space-y-1">
              <li><Link to="/vehicle-wraps-chicago-il" className="text-brand-navy hover:text-brand-red transition-colors">Chicago</Link></li>
              <li><Link to="/vehicle-wraps-naperville-il" className="text-brand-navy hover:text-brand-red transition-colors">Naperville</Link></li>
              <li><Link to="/vehicle-wraps-schaumburg-il" className="text-brand-navy hover:text-brand-red transition-colors">Schaumburg</Link></li>
              <li><Link to="/vehicle-wraps-evanston-il" className="text-brand-navy hover:text-brand-red transition-colors">Evanston</Link></li>
              <li><Link to="/locations" className="text-brand-navy hover:text-brand-red transition-colors">All Locations</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/sitemap" className="inline-block px-4 py-2 bg-brand-navy text-white rounded-md hover:bg-brand-red transition-colors">
            View Complete Sitemap
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeInternalLinks;
