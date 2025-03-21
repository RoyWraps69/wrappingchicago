
import React from 'react';

const ServiceCatalog: React.FC = () => {
  return (
    <div className="bg-brand-grey/10 p-6 rounded-lg mb-8 border border-brand-grey/20">
      <h2 className="text-2xl font-semibold text-brand-black mb-4">Our Vehicle Wrap Services</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <a href="/services/fleet-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-brand-gold/10 hover:border-brand-gold/30">
          <h3 className="font-semibold text-brand-black mb-2">Fleet Wraps</h3>
          <p className="text-sm text-brand-grey">Transform your business fleet into mobile billboards</p>
        </a>
        <a href="/services/color-change-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-brand-gold/10 hover:border-brand-gold/30">
          <h3 className="font-semibold text-brand-black mb-2">Color Change Wraps</h3>
          <p className="text-sm text-brand-grey">Change your vehicle's color without paint</p>
        </a>
        <a href="/services/commercial-graphics" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-brand-gold/10 hover:border-brand-gold/30">
          <h3 className="font-semibold text-brand-black mb-2">Commercial Graphics</h3>
          <p className="text-sm text-brand-grey">Logos, lettering, and graphics for business vehicles</p>
        </a>
        <a href="/services/partial-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-brand-gold/10 hover:border-brand-gold/30">
          <h3 className="font-semibold text-brand-black mb-2">Partial Wraps</h3>
          <p className="text-sm text-brand-grey">Budget-friendly partial vehicle wrapping</p>
        </a>
        <a href="/services/protective-films" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-brand-gold/10 hover:border-brand-gold/30">
          <h3 className="font-semibold text-brand-black mb-2">Protective Films</h3>
          <p className="text-sm text-brand-grey">Paint protection films for vehicle longevity</p>
        </a>
        <a href="/services/vehicle-lettering" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-brand-gold/10 hover:border-brand-gold/30">
          <h3 className="font-semibold text-brand-black mb-2">Vehicle Lettering</h3>
          <p className="text-sm text-brand-grey">Professional cut vinyl lettering for your business</p>
        </a>
        <a href="/services/specialty-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-brand-gold/10 hover:border-brand-gold/30">
          <h3 className="font-semibold text-brand-black mb-2">Specialty Wraps</h3>
          <p className="text-sm text-brand-grey">Custom wraps with special finishes and effects</p>
        </a>
        <a href="/services/retail-graphics" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-brand-gold/10 hover:border-brand-gold/30">
          <h3 className="font-semibold text-brand-black mb-2">Retail Graphics</h3>
          <p className="text-sm text-brand-grey">Window wraps and store signage</p>
        </a>
      </div>
    </div>
  );
};

export default ServiceCatalog;
