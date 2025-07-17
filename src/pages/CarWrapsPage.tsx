import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import Google2025SEOOptimizer from '@/components/seo/Google2025SEOOptimizer';
import AEOOptimizer from '@/components/seo/AEOOptimizer';
import LocalSEOBooster from '@/components/seo/LocalSEOBooster';
import InternalLinkingSection from '@/components/seo/InternalLinkingSection';
import CarWrapsContent from '@/components/services/car-wraps/CarWrapsContent';
import { Helmet } from 'react-helmet-async';

const CarWrapsPage = () => {
  const domain = "https://www.wrappingchicago.com";
  
  const carWrapKeywords = [
    'personal car wraps Chicago', 'color change wraps', 'custom car graphics',
    'vehicle personalization Chicago', 'automotive vinyl wraps', 'car wrap design'
  ];

  const carWrapFAQs = [
    {
      question: "How much does a car wrap cost in Chicago?",
      answer: "Car wraps in Chicago typically cost $2,500-$4,500 for a full wrap depending on vehicle size and design complexity. Partial wraps start around $1,200."
    },
    {
      question: "Will a wrap damage my car's paint?",
      answer: "No, professional car wraps actually protect your original paint. Quality vinyl can be removed without damage when done properly."
    }
  ];
  
  return (
    <>
      <Google2025SEOOptimizer
        pageTitle="Car Wraps Chicago | Make Your Ride Stand Out"
        pageDescription="Want your car to turn heads? Our Chicago car wraps are perfect for personal vehicles. Custom colors, designs, and graphics that protect your paint while looking amazing."
        businessType="general"
        serviceArea={['Chicago', 'Evanston', 'Naperville', 'Schaumburg']}
        primaryKeywords={carWrapKeywords}
        faqData={carWrapFAQs}
      />
      
      <AEOOptimizer
        businessType="general"
        location="Chicago"
        serviceKeywords={carWrapKeywords}
      />
      
      <LocalSEOBooster
        cityName="Chicago"
        businessType="general"
        serviceRadius={30}
      />
      
      {/* Enhanced Schema for Car Wraps */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Car Wraps Chicago",
            "description": "Professional car wrap installation in Chicago using premium vinyl films for color changes and custom graphics",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Wrapping Chicago",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4711 N. Lamon Ave",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "postalCode": "60630"
              },
              "telephone": "+13125971286"
            },
            "areaServed": {
              "@type": "City",
              "name": "Chicago"
            },
            "offers": {
              "@type": "Offer",
              "price": "2500",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* H1 Heading */}
        <section className="py-20 px-4 bg-gradient-to-br from-background via-background/80 to-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Make Your Ride Stand Out
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Want your car to turn heads? We wrap personal vehicles with amazing colors and custom designs. Protect your paint while looking incredible on Chicago streets.
            </p>
          </div>
        </section>

        {/* Car Wraps Content */}
        <CarWrapsContent />
        
        {/* Internal Linking */}
        <InternalLinkingSection />
      </div>
    </>
  );
};

export default CarWrapsPage;