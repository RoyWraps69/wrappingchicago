
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { City } from '@/data/cities';

interface LocationHeroProps {
  cityName: string;
}

const LocationHero = ({ cityName }: LocationHeroProps) => {
  return (
    <section className="relative bg-brand-navy overflow-hidden py-28" id="location-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-red/10 text-brand-red mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="font-medium">Serving {cityName}, Illinois</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Premier Vehicle Wraps in {cityName}
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-lg">
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
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-brand-navy font-medium px-8 py-6 h-auto rounded-full"
              >
                <a href="tel:3125971286" className="inline-flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  (312) 597-1286
                </a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-red/20 rounded-full blur-xl"></div>
              <img 
                src="https://placehold.co/600x400/FF4A1C/FFFFFF?text=Vehicle+Wrap" 
                alt={`Professional vehicle wraps in ${cityName}`}
                className="rounded-lg shadow-2xl relative z-10 transform rotate-2"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 transform -rotate-3 z-20">
                <p className="text-brand-navy font-bold">{cityName}'s Most Trusted Wrap Provider</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default LocationHero;
