
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ArrowRight, Sparkles } from 'lucide-react';

interface LocationHeroProps {
  cityName: string;
}

const LocationHero = ({ cityName }: LocationHeroProps) => {
  return (
    <section className="relative overflow-hidden py-32 min-h-[90vh] flex items-center bg-gray-50" id="location-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-red/90 text-white mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="font-medium">Serving {cityName}, Illinois</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Premium Vehicle Wraps in {cityName}
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Transform your vehicles with professional wraps that make your business stand out on every street in {cityName}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-red hover:bg-red-700 text-white font-medium px-8 py-6 h-auto rounded-full"
              >
                <Link to="/contact" className="inline-flex items-center">
                  Request a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 bg-white text-gray-800 hover:bg-gray-100 font-medium px-8 py-6 h-auto rounded-full"
              >
                <a href="tel:3125971286" className="inline-flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  (312) 597-1286
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 bg-white text-gray-800 hover:bg-gray-100 font-medium px-8 py-6 h-auto rounded-full flex items-center"
              >
                <Link to="/ai-wrap-ideas" className="inline-flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" />
                  AI Wrap Ideas
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-red/20 rounded-full blur-xl"></div>
              <img 
                src="/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png" 
                alt={`Professional vehicle wraps in ${cityName}`}
                className="rounded-lg shadow-2xl relative z-10 transform rotate-2"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur rounded-lg shadow-xl p-4 transform -rotate-3 z-20 border border-gray-200">
                <p className="text-gray-800 font-bold">{cityName}'s Most Trusted Wrap Provider</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" className="fill-white">
          <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default LocationHero;
