
import React from 'react';
import { Building } from 'lucide-react';

const IndustriesServed: React.FC = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-brand-navy mb-4 flex items-center">
        <Building className="w-6 h-6 text-brand-red mr-2" />
        Chicago Industries We Serve
      </h3>
      <p className="mb-4 text-gray-700">
        We've provided professional fleet wrapping services for a wide range of Chicago businesses and industries, including:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Construction Companies</div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">HVAC Services</div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Plumbing Contractors</div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Food Delivery Services</div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Electricians</div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Landscaping Companies</div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Real Estate Agencies</div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Catering Services</div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Home Service Providers</div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Security Companies</div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Cleaning Services</div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Local Delivery Fleets</div>
      </div>
      <p className="text-gray-700">
        No matter what industry you're in, our expert vehicle wrap designers can create a custom fleet wrap solution 
        that perfectly represents your Chicago business and helps you stand out from the competition.
      </p>
    </div>
  );
};

export default IndustriesServed;
