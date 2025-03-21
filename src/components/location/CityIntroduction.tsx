
import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { City } from '@/data/cities';

interface CityIntroductionProps {
  city: City;
}

const CityIntroduction: React.FC<CityIntroductionProps> = ({ city }) => {
  return (
    <>
      <p className="text-lg text-gray-700">
        Chicago Fleet Wraps is proud to be the leading provider of premium Avery and 3M vehicle wraps in {city.name}, {city.state}. 
        Located just {city.distance} from Chicago, {city.name} businesses and residents trust us for exceptional vehicle 
        transformation services that deliver outstanding results every time.
      </p>
      
      <div className="my-6 p-4 border border-brand-light rounded-lg flex items-center bg-gray-50">
        <div className="mr-3">
          <MapPin className="h-5 w-5 text-brand-red" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1 text-gray-900">About {city.name}, Illinois</h3>
          <p className="mb-2 text-gray-700">{city.description}</p>
          <a 
            href={city.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-brand-red hover:underline"
          >
            Visit the official {city.name} website
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
      
      <p className="text-gray-700">
        Our team of certified vehicle wrap professionals serves all of {city.county}, including the bustling 
        {city.businessAreas}. With a population of approximately {city.population}, {city.name} is 
        an ideal market for businesses looking to increase their visibility through effective mobile advertising.
      </p>
    </>
  );
};

export default CityIntroduction;
