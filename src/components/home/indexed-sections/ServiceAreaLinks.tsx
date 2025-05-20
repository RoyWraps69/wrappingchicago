
import React from 'react';
import { Link } from 'react-router-dom';
import { City } from '@/data/types/city';

interface ServiceAreaLinksProps {
  cities: City[];
  highlightChicago?: boolean;
}

const ServiceAreaLinks: React.FC<ServiceAreaLinksProps> = ({ cities, highlightChicago = true }) => {
  // Make sure Chicago is first if highlighting is enabled
  const sortedCities = [...cities];
  
  if (highlightChicago) {
    const chicagoIndex = sortedCities.findIndex(city => city.slug === 'chicago');
    if (chicagoIndex > 0) {
      const chicago = sortedCities.splice(chicagoIndex, 1)[0];
      sortedCities.unshift(chicago);
    }
  }
  
  return (
    <div className="container mx-auto px-4 my-8">
      <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Service Areas</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {sortedCities.slice(0, 15).map((city) => (
          <Link 
            key={city.slug}
            to={`/vehicle-wraps-${city.slug}-il`} 
            className={`p-4 rounded-lg shadow-sm transition-shadow text-center ${
              city.slug === 'chicago' && highlightChicago
                ? 'bg-brand-red/10 hover:shadow-md border border-brand-red/30'
                : 'bg-white hover:shadow-md'
            }`}
          >
            <span className={`font-semibold ${
              city.slug === 'chicago' && highlightChicago
                ? 'text-brand-red'
                : 'text-brand-navy'
            }`}>{city.name}, IL</span>
          </Link>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/locations" className="inline-block text-brand-red hover:underline font-medium">
          View All Service Areas →
        </Link>
      </div>
    </div>
  );
};

export default ServiceAreaLinks;
