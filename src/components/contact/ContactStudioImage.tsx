
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Truck, Car, Shield, Zap } from 'lucide-react';

const ContactStudioImage = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img 
          src="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png" 
          alt="Wrapping Chicago installation facility - Professional vehicle wrap, car wrap, truck wrap, and van wrap installation shop in Chicago" 
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black/90 via-brand-black/70 to-transparent p-6">
          <h3 className="text-white text-xl font-bold mb-3 drop-shadow-md">Need Vehicle Wraps in Chicago?</h3>
          
          {/* Service badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-brand-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-0.5 rounded flex items-center border border-brand-gold/20">
              <Car className="w-3 h-3 mr-1 text-brand-gold" /> Car Wraps
            </span>
            <span className="bg-brand-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-0.5 rounded flex items-center border border-brand-gold/20">
              <Truck className="w-3 h-3 mr-1 text-brand-gold" /> Truck Wraps
            </span>
            <span className="bg-brand-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-0.5 rounded flex items-center border border-brand-gold/20">
              <Shield className="w-3 h-3 mr-1 text-brand-gold" /> Fleet Wraps
            </span>
            <span className="bg-brand-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-0.5 rounded flex items-center border border-brand-gold/20">
              <Zap className="w-3 h-3 mr-1 text-brand-gold" /> Vinyl Graphics
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              variant="gold"
            >
              <Link to="/contact">Get a Free Quote Today</Link>
            </Button>
            <Button
              asChild
              variant="outlineWhite"
            >
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                (312) 597-1286
              </a>
            </Button>
          </div>
          
          <p className="text-white text-sm mt-3 drop-shadow">
            Premium Avery and 3M vehicle wraps with expert installation and 2-year warranty
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactStudioImage;
