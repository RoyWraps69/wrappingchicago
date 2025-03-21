
import React from 'react';

const TrustIndicators: React.FC = () => {
  return (
    <div className="bg-white py-10 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
            Chicago's Most Trusted Vehicle Wrap Provider
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            From car wraps to truck wraps, van wraps, and fleet graphics, we deliver premium quality
            vehicle wraps with experienced installation and long-lasting results.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="font-bold text-3xl text-brand-red mb-1">2+ Years</div>
            <p className="text-gray-700">Warranty Protection</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="font-bold text-3xl text-brand-red mb-1">3M</div>
            <p className="text-gray-700">Premium Materials</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="font-bold text-3xl text-brand-red mb-1">16,000+</div>
            <p className="text-gray-700">Vehicle Wraps Completed</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="font-bold text-3xl text-brand-red mb-1">5★</div>
            <p className="text-gray-700">Customer Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
