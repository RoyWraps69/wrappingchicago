
import React from 'react';

const TruckBenefits = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
      <h2 className="text-3xl font-bold text-brand-navy mb-4">
        Why Choose Wrapping Chicago for Your Truck Wraps?
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Unmatched Experience</h3>
          <p className="text-gray-700 mb-6">
            With over 20 years in business and more than 16,000 vehicle wraps completed, our team 
            has the expertise to handle trucks of all shapes and sizes. Our experience means your 
            truck wrap project will be done right the first time.
          </p>
          
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Premium 3M Materials</h3>
          <p className="text-gray-700">
            We use only genuine 3M vinyl materials for our truck wraps, ensuring maximum durability 
            and longevity. Our commercial grade vinyl stands up to Chicago's harsh weather conditions, 
            from summer heat to winter snow and salt.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Expert Installation</h3>
          <p className="text-gray-700 mb-6">
            Our 3M certified installers are highly trained in the proper techniques for truck wrap 
            application. We ensure perfect alignment, smooth finishes, and proper handling of complex 
            curves and panel seams on commercial trucks.
          </p>
          
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Comprehensive Warranty</h3>
          <p className="text-gray-700">
            All our truck wraps come with a 2-year warranty, giving you peace of mind that your 
            investment is protected. We stand behind our work and ensure your truck wrap maintains 
            its appearance and functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TruckBenefits;
