
import React from 'react';
import { Link } from 'react-router-dom';
import { cities } from '@/data/cities';

const QuickLinks = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6 uppercase text-white">Quick Links</h3>
      <div className="grid grid-cols-2 gap-x-10 gap-y-2">
        <Link to="/" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Home</Link>
        <Link to="/about" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">About Us</Link>
        <Link to="/services" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Services</Link>
        <Link to="/gallery" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Gallery</Link>
        <Link to="/contact" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Contact</Link>
        <Link to="/ai-wrap-ideas" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">AI Wrap Designer</Link>
        <Link to="/locations" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Service Areas</Link>
        <Link to="/services/fleet-wraps" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Fleet Wraps</Link>
        <Link to="/services/car-wraps" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Car Wraps</Link>
        <Link to="/services/truck-wraps" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Truck Wraps</Link>
        <Link to="/services/van-wraps" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Van Wraps</Link>
        <Link to="/services/color-change-wraps" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Color Change</Link>
      </div>
      
      <h3 className="text-xl font-bold mt-8 mb-4 uppercase text-white">Service Areas</h3>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {cities.slice(0, 5).map((city) => (
          <Link 
            key={city.slug}
            to={`/vehicle-wraps-${city.slug}-il`} 
            className="text-white/70 hover:text-white transition-colors"
          >
            {city.name}
          </Link>
        ))}
        <Link to="/locations" className="text-brand-red hover:underline">
          View All
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
