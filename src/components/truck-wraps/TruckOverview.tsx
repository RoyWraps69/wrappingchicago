
import React from 'react';

const TruckOverview = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
      <div>
        <h2 className="text-3xl font-bold text-brand-navy mb-4">
          Chicago's Premier Truck Wrap Provider
        </h2>
        <p className="text-gray-700 mb-4">
          Wrapping Chicago specializes in high-quality truck wraps for businesses throughout the Chicagoland area. 
          Our expert team has wrapped thousands of commercial trucks over our 20 years in business, establishing 
          us as the leading truck wrap installer in Chicago.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you need wraps for box trucks, delivery trucks, pickup trucks, or an entire fleet, 
          our experienced installers use premium 3M vinyl materials to ensure your truck wraps look 
          spectacular and last for years to come.
        </p>
        <p className="text-gray-700">
          Our truck wraps are designed to maximize your business visibility while you're on the road, 
          effectively turning your commercial vehicles into powerful mobile billboards that generate 
          thousands of impressions daily throughout Chicago.
        </p>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img 
          src="/lovable-uploads/ea32c99e-7c6e-43f1-b122-f3c64fb9fdf2.png" 
          alt="Professional truck wrap with roofing company branding and graphics - Commercial vehicle wrap in Chicago" 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default TruckOverview;
