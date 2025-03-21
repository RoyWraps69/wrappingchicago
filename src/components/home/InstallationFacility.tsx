
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactStudioImage from '@/components/contact/ContactStudioImage';

const InstallationFacility: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
            Vehicle Wrap Installation Facility
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our climate-controlled Chicago installation facility ensures perfect vehicle wrap application
            regardless of weather conditions. We specialize in car wraps, truck wraps, van wraps,
            and fleet vehicle wraps throughout the Chicagoland area.
          </p>
        </div>
        
        <ContactStudioImage />
        
        <div className="mt-8 text-center">
          <Button
            asChild
            size="lg"
            className="bg-brand-red hover:bg-red-700 text-white"
          >
            <Link to="/gallery">View Our Vehicle Wrap Portfolio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstallationFacility;
