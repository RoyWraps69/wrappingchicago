
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import PageFAQ from '@/components/common/PageFAQ';
import { cities } from '@/data/cities';
import Schema from '@/components/Schema';

const FAQPage = () => {
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  // Comprehensive FAQ data
  const faqData = [
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
    },
    {
      question: "What types of vehicles can you wrap?",
      answer: "We can wrap virtually any vehicle including cars, trucks, vans, SUVs, motorcycles, boats, and commercial fleet vehicles. From compact cars to large commercial trucks, our team has experience with all vehicle types and sizes."
    },
    {
      question: "Do you offer partial vehicle wraps?",
      answer: "Yes, we offer partial wraps that can cover specific sections of your vehicle like doors, hoods, or rear panels. Partial wraps are a cost-effective way to achieve significant visual impact while working within your budget."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Vehicle Wrap FAQ - Common Questions | Wrapping Chicago</title>
        <meta name="description" content="Get answers to common questions about vehicle wraps in Chicago. Learn about costs, installation time, durability, and care for car wraps, truck wraps, and fleet graphics." />
        <link rel="canonical" href="https://www.wrappingchicago.com/faq" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path="/faq"
        pageTitle="Vehicle Wrap FAQ - Common Questions | Wrapping Chicago"
        pageDescription="Get answers to common questions about vehicle wraps in Chicago. Learn about costs, installation time, durability, and care for car wraps, truck wraps, and fleet graphics."
        faqs={faqData}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Vehicle Wrap Questions and Answers
              </h1>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Get answers to the most common questions about vehicle wraps in Chicago. 
                Learn about pricing, installation, care, and everything else you need to know.
              </p>
            </header>
          </div>
          
          {/* Moved sections from HomePage */}
          <VehicleWrapFAQ />
          
          <PageFAQ 
            faqs={faqData}
            serviceName="Vehicle Wraps"
            cityName="Chicago"
          />
          
          <div className="container mx-auto py-12 px-4">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-black mb-4">
                Still Have Questions?
              </h2>
              <p className="text-black mb-6">
                Our team is here to help answer any questions about vehicle wraps 
                that weren't covered above. Contact us for personalized answers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:3125971286" 
                  className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Call (312) 597-1286
                </a>
                <a 
                  href="mailto:info@wrappingchicago.com" 
                  className="border-2 border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
