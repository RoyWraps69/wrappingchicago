
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TruckSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Truck Wraps in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Get truck wraps in Chicago IL services for standout advertising or rugged protection. High-quality vinyl graphics installed for lasting impact on the road." 
      />
      <link rel="canonical" href={`${domain}/services/truck-wraps`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta property="og:title" content={`Truck Wraps in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get truck wraps in Chicago IL services for standout advertising or rugged protection. High-quality vinyl graphics installed for lasting impact on the road." />
      <meta property="og:url" content={`${domain}/services/truck-wraps`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Truck Wraps in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get truck wraps in Chicago IL services for standout advertising or rugged protection. High-quality vinyl graphics installed for lasting impact on the road." />
      <meta name="twitter:image" content={`${domain}/og-image.png`} />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="keywords" content="truck wraps Chicago, commercial truck wraps, box truck wraps, pickup truck wraps, delivery truck wraps, truck graphics Chicago, truck lettering Chicago, semi truck wraps, truck advertising, fleet truck wraps Chicago, business truck wraps Chicago, truck vinyl wraps, truck wrap installation Chicago, truck wrap cost, custom truck wraps Chicago" />
      
      {/* Structured Data for Truck Wraps Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Truck Wraps Chicago",
          "serviceType": "Vehicle Wrapping",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Wrapping Chicago",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4711 N. Lamon Ave",
              "addressLocality": "Chicago",
              "addressRegion": "IL",
              "postalCode": "60630",
              "addressCountry": "US"
            },
            "telephone": "+13125971286",
            "priceRange": "$$$"
          },
          "areaServed": {
            "@type": "City",
            "name": "Chicago",
            "sameAs": "https://en.wikipedia.org/wiki/Chicago"
          },
          "description": "Get truck wraps in Chicago IL services for standout advertising or rugged protection. High-quality vinyl graphics installed for lasting impact on the road.",
          "offers": {
            "@type": "Offer",
            "price": "2500",
            "priceCurrency": "USD",
            "priceValidUntil": `${currentYear}-12-31`,
            "availability": "https://schema.org/InStock"
          },
          "url": `${domain}/services/truck-wraps`
        })}
      </script>
    </Helmet>
  );
};

export default TruckSEO;
