
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const VehicleWrapFAQ: React.FC = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center">
          Frequently Asked Questions About Vehicle Wraps
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-2">What's the investment for vehicle wraps in Chicago?</h3>
            <p className="text-gray-700">
              Vehicle wrap pricing in Chicago varies based on the size of your vehicle and complexity of the design. 
              Full car wraps typically range from $2,500-$5,000, while partial wraps start around $1,000. 
              Truck wraps and van wraps may cost more due to their larger size. Contact us for a free personalized quote.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-2">What's the lifespan of professional vinyl wraps?</h3>
            <p className="text-gray-700">
              With proper care and maintenance, our premium 3M vinyl vehicle wraps typically last 5-7 years. 
              All our car wraps, truck wraps, and van wraps come with a 2-year warranty. Factors affecting 
              longevity include exposure to extreme weather, washing frequency, and storage conditions.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-2">Will wraps harm my vehicle's original paint?</h3>
            <p className="text-gray-700">
              No, our professional vehicle wraps actually protect your paint when properly installed and removed. 
              Our 3M vinyl wraps act as a shield against minor scratches, stone chips, and UV damage. When removed by 
              professionals, the original paint remains in excellent condition, often better than unwrapped vehicles.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-2">What's the timeline for vehicle wrap installation?</h3>
            <p className="text-gray-700">
              Our professional vehicle wrap installation typically takes 3-5 business days from start to finish. 
              Basic car wraps may be completed in 2-3 days, while complex commercial truck wraps or van wraps with 
              detailed graphics might require 5-7 days. We provide exact timeframes with every quote.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button
            asChild
            className="bg-brand-navy hover:bg-blue-900 text-white"
          >
            <Link to="/contact">Get Answers to Your Vehicle Wrap Questions</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleWrapFAQ;
