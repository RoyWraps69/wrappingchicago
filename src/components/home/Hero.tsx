
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Award, Clock, Wrench } from 'lucide-react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(true);
  const backgroundImageUrl = '/lovable-uploads/36647423-d723-4af9-8807-039add30c418.png';

  // Create an image object to check if the image loads
  React.useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      console.error('Failed to load hero background image:', backgroundImageUrl);
      setImageLoaded(false);
    };
  }, [backgroundImageUrl]);

  return (
    <section className="relative w-full overflow-hidden bg-brand-navy" 
      style={{ 
        backgroundColor: '#0F172A', // Fallback background color
        backgroundImage: imageLoaded ? `url('${backgroundImageUrl}')` : 'none',
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Removed the dark overlay div */}
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-3xl py-16">
          <div className="animate-fade-in mb-4">
            <span className="bg-brand-red/90 text-white px-4 py-2 rounded-full text-sm uppercase font-medium tracking-wide shadow-xl">
              Chicago's Premier Vehicle Wrap Specialist
            </span>
          </div>
              
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-4 animate-enter drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]" style={{ animationDelay: "0.2s", textShadow: '0 6px 12px rgba(0,0,0,0.8)' }}>
            Transform Your <span className="text-brand-red">Vehicle</span>. Elevate Your <span className="text-brand-red">Brand</span>.
          </h1>
              
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-enter drop-shadow-[0_3px_5px_rgba(0,0,0,0.9)]" style={{ animationDelay: "0.4s", textShadow: '0 4px 8px rgba(0,0,0,0.7)' }}>
            Professional vehicle wraps that turn heads and make your business stand out on every street in Chicago.
          </p>
              
          <div className="flex flex-col sm:flex-row gap-4 animate-enter" style={{ animationDelay: "0.6s" }}>
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-red-700 text-white text-lg px-8 py-7 h-auto rounded-full shadow-2xl"
            >
              <Link to="/contact" className="inline-flex items-center">
                Request a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
                
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 bg-white/20 text-white hover:bg-white hover:text-brand-navy text-lg px-8 py-7 h-auto rounded-full shadow-2xl backdrop-blur-sm"
            >
              <Link to="/ai-wrap-ideas" className="inline-flex items-center">
                <Sparkles className="mr-2 h-5 w-5" />
                Try Our AI Wrap Designer
              </Link>
            </Button>
          </div>
              
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 animate-enter" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                <Award className="h-8 w-8 text-brand-red drop-shadow-lg" />
              </div>
              <span className="ml-3 text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Premium Materials</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                <Shield className="h-8 w-8 text-brand-red drop-shadow-lg" />
              </div>
              <span className="ml-3 text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">2-Year Warranty</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                <Wrench className="h-8 w-8 text-brand-red drop-shadow-lg" />
              </div>
              <span className="ml-3 text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Expert Installation</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                <Clock className="h-8 w-8 text-brand-red drop-shadow-lg" />
              </div>
              <span className="ml-3 text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Quick Turnaround</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider - reduced height */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48.3C640,53,800,75,960,75C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
