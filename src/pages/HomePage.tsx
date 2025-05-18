
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import ServicesSection from '@/components/home/ServicesSection';
import InstallationFacility from '@/components/home/InstallationFacility';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import AreasServedSection from '@/components/home/AreasServedSection';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import TrustIndicators from '@/components/home/TrustIndicators';
import HomeSEO from '@/components/home/HomeSEO';
import EasyButtonSection from '@/components/home/EasyButtonSection';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import { Helmet } from 'react-helmet-async';
import { useGalleryImages } from '@/hooks/useGalleryImages';
import { cities } from '@/data/cities';
import Schema from '@/components/Schema';
import PageFAQ from '@/components/common/PageFAQ';
import BusinessLocationSchema from '@/components/schemas/BusinessLocationSchema';

function HomePage() {
  // Get the required images for ServicesSection
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();
  
  // Get Chicago city for schema
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  // Home page FAQ data
  const homeFAQs = [
    {
      question: "How much do vehicle wraps cost in Chicago?",
      answer: "Vehicle wrap costs in Chicago vary by vehicle type and design complexity. Full car wraps typically range from $2,500-$5,000, full truck and van wraps from $3,500-$7,000, and partial wraps start around $1,500. Fleet wraps may receive volume discounts. We offer free, detailed quotes for all projects."
    },
    {
      question: "How long do vehicle wraps last?",
      answer: "With proper care and maintenance, our premium vehicle wraps typically last 5-7 years in Chicago's climate. All our wraps come with a 2-year warranty and are made with durable 3M and Avery Dennison materials that can withstand weather extremes and regular washing."
    },
    {
      question: "Do vehicle wraps damage paint?",
      answer: "No, professional vehicle wraps actually protect your paint when properly installed and removed. Our 3M and Avery vinyl wraps act as a shield against minor scratches, stone chips, and UV damage, helping to preserve your vehicle's original finish."
    },
    {
      question: "How long does it take to wrap a vehicle?",
      answer: "Most vehicle wrap installations take 3-5 business days to complete. Simple designs on smaller vehicles may take 2-3 days, while complex wraps on larger vehicles could take 5-7 days. We ensure thorough preparation, precise installation, and proper curing time."
    },
    {
      question: "Do you provide design services for vehicle wraps?",
      answer: "Yes, our in-house design team creates custom vehicle wrap designs tailored to your brand and marketing goals. We offer complimentary design consultations and can work from your existing brand assets or create something entirely new based on your vision."
    },
    {
      question: "Can I drive my car through a car wash with a wrap?",
      answer: "Yes, but we recommend touchless car washes for wrapped vehicles. Traditional brush car washes can potentially damage the edges of the vinyl wrap. Hand washing with non-abrasive cleaners is the best option for maintaining your wrap's appearance and longevity."
    }
  ];

  return (
    <>
      <HomeSEO />
      <Helmet>
        <link rel="canonical" href="https://www.wrappingchicago.com/" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path="/"
        pageTitle="Vehicle Wraps Chicago | Premium Car & Truck Wrapping Services"
        pageDescription="Chicago's premier vehicle wrap company. Professional car & truck wraps with premium 3M materials. Transform your business with effective mobile advertising."
        faqs={homeFAQs}
        keywords={[
          "vehicle wraps Chicago",
          "car wraps Chicago",
          "truck wraps Chicago",
          "van wraps Chicago",
          "fleet wraps Chicago",
          "commercial vehicle wraps",
          "color change wraps Chicago",
          "vehicle graphics Chicago"
        ]}
        isServicePage={true}
        serviceType="Vehicle Wraps"
        includeSpeakable={true}
        allCities={cities}
      />
      
      <BusinessLocationSchema city={chicagoCity} />

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <InfoBar />
          <QuickLinksBar />
          <ServicesSection 
            fleetWrapVan={fleetWrapVan} 
            colorChangeVan={colorChangeVan} 
            commercialGraphics={commercialGraphics}
          />
          <InstallationFacility />
          <WhyChooseUsSection />
          <AreasServedSection cities={cities} />
          <EasyButtonSection />
          <TrustIndicators />
          <VehicleWrapFAQ />
          
          {/* Add PageFAQ component to homepage */}
          <PageFAQ 
            faqs={homeFAQs}
            serviceName="Vehicle Wraps"
            cityName="Chicago"
          />
        </main>
        <StickyContactButtons />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
