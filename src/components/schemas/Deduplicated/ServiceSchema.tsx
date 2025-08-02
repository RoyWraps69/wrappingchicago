import React from 'react';
import { useSchemaDeduplicator } from '@/components/seo/SchemaDeduplicator';

interface ServiceOffering {
  name: string;
  description: string;
  url: string;
  priceRange?: string;
  availability?: string;
}

interface ServiceSchemaProps {
  services?: ServiceOffering[];
  businessName?: string;
  businessUrl?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  services = [
    {
      name: "Vehicle Wraps",
      description: "Professional vehicle wrap installation for cars, trucks, vans, and commercial fleets with premium materials and expert craftsmanship.",
      url: "https://www.wrappingchicago.com/services",
      priceRange: "$1200-$6000",
      availability: "Monday-Saturday"
    },
    {
      name: "Color Change Wraps",
      description: "Transform your vehicle's appearance with premium color change wraps in any color, finish, or texture including matte, satin, and metallic options.",
      url: "https://www.wrappingchicago.com/services/color-change-wraps",
      priceRange: "$2500-$5000",
      availability: "Monday-Saturday"
    },
    {
      name: "Commercial Graphics",
      description: "Professional commercial vehicle graphics and lettering for business branding, fleet identification, and mobile advertising solutions.",
      url: "https://www.wrappingchicago.com/services/commercial-graphics",
      priceRange: "$800-$3500",
      availability: "Monday-Saturday"
    },
    {
      name: "Fleet Wraps",
      description: "Complete fleet wrapping services for businesses with multiple vehicles, ensuring consistent branding and professional appearance across all vehicles.",
      url: "https://www.wrappingchicago.com/services/fleet-wraps",
      priceRange: "$1500-$4000",
      availability: "Monday-Saturday"
    }
  ],
  businessName = "Wrapping Chicago",
  businessUrl = "https://www.wrappingchicago.com"
}) => {
  const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
  
  if (!canRenderSchema('Service', 'DedupServiceSchema')) {
    return null;
  }
  
  registerSchema('Service', 'DedupServiceSchema');

  const schema = services.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${service.url}/#service`,
    "name": service.name,
    "description": service.description,
    "url": service.url,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${businessUrl}/#organization`,
      "name": businessName
    },
    "areaServed": {
      "@type": "City",
      "name": "Chicago",
      "containedInPlace": {
        "@type": "State",
        "name": "Illinois"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceRange": service.priceRange,
      "availability": "InStock",
      "availableAtOrFrom": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chicago",
          "addressRegion": "IL",
          "addressCountry": "US"
        }
      }
    }
  }));

  return (
    <>
      {schema.map((serviceSchema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      ))}
    </>
  );
};

export default ServiceSchema;