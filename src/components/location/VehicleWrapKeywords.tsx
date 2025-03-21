
import React from 'react';
import { City } from '@/data/cities';
import { Separator } from '@/components/ui/separator';

interface VehicleWrapKeywordsProps {
  city: City;
}

const VehicleWrapKeywords: React.FC<VehicleWrapKeywordsProps> = ({ city }) => {
  return (
    <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-brand-navy mb-4">
        Vehicle Wrap Services in {city.name}, Illinois
      </h3>
      
      <p className="text-gray-700 mb-4">
        Wrapping Chicago provides comprehensive vehicle wrapping services in {city.name} and throughout {city.county} County. 
        With over 16,000 vehicle wraps completed in our 20 years of business, we're the trusted choice for premium vehicle wraps
        in the Chicago area.
      </p>
      
      <Separator className="my-4" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-brand-navy mb-2">Car Wrap Services in {city.name}:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Full car wraps for personal vehicles</li>
            <li>Custom design car wraps</li>
            <li>Car color change wraps</li>
            <li>Promotional car wraps for businesses</li>
            <li>Car graphic application</li>
            <li>Luxury car wrapping specialists</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-brand-navy mb-2">Commercial Vehicle Wraps in {city.name}:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Fleet vehicle wraps</li>
            <li>Truck wraps for businesses</li>
            <li>Box truck graphics</li>
            <li>Pickup truck lettering</li>
            <li>Commercial van wraps</li>
            <li>Work vehicle identification</li>
          </ul>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-brand-navy mb-2">Specialty Vehicle Wrap Services:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Matte finish vehicle wraps</li>
            <li>Gloss vehicle wraps</li>
            <li>Satin finish wraps</li>
            <li>Chrome and metallic wraps</li>
            <li>Carbon fiber look wraps</li>
            <li>Textured vinyl applications</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-brand-navy mb-2">Additional Services in {city.name}:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Vehicle lettering and decals</li>
            <li>Partial vehicle wraps</li>
            <li>Vinyl graphics installation</li>
            <li>Window perforated film</li>
            <li>Paint protection film</li>
            <li>Vehicle wrap removal services</li>
          </ul>
        </div>
      </div>
      
      <p className="text-gray-700 mt-4">
        All our vehicle wraps in {city.name} are installed by 3M certified professionals using premium materials, 
        with a comprehensive 2-year warranty. We serve both individual vehicle owners and businesses throughout 
        {city.name} and the greater Chicago area.
      </p>
    </div>
  );
};

export default VehicleWrapKeywords;
