import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocationPageSEOProps {
  location: {
    name: string;
    slug: string;
    county: string;
    zipCodes: string[];
    landmarks: string[];
    description: string;
    neighborhoods?: string[];
  };
}

const LocationPageSEO: React.FC<LocationPageSEOProps> = ({ location }) => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  const pageTitle = `Vehicle Wraps ${location.name} | Car Wraps, Truck Wraps & Fleet Graphics | ${currentYear}`;
  const metaDescription = location.description;
  
  const keywords = [
    `vehicle wraps ${location.name}`,
    `car wraps ${location.name}`,
    `truck wraps ${location.name}`,
    `van wraps ${location.name}`,
    `fleet wraps ${location.name}`,
    `vinyl wraps ${location.name}`,
    `vehicle graphics ${location.name}`,
    `auto wraps ${location.name}`,
    ...location.neighborhoods?.map(n => `vehicle wraps ${n}`) || [],
    ...location.landmarks.map(l => `vehicle wraps near ${l}`)
  ];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={`${domain}/locations/${location.slug}`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`${domain}/locations/${location.slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta name="twitter:site" content="@wrappingchicago" />
      
      {/* Local SEO */}
      <meta name="author" content="Wrapping Chicago" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={location.name} />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Location-specific structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Wrapping Chicago",
          "description": `Professional vehicle wraps serving ${location.name} and surrounding areas`,
          "url": `${domain}/locations/${location.slug}`,
          "telephone": "+13125971286",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4711 N. Lamon Ave",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60630",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.9658",
            "longitude": "-87.7533"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": location.name,
              "sameAs": `https://en.wikipedia.org/wiki/${location.name.replace(' ', '_')}`
            },
            ...location.zipCodes.map(zip => ({
              "@type": "PostalCode",
              "postalCode": zip
            }))
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "41.9658",
              "longitude": "-87.7533"
            },
            "geoRadius": "50000"
          },
          "priceRange": "$$$",
          "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
          "paymentAccepted": "Cash, Credit Card, Check",
          "currenciesAccepted": "USD"
        })}
      </script>
      
      {/* Service-specific schema for location */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `Vehicle Wraps ${location.name}`,
          "serviceType": "Vehicle Wrapping",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Wrapping Chicago"
          },
          "areaServed": {
            "@type": "City",
            "name": location.name
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vehicle Wrap Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Car Wraps"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Truck Wraps"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Van Wraps"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fleet Wraps"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default LocationPageSEO;