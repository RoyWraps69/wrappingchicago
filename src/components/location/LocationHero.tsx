
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ArrowRight, Sparkles, MessageSquare, Car, Truck, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useIsMobile } from '@/hooks/use-mobile';

interface LocationHeroProps {
  cityName: string;
}

const LocationHero = ({ cityName }: LocationHeroProps) => {
  const isMobile = useIsMobile();
  
  // Schema data for voice search and AI assistants
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".location-hero-title", ".location-hero-description", ".location-service-title"]
    },
    "name": `Premium Vehicle Wraps in ${cityName}`,
    "description": `Transform your cars, trucks, vans, and fleet vehicles with professional wraps that make your business stand out on every street in ${cityName}.`,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": `Wrapping Chicago - Vehicle Wraps in ${cityName}`,
      "description": `Professional vehicle wrapping services in ${cityName}, IL. Car wraps, truck wraps, van wraps and fleet graphics with premium 3M materials.`,
      "telephone": "(312) 597-1286",
      "areaServed": {
        "@type": "City",
        "name": cityName
      }
    }
  };
  
  return (
    <section className="relative overflow-hidden py-16 md:py-32 min-h-[80vh] md:min-h-[90vh] flex items-center bg-gray-50" id="location-hero">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(locationSchema)}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        {/* Contact Bar - Prominent at the top */}
        <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 mb-6 md:mb-8 border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <h3 className="text-base md:text-lg font-semibold text-brand-navy">Need Vehicle Wraps in {cityName}?</h3>
            <p className="text-sm md:text-base text-gray-700">Premium car wraps, truck wraps, van wraps, and fleet graphics</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              asChild
              className="bg-brand-red hover:bg-red-700 text-white w-full sm:w-auto"
            >
              <Link to="/contact" className="inline-flex items-center justify-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Get a Free Quote Today
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white w-full sm:w-auto"
            >
              <a href="tel:3125971286" className="inline-flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" />
                (312) 597-1286
              </a>
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 md:px-4 py-1 md:py-2 rounded-full bg-brand-red/90 text-white mb-4 md:mb-6">
              <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              <span className="font-medium text-xs md:text-sm">Serving {cityName}, Illinois</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6 location-hero-title">
              Premium Vehicle Wraps in {cityName}
            </h1>
            
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 max-w-lg location-hero-description">
              Transform your cars, trucks, vans, and fleet vehicles with professional wraps that make your business stand out on every street in {cityName}.
            </p>
            
            {/* Services Overview Section */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-6 location-service-title">
              <div className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
                <Car className="h-4 w-4 md:h-5 md:w-5 text-brand-red" />
                <span className="text-xs md:text-sm font-medium">Car Wraps</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
                <Truck className="h-4 w-4 md:h-5 md:w-5 text-brand-red" />
                <span className="text-xs md:text-sm font-medium">Truck Wraps</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red md:w-5 md:h-5">
                  <path d="M10 17h4V8h-4z"/>
                  <path d="M2 9v8h10V9c0-4-1.5-5-5-5S2 5 2 9z"/>
                  <path d="M12 9v8h10V9c0-4-1.5-5-5-5s-5 1-5 5z"/>
                </svg>
                <span className="text-xs md:text-sm font-medium">Van Wraps</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-brand-red" />
                <span className="text-xs md:text-sm font-medium">Vinyl Wraps</span>
              </div>
            </div>
            
            {/* Enhanced Contact Buttons Section */}
            <div className="bg-black/5 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gray-200">
              <h3 className="text-gray-800 font-semibold mb-3 text-sm md:text-base">Ready to transform your vehicle in {cityName}?</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size={isMobile ? "default" : "lg"}
                  className="bg-brand-red hover:bg-red-700 text-white font-medium px-4 md:px-8 py-2 md:py-6 h-auto rounded-full w-full sm:w-auto"
                >
                  <Link to="/contact" className="inline-flex items-center justify-center">
                    <MessageSquare className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Request a Free Quote
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size={isMobile ? "default" : "lg"}
                  className="border-gray-300 bg-white text-gray-800 hover:bg-gray-100 font-medium px-4 md:px-8 py-2 md:py-6 h-auto rounded-full w-full sm:w-auto"
                >
                  <a href="tel:3125971286" className="inline-flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    (312) 597-1286
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                variant="outline"
                size={isMobile ? "default" : "lg"}
                className="border-gray-300 bg-white text-gray-800 hover:bg-gray-100 font-medium px-4 md:px-8 py-2 md:py-6 h-auto rounded-full flex items-center justify-center w-full sm:w-auto"
              >
                <Link to="/gallery">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  View Our Portfolio
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size={isMobile ? "default" : "lg"}
                className="border-gray-300 bg-white text-gray-800 hover:bg-gray-100 font-medium px-4 md:px-8 py-2 md:py-6 h-auto rounded-full flex items-center justify-center w-full sm:w-auto"
              >
                <Link to="/ai-wrap-ideas">
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
                alt={`Professional commercial vehicle wrap installation in ${cityName}, IL - fleet branding services with 3M vinyl materials`}
                className="rounded-lg shadow-2xl relative z-10 transform rotate-2"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur rounded-lg shadow-xl p-4 transform -rotate-3 z-20 border border-gray-200">
                <p className="text-gray-800 font-bold">{cityName}'s Most Trusted Vehicle Wrap Provider</p>
                <p className="text-sm text-gray-600">Car wraps • Truck wraps • Van wraps • Fleet graphics</p>
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
