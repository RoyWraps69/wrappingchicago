
import React from 'react';

const ServiceCatalog: React.FC = () => {
  return (
    <div className="bg-brand-light p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Our Vehicle Wrap Services</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <a href="/services/fleet-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Fleet Wraps</h3>
          <p className="text-sm">Transform your business fleet into mobile billboards</p>
        </a>
        <a href="/services/color-change-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Color Change Wraps</h3>
          <p className="text-sm">Change your vehicle's color without paint</p>
        </a>
        <a href="/services/commercial-graphics" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Commercial Graphics</h3>
          <p className="text-sm">Logos, lettering, and graphics for business vehicles</p>
        </a>
        <a href="/services/partial-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-brand-navy mb-2">Partial Wraps</h3>
          <p className="text-sm">Budget-friendly partial vehicle wrapping</p>
        </a>
      </div>
    </div>
  );
};

export default ServiceCatalog;
