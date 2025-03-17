
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface LocationHeroProps {
  cityName: string;
}

const LocationHero = ({ cityName }: LocationHeroProps) => {
  return (
    <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-24" id="location-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-brand-red mr-2" />
            <h1 className="text-4xl sm:text-5xl font-bold">
              Vehicle Wraps in {cityName}, IL
            </h1>
          </div>
          <p className="text-xl mb-8">
            Professional fleet wraps, color change wraps, and commercial graphics 
            from Chicago's most trusted vehicle wrap provider serving {cityName} businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-brand-red hover:bg-red-700 text-white text-lg px-8 py-6 h-auto"
              data-wix-link="contact"
            >
              <Link to="/contact">Request a Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-navy text-lg px-8 py-6 h-auto"
              data-wix-link="gallery"
            >
              <Link to="/gallery">View Our {cityName} Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;
