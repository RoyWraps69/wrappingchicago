
import React from 'react';
import { Truck } from 'lucide-react';
import { City } from '@/data/cities';

interface ServicesOverviewProps {
  city: City;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ city }) => {
  return (
    <>
      <h3 className="text-2xl font-bold mt-8 mb-4 text-brand-navy flex items-center">
        <Truck className="h-6 w-6 mr-2 text-brand-red" />
        Professional Vehicle Wrapping Services in {city.name}
      </h3>
      
      <p>
        At Chicago Fleet Wraps, we understand that businesses in {city.name} need to stand out in a competitive market. 
        Our vehicle wraps provide an outstanding return on investment by transforming your vehicles into mobile billboards 
        that generate thousands of impressions daily throughout {city.county} and beyond.
      </p>
      
      <p>
        We use only premium 3M and Avery vinyl materials, ensuring your vehicle wrap will maintain its vibrant appearance and 
        professional look for years to come. Our climate-controlled installation facility and certified technicians guarantee 
        flawless application and attention to detail on every project.
      </p>
    </>
  );
};

export default ServicesOverview;
