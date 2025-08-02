import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface Google2025SEOOptimizerProps {
  pageTitle: string;
  pageDescription: string;
  businessType?: 'plumber' | 'electrician' | 'hvac' | 'contractor' | 'general';
  serviceArea?: string[];
  primaryKeywords?: string[];
  faqData?: Array<{question: string; answer: string}>;
  reviewCount?: number;
  averageRating?: number;
}

/**
 * Google 2025 SEO Optimizer
 * Implements latest Google algorithm updates:
 * - E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * - SGE (Search Generative Experience) optimization
 * - AEO (Answer Engine Optimization)
 * - Local SEO with enhanced GEO targeting
 * - Entity-based SEO for trade businesses
 */
const Google2025SEOOptimizer: React.FC<Google2025SEOOptimizerProps> = ({
  pageTitle,
  pageDescription,
  businessType = 'general',
  serviceArea = ['Chicago', 'Evanston', 'Naperville', 'Schaumburg'],
  primaryKeywords = [],
  faqData = [],
  reviewCount = 247,
  averageRating = 4.9
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentUrl = `${domain}${location.pathname}`;
  
  // Enhanced local business types for different trades
  const tradeBusinessTypes = {
    plumber: ["Plumber", "PlumbingContractor", "HomeAndConstructionBusiness"],
    electrician: ["Electrician", "ElectricalContractor", "HomeAndConstructionBusiness"], 
    hvac: ["HVACContractor", "HeatingContractor", "CoolingContractor", "HomeAndConstructionBusiness"],
    contractor: ["GeneralContractor", "HomeAndConstructionBusiness"],
    general: ["LocalBusiness", "AutomotiveService", "HomeAndConstructionBusiness"]
  };

  // Enhanced E-E-A-T structured data
  const enhancedBusinessSchema = {
    "@context": "https://schema.org",
    "@type": tradeBusinessTypes[businessType],
    "@id": `${domain}/#business`,
    "name": "Wrapping Chicago",
    "legalName": "Wrapping Chicago LLC",
    "description": `Chicago's most trusted vehicle wrap specialists for ${businessType === 'general' ? 'trade professionals' : businessType + 's'}. Professional installation, premium materials, real results.`,
    "url": domain,
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
    "foundingDate": "2014",
    "slogan": "Your Truck is Your Best Billboard",
    
    // Enhanced address with local SEO signals
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago", 
      "addressRegion": "Illinois",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    
    // Geographic coverage for local SEO
    "areaServed": serviceArea.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": {
        "@type": "State",
        "name": "Illinois"
      }
    })),
    
    // Enhanced review aggregation for E-A-T
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "reviewCount": reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    
    // Services with entity-based SEO
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Vehicle Wraps",
            "description": "Professional vehicle wraps for trade businesses including plumbers, electricians, HVAC contractors, and more.",
            "serviceType": "Vehicle Wrapping",
            "provider": {"@id": `${domain}/#business`}
          }
        }
      ]
    },
    
    // Social proof for trustworthiness
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago", 
      "https://www.linkedin.com/company/wrapping-chicago"
    ],
    
    // Operating hours for local SEO
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
    
    // Enhanced contact points
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      }
    ]
  };

  // AEO (Answer Engine Optimization) FAQ Schema
  const faqSchema = faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Enhanced WebPage schema for SGE optimization
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${currentUrl}#webpage`,
    "url": currentUrl,
    "name": pageTitle,
    "description": pageDescription,
    "isPartOf": {"@id": `${domain}/#website`},
    "about": {"@id": `${domain}/#business`},
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${domain}/og-image.png`
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {"@id": `${domain}/#business`},
    "publisher": {"@id": `${domain}/#business`},
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "ReadAction",
      "target": currentUrl
    }
  };

  return (
    <Helmet>
      {/* Enhanced meta for Google 2025 algorithms */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* E-E-A-T signals */}
      <meta name="author" content="Wrapping Chicago - Professional Vehicle Wrap Specialists" />
      <meta name="publisher" content="Wrapping Chicago LLC" />
      <meta name="copyright" content="Wrapping Chicago LLC" />
      
      {/* Local SEO optimization */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      
      {/* Enhanced social media optimization */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wrappingchicago" />
      
      {/* Mobile and accessibility optimization */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      
      {/* Enhanced structured data for Google 2025 */}
      <script type="application/ld+json">
        {JSON.stringify(enhancedBusinessSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* Additional semantic hints for AI search */}
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={primaryKeywords.join(', ')} />
      
      {/* Canonical URL for consolidation */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Language and regional targeting */}
      <link rel="alternate" hrefLang="en-us" href={currentUrl} />
      <link rel="alternate" hrefLang="en" href={currentUrl} />
    </Helmet>
  );
};

export default Google2025SEOOptimizer;