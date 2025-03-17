
import React from 'react';

const VehicleLetteringContent: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Professional Vehicle Lettering</h2>
      <p className="mb-6">
        Make your business vehicles identifiable with professional cut vinyl lettering. This cost-effective solution 
        allows you to display your company name, contact information, and basic branding elements without a full wrap.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-brand-light p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Lettering Options</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Custom-cut vinyl lettering</li>
            <li>Door, hood, and tailgate lettering</li>
            <li>Window decals and DOT numbers</li>
            <li>Magnetic vehicle signs</li>
            <li>Reflective lettering for night visibility</li>
            <li>QR codes and contact information</li>
          </ul>
        </div>
        <div className="bg-brand-light p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Ideal For</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Small businesses and startups</li>
            <li>Service contractors and tradespeople</li>
            <li>Delivery and logistics companies</li>
            <li>Temporary promotional campaigns</li>
            <li>Leased or short-term fleet vehicles</li>
            <li>Easily updating information as needed</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default VehicleLetteringContent;
