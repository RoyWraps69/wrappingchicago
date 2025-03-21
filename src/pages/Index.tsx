
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

const Index = () => {
  // Use our custom hook to get the images
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();

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
