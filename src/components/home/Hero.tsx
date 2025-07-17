
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-fullscreen bg-black relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/99d82949-5568-4a29-8a3a-72ff2ee6836e.png"
          alt="Professional vehicle wraps in Chicago - fleet of wrapped cars, trucks, and commercial vehicles showcasing premium 3M vinyl materials and expert installation"
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            console.log('Hero image failed to load:', (e.target as HTMLImageElement).src);
          }}
          onLoad={() => {
            console.log('Hero image loaded successfully');
          }}
        />
      </div>
      
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 z-10 bg-black/40"></div>
      
      <div className="hero-content relative z-20 text-center max-w-6xl mx-auto px-4">
        {/* H1 - Primary SEO Target */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider text-white mb-6 text-center speakable">
          Your Truck is Your Best Billboard
        </h1>
        
        {/* H2 - Supporting SEO Content */}
        <h2 className="text-xl md:text-2xl font-medium text-white mb-10 max-w-2xl mx-auto text-center speakable">
          Chicago Plumbers, Electricians & HVAC Guys: Get More Calls with Professional Vehicle Wraps That Actually Work
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <Button
            asChild
            size="xl"
            variant="gradient"
            animation="glow"
            className="font-semibold text-white bg-brand-red hover:bg-red-700"
          >
            <Link to="/contact" className="inline-flex items-center text-white">
              Schedule Perfection Now!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="xl"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            <a href="tel:3125971286" className="inline-flex items-center text-white hover:text-black">
              <Phone className="mr-2 h-5 w-5" />
              (312) 597-1286
            </a>
          </Button>
        </div>
        
        {/* Trust Signals with proper semantic markup */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white text-sm">
          <span className="flex items-center text-white speakable">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2"></span>
            800+ Trade Vehicles Wrapped
          </span>
          <span className="flex items-center text-white speakable">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2"></span>
            Same Week Installation
          </span>
          <span className="flex items-center text-white speakable">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2"></span>
            Won't Damage Your Paint
          </span>
          <span className="flex items-center text-white speakable">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2"></span>
            All Chicago Suburbs
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
