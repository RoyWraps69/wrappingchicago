
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface LocationProjectsProps {
  cityName: string;
}

const LocationProjects = ({ cityName }: LocationProjectsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center text-brand-navy">
          Our Vehicle Wrap Projects in {cityName}, IL
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img 
                  src={`https://placehold.co/600x400/0B3954/FFFFFF?text=Fleet+Wrap+${item}`}
                  alt={`Fleet vehicle wrap in ${cityName}, IL - Chicago Fleet Wraps`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-navy">
                  {item === 1 ? 'Fleet Wrap' : item === 2 ? 'Color Change Wrap' : 'Commercial Graphics'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {item === 1 
                    ? `Local delivery fleet wrapped for maximum visibility in ${cityName}.` 
                    : item === 2 
                      ? `Complete color transformation for a personal vehicle in ${cityName}.` 
                      : `Eye-catching graphics for a local ${cityName} business service vehicle.`}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                >
                  <Link to="/gallery">View Project</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button
            asChild
            className="bg-brand-navy hover:bg-blue-900 text-white"
          >
            <Link to="/gallery">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationProjects;
