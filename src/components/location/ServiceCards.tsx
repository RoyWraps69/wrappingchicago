
import React from 'react';
import { Check } from 'lucide-react';
import { City } from '@/data/cities';

interface ServiceCardsProps {
  city: City;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ city }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      <div className="bg-brand-light p-5 rounded-lg">
        <h4 className="text-xl font-semibold mb-3 text-brand-navy">Fleet Wraps</h4>
        <p className="mb-4">
          Transform your company vehicles into eye-catching mobile billboards. Our fleet wrapping services help {city.name} 
          businesses maximize their advertising reach throughout the Chicago area.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
            <span>Consistent branding across multiple vehicles</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
            <span>Cost-effective compared to traditional advertising</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
            <span>Protects original paint from everyday wear</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-brand-light p-5 rounded-lg">
        <h4 className="text-xl font-semibold mb-3 text-brand-navy">Color Change Wraps</h4>
        <p className="mb-4">
          Want to give your vehicle a new look without the permanence of paint? Our color change wraps offer {city.name} 
          drivers the ability to transform their vehicles with premium vinyl wraps.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
            <span>Matte, gloss, satin, and specialty finishes available</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
            <span>Reversible alternative to permanent paint</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
            <span>Protects resale value while customizing your look</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCards;
