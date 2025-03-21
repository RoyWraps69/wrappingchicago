
import React from 'react';
import { City } from '@/data/cities';

interface VehicleWrapServiceSchemaProps {
  city: City;
}

const VehicleWrapServiceSchema = ({ city }: VehicleWrapServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Vehicle Wraps in ${city.name}, Illinois`,
    "serviceType": "Vehicle Wrapping",
    "description": `Professional vehicle wraps, car wraps, truck wraps, van wraps, and fleet graphics in ${city.name}, IL. Premium 3M vinyl wraps with expert installation and long-lasting durability. With over 16,000 wraps completed in our 20 years of business, we're the trusted choice for vehicle wrapping in ${city.name} and throughout ${city.county} County.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping Chicago",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4711 N. Lamon Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60630",
        "addressCountry": "US"
      },
      "telephone": "(312) 597-1286",
      "priceRange": "$$",
      "foundingDate": "2003",
      "slogan": "Transform Your Vehicle. Elevate Your Brand."
    },
    "areaServed": [
      {
        "@type": "City",
        "name": city.name,
        "sameAs": `https://en.wikipedia.org/wiki/${city.name},_Illinois`
      },
      {
        "@type": "City",
        "name": "Chicago",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago"
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
            "name": "Car Wraps",
            "description": `High-quality car wraps in ${city.name}, IL with premium 3M vinyl materials and expert installation. Transform your personal or business vehicle with custom designs.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Truck Wraps",
            "description": `Custom truck wraps for businesses in ${city.name}, IL. Transform your commercial vehicles into mobile billboards with our durable truck wraps.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Van Wraps",
            "description": `Professional van wraps for ${city.name} businesses. Maximize your advertising with high-quality van graphics and lettering for commercial fleets.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Wraps",
            "description": `Comprehensive fleet wrapping services for ${city.name} companies. Consistent branding across your entire vehicle fleet with our professional wrap installation.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Change Wraps",
            "description": `Vehicle color change wraps in ${city.name}. Transform your car's appearance without permanent paint, with hundreds of colors and finishes available.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Graphics",
            "description": `Eye-catching commercial graphics for ${city.name} businesses. Vehicle lettering, partial wraps, and vinyl graphics that make your business stand out.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Partial Vehicle Wraps",
            "description": `Cost-effective partial vehicle wraps in ${city.name}. Get maximum impact on a budget with strategic partial wrapping for your business vehicles.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vinyl Lettering",
            "description": `Professional vehicle lettering services in ${city.name}. Custom vinyl lettering and decals for business vehicles, trucks, and vans.`
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default VehicleWrapServiceSchema;
