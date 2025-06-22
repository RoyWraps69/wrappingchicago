
import React from 'react';
import { City } from '@/data/cities';

interface LocationFAQSchemaProps {
  city: City;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const LocationFAQSchema: React.FC<LocationFAQSchemaProps> = ({ city, faqs }) => {
  const domain = "https://www.wrappingchicago.com";
  const pageUrl = `${domain}/vehicle-wraps-${city.slug}-il`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faqpage`,
    "url": pageUrl,
    "name": `${city.name} Vehicle Wraps FAQ`,
    "description": `Frequently asked questions about vehicle wrap services in ${city.name}, Illinois`,
    "inLanguage": "en-US",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `${pageUrl}#faq-${index + 1}`,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "inLanguage": "en-US"
      }
    })),
    "about": {
      "@type": "Thing",
      "name": `Vehicle Wraps in ${city.name}`,
      "description": `Professional vehicle wrap services including car wraps, truck wraps, and fleet wraps in ${city.name}, Illinois`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "url": domain,
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocationFAQSchema;
