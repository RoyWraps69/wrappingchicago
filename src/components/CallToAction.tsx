
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Camera } from 'lucide-react';

const CallToAction = ({ city = 'your area' }: { city?: string }) => {
  return (
    <section className="bg-brand-red text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to Transform Your Vehicles in {city}?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Get a custom quote for your fleet vehicles, color change wraps, or commercial graphics project today.
          Our team of experts is ready to help you make a statement on the road!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            variant="white"
            className="text-lg px-8 py-5 h-auto"
          >
            <Link to="/contact" className="inline-flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Perfection Now!
            </Link>
          </Button>
          <Button
            asChild
            variant="outlineWhite"
            className="text-lg px-8 py-5 h-auto"
          >
            <Link to="/gallery" className="inline-flex items-center">
              <Camera className="mr-2 h-5 w-5" />
              View Our Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
