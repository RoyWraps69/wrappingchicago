
import React from 'react';
import { glossaryData } from '@/data/glossaryTerms';

const GlossarySchema: React.FC = () => {
  const domain = "https://www.wrappingchicago.com";
  
  // Create the main DefinedTermSet schema
  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${domain}/glossary#definedtermset`,
    "name": "Vehicle Wrap Glossary - Complete Professional Terms Dictionary",
    "description": "Comprehensive glossary of 100+ professional vehicle wrap terms covering materials, tools, techniques, and processes. Essential reference for installers, designers, and customers.",
    "url": `${domain}/glossary`,
    "inLanguage": "en-US",
    "dateModified": new Date().toISOString().split('T')[0],
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "url": domain,
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`
      }
    },
    "hasDefinedTerm": glossaryData.flatMap(category => 
      category.terms.map(term => ({
        "@type": "DefinedTerm",
        "@id": `${domain}/glossary/${term.id}`,
        "name": term.name,
        "description": term.definition,
        "termCode": term.id,
        "url": `${domain}/glossary#${term.id}`,
        "inDefinedTermSet": {
          "@id": `${domain}/glossary#definedtermset`
        }
      }))
    )
  };

  // Create individual term schemas for better AI understanding
  const individualTermSchemas = glossaryData.flatMap(category =>
    category.terms.map(term => ({
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": `${domain}/glossary/${term.id}`,
      "name": term.name,
      "description": term.definition,
      "termCode": term.id,
      "url": `${domain}/glossary#${term.id}`,
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "@id": `${domain}/glossary#definedtermset`,
        "name": "Vehicle Wrap Glossary"
      },
      "about": {
        "@type": "Thing",
        "name": `Vehicle Wrap ${category.name}`,
        "description": category.description
      }
    }))
  );

  // FAQ Schema for common glossary questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${domain}/glossary#faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between cast and calendared vinyl?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cast vinyl is a premium, thin material that's highly conformable and ideal for complex curves, while calendared vinyl is thicker, less conformable, and better suited for flat surfaces or short-term applications."
        }
      },
      {
        "@type": "Question",
        "name": "What tools are essential for vehicle wrap installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential tools include squeegees, heat guns, knifeless tape, wrap gloves, and infrared thermometers. Each tool serves a specific purpose in achieving professional installation results."
        }
      },
      {
        "@type": "Question",
        "name": "How long do vehicle wraps typically last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional vehicle wraps typically last 5-7 years with proper care, depending on the vinyl quality, installation, and environmental conditions."
        }
      }
    ]
  };

  return (
    <>
      {/* Main DefinedTermSet Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      
      {/* Individual Term Schemas for Enhanced AI Understanding */}
      {individualTermSchemas.slice(0, 5).map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default GlossarySchema;
