
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const ContactStudioImage = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img 
          src="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png" 
          alt="Wrapping Chicago installation facility - Professional fleet wrap installation shop for commercial vehicles in Chicago" 
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="text-white text-xl font-bold mb-3">Need Help? Contact Us Now</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="bg-brand-red hover:bg-red-700 text-white"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                (312) 597-1286
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactStudioImage;
