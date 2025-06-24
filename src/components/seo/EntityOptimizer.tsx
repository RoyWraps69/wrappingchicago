
import React from 'react';

const EntityOptimizer: React.FC = () => {
  const domain = "https://www.wrappingchicago.com";
  
  // Knowledge Graph Entity Schema
  const entitySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${domain}/#organization`,
    "name": "Wrapping Chicago",
    "alternateName": ["Chicago Vehicle Wraps", "Wrapping Chicago LLC"],
    "description": "Premier vehicle wrap installation company in Chicago specializing in car wraps, truck wraps, van wraps, and commercial fleet graphics",
    "foundingDate": "2003",
    "founder": {
      "@type": "Person",
      "name": "Roy",
      "jobTitle": "Master Vehicle Wrap Installer",
      "expertise": ["Vehicle Wrapping", "Commercial Graphics", "Fleet Branding"]
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "3M Certified Vehicle Wrap Installer"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "certification",
        "name": "Avery Dennison Certified Installer"
      }
    ],
    "knowsAbout": [
      "Vehicle Wraps",
      "Car Wraps", 
      "Truck Wraps",
      "Van Wraps",
      "Fleet Graphics",
      "Commercial Branding",
      "Color Change Wraps",
      "Partial Wraps",
      "3M Vinyl Installation",
      "Vehicle Lettering"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "geoRadius": 50000
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Car Wraps",
          "category": "Vehicle Wrapping Services"
        },
        "priceRange": "$2500-$5000",
        "availability": "InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Truck Wraps",
          "category": "Commercial Vehicle Graphics"
        },
        "priceRange": "$3500-$7000",
        "availability": "InStock"
      }
    ],
    "award": [
      "16,000+ Vehicles Wrapped",
      "20+ Years Experience",
      "5-Star Customer Rating"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+13125971286",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }}
    />
  );
};

export default EntityOptimizer;
