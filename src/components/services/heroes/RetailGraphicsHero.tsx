import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';

const RetailGraphicsHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-red via-orange-600 to-brand-navy overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80"
          alt="Retail storefront with window graphics"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Storefront with <span className="text-brand-yellow">Retail Graphics</span>
          </h1>
          <p className="text-xl text-white/90 mb-4">
            Create an immersive brand experience with custom window graphics, wall murals, and promotional displays.
          </p>
          <p className="text-lg text-white/80 mb-8">
            ✓ Custom Designs ✓ Easy Installation ✓ Seasonal Updates
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-brand-navy hover:bg-gray-100">
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

export default RetailGraphicsHero;