
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
          "name": "Fleet Vehicle Wraps",
          "description": `Professional fleet vehicle wraps for ${city.name}, IL businesses. Transform your company vehicles into mobile billboards with custom designs. Over 20 years of experience wrapping commercial fleets throughout Chicago and suburbs.`,
          "areaServed": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Car Wraps",
          "description": `High-quality car wraps in ${city.name}, IL using genuine 3M vinyl materials. Custom designs, color changes, and promotional wraps for personal and business vehicles. Expert installation with 2-year warranty.`,
          "areaServed": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Truck Wraps",
          "description": `Custom truck wraps in ${city.name}, IL for box trucks, pickup trucks, and semi-trucks. Maximize your brand visibility with high-impact truck graphics and lettering. Premium materials that withstand heavy use.`,
          "areaServed": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Van Wraps",
          "description": `Professional van wraps in ${city.name}, IL for commercial and service vehicles. Transform your work vans into mobile billboards with eye-catching graphics. Complete design, production, and installation services.`,
          "areaServed": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Color Change Wraps",
          "description": `High-quality color change vehicle wraps in ${city.name}, IL. Transform your vehicle's appearance without permanent paint, using premium materials with a 2-year warranty. Hundreds of colors and finishes available.`,
          "areaServed": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Graphics",
          "description": `Eye-catching commercial graphics and vehicle lettering for ${city.name}, IL businesses. Custom designs for maximum visual impact. From simple vinyl lettering to full commercial graphics packages.`,
          "areaServed": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Partial Wraps",
          "description": `Cost-effective partial vehicle wraps for ${city.name}, IL businesses that want to make an impact on a budget. Strategic partial coverage that maximizes visibility while minimizing costs.`,
          "areaServed": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vinyl Lettering & Decals",
          "description": `Professional vinyl lettering and decals for vehicles in ${city.name}, IL. Custom cut vinyl lettering, logo application, and contact information for business vehicles. Quick turnaround and professional installation.`,
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
