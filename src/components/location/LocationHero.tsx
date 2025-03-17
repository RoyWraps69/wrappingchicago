
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface LocationHeroProps {
  cityName: string;
}

const LocationHero = ({ cityName }: LocationHeroProps) => {
  return (
    <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Premium Vehicle Wraps in {cityName}, IL
          </h1>
          <p className="text-xl mb-8">
            Transform your vehicles with professional wraps from Chicago's most trusted vehicle wrap provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-brand-red hover:bg-red-700 text-white text-lg px-8 py-6 h-auto"
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-navy text-lg px-8 py-6 h-auto"
            >
              <Link to="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;
