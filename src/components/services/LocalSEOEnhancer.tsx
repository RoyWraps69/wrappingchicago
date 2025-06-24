
import React from 'react';
import { Helmet } from 'react-helmet-async';

const LocalSEOEnhancer = () => {
  const domain = "https://www.wrappingchicago.com";
  const currentYear = new Date().getFullYear();

  // Comprehensive local keywords for Chicago vehicle wraps
  const localKeywords = [
    'vehicle wraps Chicago IL',
    'car wraps Chicago Illinois', 
    'truck wraps Chicagoland',
    'van wraps Chicago area',
    'fleet wraps Chicago suburbs',
    'commercial vehicle wraps Chicago',
    'vehicle graphics Chicago IL',
    'car wrap installation Chicago',
    'best vehicle wrap company Chicago',
    'Chicago vehicle wrap services',
    'professional car wraps near me',
    'truck graphics Chicago IL',
    'van lettering Chicago',
    'fleet graphics Chicagoland',
    'custom vehicle wraps Chicago',
    '3M vehicle wraps Chicago',
    'Avery vehicle wraps Illinois',
    'vehicle branding Chicago',
    'mobile advertising Chicago',
    'vinyl vehicle wraps Chicago IL'
  ];

  // Enhanced local business schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${domain}/#localbusiness`,
    "name": "Wrapping Chicago",
    "alternateName": ["Chicago Vehicle Wraps", "Wrapping Chicago IL", "Chicago Fleet Wraps"],
    "description": `Chicago's premier vehicle wrap company specializing in car wraps, truck wraps, van wraps, and fleet graphics. Over 20 years experience serving Chicagoland with premium 3M materials and expert installation.`,
    "url": domain,
    "logo": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
    "image": [
      `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
      `${domain}/lovable-uploads/199b8977-07e4-488c-8e27-0ad83b25af33.jpg`
    ],
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
      "latitude": 41.9658,
      "longitude": -87.7533
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing"],
    "areaServed": [
      {
        "@type": "City",
        "name": "Chicago",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago"
      },
      {
        "@type": "City", 
        "name": "Evanston",
        "sameAs": "https://en.wikipedia.org/wiki/Evanston,_Illinois"
      },
      {
        "@type": "City",
        "name": "Naperville", 
        "sameAs": "https://en.wikipedia.org/wiki/Naperville,_Illinois"
      },
      {
        "@type": "City",
        "name": "Schaumburg",
        "sameAs": "https://en.wikipedia.org/wiki/Schaumburg,_Illinois"
      },
      {
        "@type": "City",
        "name": "Oak Park",
        "sameAs": "https://en.wikipedia.org/wiki/Oak_Park,_Illinois"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.9658,
        "longitude": -87.7533
      },
      "geoRadius": 80000
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services Chicago",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wraps Chicago",
            "description": "Professional car wrap installation with premium vinyl materials"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "2500-5000"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Truck Wraps Chicago",
            "description": "Commercial truck wrapping for box trucks and delivery vehicles"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "3500-7000"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Wraps Chicago", 
            "description": "Complete fleet branding and vehicle graphics solutions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "287",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mike Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Outstanding work on our fleet vehicles. Professional installation and great customer service."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago"
    ],
    "knowsAbout": [
      "Vehicle Wraps",
      "Car Wraps", 
      "Truck Wraps",
      "Van Wraps",
      "Fleet Graphics",
      "Commercial Vehicle Branding",
      "3M Vinyl Installation",
      "Avery Dennison Materials"
    ]
  };

  return (
    <Helmet>
      {/* Enhanced Local Keywords */}
      <meta name="keywords" content={localKeywords.join(', ')} />
      
      {/* Local Business Markup */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Enhanced Geographic Targeting */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.9658;-87.7533" />
      <meta name="ICBM" content="41.9658, -87.7533" />
      
      {/* Local Search Optimization */}
      <meta name="distribution" content="local" />
      <meta name="coverage" content="Chicago, Illinois and surrounding areas" />
      <meta name="target" content="Chicago IL vehicle wrap customers" />
      
      {/* Enhanced Open Graph for Local */}
      <meta property="og:locality" content="Chicago" />
      <meta property="og:region" content="Illinois" />
      <meta property="og:country-name" content="United States" />
    </Helmet>
  );
};

export default LocalSEOEnhancer;
