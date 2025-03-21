
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { City } from '@/data/cities';
import { Building2 } from 'lucide-react';

interface AreasServedSectionProps {
  cities: City[];
}

const AreasServedSection = ({ cities }: AreasServedSectionProps) => {
  const brickAndMortarLocations = ["mclean-county", "las-vegas"];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-brand-navy">Areas We Serve</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Wrapping Chicago provides professional vehicle wrapping services throughout Chicago and surrounding communities. Click on your city below for location-specific information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {cities.map((city) => {
            const isBrickAndMortar = brickAndMortarLocations.includes(city.slug);
            
            return (
              <Link 
                key={city.slug}
                to={`/vehicle-wraps-${city.slug}-il`}
                className={`${isBrickAndMortar ? 'bg-brand-red/10 border-2 border-brand-red' : 'bg-white'} p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow`}
              >
                <div className="text-center">
                  {isBrickAndMortar && (
                    <div className="flex items-center justify-center mb-1 text-brand-red">
                      <Building2 size={16} className="mr-1" />
                      <span className="text-xs font-semibold">Brick & Mortar Location</span>
                    </div>
                  )}
                  <h3 className={`font-bold ${isBrickAndMortar ? 'text-brand-red' : 'text-brand-navy hover:text-brand-red'} transition-colors`}>
                    {city.name}, {city.state}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-6">
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
