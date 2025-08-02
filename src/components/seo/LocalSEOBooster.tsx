import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocalBusinessSchema from '@/components/schemas/Deduplicated/LocalBusinessSchema';

interface LocalSEOBoosterProps {
  cityName: string;
  businessType: 'plumber' | 'electrician' | 'hvac' | 'contractor' | 'general';
  serviceRadius?: number;
  neighboringCities?: string[];
}

/**
 * Local SEO Booster for Google's Enhanced Local Algorithm
 * Implements 2024/2025 local search ranking factors:
 * - Enhanced GEO targeting
 * - Neighborhood-level optimization
 * - Service area precision
 * - Local intent matching
 */
const LocalSEOBooster: React.FC<LocalSEOBoosterProps> = ({
  cityName,
  businessType,
  serviceRadius = 30,
  neighboringCities = ['Evanston', 'Naperville', 'Schaumburg', 'Oak Park', 'Cicero']
}) => {

  // Chicago neighborhood targeting for hyper-local SEO
  const chicagoNeighborhoods = [
    'Lincoln Park', 'Wicker Park', 'Bucktown', 'Logan Square', 'Lakeview',
    'River North', 'Gold Coast', 'Old Town', 'Loop', 'West Loop',
    'Pilsen', 'Little Village', 'Brighton Park', 'Bridgeport', 'Chinatown',
    'North Center', 'Albany Park', 'Irving Park', 'Portage Park', 'Jefferson Park'
  ];

  // Service-specific local terms
  const serviceLocalTerms = {
    plumber: [
      'emergency plumber', 'drain cleaning', 'pipe repair', 'water heater repair',
      'bathroom remodeling', 'kitchen plumbing', 'sump pump installation'
    ],
    electrician: [
      'electrical repair', 'panel upgrade', 'outlet installation', 'ceiling fan installation',
      'electrical inspection', 'emergency electrician', 'code compliance'
    ],
    hvac: [
      'furnace repair', 'air conditioning repair', 'duct cleaning', 'HVAC installation',
      'heating repair', 'cooling system', 'emergency HVAC service'
    ],
    contractor: [
      'home remodeling', 'kitchen renovation', 'bathroom remodel', 'basement finishing',
      'general contracting', 'home improvement', 'construction services'
    ],
    general: [
      'vehicle wraps', 'truck graphics', 'commercial vehicle wraps', 'fleet graphics'
    ]
  };

  // Enhanced local business schema with GEO precision
  const enhancedLocalSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.wrappingchicago.com/#localbusiness-${cityName.toLowerCase()}`,
    "name": `Wrapping Chicago - ${cityName} Vehicle Wraps`,
    "description": `Professional vehicle wraps for ${businessType}s in ${cityName} and surrounding areas. Turn your work truck into a powerful marketing tool with custom graphics and professional installation.`,
    
    // Enhanced geographical targeting
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cityName === 'Chicago' ? 41.8781 : 42.0451, // Adjust for other cities
      "longitude": cityName === 'Chicago' ? -87.6298 : -87.6877
    },
    
    // Service area with radius
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates", 
          "latitude": 41.8781,
          "longitude": -87.6298
        },
        "geoRadius": `${serviceRadius} miles`,
        "name": `${cityName} Metropolitan Area`
      },
      ...neighboringCities.map(city => ({
        "@type": "City",
        "name": city,
        "containedInPlace": {
          "@type": "State",
          "name": "Illinois"
        }
      })),
      ...chicagoNeighborhoods.map(neighborhood => ({
        "@type": "Place",
        "name": neighborhood,
        "containedInPlace": {
          "@type": "City",
          "name": "Chicago"
        }
      }))
    ],

    // Local services with specific targeting
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Vehicle Wrap Services in ${cityName}`,
      "itemListElement": serviceLocalTerms[businessType].map((service, index) => ({
        "@type": "Offer",
        "name": `${service} vehicle wraps`,
        "description": `Professional vehicle wraps for ${service} businesses in ${cityName}`,
        "areaServed": {
          "@type": "City",
          "name": cityName
        },
        "itemOffered": {
          "@type": "Service",
          "name": `${service} Vehicle Graphics`,
          "serviceType": "Vehicle Wrapping"
        }
      }))
    },

    // Local business hours with timezone
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00-06:00", // CST timezone
        "closes": "17:00-06:00"
      }
    ],

    // Local contact information
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+13125971286",
      "contactType": "customer service",
      "areaServed": cityName,
      "availableLanguage": ["English", "Spanish"], // Common in Chicago
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    }
  };

  // Local search optimization keywords
  const localKeywords = [
    `${businessType} vehicle wraps ${cityName}`,
    `${businessType} truck graphics ${cityName}`,
    `commercial vehicle wraps ${cityName}`,
    `${businessType} van wraps near me`,
    `vehicle advertising ${cityName}`,
    ...serviceLocalTerms[businessType].map(term => `${term} vehicle wraps ${cityName}`)
  ];

  return (
    <>
      {/* Use deduplicated LocalBusiness schema */}
      <LocalBusinessSchema 
        businessName={`Wrapping Chicago - ${cityName} Vehicle Wraps`}
        description={`Professional vehicle wraps for ${businessType}s in ${cityName} and surrounding areas. Turn your work truck into a powerful marketing tool with custom graphics and professional installation.`}
        telephone="+13125971286"
        address={{
          streetAddress: "4711 N. Lamon Ave",
          addressLocality: "Chicago",
          addressRegion: "IL",
          postalCode: "60630",
          addressCountry: "US"
        }}
        geo={{
          latitude: cityName === 'Chicago' ? 41.8781 : 42.0451,
          longitude: cityName === 'Chicago' ? -87.6298 : -87.6877
        }}
        openingHours={["Mo-Fr 08:00-17:00", "Sa 09:00-15:00"]}
      />

      <Helmet>
        {/* Enhanced local SEO meta tags */}
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content={cityName} />
        <meta name="DC.title" content={`${businessType} Vehicle Wraps ${cityName} | Professional Installation`} />
        <meta name="geo.neighborhood" content={chicagoNeighborhoods.join(', ')} />

        {/* Local keywords for enhanced targeting */}
        <meta name="keywords" content={localKeywords.join(', ')} />
        
        {/* Hreflang for local variations */}
        <link rel="alternate" hrefLang="en-us" href={`https://www.wrappingchicago.com/vehicle-wraps-${cityName.toLowerCase()}-il`} />
        
        {/* Local business verification */}
        <meta name="google-site-verification" content="local-business-verification-code" />
        <meta name="msvalidate.01" content="bing-local-verification-code" />
      </Helmet>
    </>
  );
};

export default LocalSEOBooster;