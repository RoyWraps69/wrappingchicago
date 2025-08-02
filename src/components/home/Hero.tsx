import React, { memo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = memo(() => {
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  }, []);

  const handleImageLoad = useCallback(() => {
    // Image loaded successfully
  }, []);

  return (
    <div className="hero-fullscreen bg-gradient-to-br from-brand-navy via-gray-900 to-black relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/99d82949-5568-4a29-8a3a-72ff2ee6836e.png"
          alt="Chicago vehicle transformation specialists - comprehensive fleet of custom wrapped automobiles, commercial trucks, and branded business vehicles displaying advanced vinyl application techniques and creative design solutions"
          className="w-full h-full object-cover opacity-30"
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="eager"
        />
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      
      <div className="hero-content relative z-20 text-center max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wider text-white mb-8 text-center speakable animate-fade-in">
          Turn Your Truck Into a <span className="text-brand-red bg-gradient-to-r from-brand-red to-red-500 bg-clip-text text-transparent">Customer Magnet</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-100 mb-12 max-w-4xl mx-auto text-center speakable leading-relaxed">
          Get 30% More Service Calls with Professional Vehicle Wraps That Won't Damage Your Paint
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <Button
            asChild
            size="lg"
            className="font-bold text-lg px-10 py-5 bg-brand-red hover:bg-red-600 text-white border-2 border-brand-red hover:border-red-600 shadow-2xl hover:shadow-brand-red/25 transition-all duration-300 transform hover:scale-105"
          >
            <a href="tel:3125971286" className="inline-flex items-center text-white">
              <Phone className="mr-3 h-6 w-6" />
              Call Now: (312) 597-1286
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-semibold text-lg px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-brand-navy bg-transparent backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/contact" className="inline-flex items-center text-white hover:text-brand-navy">
              Get Free Quote
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
        
        <div className="glass-effect rounded-xl p-6 mb-12 inline-block shadow-2xl">
          <p className="text-white font-semibold text-lg lg:text-xl">
            🚀 <span className="text-brand-red">Same Week Installation</span> • Won't Hurt Your Paint • 20+ Years Experience
          </p>
        </div>
        
        {/* Enhanced trust signals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-white">
          <div className="flex flex-col items-center p-6 glass-effect rounded-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <span className="text-3xl lg:text-4xl font-bold text-brand-red mb-2">16,000+</span>
            <span className="text-center font-medium">Vehicles Wrapped</span>
          </div>
          <div className="flex flex-col items-center p-6 glass-effect rounded-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <span className="text-3xl lg:text-4xl font-bold text-brand-red mb-2">24/7</span>
            <span className="text-center font-medium">Mobile Service</span>
          </div>
          <div className="flex flex-col items-center p-6 glass-effect rounded-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <span className="text-3xl lg:text-4xl font-bold text-brand-red mb-2">2-3 Days</span>
            <span className="text-center font-medium">Installation Time</span>
          </div>
          <div className="flex flex-col items-center p-6 glass-effect rounded-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <span className="text-3xl lg:text-4xl font-bold text-brand-red mb-2">5-7 Years</span>
            <span className="text-center font-medium">Wrap Lifespan</span>
          </div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;