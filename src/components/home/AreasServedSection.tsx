
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { City } from '@/data/cities';

interface AreasServedSectionProps {
  cities: City[];
}

const AreasServedSection = ({ cities }: AreasServedSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-navy">Areas We Serve</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Chicago Fleet Wraps provides professional vehicle wrapping services throughout Chicago and surrounding communities. Click on your city below for location-specific information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city) => (
            <Link 
              key={city.slug}
              to={`/vehicle-wraps-${city.slug}-il`}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <h3 className="font-bold text-brand-navy hover:text-brand-red transition-colors">
                  {city.name}, IL
                </h3>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button
            asChild
            className="bg-brand-navy hover:bg-blue-900 text-white"
          >
            <Link to="/locations">View All Locations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AreasServedSection;
