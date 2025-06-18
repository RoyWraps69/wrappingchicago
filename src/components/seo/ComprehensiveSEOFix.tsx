
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface ComprehensiveSEOFixProps {
  pageTitle: string;
  pageDescription: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  twitterHandle?: string;
  lastModified?: string;
  structuredData?: object;
  priority?: 'critical' | 'high' | 'normal' | 'low';
}

/**
 * Comprehensive SEO Fix Component
 * Addresses all major SEO issues: Canonical Links, Page Titles, URLs, Headers, 
 * Meta Descriptions, Twitter Meta, OG Meta, Schema, and Links
 */
const ComprehensiveSEOFix: React.FC<ComprehensiveSEOFixProps> = ({
  pageTitle,
  pageDescription,
  keywords = [],
  canonicalUrl,
  ogImage,
  twitterHandle = '@wrappingchicago',
  lastModified,
  structuredData,
  priority = 'normal'
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  
  // Fix Page URL issues - clean canonical URL
  const cleanCanonicalUrl = () => {
    if (canonicalUrl) return canonicalUrl;
    
    let cleanPath = location.pathname;
    // Remove trailing slash except for homepage
    if (cleanPath !== '/' && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }
    return `${domain}${cleanPath}`;
  };
  
  const finalCanonicalUrl = cleanCanonicalUrl();
  const finalOgImage = ogImage || `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`;
  const currentDate = lastModified || new Date().toISOString();
  
  // Fix Page Title issues - ensure proper formatting
  const currentYear = new Date().getFullYear();
  const formattedTitle = pageTitle.includes(currentYear.toString()) 
    ? pageTitle 
    : `${pageTitle} | ${currentYear}`;
  
  // Fix robots directive based on priority
  const getRobotsDirective = () => {
    const baseDirective = "index, follow";
    const snippetLimits = {
      critical: "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      high: "max-snippet:-1, max-image-preview:large, max-video-preview:0",
      normal: "max-snippet:160, max-image-preview:large, max-video-preview:0",
      low: "max-snippet:100, max-image-preview:standard, max-video-preview:0"
    };
    return `${baseDirective}, ${snippetLimits[priority]}`;
  };

  return (
    <Helmet>
      {/* FIX: Page Title issues */}
      <title>{formattedTitle}</title>
      
      {/* FIX: Meta Description issues */}
      <meta name="description" content={pageDescription} />
      
      {/* FIX: Keywords if provided */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* FIX: Canonical Link issues - Primary canonical */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* FIX: Page URL issues - Alternate links */}
      <link rel="alternate" href={finalCanonicalUrl} hrefLang="en-us" />
      <link rel="alternate" href={finalCanonicalUrl} hrefLang="en" />
      
      {/* FIX: Domain issues - Favicon and theme */}
      <link rel="icon" type="image/png" sizes="32x32" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="shortcut icon" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <meta name="theme-color" content="#11172D" />
      
      {/* FIX: Robots TXT issues - Proper indexing directives */}
      <meta name="robots" content={getRobotsDirective()} />
      <meta name="googlebot" content={getRobotsDirective()} />
      <meta name="bingbot" content={getRobotsDirective()} />
      
      {/* FIX: Page Headers issues - Language and mobile */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* FIX: Content issues - Freshness signals */}
      <meta name="last-modified" content={currentDate} />
      <meta name="revisit-after" content="7 days" />
      
      {/* FIX: OG Meta issues - Complete Open Graph */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Professional vehicle wraps in Chicago - Wrapping Chicago" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* FIX: Twitter Meta issues - Complete Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content="Professional vehicle wraps in Chicago" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      
      {/* Local business geo tags */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      
      {/* FIX: Links issues - Discovery and navigation */}
      <link rel="sitemap" type="application/xml" href={`${domain}/sitemap.xml`} />
      <link rel="alternate" type="application/xml" href={`${domain}/sitemap.xml`} title="XML Sitemap" />
      
      {/* Performance optimization links */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* FIX: Schema issues - Basic WebPage schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${finalCanonicalUrl}#webpage`,
          "url": finalCanonicalUrl,
          "name": formattedTitle,
          "description": pageDescription,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "@id": `${domain}/#website`,
            "url": `${domain}/`,
            "name": "Wrapping Chicago"
          },
          "dateModified": currentDate,
          "potentialAction": {
            "@type": "ReadAction",
            "target": finalCanonicalUrl
          }
        })}
      </script>
      
      {/* Additional structured data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default ComprehensiveSEOFix;
