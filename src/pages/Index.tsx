
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { cities } from '@/data/cities';
import { galleryItems } from '@/data/galleryItems';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import AreasServedSection from '@/components/home/AreasServedSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import HomeSEO from '@/components/home/HomeSEO';

const Index = () => {
  // Filter for van images from the gallery
  const vanImages = galleryItems.filter(item => 
    item.title.toLowerCase().includes('van') || 
    item.description.toLowerCase().includes('van')
  ).slice(0, 3); // Take the first 3 van-related images
  
  // Get specific van image for fleet wraps section - prioritize Bratcher HVAC
  const fleetWrapVan = galleryItems.find(item => 
    item.title.includes('Bratcher HVAC') && 
    item.category === 'Fleet Wraps'
  )?.image || "/lovable-uploads/fc2146ab-62aa-4fc9-85aa-3582af7ce980.png";
  
  // Get specific van image for color change wraps section
  const colorChangeVan = galleryItems.find(item => 
    item.title.toLowerCase().includes('van') && 
    item.category === 'Color Change Wraps'
  )?.image || vanImages[0]?.image || "/lovable-uploads/230338ed-a8d9-4584-bb4c-ba33c793f7ab.png";
  
  // Get specific image for commercial graphics section
  const commercialGraphics = galleryItems.find(item => 
    item.title === 'Blue Truck Commercial Graphics' && 
    item.category === 'Commercial Graphics'
  )?.image || "/lovable-uploads/fb7a4b97-4b57-4b2e-8f81-42a1098270df.png";

  return (
    <>
      <HomeSEO />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <ServicesSection 
            fleetWrapVan={fleetWrapVan}
            colorChangeVan={colorChangeVan}
            commercialGraphics={commercialGraphics}
          />
          <AreasServedSection cities={cities} />
          <WhyChooseUsSection />
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
