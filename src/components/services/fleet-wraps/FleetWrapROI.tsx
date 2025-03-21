
import React from 'react';
import { BarChart3 } from 'lucide-react';

const FleetWrapROI: React.FC = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-brand-navy mb-4 flex items-center">
        <BarChart3 className="w-6 h-6 text-brand-red mr-2" />
        Fleet Wrap ROI for Chicago Businesses
      </h3>
      
      <div className="float-left mr-6 mb-4 w-full md:w-2/5">
        <img 
          src="/lovable-uploads/bc55562c-aa6e-45ac-86ea-5b2657a3f6d5.png" 
          alt="Fleet wrap ROI - Commercial vehicle wrap generating impressions in Chicago" 
          className="rounded-lg shadow-md w-full"
        />
        <p className="text-sm text-gray-600 mt-1 text-center">Fleet wraps deliver exceptional ROI for Chicago businesses</p>
      </div>
      
      <p className="mb-4 text-gray-700">
        Fleet vehicle wraps offer an exceptional return on investment for Chicago businesses. Consider these statistics:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>A single wrapped vehicle in Chicago can generate between 30,000-70,000 impressions daily</li>
        <li>Fleet wraps cost as little as $0.04 per thousand impressions, compared to $1.78 for outdoor advertising</li>
        <li>97% of Chicago consumers recall ads seen on vehicles</li>
        <li>96% say fleet graphics make a more memorable impression than billboards</li>
        <li>98% of in-car audiences notice truck-side advertising</li>
      </ul>
      <p className="text-gray-700">
        With Chicago's dense population and busy streets, your wrapped fleet will be seen by thousands of potential customers every day, 
        providing continuous advertising 24/7 for a one-time investment. Unlike traditional advertising with recurring monthly costs, 
        vehicle wraps continue working for your business for years.
      </p>
    </div>
  );
};

export default FleetWrapROI;
