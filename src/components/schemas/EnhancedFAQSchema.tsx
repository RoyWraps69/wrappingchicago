
import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface EnhancedFAQSchemaProps {
  faqs: FAQ[];
  cityName?: string;
}

const EnhancedFAQSchema: React.FC<EnhancedFAQSchemaProps> = ({ faqs, cityName }) => {
  // Prepare FAQ items for the schema
  const faqItems = faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems,
    "about": {
      "@type": "Thing",
      "name": cityName ? `Vehicle Wraps in ${cityName}` : "Vehicle Wraps Chicago",
      "description": cityName ? 
        `Professional vehicle wrapping services in ${cityName}, Illinois` : 
        "Professional vehicle wrapping services throughout Chicago and surrounding areas"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default EnhancedFAQSchema;
