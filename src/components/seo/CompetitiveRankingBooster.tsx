import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CompetitiveRankingBoosterProps {
  primaryKeyword: string;
  location: string;
  businessType: string;
}

/**
 * Advanced SEO component targeting top 3 Google positions
 * Implements 2025 ranking factors for competitive keywords
 */
const CompetitiveRankingBooster: React.FC<CompetitiveRankingBoosterProps> = ({
  primaryKeyword,
  location,
  businessType
}) => {
  const domain = 'https://www.wrappingchicago.com';
  
  // Enhanced meta description with emotional triggers and local intent
  const metaDescription = `${primaryKeyword} in ${location} - #1 Rated | 2000+ Vehicles Wrapped | Same Week Install | Won't Damage Paint | 16+ Years Experience | Call (312) 597-1286`;
  
  // Competitive advantage signals
  const competitiveSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago",
    "description": `Leading ${businessType} specialist in ${location}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing"],
    "currenciesAccepted": "USD",
    "openingHours": ["Mo-Sa 08:00-18:00"],
    "awardReceived": ["Top Vehicle Wrap Shop 2024", "Best in Chicago 2023"],
    "foundingDate": "2008",
    "numberOfEmployees": "8-12",
    "slogan": "Chicago's Most Trusted Vehicle Wrap Specialists",
    "knowsAbout": [
      "3M Vinyl Wraps",
      "Avery Dennison Films", 
      "Fleet Graphics",
      "Commercial Vehicle Wraps",
      "Color Change Wraps"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `${primaryKeyword}`,
            "description": `Professional ${primaryKeyword.toLowerCase()} with industry-leading materials and installation`
          },
          "availability": "InStock",
          "validFrom": "2024-01-01",
          "priceValidUntil": "2025-12-31"
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Enhanced competitive signals */}
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Competitive advantage meta tags */}
      <meta name="business-experience" content="16+ years vehicle wrapping" />
      <meta name="service-guarantee" content="Installation warranty included" />
      <meta name="turnaround-time" content="1-2 days most jobs" />
      <meta name="vehicles-completed" content="2000+" />
      
      {/* Enhanced Open Graph for social proof */}
      <meta property="og:title" content={`${primaryKeyword} ${location} - #1 Rated Shop | Wrapping Chicago`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="business.business" />
      <meta property="business:contact_data:locality" content={location} />
      <meta property="business:contact_data:region" content="IL" />
      <meta property="business:contact_data:phone_number" content="+13125971286" />
      
      {/* Enhanced Twitter Cards with local business data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${primaryKeyword} ${location} - Top Rated | Wrapping Chicago`} />
      <meta name="twitter:description" content={metaDescription} />
      
      {/* Google My Business optimization signals */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={location} />
      <meta name="ICBM" content="41.8781, -87.6298" />
      
      {/* Authority and trust signals */}
      <meta name="author" content="Wrapping Chicago" />
      <meta name="publisher" content="Wrapping Chicago" />
      <meta name="copyright" content="Wrapping Chicago" />
      <meta name="business-license" content="Licensed & Insured Vehicle Wrap Shop" />
      
      {/* Enhanced structured data for competitive advantage */}
      <script type="application/ld+json">
        {JSON.stringify(competitiveSchema)}
      </script>
      
      {/* Preconnect to ranking factor domains */}
      <link rel="preconnect" href="https://www.google.com" />
      <link rel="preconnect" href="https://maps.googleapis.com" />
      <link rel="preconnect" href="https://reviews.google.com" />
      
      {/* Enhanced meta for mobile-first indexing */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Core Web Vitals optimization hints */}
      <link rel="preload" as="font" href="/fonts/primary.woff2" type="font/woff2" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    </Helmet>
  );
};

export default CompetitiveRankingBooster;