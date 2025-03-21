
import React from 'react';
import { City } from '@/data/cities';

interface OfferCatalogSchemaProps {
  city: City;
}

const OfferCatalogSchema = ({ city }: OfferCatalogSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Vehicle Wrap Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI-Powered Fleet Vehicle Wraps",
          "description": `Professional fleet vehicle wraps with AI design assistance for ${city.name}, IL businesses. Transform your company vehicles into mobile billboards.`,
          "areaServed": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Color Change Wraps",
          "description": `High-quality color change vehicle wraps in ${city.name}, IL. Change the look of your vehicle without permanent paint.`,
          "areaServed": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI-Generated Commercial Graphics",
          "description": `Eye-catching commercial graphics and vehicle lettering for ${city.name}, IL businesses, designed with artificial intelligence assistance.`,
          "areaServed": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Partial Wraps",
          "description": `Cost-effective partial vehicle wraps for ${city.name}, IL businesses that want to make an impact on a budget.`,
          "areaServed": city.name
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OfferCatalogSchema;
