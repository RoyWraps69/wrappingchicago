
import { testSchema } from './validateSchema';
import { cities } from '@/data/cities';

export const runSchemaTests = () => {
  console.group('Running Schema Validation Tests');

  // Test LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago",
    "image": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
    "telephone": "(312) 597-1286",
    "email": "roy@wrappingchicago.com",
    "url": "https://www.wrappingchicago.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    }
  };
  testSchema(localBusinessSchema, 'LocalBusiness');

  // Test WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vehicle Wraps Chicago",
    "description": "Professional vehicle wrapping services in Chicago, IL",
    "url": "https://www.wrappingchicago.com",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Wrapping Chicago"
    }
  };
  testSchema(webPageSchema, 'WebPage');

  // Test FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a vehicle wrap cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vehicle wrap costs typically range from $2,500 to $5,000."
        }
      }
    ]
  };
  testSchema(faqSchema, 'FAQ');

  // Test BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.wrappingchicago.com"
      }
    ]
  };
  testSchema(breadcrumbSchema, 'BreadcrumbList');

  console.groupEnd();
};

// Add this to your development environment setup
if (process.env.NODE_ENV === 'development') {
  runSchemaTests();
}
