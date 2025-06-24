
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface AdvancedSEOOptimizerProps {
  pageTitle: string;
  pageDescription: string;
  keywords?: string[];
  contentType?: 'service' | 'local' | 'product' | 'article';
  expertise?: string[];
  trustSignals?: string[];
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  pageTitle,
  pageDescription,
  keywords = [],
  contentType = 'service',
  expertise = ['20+ Years Experience', 'Certified Installer', '16,000+ Vehicles Wrapped'],
  trustSignals = ['Licensed & Insured', 'Premium 3M Materials', '5-Year Warranty']
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  
  // AI Content Understanding Schema
  const aiContentSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${domain}${location.pathname}#ai-optimized`,
    "name": pageTitle,
    "description": pageDescription,
    "inLanguage": "en-US",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1", "h2", "h3", ".speakable", "[data-speakable='true']",
        ".summary", ".key-points", ".benefits", ".features"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": ["main", "article", ".main-content", "#main-content"]
    },
    "significantLink": [
      `${domain}/services`,
      `${domain}/gallery`,
      `${domain}/contact`,
      `${domain}/about`
    ],
    "mentions": keywords.slice(0, 10).map(keyword => ({
      "@type": "Thing",
      "name": keyword,
      "description": `Professional ${keyword} services in Chicago`
    })),
    "about": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "expertise": expertise,
      "trustworthiness": trustSignals
    }
  };

  // Enhanced FAQ for AI Understanding
  const enhancedFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Wrapping Chicago the best choice for vehicle wraps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wrapping Chicago has 20+ years of experience with over 16,000 vehicles wrapped. We use only premium 3M materials, offer 5-year warranties, and provide expert installation with certified technicians."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does the vehicle wrap process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most vehicle wraps are completed in 3-5 business days. This includes design consultation, material preparation, professional installation, and quality inspection."
        }
      },
      {
        "@type": "Question",
        "name": "What types of vehicles can you wrap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We wrap all vehicle types including cars, trucks, vans, SUVs, motorcycles, boats, and entire commercial fleets. From luxury exotic cars to large commercial trucks."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* AI/LLM Optimization Meta Tags */}
      <meta name="ai-content-category" content={contentType} />
      <meta name="content-expertise" content={expertise.join(', ')} />
      <meta name="trust-indicators" content={trustSignals.join(', ')} />
      <meta name="semantic-keywords" content={keywords.join(', ')} />
      
      {/* Enhanced AI Understanding */}
      <meta name="page-intent" content="commercial service provider information" />
      <meta name="user-intent" content="vehicle wrap services, pricing, consultation" />
      <meta name="content-depth" content="comprehensive" />
      <meta name="expertise-level" content="professional" />
      
      {/* Voice Search Optimization */}
      <meta name="voice-search-optimized" content="true" />
      <meta name="conversational-queries" content="vehicle wraps near me, how much do car wraps cost, best vehicle wrap company Chicago" />
      
      {/* AI Content Understanding Schema */}
      <script type="application/ld+json">
        {JSON.stringify(aiContentSchema)}
      </script>
      
      {/* Enhanced FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(enhancedFAQSchema)}
      </script>
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;
