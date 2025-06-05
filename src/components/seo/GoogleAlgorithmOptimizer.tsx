
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface GoogleAlgorithmOptimizerProps {
  pageTitle: string;
  pageDescription: string;
  keywords?: string[];
  contentType?: 'article' | 'service' | 'local' | 'product';
  lastModified?: string;
  authorName?: string;
  expertise?: string[];
  trustSignals?: string[];
}

/**
 * Comprehensive Google Algorithm Alignment Component
 * Implements latest SEO best practices for 2024+ algorithms
 */
const GoogleAlgorithmOptimizer: React.FC<GoogleAlgorithmOptimizerProps> = ({
  pageTitle,
  pageDescription,
  keywords = [],
  contentType = 'service',
  lastModified,
  authorName = 'Roy - Vehicle Wrap Expert',
  expertise = ['Vehicle Wraps', '20+ Years Experience', 'Certified Installer'],
  trustSignals = ['16,000+ Vehicles Wrapped', 'Premium 3M Materials', 'Licensed & Insured']
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentUrl = `${domain}${location.pathname}`;
  const cleanCanonical = currentUrl.split('?')[0].replace(/\/$/, '') || `${domain}/`;
  
  // E-E-A-T focused structured data
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": authorName,
    "jobTitle": "Vehicle Wrap Specialist",
    "knowsAbout": expertise,
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "Wrapping Chicago",
      "url": domain
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${cleanCanonical}#webpage`,
    "url": cleanCanonical,
    "name": pageTitle,
    "description": pageDescription,
    "inLanguage": "en-US",
    "dateModified": lastModified || new Date().toISOString(),
    "author": authorSchema,
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Wrapping Chicago",
      "@id": `${domain}/#organization`
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "main"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".speakable-content"]
    },
    "about": keywords.slice(0, 5).map(keyword => ({
      "@type": "Thing",
      "name": keyword
    }))
  };

  return (
    <Helmet>
      {/* Core SEO with E-E-A-T focus */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={cleanCanonical} />
      
      {/* Google Algorithm 2024+ Optimization */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* E-E-A-T Enhancement */}
      <meta name="author" content={authorName} />
      <meta name="expertise" content={expertise.join(', ')} />
      <meta name="experience" content="20+ years in vehicle wrapping industry" />
      <meta name="authoritativeness" content="Licensed vehicle wrap installer with 16,000+ completed projects" />
      <meta name="trustworthiness" content={trustSignals.join(', ')} />
      
      {/* Content Freshness */}
      <meta name="last-modified" content={lastModified || new Date().toISOString()} />
      <meta name="revisit-after" content="7 days" />
      
      {/* Core Web Vitals Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Local SEO Enhancement */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      
      {/* Mobile-First Indexing */}
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(authorSchema)}
      </script>
    </Helmet>
  );
};

export default GoogleAlgorithmOptimizer;
