import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import InternalLinkingSection from '@/components/seo/InternalLinkingSection';
import CarWrapsContent from '@/components/services/car-wraps/CarWrapsContent';
import { Helmet } from 'react-helmet-async';

const CarWrapsPage = () => {
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <>
      <PageSEO 
        title="Car Wraps Chicago | Premium Vehicle Wraps & Color Changes"
        description="Professional car wraps in Chicago using premium 3M and Avery vinyl films. Complete color changes, custom graphics, and paint protection. Free quotes, certified installation, 5-year warranty on all car wrap services."
        keywords={[
          "car wraps chicago",
          "vehicle wraps chicago", 
          "color change wraps chicago",
          "custom car wraps",
          "3m car wraps chicago",
          "avery car wraps",
          "car wrap installation chicago",
          "automotive vinyl wraps",
          "chicago car graphics",
          "professional car wraps"
        ]}
        canonicalUrl={`${domain}/car-wraps`}
        h1="Professional Car Wraps Chicago"
        h2={["Premium Vinyl Materials", "Expert Installation", "Custom Design Services"]}
        h3={["3M Certified Installation", "5-Year Material Warranty", "Free Design Consultation"]}
        pageType="service"
        businessSchema={true}
        serviceSchema={true}
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
              Professional Car Wraps Chicago
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your vehicle with premium vinyl wraps. Expert installation, custom designs, and guaranteed results across Chicagoland.
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