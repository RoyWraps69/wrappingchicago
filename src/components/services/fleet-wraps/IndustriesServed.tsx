
import React from 'react';
import { Building } from 'lucide-react';

const IndustriesServed: React.FC = () => {
  return (
    <div className="mb-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <h3 className="text-xl font-semibold text-brand-navy mb-5 flex items-center">
        <Building className="w-6 h-6 text-brand-red mr-3" />
        Chicago Industries We Serve
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
        <div>
          <p className="mb-5 text-gray-700 leading-relaxed">
            We've provided professional fleet wrapping services for a wide range of Chicago businesses and industries, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 mb-4">
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center text-center shadow-sm">Construction Companies</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center text-center shadow-sm">HVAC Services</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center text-center shadow-sm">Plumbing Contractors</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center text-center shadow-sm">Food Delivery Services</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center text-center shadow-sm">Electricians</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center text-center shadow-sm">Landscaping Companies</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center text-center shadow-sm">Real Estate Agencies</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center text-center shadow-sm">Catering Services</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center text-center shadow-sm">Home Service Providers</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center text-center shadow-sm">Security Companies</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-full max-h-[320px] overflow-hidden rounded-lg shadow-md">
            <img 
              alt="Service industry van with professional wrap - Chicago business fleet wrapping" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              src="/lovable-uploads/5f7df3bd-2189-405c-988f-dd79bf034dfb.jpg" 
            />
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed">
        No matter what industry you're in, our expert vehicle wrap designers can create a custom fleet wrap solution 
        that perfectly represents your Chicago business and helps you stand out from the competition.
      </p>
    </div>
  );
};

export default IndustriesServed;
