import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalDominanceBoosterProps {
  city: string;
  neighborhoods?: string[];
  serviceRadius?: number;
}

/**
 * Targets Google Maps Pack and local search dominance
 * Critical for "near me" and location-based searches
 */
const LocalDominanceBooster: React.FC<LocalDominanceBoosterProps> = ({
  city,
  neighborhoods = [],
  serviceRadius = 25
}) => {
  const domain = 'https://www.wrappingchicago.com';
  
  // Enhanced local business schema for Maps Pack dominance
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago",
    "image": [`${domain}/og-image.png`],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.969162,
      "longitude": -87.746582
    },
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
    "url": domain,
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://www.linkedin.com/company/wrapping-chicago"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 41.969162,
          "longitude": -87.746582
        },
        "geoRadius": `${serviceRadius} miles`
      },
      ...neighborhoods.map(neighborhood => ({
        "@type": "Place",
        "name": neighborhood,
        "containedInPlace": {
          "@type": "City",
          "name": city,
          "containedInPlace": {
            "@type": "State",
            "name": "Illinois"
          }
        }
      }))
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing Available"],
    "priceRange": "$$",
    "currenciesAccepted": "USD"
  };

  // Service area schema for broader coverage
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vehicle Wrap Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping Chicago"
    },
    "areaServed": neighborhoods.length > 0 ? neighborhoods.map(area => ({
      "@type": "Place",
      "name": `${area}, ${city}, IL`
    })) : [{
      "@type": "State",
      "name": "Illinois",
      "containedInPlace": {
        "@type": "Country",
        "name": "United States"
      }
    }],
    "serviceType": "Vehicle Wrapping",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Vehicle Wraps"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Vehicle Graphics"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Enhanced local SEO meta tags */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={city} />
      <meta name="geo.position" content="41.969162;-87.746582" />
      <meta name="ICBM" content="41.969162, -87.746582" />
      
      {/* Service area coverage */}
      {neighborhoods.length > 0 && (
        <meta name="service-areas" content={neighborhoods.join(', ')} />
      )}
      
      {/* Enhanced local business signals */}
      <meta name="business-hours" content="Mon-Fri 8AM-6PM, Sat 8AM-4PM" />
      <meta name="service-radius" content={`${serviceRadius} miles`} />
      <meta name="local-phone" content="(312) 597-1286" />
      <meta name="business-address" content="4711 N Lamon Ave, Chicago, IL 60630" />
      
      {/* Maps optimization */}
      <meta property="business:contact_data:street_address" content="4711 N Lamon Ave" />
      <meta property="business:contact_data:locality" content="Chicago" />
      <meta property="business:contact_data:region" content="IL" />
      <meta property="business:contact_data:postal_code" content="60630" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta property="business:contact_data:phone_number" content="+13125971286" />
      
      {/* Local business structured data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Service area structured data */}
      <script type="application/ld+json">
        {JSON.stringify(serviceAreaSchema)}
      </script>
      
      {/* Enhanced location targeting */}
      <link rel="preconnect" href="https://maps.googleapis.com" />
      <link rel="preconnect" href="https://places.googleapis.com" />
      <link rel="dns-prefetch" href="//maps.google.com" />
    </Helmet>
  );
};

export default LocalDominanceBooster;