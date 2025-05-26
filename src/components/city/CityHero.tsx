
import React from 'react';

interface CityHeroProps {
  city: {
    name: string;
    state: string;
    description: string;
  };
}

const CityHero = ({ city }: CityHeroProps) => {
  return (
    <div className="bg-gradient-to-r from-brand-navy to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Vehicle Wraps in {city.name} {city.state}
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl">
          Transform your vehicle with professional wrap services in {city.name}. 
          Custom vinyl graphics for cars, trucks, vans, and fleets.
        </p>
      </div>
    </div>
  );
};

export default CityHero;
