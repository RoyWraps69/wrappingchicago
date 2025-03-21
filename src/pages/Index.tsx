
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { cities } from '@/data/cities';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import AreasServedSection from '@/components/home/AreasServedSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import HomeSEO from '@/components/home/HomeSEO';
import { useGalleryImages } from '@/hooks/useGalleryImages';
import Schema from '@/components/Schema';
import AIWrapSchema from '@/components/ai-wrap-ideas/AIWrapSchema';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

const Index = () => {
  // Use our custom hook to get the images
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();
  
  // For the Schema component, choose Chicago as the default city
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];

  return (
    <>
      <HomeSEO />
      <Schema 
        city={chicagoCity} 
        path="/"
        pageTitle="Vehicle Wraps Chicago | Premium Fleet & Color Change Wrapping Services"
        pageDescription="Chicago's leading vehicle wrap company offering professional fleet wraps, color change wraps, & commercial graphics with expert installation and premium materials."
      />
      <AIWrapSchema />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          
          {/* Fixed Contact Buttons */}
          <div className="sticky top-4 z-50 w-full max-w-2xl mx-auto px-4">
            <div className="flex justify-center gap-4 p-3 bg-black/80 backdrop-blur-sm rounded-full shadow-lg border border-white/10">
              <Button
                asChild
                size="sm"
                className="bg-brand-red hover:bg-red-700 text-white rounded-full"
              >
                <Link to="/contact" className="inline-flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Get a Free Quote
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full"
              >
                <a href="tel:3125971286" className="inline-flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  (312) 597-1286
                </a>
              </Button>
            </div>
          </div>
          
          <div className="py-12 racing-stripes">
            <ServicesSection 
              fleetWrapVan={fleetWrapVan}
              colorChangeVan={colorChangeVan}
              commercialGraphics={commercialGraphics}
            />
          </div>
          
          <WhyChooseUsSection />
          
          <div className="py-12 carbon-fiber-light">
            <AreasServedSection cities={cities} />
          </div>
          
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
