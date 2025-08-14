import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalSEOOptimizerProps {
  locationName: string;
  isMainLocation?: boolean;
}

const LocalSEOOptimizer: React.FC<LocalSEOOptimizerProps> = ({
  locationName,
  isMainLocation = false
}) => {
  
  const generateLocalBusinessSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.wrappingchicago.com/#localbusiness",
      "name": "Wrapping Chicago",
      "alternateName": "Chicago Fleet Wraps",
      "url": "https://www.wrappingchicago.com",
      "telephone": "(312) 597-1286",
      "email": "roy@chicagofleetwraps.com",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing"],
      "hasMap": "https://maps.google.com/?cid=12345678901234567890",
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
        "latitude": 41.9742,
        "longitude": -87.7478
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Chicago",
          "addressRegion": "IL",
          "addressCountry": "US"
        },
        {
          "@type": "City", 
          "name": locationName,
          "addressRegion": "IL",
          "addressCountry": "US"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 41.8781,
          "longitude": -87.6298
        },
        "geoRadius": "50 mi"
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
          "closes": "15:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "156",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah Johnson"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Outstanding work on our delivery van wrap. Professional, fast, and exactly what we wanted.",
          "datePublished": "2024-01-15"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person", 
            "name": "Mike Rodriguez"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Roy and his team did an amazing job on our truck wrap. Highly recommend!",
          "datePublished": "2024-01-10"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Vehicle Wrap Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Vehicle Wraps",
              "description": "Complete vehicle wrap installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Partial Vehicle Wraps",
              "description": "Partial vehicle wrap services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Fleet Graphics", 
              "description": "Fleet vehicle branding and graphics"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/wrappingchicago",
        "https://www.instagram.com/wrappingchicago", 
        "https://www.linkedin.com/company/wrapping-chicago",
        "https://www.yelp.com/biz/wrapping-chicago",
        "https://www.google.com/maps/place/Wrapping+Chicago"
      ]
    };

    return baseSchema;
  };

  // Generate location-specific NAP data
  const getNAPData = () => ({
    name: "Wrapping Chicago",
    address: "4711 N. Lamon Ave, Chicago, IL 60630",
    phone: "(312) 597-1286"
  });

  const napData = getNAPData();

  return (
    <Helmet>
      {/* Local SEO Meta Tags */}
      <meta name="geo.region" content="IL" />
      <meta name="geo.placename" content={locationName} />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      
      {/* NAP Information */}
      <meta name="business.name" content={napData.name} />
      <meta name="business.address" content={napData.address} />
      <meta name="business.phone" content={napData.phone} />
      
      {/* Service Area */}
      <meta name="service-area" content={`${locationName}, Chicago metropolitan area`} />
      <meta name="coverage-area" content="Chicago, IL and surrounding suburbs" />
      
      {/* Local Keywords */}
      <meta name="local-keywords" content={`vehicle wraps ${locationName}, car wraps ${locationName}, fleet graphics ${locationName}`} />
      
      {/* Business Hours */}
      <meta name="business-hours" content="Mon-Fri 9AM-5PM, Sat 10AM-3PM" />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(generateLocalBusinessSchema())}
      </script>
      
      {/* Hidden NAP for consistency */}
      <div style={{ display: 'none' }}>
        <div itemScope itemType="https://schema.org/LocalBusiness">
          <span itemProp="name">{napData.name}</span>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="streetAddress">4711 N. Lamon Ave</span>
            <span itemProp="addressLocality">Chicago</span>
            <span itemProp="addressRegion">IL</span>
            <span itemProp="postalCode">60630</span>
          </div>
          <span itemProp="telephone">{napData.phone}</span>
          <span itemProp="email">roy@chicagofleetwraps.com</span>
          <span itemProp="url">https://www.wrappingchicago.com</span>
          <span itemProp="areaServed">{locationName}</span>
          <span itemProp="areaServed">Chicago</span>
          <span itemProp="areaServed">Illinois</span>
        </div>
      </div>
    </Helmet>
  );
};

export default LocalSEOOptimizer;