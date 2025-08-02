import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';

const FleetWrapsHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-brand-red overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80"
          alt="Professional fleet of wrapped service vehicles"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Turn Your Fleet Into a <span className="text-brand-red">Customer Magnet</span>
          </h1>
          <p className="text-xl text-white/90 mb-4">
            Get 30% more service calls with professional fleet wraps that make your business impossible to ignore.
          </p>
          <p className="text-lg text-white/80 mb-8">
            ✓ Same Week Installation ✓ Won't Hurt Your Paint ✓ ROI Guaranteed
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (312) 597-1286
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
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

export default FleetWrapsHero;