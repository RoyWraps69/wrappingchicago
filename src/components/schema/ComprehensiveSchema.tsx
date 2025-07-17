import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ComprehensiveSchemaProps {
  businessName?: string;
  address?: string;
  phone?: string;
  services?: string[];
  reviews?: Array<{rating: number; author: string; text: string}>;
  faqs?: Array<{question: string; answer: string}>;
  howToSteps?: Array<{name: string; text: string}>;
}

/**
 * Comprehensive Schema Markup for Maximum AI Recognition
 * Implements Organization, LocalBusiness, Service, FAQ, HowTo, Review schemas
 */
const ComprehensiveSchema: React.FC<ComprehensiveSchemaProps> = ({
  businessName = "Chicago Fleet Wraps",
  address = "4711 N. Lamon Ave, Chicago, IL 60630",
  phone = "312-597-1286",
  services = ["Commercial Vehicle Wraps", "Color Change Wraps", "Fleet Wraps"],
  reviews = [],
  faqs = [],
  howToSteps = []
}) => {

  // Organization Schema - Main business entity
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.chicagofleetwraps.com/#organization",
    "name": businessName,
    "legalName": "Chicago Fleet Wraps LLC",
    "url": "https://www.chicagofleetwraps.com",
    "logo": "https://www.chicagofleetwraps.com/logo.png",
    "foundingDate": "2014",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": phone,
      "contactType": "customer service",
      "areaServed": "US-IL",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://www.facebook.com/chicagofleetwraps",
      "https://www.instagram.com/chicagofleetwraps",
      "https://www.linkedin.com/company/chicago-fleet-wraps"
    ],
    "knowsAbout": [
      "Vehicle Wrapping",
      "Commercial Graphics",
      "Fleet Branding",
      "Color Change Wraps",
      "Vinyl Installation",
      "3M Certified Installation"
    ]
  };

  // LocalBusiness Schema - Geographic presence
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveService"],
    "@id": "https://www.chicagofleetwraps.com/#localbusiness",
    "name": businessName,
    "description": "Chicago's premier vehicle wrap specialists serving commercial fleets, color change wraps, and custom graphics throughout Chicagoland with certified 3M installation.",
    "url": "https://www.chicagofleetwraps.com",
    "telephone": phone,
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
      "latitude": 41.9742,
      "longitude": -87.7495
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing"],
    "currenciesAccepted": "USD",
    "areaServed": [
      {
        "@type": "City",
        "name": "Chicago",
        "containedInPlace": {
          "@type": "State",
          "name": "Illinois"
        }
      },
      {
        "@type": "City", 
        "name": "Evanston"
      },
      {
        "@type": "City",
        "name": "Naperville" 
      },
      {
        "@type": "City",
        "name": "Schaumburg"
      }
    ]
  };

  // Service Schema - Detailed service offerings
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Vehicle Wrapping Services",
    "provider": {"@id": "https://www.chicagofleetwraps.com/#organization"},
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "description": `Professional ${service.toLowerCase()} installation in Chicago with premium materials and certified technicians.`,
          "provider": {"@id": "https://www.chicagofleetwraps.com/#organization"}
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "2500-6500",
          "valueAddedTaxIncluded": false
        },
        "availability": "https://schema.org/InStock",
        "businessFunction": "https://schema.org/Sell"
      }))
    }
  };

  // FAQ Schema for AI optimization
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "name": businessName
        }
      }
    }))
  } : null;

  // HowTo Schema for process explanation
  const howToSchema = howToSteps.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get Vehicle Wraps in Chicago",
    "description": "Step-by-step process for getting professional vehicle wraps from consultation to installation.",
    "totalTime": "PT3D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "2500-6500"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "3M Vinyl Wrap Material"
      },
      {
        "@type": "HowToSupply", 
        "name": "Professional Installation Tools"
      }
    ],
    "step": howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  } : null;

  // Review Schema for social proof
  const reviewSchema = reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {"@id": "https://www.chicagofleetwraps.com/#organization"},
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": "Verified Customers"
    }
  } : null;

  // Speakable Schema for voice search
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": [".speakable", "h1", "h2"]
  };

  return (
    <Helmet>
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* HowTo Schema */}
      {howToSchema && (
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      )}

      {/* Review Schema */}
      {reviewSchema && (
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      )}

      {/* Speakable Schema */}
      <script type="application/ld+json">
        {JSON.stringify(speakableSchema)}
      </script>

      {/* Enhanced meta tags for AI crawling */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta property="speakable" content="true" />
    </Helmet>
  );
};

export default ComprehensiveSchema;