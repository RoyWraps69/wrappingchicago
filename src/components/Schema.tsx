import React from 'react';
import { Helmet } from 'react-helmet-async';
import { City } from '@/data/cities';

interface SchemaProps {
  city: City;
  path: string;
  pageTitle: string;
  pageDescription: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  isServicePage?: boolean;
  serviceType?: string;
  priority?: 'critical' | 'high' | 'normal' | 'low';
  keywords?: string[];
  includeSpeakable?: boolean;
  mainImage?: string;
  skipFAQSchema?: boolean;
  datePublished?: string;
  dateModified?: string;
  allCities?: City[];
}

const Schema: React.FC<SchemaProps> = ({ 
  city, 
  path, 
  pageTitle, 
  pageDescription, 
  faqs = [], 
  isServicePage = false, 
  serviceType = "Vehicle Wraps",
  priority = 'normal',
  keywords = [],
  includeSpeakable = false,
  mainImage,
  skipFAQSchema = false,
  datePublished,
  dateModified,
  allCities = []
}) => {
  const domain = "https://www.wrappingchicago.com";
  const fullUrl = `${domain}${path}`;
  
  // Comprehensive keyword integration
  const coreKeywords = [
    "vehicle wraps", "car wraps", "truck wraps", "van wraps", "fleet wraps",
    "vinyl wrap", "custom graphics", "commercial graphics", "color change wraps",
    "luxury wraps", "3M vinyl", "Avery wraps", "Chicago wraps", "premium vinyl",
    "wrap installation", "wrap design", "wrap services", "fleet branding",
    "advertising wraps", "protective film", "paint protection"
  ];
  
  const chicagoKeywords = [
    "car wraps Chicago", "truck wraps Chicago", "van wraps Chicago", 
    "fleet wraps Chicago", "vehicle wraps Chicago", "custom graphics Chicago",
    "commercial graphics Chicago", "wrap installation Chicago", "vinyl wrap Chicago"
  ];
  
  const longTailKeywords = [
    "car wrap cost Chicago", "vehicle wrap pricing Chicago", "fleet wrap services Chicago",
    "custom car wrap designs Chicago", "professional vehicle wrap consultation",
    "premium 3M vinyl wraps Chicago", "luxury exotic car wraps Chicago",
    "commercial fleet branding solutions", "best truck wrap installers Chicago"
  ];
  
  const allKeywords = [...coreKeywords, ...chicagoKeywords, ...longTailKeywords, ...keywords];
  
  // Enhanced business schema with keywords
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${domain}/#organization`,
    "name": "Wrapping Chicago",
    "alternateName": "Chicago Vehicle Wraps",
    "description": `Comprehensive vehicle customization services in Chicago IL. Specializing in automotive vinyl transformation, commercial fleet branding, custom graphic design, color modification wraps, luxury vehicle enhancement, and business marketing solutions using advanced application techniques and premium materials.`,
    "url": domain,
    "logo": {
      "@type": "ImageObject",
      "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
      "width": 180,
      "height": 60
    },
    "image": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Chicago",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago"
      },
      {
        "@type": "State",
        "name": "Illinois"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "geoRadius": 50000
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "keywords": allKeywords.join(", "),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services Chicago",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wraps Chicago",
            "description": "Custom car wrap installation with premium vinyl materials, color change wraps, and luxury wrap designs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Truck Wraps Chicago",
            "description": "Professional truck wrap services for commercial vehicles, box trucks, and pickup trucks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Van Wraps Chicago",
            "description": "Van wrap installation for cargo vans, sprinter vans, and commercial delivery vehicles"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Wraps Chicago",
            "description": "Fleet branding solutions and commercial vehicle graphics for business fleets"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago"
    ]
  };

  // Service schema for service pages
  const serviceSchema = isServicePage ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceType} in Chicago IL`,
    "description": pageDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping Chicago",
      "@id": `${domain}/#organization`
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "sameAs": `https://en.wikipedia.org/wiki/${city.name.replace(' ', '_')}`
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceType} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Professional ${serviceType}`,
            "description": `Expert ${serviceType.toLowerCase()} installation with premium materials`
          }
        }
      ]
    },
    "keywords": allKeywords.join(", "),
    "url": fullUrl
  } : null;

  // FAQ Schema - only if not skipped
  const faqSchema = (faqs.length > 0 && !skipFAQSchema) ? {
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
  } : null;

  return (
    <Helmet>
      {/* Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      
      {/* Service Schema */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      
      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default Schema;
