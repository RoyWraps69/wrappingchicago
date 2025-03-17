
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = ({ city = 'your area' }: { city?: string }) => {
  return (
    <section className="bg-brand-red text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Vehicles in {city}?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get a custom quote for your fleet vehicles or personal car wrap project today.
          Our team of experts is ready to help you make a statement on the road!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            className="bg-white text-brand-red hover:bg-gray-100 text-lg px-8 py-6 h-auto"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-brand-red text-lg px-8 py-6 h-auto"
          >
            <Link to="/gallery">View Our Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
