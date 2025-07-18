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
  
  const pageTitle = `#1 Vehicle Wraps ${location.name} IL | Car Wraps, Truck Wraps & Fleet Graphics ${currentYear}`;
  const metaDescription = `Professional vehicle wraps, car wraps, truck wraps, and fleet graphics in ${location.name}, Illinois. Premium vinyl wraps, commercial vehicle graphics, and custom auto wraps serving ${location.county}. Free quotes (312) 597-1286.`;
  
  const keywords = [
    `vehicle wraps ${location.name}`,
    `car wraps ${location.name}`,
    `truck wraps ${location.name}`,
    `van wraps ${location.name}`,
    `fleet wraps ${location.name}`,
    `vinyl wraps ${location.name}`,
    `vehicle graphics ${location.name}`,
    `auto wraps ${location.name}`,
    `commercial vehicle wraps ${location.name}`,
    `custom car wraps ${location.name}`,
    `vehicle wrap installation ${location.name}`,
    `automotive vinyl graphics ${location.name}`,
    `business vehicle wraps ${location.name}`,
    `carwraps ${location.name}`,
    `truck graphics ${location.name}`,
    `fleet vehicle wraps ${location.name}`,
    `vehicle wraps ${location.name} Illinois`,
    `car wraps ${location.name} IL`,
    `truck wraps ${location.name} IL`,
    `vehicle wraps near me ${location.name}`,
    `professional vehicle wraps ${location.county}`,
    `vehicle wrap company ${location.name}`,
    `3M vehicle wraps ${location.name}`,
    `Avery Dennison wraps ${location.name}`,
    ...location.neighborhoods?.map(n => `vehicle wraps ${n}`) || [],
    ...location.landmarks.map(l => `vehicle wraps near ${l}`),
    ...location.zipCodes.map(zip => `vehicle wraps ${zip}`)
  ];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={`${domain}/locations/${location.slug}`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`${domain}/locations/${location.slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta name="twitter:site" content="@wrappingchicago" />
      <meta name="twitter:creator" content="@wrappingchicago" />
      
      {/* Local SEO */}
      <meta name="author" content="Wrapping Chicago" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={location.name} />
      <meta name="ICBM" content="41.9658, -87.7533" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      
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
      
      {/* Enhanced service-specific schema for location */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `Vehicle Wraps ${location.name}`,
          "serviceType": "Vehicle Wrapping",
          "description": `Professional vehicle wraps, car wraps, truck wraps, and fleet graphics in ${location.name}, Illinois`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Wrapping Chicago",
            "url": `${domain}`,
            "telephone": "+13125971286",
            "priceRange": "$$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": location.name,
            "containedInPlace": {
              "@type": "State",
              "name": "Illinois",
              "containedInPlace": {
                "@type": "Country",
                "name": "United States"
              }
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vehicle Wrap Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Car Wraps",
                  "description": "Premium car wraps and custom vehicle graphics"
                },
                "price": "2500",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31"
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Truck Wraps",
                  "description": "Commercial truck wraps and fleet graphics"
                },
                "price": "3500",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Van Wraps",
                  "description": "Professional van wraps for businesses"
                },
                "price": "3000",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fleet Wraps",
                  "description": "Complete fleet branding and vehicle graphics"
                },
                "price": "Contact for pricing",
                "priceCurrency": "USD"
              }
            ]
          }
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `How much do vehicle wraps cost in ${location.name}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Vehicle wrap costs in ${location.name} vary by size and complexity. Partial wraps start at $1,200, full car wraps from $2,500, commercial truck wraps from $3,500. We provide free quotes with same-day estimates for all ${location.name} customers.`
              }
            },
            {
              "@type": "Question",
              "name": `How long do vehicle wraps last in ${location.name}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Our premium 3M and Avery Dennison vehicle wraps last 5-7 years in ${location.name}'s climate. We use materials specifically rated for Midwest weather conditions, including temperature fluctuations and seasonal changes common in ${location.county}.`
              }
            },
            {
              "@type": "Question",
              "name": `Do you provide mobile vehicle wrap service in ${location.name}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Yes! We provide mobile vehicle wrap services throughout ${location.name} and surrounding ${location.county} areas. Our mobile unit is fully equipped for on-site installations at your home or business location.`
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default LocationPageSEO;