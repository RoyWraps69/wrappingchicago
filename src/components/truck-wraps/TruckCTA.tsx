
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

const TruckCTA = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-brand-navy mb-6">
        Ready to Transform Your Trucks?
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
        Contact Wrapping Chicago today for a free consultation and quote on your truck wrap project. 
        Our expert team will guide you through the process from design to installation, ensuring your 
        commercial trucks make the maximum impact on Chicago streets.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="bg-brand-red hover:bg-red-700 text-white"
        >
          <Link to="/contact" className="inline-flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" />
            Get a Free Truck Wrap Quote
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
        >
          <a href="tel:3125971286" className="inline-flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Call (312) 597-1286
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TruckCTA;
