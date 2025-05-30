
import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface CleanFAQSchemaProps {
  faqs: FAQ[];
  pageUrl: string;
}

const CleanFAQSchema: React.FC<CleanFAQSchemaProps> = ({ faqs, pageUrl }) => {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `${pageUrl}#faq-${index}`,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default CleanFAQSchema;
