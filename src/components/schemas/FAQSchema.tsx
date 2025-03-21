
import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
  pageUrl: string;
}

const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs, pageUrl }) => {
  // Handle case when faqs is undefined or empty
  if (!faqs || faqs.length === 0) {
    return null;
  }

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
    />
  );
};

export default FAQSchema;
