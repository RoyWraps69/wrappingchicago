import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PRIMARY_KEYWORDS } from './HomeKeywords';

const HomeStructuredData: React.FC = () => {
  const domain = "https://www.wrappingchicago.com";

  return (
    <Helmet>
      {/* Enhanced Organization Schema for E-E-A-T */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${domain}/#organization`,
          "name": "Wrapping Chicago",
          "legalName": "Wrapping Chicago LLC",
          "alternateName": ["Chicago Vehicle Wraps", "Vehicle Wrapping Chicago"],
          "url": domain,
          "logo": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
          "image": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
          "description": "Professional vehicle wrapping service in Chicago, specializing in fleet wraps, color change wraps, and commercial graphics. Over 16,000 vehicle wraps completed since 2003.",
          "foundingDate": "2003",
          "slogan": "Your Truck is Your Best Billboard",
          "telephone": "+13125971286",
          "email": "roy@chicagofleetwraps.com",
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
          "areaServed": [
            {
              "@type": "State",
              "name": "Illinois"
            },
            {
              "@type": "City",
              "name": "Chicago",
              "containedInPlace": {
                "@type": "State",
                "name": "Illinois"
              }
            }
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 41.8781,
              "longitude": -87.6298
            },
            "geoRadius": "40 miles"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.9,
            "reviewCount": 247,
            "bestRating": 5,
            "worstRating": 1
          },
          "sameAs": [
            "https://www.facebook.com/wrappingchicago",
            "https://www.instagram.com/wrappingchicago",
            "https://www.linkedin.com/company/wrapping-chicago",
            "https://www.yelp.com/biz/wrapping-chicago"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vehicle Wrap Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fleet Vehicle Wraps",
                  "description": "Professional fleet wrapping services for commercial vehicles",
                  "serviceType": "Vehicle Wrapping"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Car Wraps",
                  "description": "Custom car wraps and color change services",
                  "serviceType": "Vehicle Wrapping"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Truck Wraps",
                  "description": "Commercial truck wrapping and graphics",
                  "serviceType": "Vehicle Wrapping"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Van Wraps",
                  "description": "Van wrapping for businesses and commercial use",
                  "serviceType": "Vehicle Wrapping"
                }
              }
            ]
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "17:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "15:00"
            }
          ],
          "priceRange": "$$-$$$",
          "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing Available"],
          "currenciesAccepted": "USD"
        })}
      </script>

      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${domain}/#website`,
          "url": domain,
          "name": "Wrapping Chicago",
          "description": "Professional vehicle wrapping services in Chicago - car wraps, truck wraps, van wraps, and fleet graphics",
          "publisher": {
            "@id": `${domain}/#organization`
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${domain}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "inLanguage": "en-US"
        })}
      </script>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${domain}/#localbusiness`,
          "name": "Wrapping Chicago",
          "image": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
          "telephone": "+13125971286",
          "email": "roy@chicagofleetwraps.com",
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
          "url": domain,
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "17:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.9,
            "reviewCount": 247
          }
        })}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Vehicle Wrapping",
          "provider": {
            "@id": `${domain}/#organization`
          },
          "areaServed": {
            "@type": "State",
            "name": "Illinois"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vehicle Wrap Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Vehicle Wraps",
                  "description": "Professional vehicle wraps for commercial fleets and business vehicles"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default HomeStructuredData;