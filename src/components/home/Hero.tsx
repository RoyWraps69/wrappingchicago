
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-brand-navy text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-transparent opacity-90 z-10"></div>
        <img 
          src="/lovable-uploads/199b8977-07e4-488c-8e27-0ad83b25af33.jpg" 
          alt="Professional vehicle wrap on sports car in Chicago - premium 3M installation" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Professional Vehicle Wraps in Chicago, IL
          </h1>
          <p className="text-xl mb-8 max-w-xl">
            Transform your cars, trucks, vans, and fleet vehicles with striking wraps that make your business stand out on every street
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-red-700 text-white"
            >
              <Link to="/contact" className="inline-flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Get a Free Quote
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-navy"
            >
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                (312) 597-1286
              </a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-200 text-sm">
            <span>Serving Chicago and All Suburbs</span>
            <span className="mx-2">•</span>
            <span>Premium 3M Materials</span>
            <span className="mx-2">•</span>
            <span>Expert Installation</span>
            <span className="mx-2">•</span>
            <Link to="/gallery" className="flex items-center hover:text-white font-medium">
              View Gallery
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
