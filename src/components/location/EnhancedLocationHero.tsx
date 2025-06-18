
import React from 'react';
import { City } from '@/data/cities';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star } from 'lucide-react';

interface EnhancedLocationHeroProps {
  city: City;
}

const EnhancedLocationHero = ({ city }: EnhancedLocationHeroProps) => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <section className="bg-gradient-to-r from-brand-navy to-blue-800 text-white py-16 relative">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex text-yellow-400 mr-3">
              <Star className="h-6 w-6" />
              <Star className="h-6 w-6" />
              <Star className="h-6 w-6" />
              <Star className="h-6 w-6" />
              <Star className="h-6 w-6" />
            </div>
            <span className="text-blue-100 font-medium">5-Star Rated Fleet Wraps Company</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {city.name} Fleet Wraps & Vehicle Graphics
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Premier <strong className="text-white">fleet wraps in {city.name}</strong> with over 16,000 vehicles transformed. 
            Professional <strong className="text-white">commercial vehicle wraps {city.name}, IL</strong> services 
            that turn your fleet into powerful mobile advertisements.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg"
            >
              <Link to="/contact">
                Get Free Quote for {city.name}
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg"
            >
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                (312) 597-1286
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-brand-red mb-2">16,000+</div>
              <div className="text-blue-100">Vehicles Wrapped</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-brand-red mb-2">20+ Years</div>
              <div className="text-blue-100">Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-brand-red mb-2">3-5 Days</div>
              <div className="text-blue-100">Fast Turnaround</div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center text-sm text-blue-200">
            <Clock className="h-4 w-4 mr-2" />
            <span>Last updated: {currentDate} | Serving {city.name} and surrounding areas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedLocationHero;
