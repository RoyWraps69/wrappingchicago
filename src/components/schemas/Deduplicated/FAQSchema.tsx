import React from 'react';
import { useSchemaDeduplicator } from '@/components/seo/SchemaDeduplicator';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs?: FAQ[];
  pageUrl?: string;
  pageName?: string;
}

const FAQSchema: React.FC<FAQSchemaProps> = ({
  faqs = [
    {
      question: "How much does a vehicle wrap cost in Chicago?",
      answer: "Vehicle wrap costs in Chicago range from $1,200 for partial wraps to $5,000+ for full premium wraps. Car wraps average $2,500-$4,000, truck wraps $3,500-$6,000, and van wraps $2,800-$4,500. Cost factors include vehicle size, wrap coverage, design complexity, and material quality."
    },
    {
      question: "How long do vehicle wraps last?",
      answer: "Superior vehicle wraps deliver 5-7 years of exceptional performance with appropriate care. Engineered materials withstand Chicago's seasonal temperature extremes while maintaining color integrity and adhesive strength throughout the product lifecycle."
    },
    {
      question: "Will a vehicle wrap damage my car's paint?",
      answer: "Vehicle wraps enhance paint preservation through advanced protective technology. Certified installation techniques ensure damage-free application and removal while maintaining factory finish quality and vehicle resale value."
    },
    {
      question: "How long does vehicle wrap installation take?",
      answer: "Most vehicle wrap installations in Chicago are completed within 2-3 business days. Simple lettering projects can often be completed same-day, while complex full wraps may require up to 5 days for premium results."
    },
    {
      question: "Can vehicle wraps be removed?",
      answer: "Yes, professional vehicle wraps are designed for complete removal without paint damage. Our removal process uses specialized techniques and heat application to ensure your original paint finish remains intact."
    }
  ],
  pageUrl = "https://www.wrappingchicago.com",
  pageName = "Chicago Vehicle Wrap Services"
}) => {
  const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
  
  if (!canRenderSchema('FAQPage', 'DedupFAQSchema')) {
    return null;
  }
  
  registerSchema('FAQPage', 'DedupFAQSchema');

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faqpage`,
    "name": `${pageName} - Frequently Asked Questions`,
    "description": "Common questions about vehicle wrap services in Chicago including costs, installation time, durability, and paint protection.",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `${pageUrl}/#faq-${index + 1}`,
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

export default FAQSchema;