
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface CityInfoProps {
  city: {
    name: string;
    state: string;
    description: string;
  };
}

const CityInfo = ({ city }: CityInfoProps) => {
  return (
    <section className="py-12 bg-white">
      <article className="mb-8">
        <header>
          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            Professional Vehicle Wraps in {city.name}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {city.description}
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Premium 3M and Avery materials</span>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Expert installation team</span>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Custom design services</span>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
            <span className="text-gray-700">5-7 year durability</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CityInfo;
