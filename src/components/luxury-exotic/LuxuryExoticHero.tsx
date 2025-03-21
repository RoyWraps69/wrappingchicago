
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';

const LuxuryExoticHero = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=2000&q=80"
          alt="Exotic Lamborghini with premium wrap finish"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium Wrapping Services for Exotic & Luxury Vehicles
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Specialized care for Ferrari, Lamborghini, Porsche, McLaren, Aston Martin, and other high-end automobiles.
            Trust your exotic car to Chicago's premier luxury vehicle wrap specialists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
              <Link to="/contact" className="inline-flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Request a Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (312) 597-1286
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryExoticHero;
