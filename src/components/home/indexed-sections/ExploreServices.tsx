import React from 'react';
import { Link } from 'react-router-dom';

const ExploreServices: React.FC = () => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Explore Our Vehicle Wrap Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <Link to="/services/car-wraps" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">Car Wraps</h3>
            <p className="text-sm text-gray-600">Professional car wrapping services</p>
          </Link>
          <Link to="/services/truck-wraps" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">Truck Wraps</h3>
            <p className="text-sm text-gray-600">Commercial truck branding solutions</p>
          </Link>
          <Link to="/services/van-wraps" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">Van Wraps</h3>
            <p className="text-sm text-gray-600">Delivery and service van wraps</p>
          </Link>
          <Link to="/services/fleet-wraps" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">Fleet Wraps</h3>
            <p className="text-sm text-gray-600">Consistent branding for vehicle fleets</p>
          </Link>
          <Link to="/gallery" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">Gallery</h3>
            <p className="text-sm text-gray-600">View our completed projects</p>
          </Link>
          <Link to="/locations" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">Service Areas</h3>
            <p className="text-sm text-gray-600">Chicago and surrounding suburbs</p>
          </Link>
          <Link to="/about" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">About Us</h3>
            <p className="text-sm text-gray-600">Our experience and commitment</p>
          </Link>
          <Link to="/contact" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">Contact</h3>
            <p className="text-sm text-gray-600">Request a quote today</p>
          </Link>
          
          
          <Link to="/services/color-change-wraps" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">Color Change</h3>
            <p className="text-sm text-gray-600">Transform your vehicle's appearance</p>
          </Link>
          <Link to="/services/commercial-graphics" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">Commercial Graphics</h3>
            <p className="text-sm text-gray-600">Business branding solutions</p>
          </Link>
          <Link to="/services/protective-films" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">Protective Films</h3>
            <p className="text-sm text-gray-600">Preserve your vehicle's finish</p>
          </Link>
          <Link to="/services/vehicle-lettering" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-navy">Vehicle Lettering</h3>
            <p className="text-sm text-gray-600">Professional text and graphics</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;
