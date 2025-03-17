
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface LocationProjectsProps {
  cityName: string;
}

const LocationProjects = ({ cityName }: LocationProjectsProps) => {
  // Create city-specific project descriptions
  const getProjectDescription = (index: number, cityName: string) => {
    switch(index) {
      case 1:
        return `Complete fleet wrap for a local ${cityName} plumbing company, increasing their brand visibility throughout ${cityName} and surrounding areas.`;
      case 2:
        return `Matte black color change wrap with custom accents for a personal luxury vehicle in ${cityName}, transforming its appearance completely.`;
      case 3:
        return `Eye-catching commercial graphics for a ${cityName}-based food delivery service, helping them stand out in a competitive market.`;
      default:
        return `Professional vehicle wrap completed in ${cityName}, IL.`;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-brand-navy">
          Recent Vehicle Wrap Projects in {cityName}
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Browse through some of our recent vehicle wrapping projects completed for {cityName} businesses and residents.
          Each project showcases our commitment to quality and attention to detail.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
                <img 
                  src={`https://placehold.co/600x400/0B3954/FFFFFF?text=${cityName}+Project+${item}`}
                  alt={`Vehicle wrap in ${cityName}, IL - Chicago Fleet Wraps`}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-navy">
                  {item === 1 ? `${cityName} Fleet Wrap` : item === 2 ? `${cityName} Color Change Wrap` : `${cityName} Commercial Graphics`}
                </h3>
                <p className="text-gray-700 mb-4">
                  {getProjectDescription(item, cityName)}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                >
                  <Link to="/gallery" className="flex items-center justify-center">
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
            <Link to="/gallery">View All {cityName} Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationProjects;
