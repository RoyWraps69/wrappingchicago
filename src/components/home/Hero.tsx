
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-fullscreen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="hero-overlay"></div>
        <img 
          src="/lovable-uploads/5fd5eb2e-668b-49dc-adbb-c49462cde0ed.png" 
          alt="Professional commercial van wrap for Arnold Electric - premium vehicle graphics in Chicago" 
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      
      <div className="hero-content">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider text-white mb-6">
          Fleet Wraps That Dominate.
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-white/90 mb-10 max-w-2xl mx-auto">
          From box trucks to Corvettes — we make your brand impossible to ignore.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <Button
            asChild
            size="xl"
            variant="gradient"
            animation="glow"
            className="font-semibold"
          >
            <Link to="/contact" className="inline-flex items-center">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="xl"
            className="border-white text-white hover:bg-white/10"
          >
            <a href="tel:3125971286" className="inline-flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              (312) 597-1286
            </a>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/70 text-sm">
          <span className="flex items-center">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2"></span>
            Premium 3M Materials
          </span>
          <span className="flex items-center">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2"></span>
            16,000+ Wraps Completed
          </span>
          <span className="flex items-center">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2"></span>
            5-Year Warranty
          </span>
          <span className="flex items-center">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2"></span>
            Serving All of Chicago
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
