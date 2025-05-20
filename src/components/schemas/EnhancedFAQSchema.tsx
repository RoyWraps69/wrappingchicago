
import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface EnhancedFAQSchemaProps {
  faqs: FAQ[];
  cityName?: string;
}

const EnhancedFAQSchema: React.FC<EnhancedFAQSchemaProps> = ({ 
  faqs,
  cityName = "Chicago" 
}) => {
  // If no FAQs are provided, use default FAQs
  const finalFaqs = faqs.length > 0 ? faqs : [
    {
      question: `How much do vehicle wraps cost in ${cityName}?`,
      answer: `Vehicle wrap costs in ${cityName} typically range from $2,500 to $5,000 for full wraps depending on vehicle size and design complexity. Partial wraps start around $1,500. All our wraps use premium 3M materials with expert installation.`
    },
    {
      question: `How long do vehicle wraps last in ${cityName}'s climate?`,
      answer: `With proper care and maintenance, our premium vehicle wraps typically last 5-7 years in ${cityName}'s climate. All our wraps come with a 2-year warranty and are made with durable 3M and Avery Dennison materials that can withstand weather extremes.`
    }
  ];
  
  // Create FAQPage schema with enhanced properties
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.wrappingchicago.com/faq/#faqpage",
    "mainEntity": finalFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "specialty": `Vehicle wrap services in ${cityName}, IL`,
    "about": {
      "@type": "Thing",
      "name": "Vehicle Wrapping Services",
      "description": `Frequently asked questions about professional vehicle wrapping services in ${cityName}, including car wraps, truck wraps, and commercial fleet wraps.`
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": [".faq-content", "#faq-section", ".questions-answers"]
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".faq-question", ".faq-answer"]
    },
    "accessMode": ["textual", "visual"],
    "keywords": [
      `vehicle wrap FAQ ${cityName}`,
      `car wrap questions ${cityName}`,
      `vehicle wrap cost ${cityName}`,
      `how long do vehicle wraps last`,
      `professional vehicle wrapping process`,
      `vehicle wrap maintenance`,
      `3M vinyl wrap durability`
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Vehicle Wrap Consultation",
        "description": `Free vehicle wrap consultations and quotes for ${cityName} businesses and individuals.`
      },
      "offeredBy": {
        "@type": "LocalBusiness",
        "name": "Wrapping Chicago",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4711 N. Lamon Ave",
          "addressLocality": "Chicago",
          "addressRegion": "IL",
          "postalCode": "60630",
          "addressCountry": "US"
        }
      }
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
