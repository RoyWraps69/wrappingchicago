
import React from 'react';
import { Car, Truck, Shield } from 'lucide-react';
import { City } from '@/data/cities';

interface CityHeaderProps {
  city: City;
}

const CityHeader: React.FC<CityHeaderProps> = ({ city }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-2 text-brand-navy flex items-center">
        <Car className="h-7 w-7 mr-2 text-brand-red" />
        Premium Vehicle Wraps in {city.name}, Illinois
      </h2>
      
      <p className="text-gray-700 mb-4">
        Expert installation of car wraps, truck wraps, van wraps, and fleet graphics with durable 3M vinyl materials
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <Car className="h-4 w-4 mr-1" />
          Car Wraps {city.name}
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <Truck className="h-4 w-4 mr-1" />
          Truck Wraps {city.name}
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M10 17h4V8h-4z"/>
            <path d="M2 9v8h10V9c0-4-1.5-5-5-5S2 5 2 9z"/>
            <path d="M12 9v8h10V9c0-4-1.5-5-5-5s-5 1-5 5z"/>
          </svg>
          Van Wraps {city.name}
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <Shield className="h-4 w-4 mr-1" />
          Fleet Wraps {city.name}
        </div>
      </div>
    </div>
  );
};

export default CityHeader;
