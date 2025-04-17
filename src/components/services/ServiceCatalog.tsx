
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCatalog: React.FC = () => {
  return (
    <div className="bg-brand-light p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Our Vehicle Wrap Services</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link to="/services/fleet-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Fleet Wraps</h3>
          <p className="text-sm">Transform your business fleet into mobile billboards</p>
        </Link>
        <Link to="/services/color-change-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Color Change Wraps</h3>
          <p className="text-sm">Change your vehicle's color without paint</p>
        </Link>
        <Link to="/services/commercial-graphics" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Commercial Graphics</h3>
          <p className="text-sm">Logos, lettering, and graphics for business vehicles</p>
        </Link>
        <Link to="/services/partial-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Partial Wraps</h3>
          <p className="text-sm">Budget-friendly partial vehicle wrapping</p>
        </Link>
        <Link to="/services/protective-films" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Protective Films</h3>
          <p className="text-sm">Paint protection films for vehicle longevity</p>
        </Link>
        <Link to="/services/vehicle-lettering" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Vehicle Lettering</h3>
          <p className="text-sm">Professional cut vinyl lettering for your business</p>
        </Link>
        <Link to="/services/specialty-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Specialty Wraps</h3>
          <p className="text-sm">Custom wraps with special finishes and effects</p>
        </Link>
        <Link to="/services/retail-graphics" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Retail Graphics</h3>
          <p className="text-sm">Window wraps and store signage</p>
        </Link>
        <Link to="/services/car-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Car Wraps</h3>
          <p className="text-sm">Custom wraps for personal and business cars</p>
        </Link>
        <Link to="/services/truck-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Truck Wraps</h3>
          <p className="text-sm">Wraps for box trucks, pickups and commercial trucks</p>
        </Link>
        <Link to="/services/van-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Van Wraps</h3>
          <p className="text-sm">Custom wraps for cargo and passenger vans</p>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCatalog;
