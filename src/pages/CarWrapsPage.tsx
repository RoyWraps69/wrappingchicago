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
    'car wraps Chicago', 'custom car wraps', 'vinyl car wraps', 'auto wraps',
    'vehicle wrap installation', 'car wrap cost', 'car wrap near me', 'custom vehicle wraps',
    'matte car wraps', 'chrome car wraps', 'color change wraps', 'premium car wraps',
    '3M car wraps', 'Avery Dennison wraps', 'professional car wraps', 'affordable car wraps',
    'same day car wrap', 'car wrap design', 'vehicle graphics', 'automotive vinyl wraps',
    'car wrap installation', 'vinyl wrap installation', 'mobile car wraps', 'car wrap shop near me',
    'car wrap removal', 'partial car wraps', 'full car wraps', 'car wrap templates'
  ];

  const carWrapFAQs = [
    {
      question: "How much does a car wrap cost in Chicago?",
      answer: "Car wrap cost varies by size and design. Full car wraps start at $2,500, partial wraps from $1,200. Cost to wrap a car depends on vehicle size, vinyl quality, and design complexity. We offer affordable car wraps with premium materials."
    },
    {
      question: "Will a car wrap damage my vehicle's paint?",
      answer: "Professional car wraps protect your paint. Our vinyl wraps use removable adhesive that won't damage factory paint when properly removed by certified installers."
    },
    {
      question: "How long does car wrap installation take?",
      answer: "Car wrap installation typically takes 2-3 days. Same day car wrap service available for simple designs. Mobile car wraps can be installed at your location."
    }
  ];
  
  return (
    <>
      <Google2025SEOOptimizer
        pageTitle="Car Wraps Chicago | Custom Vehicle Wraps & Vinyl Wrap Installation Near Me"
        pageDescription="Premium car wraps Chicago! Custom vinyl car wraps, matte wraps, chrome wraps, color change wraps. Professional car wrap installation, mobile service. 3M & Avery Dennison materials. Car wrap cost from $1,200."
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
              Custom Car Wraps Chicago | Vehicle Wraps & Vinyl Wrap Installation Near Me
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your ride with premium car wraps! Custom vehicle wraps, color change wraps, matte wraps, chrome wraps. Professional vinyl wrap installation using 3M and Avery Dennison materials. Car wrap cost from $1,200 - mobile service available.
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