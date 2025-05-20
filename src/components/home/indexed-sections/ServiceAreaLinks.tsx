
import React from 'react';
import { Link } from 'react-router-dom';
import { City } from '@/data/types/city';

interface ServiceAreaLinksProps {
  cities: City[];
}

const ServiceAreaLinks: React.FC<ServiceAreaLinksProps> = ({ cities }) => {
  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Service Areas</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {cities.slice(0, 10).map((city) => (
          <Link 
            key={city.slug}
            to={`/vehicle-wraps-${city.slug}-il`} 
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <span className="font-semibold text-brand-navy">{city.name}, IL</span>
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
