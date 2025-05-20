
import React from 'react';
import { cities } from '@/data/cities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import Schema from '@/components/Schema';
import TruckHero from '@/components/truck-wraps/TruckHero';
import TruckOverview from '@/components/truck-wraps/TruckOverview';
import TruckServices from '@/components/truck-wraps/TruckServices';
import TruckBenefits from '@/components/truck-wraps/TruckBenefits';
import TruckCTA from '@/components/truck-wraps/TruckCTA';
import TruckFAQs from '@/components/truck-wraps/TruckFAQs';
import TruckSEO from '@/components/truck-wraps/TruckSEO';
import BreadcrumbSchema from '@/components/schemas/BreadcrumbSchema';

const TruckWrapsChicago = () => {
  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  // FAQ data for schema
  const faqData = [
    {
      question: "How much do truck wraps cost in Chicago?",
      answer: "Truck wrap costs in Chicago vary by size and complexity. Box truck wraps typically range from $3,000-$6,000, while pickup truck wraps start around $2,000. Partial wraps are available from $1,200."
    },
    {
      question: "How long do truck wraps last?",
      answer: "With proper care and maintenance, our premium truck wraps typically last 5-7 years. All commercial truck wraps come with a 2-year warranty and are made with durable 3M vinyl materials."
    },
    {
      question: "Do truck wraps damage paint?",
      answer: "No, our professional truck wraps protect your vehicle's paint when properly installed and removed. The vinyl acts as a barrier against sun damage, minor scratches, and road debris."
    },
    {
      question: "How long does it take to wrap a truck?",
      answer: "Most commercial truck wraps can be completed in 3-5 business days. Larger vehicles like box trucks or semi-trucks may take 5-7 days depending on design complexity."
    }
  ];
  
  // Create breadcrumb items for truck wraps page
  const breadcrumbItems = [
    {
      position: 1,
      name: "Home",
      item: "https://www.wrappingchicago.com/"
    },
    {
      position: 2,
      name: "Truck Wraps Chicago",
      item: "https://www.wrappingchicago.com/truck-wraps-chicago"
    }
  ];
  
  return (
    <>
      <TruckSEO />
      
      {/* Add explicit breadcrumb schema with itemListElement */}
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <Schema 
        city={chicagoCity}
        path="/truck-wraps-chicago"
        pageTitle="Truck Wraps Chicago | Commercial & Box Truck Wrapping Services"
        pageDescription="Professional truck wraps in Chicago with over 16,000 wraps completed in our 20 years of business. Serving delivery trucks, box trucks, pickup trucks & commercial fleets with expert installation and premium 3M materials."
        faqs={faqData}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs />
          </div>
          
          <TruckHero />
          
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <TruckOverview />
              <TruckServices />
              <TruckBenefits />
              <TruckCTA />
            </div>
          </section>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TruckWrapsChicago;
