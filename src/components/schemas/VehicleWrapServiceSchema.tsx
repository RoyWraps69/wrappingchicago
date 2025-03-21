
import React from 'react';
import { City } from '@/data/cities';

interface VehicleWrapServiceSchemaProps {
  city: City;
}

const VehicleWrapServiceSchema = ({ city }: VehicleWrapServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional Vehicle Wraps in ${city.name}, Illinois`,
    "serviceType": "Vehicle Wrapping",
    "description": `Premium vehicle wraps, car wraps, truck wraps, van wraps, and fleet graphics in ${city.name}, IL. Professional design and installation with premium 3M vinyl wraps for long-lasting durability. With over 16,000 wraps completed in our 20 years of business, we're the trusted choice for vehicle wrapping in ${city.name} and throughout ${city.county} County.`,
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
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "2500.00",
            "priceCurrency": "USD",
            "minPrice": "1500.00",
            "maxPrice": "5000.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Truck Wraps",
            "description": `Custom truck wraps for businesses in ${city.name}, IL. Transform your commercial vehicles into mobile billboards with our durable truck wraps.`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "3500.00",
            "priceCurrency": "USD",
            "minPrice": "2500.00",
            "maxPrice": "6000.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Van Wraps",
            "description": `Professional van wraps for ${city.name} businesses. Maximize your advertising with high-quality van graphics and lettering for commercial fleets.`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "3000.00",
            "priceCurrency": "USD",
            "minPrice": "2200.00",
            "maxPrice": "5500.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Wraps",
            "description": `Comprehensive fleet wrapping services for ${city.name} companies. Consistent branding across your entire vehicle fleet with our professional wrap installation.`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "10000.00",
            "maxPrice": "50000.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Change Wraps",
            "description": `Vehicle color change wraps in ${city.name}. Transform your car's appearance without permanent paint, with hundreds of colors and finishes available.`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "3200.00",
            "priceCurrency": "USD",
            "minPrice": "2800.00",
            "maxPrice": "6000.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Graphics",
            "description": `Eye-catching commercial graphics for ${city.name} businesses. Vehicle lettering, partial wraps, and vinyl graphics that make your business stand out.`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "1200.00",
            "priceCurrency": "USD",
            "minPrice": "500.00",
            "maxPrice": "3000.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Partial Vehicle Wraps",
            "description": `Cost-effective partial vehicle wraps in ${city.name}. Get maximum impact on a budget with strategic partial wrapping for your business vehicles.`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "1500.00",
            "priceCurrency": "USD",
            "minPrice": "800.00",
            "maxPrice": "2500.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vinyl Lettering",
            "description": `Professional vehicle lettering services in ${city.name}. Custom vinyl lettering and decals for business vehicles, trucks, and vans.`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "500.00",
            "priceCurrency": "USD",
            "minPrice": "300.00",
            "maxPrice": "1200.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Graphics",
            "description": `Perforated window film and graphics for vehicles in ${city.name}. Increase visibility while maintaining transparency from inside the vehicle.`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "600.00",
            "priceCurrency": "USD",
            "minPrice": "400.00",
            "maxPrice": "1500.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Specialty Vehicle Wraps",
            "description": `Specialty finishes including matte, gloss, satin, metallic, and textured wraps for ${city.name} vehicle owners looking for unique styles.`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "4000.00",
            "priceCurrency": "USD",
            "minPrice": "3000.00",
            "maxPrice": "7000.00"
          }
        }
      ]
    },
    "brand": {
      "@type": "Brand",
      "name": "Wrapping Chicago",
      "logo": "https://wrappingchicago.com/logo.png",
      "slogan": "Transform Your Vehicle. Elevate Your Brand."
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "300.00",
      "highPrice": "7000.00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "247"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Business Owners, Vehicle Owners, Fleet Managers"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://wrappingchicago.com/contact",
      "servicePhone": "(312) 597-1286",
      "serviceSmsNumber": "(312) 597-1286"
    },
    "serviceOutput": {
      "@type": "Thing",
      "name": "Professional Vehicle Wrap",
      "description": "A professionally designed and installed vehicle wrap that transforms the appearance of a vehicle while protecting the original paint."
    },
    "termsOfService": "https://wrappingchicago.com/terms",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
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
