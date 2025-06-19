
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PRIMARY_KEYWORDS } from './HomeKeywords';

const HomeStructuredData: React.FC = () => {
  const domain = "https://www.wrappingchicago.com";

  return (
    <Helmet>
      {/* Enhanced Structured Data for Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Wrapping Chicago - Vehicle Wraps & Graphics",
          "alternateName": "Chicago Vehicle Wraps",
          "url": `${domain}/`,
          "description": "Professional vehicle wraps in Chicago IL. Car wraps, truck wraps, van wraps, fleet graphics, custom graphics, color change wraps, luxury wraps, and commercial branding solutions.",
          "keywords": PRIMARY_KEYWORDS.join(", "),
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${domain}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Enhanced Structured Data for Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Wrapping Chicago",
          "alternateName": "Chicago Vehicle Wraps",
          "image": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
          "@id": `${domain}/#organization`,
          "url": `${domain}/`,
          "telephone": "+13125971286",
          "email": "info@wrappingchicago.com",
          "priceRange": "$$",
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
            "latitude": 41.8781,
            "longitude": -87.6298
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 41.8781,
              "longitude": -87.6298
            },
            "geoRadius": 50000
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vehicle Wrap Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Car Wraps Chicago",
                  "description": "Custom car wrap installation with premium vinyl materials"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Truck Wraps Chicago",
                  "description": "Professional truck wrap services for commercial and personal vehicles"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Van Wraps Chicago",
                  "description": "Van wrap installation for cargo vans, sprinter vans, and commercial vehicles"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fleet Wraps Chicago",
                  "description": "Fleet branding solutions and commercial vehicle graphics"
                }
              }
            ]
          },
          "sameAs": [
            "https://www.facebook.com/wrappingchicago",
            "https://www.instagram.com/wrappingchicago"
          ]
        })}
      </script>
      
      {/* Enhanced Structured Data for Service List */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Vehicle Wrap Services in Chicago",
          "description": "Complete vehicle wrap services including car wraps, truck wraps, van wraps, fleet graphics, and custom designs",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Car Wraps Chicago",
              "description": "Custom car wrap designs with premium vinyl materials",
              "url": `${domain}/services/car-wraps`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Truck Wraps Chicago",
              "description": "Professional truck wrap installation for advertising and protection",
              "url": `${domain}/services/truck-wraps`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Van Wraps Chicago",
              "description": "Van graphics and wraps for commercial and personal vehicles",
              "url": `${domain}/services/van-wraps`
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Fleet Wraps Chicago",
              "description": "Fleet branding and commercial vehicle graphics solutions",
              "url": `${domain}/services/fleet-wraps`
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Color Change Wraps Chicago",
              "description": "Color change vehicle wraps for luxury and exotic cars",
              "url": `${domain}/services/color-change-wraps`
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "Commercial Graphics Chicago",
              "description": "Custom commercial graphics and advertising wraps",
              "url": `${domain}/services/commercial-graphics`
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default HomeStructuredData;
