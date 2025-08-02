import React from 'react';
import { useSchemaDeduplicator } from '@/components/seo/SchemaDeduplicator';

interface OrganizationSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
}

const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name = "Wrapping Chicago",
  description = "Professional vehicle wrap services in Chicago",
  url = "https://www.wrappingchicago.com",
  logo = "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
  address = {
    streetAddress: "123 Wrap Street",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60601",
    addressCountry: "US"
  },
  telephone = "+1-773-999-WRAP",
  email = "info@wrappingchicago.com"
}) => {
  const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
  
  if (!canRenderSchema('Organization', 'DedupOrganizationSchema')) {
    return null;
  }
  
  registerSchema('Organization', 'DedupOrganizationSchema');

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    "name": name,
    "description": description,
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": logo
    },
    "address": {
      "@type": "PostalAddress",
      ...address
    },
    "telephone": telephone,
    "email": email,
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;