
import React from 'react';
import { Car } from 'lucide-react';
import { City } from '@/data/cities';

interface CityHeaderProps {
  city: City;
}

const CityHeader: React.FC<CityHeaderProps> = ({ city }) => {
  return (
    <h2 className="text-3xl font-bold mb-6 text-brand-navy flex items-center">
      <Car className="h-7 w-7 mr-2 text-brand-red" />
      Premium Vehicle Wraps in {city.name}, Illinois
    </h2>
  );
};

export default CityHeader;
