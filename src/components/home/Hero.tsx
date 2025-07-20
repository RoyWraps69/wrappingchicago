
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  console.log('Hero component rendering...');
  return (
    <div className="hero-fullscreen bg-black relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/99d82949-5568-4a29-8a3a-72ff2ee6836e.png"
          alt="Chicago vehicle transformation specialists - comprehensive fleet of custom wrapped automobiles, commercial trucks, and branded business vehicles displaying advanced vinyl application techniques and creative design solutions"
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
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider text-white mb-6 text-center speakable">
          Turn Your Truck Into a <span className="text-brand-red">Customer Magnet</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-white mb-10 max-w-2xl mx-auto text-center speakable">
          Get 30% More Service Calls with Professional Vehicle Wraps That Won't Damage Your Paint
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button
            asChild
            size="xl"
            className="font-bold text-lg px-8 py-4 bg-brand-red hover:bg-red-700 text-white border-2 border-brand-red hover:border-red-700 shadow-lg"
          >
            <a href="tel:3125971286" className="inline-flex items-center text-white">
              <Phone className="mr-3 h-6 w-6" />
              Call Now: (312) 597-1286
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="xl"
            className="font-semibold text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            <Link to="/contact" className="inline-flex items-center text-white hover:text-black">
              Get Free Quote
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block">
          <p className="text-white font-semibold text-lg">
            🚀 <span className="text-brand-red">Same Week Installation</span> • Won't Hurt Your Paint • 20+ Years Experience
          </p>
        </div>
        
        {/* Results-focused trust signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-sm">
          <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <span className="text-2xl font-bold text-brand-red">16,000+</span>
            <span className="text-center">Vehicles Wrapped</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <span className="text-2xl font-bold text-brand-red">24/7</span>
            <span className="text-center">Mobile Service</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <span className="text-2xl font-bold text-brand-red">2-3 Days</span>
            <span className="text-center">Installation Time</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <span className="text-2xl font-bold text-brand-red">5-7 Years</span>
            <span className="text-center">Wrap Lifespan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
