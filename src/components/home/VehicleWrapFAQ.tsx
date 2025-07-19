import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const VehicleWrapFAQ: React.FC = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-navy mb-6 text-center">
          Vehicle Wrap Knowledge Center
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 text-center">
          Get answers to the most commonly asked questions about professional vehicle wrapping in Chicago.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-2">What's the investment for vehicle wraps in Chicago?</h3>
            <p className="text-gray-700">
              Vehicle wrap investment varies based on project scope and vehicle dimensions. 
              Compact cars typically range $2,200-$3,800, while SUVs and trucks range $3,200-$5,500. 
              Partial coverage and commercial lettering start around $800. Each quote includes design, materials, and installation.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-2">What's the lifespan of professional vinyl wraps?</h3>
            <p className="text-gray-700">
              High-performance vinyl maintains its appearance and adhesion for 5-7 years under normal conditions. 
              Longevity depends on vehicle usage patterns, storage environment, and maintenance routine. 
              Our installation warranty covers defects and premature failure for comprehensive protection.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-2">Will wraps harm my vehicle's original paint?</h3>
            <p className="text-gray-700">
              Vehicle wraps preserve and enhance your paint's condition during application. 
              The vinyl film shields against environmental hazards while maintaining factory finish integrity. 
              Professional removal reveals protected paint that often looks better than unwrapped areas.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-2">What's the timeline for vehicle wrap installation?</h3>
            <p className="text-gray-700">
              Complete vehicle transformation requires 3-5 business days depending on design complexity. 
              Simple commercial graphics may finish in 2 days, while intricate custom artwork requires 5-7 days. 
              We provide detailed timelines during consultation to ensure project completion meets your schedule.
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