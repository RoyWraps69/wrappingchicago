
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
        <Link to="/services/car-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Car Wraps</h3>
          <p className="text-sm">Custom wraps for personal and commercial vehicles</p>
        </Link>
        <Link to="/services/truck-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Truck Wraps</h3>
          <p className="text-sm">Professional wraps for all types of trucks</p>
        </Link>
        <Link to="/services/van-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Van Wraps</h3>
          <p className="text-sm">Custom van wraps for business fleets</p>
        </Link>
        <Link to="/services/color-change-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Color Change Wraps</h3>
          <p className="text-sm">Transform your vehicle's appearance</p>
        </Link>
        <Link to="/services/commercial-graphics" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Commercial Graphics</h3>
          <p className="text-sm">Business branding and vehicle graphics</p>
        </Link>
        <Link to="/services/partial-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Partial Wraps</h3>
          <p className="text-sm">Cost-effective partial vehicle wrapping</p>
        </Link>
        <Link to="/services/protective-films" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Protective Films</h3>
          <p className="text-sm">Paint protection and clear bra installation</p>
        </Link>
        <Link to="/services/vehicle-lettering" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Vehicle Lettering</h3>
          <p className="text-sm">Professional vehicle lettering services</p>
        </Link>
        <Link to="/services/specialty-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Specialty Wraps</h3>
          <p className="text-sm">Custom specialty vehicle wrapping</p>
        </Link>
        <Link to="/services/retail-graphics" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Retail Graphics</h3>
          <p className="text-sm">Store signage and window graphics</p>
        </Link>
        <Link to="/services/designer-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Designer Wraps</h3>
          <p className="text-sm">High-end custom vehicle designs</p>
        </Link>
        <Link to="/services/luxury-exotic-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Luxury & Exotic Wraps</h3>
          <p className="text-sm">Premium wraps for luxury vehicles</p>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCatalog;
