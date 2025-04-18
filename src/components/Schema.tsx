import React from 'react';
import { City } from '@/data/types/city';
import LocalBusinessSchema from './schemas/LocalBusinessSchema';
import WebsiteSchema from './schemas/WebsiteSchema';
import FAQSchema from './schemas/FAQSchema';
import BreadcrumbSchema from './schemas/BreadcrumbSchema';
import OfferCatalogSchema from './schemas/OfferCatalogSchema';
import WebPageSchema from './schemas/WebPageSchema';
import ActionSchema from './schemas/ActionSchema';
import VehicleWrapServiceSchema from './schemas/VehicleWrapServiceSchema';
import AIVoiceSearchSchema from './schemas/AIVoiceSearchSchema';

interface FAQ {
  question: string;
  answer: string;
}

interface SchemaProps {
  city: City;
  path: string;
  pageTitle: string;
  pageDescription: string;
  faqs?: FAQ[];
  keywords?: string[];
  isServicePage?: boolean;
  serviceType?: string;
  includeSpeakable?: boolean;
  mainImage?: string;
  datePublished?: string;
  dateModified?: string;
}

const Schema: React.FC<SchemaProps> = ({ 
  city, 
  path, 
  pageTitle, 
  pageDescription, 
  faqs = [], 
  keywords = [],
  isServicePage = false,
  serviceType = '',
  includeSpeakable = true,
  mainImage = '/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png',
  datePublished = '2022-01-01T00:00:00+00:00',
  dateModified = new Date().toISOString()
}) => {
  const domain = "https://www.wrappingchicago.com";
  const fullUrl = `${domain}${path}`;
  
  // Extract breadcrumb items from path
  const pathSegments = path.split('/').filter(Boolean);
  const breadcrumbItems = [
    {
      position: 1,
      name: "Home",
      item: domain
    }
  ];
  
  // Build breadcrumb path
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    breadcrumbItems.push({
      position: index + 2,
      name: segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('Il', 'IL'),
      item: `${domain}${currentPath}`
    });
  });

  // Run schema validation in development
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('../utils/validateSchema').then(({ testSchema }) => {
        console.group('Testing Current Page Schemas');
        // Test each schema component
        const schemas = [
          { schema: generateLocalBusinessSchema(), name: 'LocalBusiness' },
          { schema: generateWebsiteSchema(), name: 'Website' },
          { schema: generateWebPageSchema(), name: 'WebPage' },
          ...(faqs.length > 0 ? [{ schema: generateFAQSchema(), name: 'FAQ' }] : []),
          { schema: generateBreadcrumbSchema(), name: 'Breadcrumb' }
        ];
        
        schemas.forEach(({ schema, name }) => {
          testSchema(schema, name);
        });
        console.groupEnd();
      });
    }
  }, [city, path, pageTitle, pageDescription, faqs]);

  // Helper functions to generate each schema type
  const generateLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://wrappingchicago.com/#organization",
    "name": "Wrapping Chicago",
    "alternateName": "Chicago Vehicle Wrapping Services",
    "description": `Premium vehicle wrapping service serving ${city.name}, IL with professional design for fleet wraps, color change wraps, and commercial graphics. With over 16,000 vehicle wraps completed in our 20 years of business, we've transformed vehicles into eye-catching mobile advertisements throughout Chicago and suburbs.`,
    "url": `https://wrappingchicago.com/vehicle-wraps-${city.slug}-il`,
    "telephone": "(312) 597-1286",
    "email": "roy@chicagofleetwraps.com",
    "foundingDate": "2003",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "USD",
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago",
      "https://www.google.com/search?q=Wrapping+Chicago"
    ],
    "image": [
      "https://wrappingchicago.com/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png",
      "https://wrappingchicago.com/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png",
      "https://wrappingchicago.com/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png"
    ],
    "logo": "https://wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "15"
    },
    "award": [
      `Best Vehicle Wrap Company in Chicago ${new Date().getFullYear()}`,
      "Premium 3M Materials Provider",
      "16,000+ Vehicle Wraps Completed"
    ],
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "sameAs": `https://en.wikipedia.org/wiki/${city.name},_Illinois`
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "geoRadius": "50000"
    },
    "slogan": "Transform Your Vehicle. Elevate Your Brand.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Vehicle Wraps",
            "description": "Professional fleet vehicle wrapping services for businesses throughout Chicago and surrounding areas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Change Wraps",
            "description": "Premium color change vehicle wraps with a variety of finishes including matte, gloss, satin, and custom."
          }
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "John Smith"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": new Date().toISOString().split('T')[0],
        "reviewBody": "Exceptional work from the Wrapping Chicago team. They transformed our fleet vehicles into eye-catching mobile advertisements. The quality of materials and installation is top-notch."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://wrappingchicago.com/vehicle-wraps-${city.slug}-il`
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wrappingchicago.com/contact",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Vehicle Wrap Consultation"
      }
    }
  });

  const generateWebsiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${fullUrl}/#website`,
    "url": fullUrl,
    "name": pageTitle,
    "description": pageDescription,
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
        "width": "180",
        "height": "60"
      },
      "sameAs": [
        "https://www.facebook.com/wrappingchicago",
        "https://www.instagram.com/wrappingchicago",
        "https://twitter.com/wrappingchicago",
        "https://www.linkedin.com/company/wrappingchicago"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "customer service",
        "areaServed": "Chicago",
        "availableLanguage": "English"
      }
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${domain}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${domain}/contact`
        },
        "result": {
          "@type": "Reservation",
          "name": "Vehicle Wrap Consultation"
        }
      }
    ],
    "copyrightYear": new Date().getFullYear(),
    "inLanguage": "en-US",
    "dateModified": dateModified,
    ...(keywords && keywords.length > 0 && { "keywords": keywords.join(", ") })
  });

  const generateWebPageSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${fullUrl}#webpage`,
    "url": fullUrl,
    "name": pageTitle,
    "description": pageDescription,
    "isPartOf": {
      "@id": `${domain}/#website`
    },
    "inLanguage": "en-US",
    "datePublished": "2020-01-01T00:00:00+00:00",
    "dateModified": dateModified,
    "potentialAction": [
      {
        "@type": "ReadAction",
        "target": [fullUrl]
      }
    ],
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": mainImage,
      "width": "1200",
      "height": "630"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".speakable"]
    },
    ...(keywords && keywords.length > 0 && { "keywords": keywords.join(", ") }),
    "breadcrumb": {
      "@id": `${fullUrl}#breadcrumb`
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": [".page-content", "main"]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
        "width": "180",
        "height": "60"
      }
    },
    "about": {
      "@type": "Thing",
      "name": "Vehicle Wraps Chicago",
      "description": "Professional vehicle wrapping services in Chicago, including car wraps, truck wraps, van wraps, and fleet wraps."
    }
  });

  const generateFAQSchema = () => ({
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
  });

  const generateBreadcrumbSchema = () => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.item
    }))
  });
  
  return (
    <>
      <LocalBusinessSchema 
        city={city}
      />
      
      <WebsiteSchema 
        name={pageTitle}
        description={pageDescription}
        url={fullUrl}
        lastModified={dateModified}
        keywords={keywords}
      />
      
      {faqs && faqs.length > 0 && (
        <FAQSchema 
          faqs={faqs}
          pageUrl={fullUrl}
        />
      )}
      
      <BreadcrumbSchema 
        items={breadcrumbItems}
      />
      
      <OfferCatalogSchema 
        city={city} 
      />
      
      <WebPageSchema
        title={pageTitle}
        description={pageDescription}
        url={fullUrl}
        lastModified={dateModified}
        keywords={keywords}
        mainImage={mainImage}
      />
      
      {/* Add service schema if it's a service page */}
      {isServicePage && serviceType && (
        <VehicleWrapServiceSchema
          serviceType={serviceType}
          cityName={city.name}
          url={fullUrl}
        />
      )}
      
      {/* Add AI voice search schema for better voice assistant results */}
      {includeSpeakable && (
        <AIVoiceSearchSchema
          title={pageTitle}
          description={pageDescription}
          cityName={city.name}
        />
      )}
      
      <ActionSchema />
    </>
  );
};

export default Schema;
