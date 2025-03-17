
import React from 'react';
import { Truck, Palette } from 'lucide-react';
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
      
      <p className="mt-4">
        We use only premium 3M and Avery vinyl materials, ensuring your vehicle wrap will maintain its vibrant appearance and 
        professional look for years to come. Our climate-controlled installation facility and certified technicians guarantee 
        flawless application and attention to detail on every project.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-brand-navy flex items-center">
        <Palette className="h-6 w-6 mr-2 text-brand-red" />
        Premium Color Change Wraps in {city.name}
      </h3>
      
      <p>
        Looking to transform your vehicle's appearance without permanent paint? Our color change wraps give {city.name} 
        vehicle owners the freedom to customize their cars, trucks, and SUVs with premium vinyl wraps in virtually any color 
        or finish.
      </p>
      
      <p className="mt-4">
        From sleek matte black to vibrant gloss colors, color-shifting chameleon wraps, and carbon fiber accents, 
        we offer endless possibilities to make your vehicle unique. Color change wraps not only transform your vehicle's 
        appearance but also protect the original paint, preserving resale value.
      </p>
    </>
  );
};

export default ServicesOverview;
