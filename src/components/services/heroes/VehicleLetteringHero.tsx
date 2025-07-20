import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';

const VehicleLetteringHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-blue via-brand-navy to-brand-red overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=2000&q=80"
          alt="Professional vehicle lettering on commercial van"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="text-brand-yellow">Vehicle Lettering</span>
          </h1>
          <p className="text-xl text-white/90 mb-4">
            Clean, professional lettering that gets your business noticed without breaking the budget.
          </p>
          <p className="text-lg text-white/80 mb-8">
            ✓ Custom Design ✓ Premium Vinyl ✓ Fast Installation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (312) 597-1286
              </a>
            </Button>
            <Button asChild size="lg" variant="outlineWhite">
              <Link to="/contact" className="inline-flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleLetteringHero;