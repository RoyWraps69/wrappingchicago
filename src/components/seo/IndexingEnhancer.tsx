
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface IndexingEnhancerProps {
  pageTitle: string;
  pageDescription: string;
  keywords?: string[];
  priority?: 'critical' | 'high' | 'normal' | 'low';
  lastModified?: string;
}

/**
 * Comprehensive indexing enhancement component that resolves common Google indexing issues
 * This ensures every page can be properly discovered, crawled, and indexed
 */
const IndexingEnhancer: React.FC<IndexingEnhancerProps> = ({
  pageTitle,
  pageDescription,
  keywords = [],
  priority = 'normal',
  lastModified
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentUrl = `${domain}${location.pathname}`;
  
  // Clean canonical URL - remove trailing slashes and parameters
  const cleanCanonical = currentUrl.split('?')[0].replace(/\/$/, '') || `${domain}/`;
  
  // Generate robots content based on priority
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
  
  const robotsContent = getRobotsDirective();
  const modifiedDate = lastModified || new Date().toISOString();
  
  return (
    <Helmet>
      {/* CRITICAL: Explicit canonical URL to prevent duplicate content */}
      <link rel="canonical" href={cleanCanonical} />
      
      {/* CRITICAL: Clear indexing directives */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
      {/* Page freshness signals */}
      <meta name="last-modified" content={modifiedDate} />
      <meta name="revisit-after" content="7 days" />
      
      {/* Enhanced crawling hints */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      
      {/* Mobile-first indexing optimization */}
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Keywords if provided */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Enhanced discovery links */}
      <link rel="sitemap" type="application/xml" href={`${domain}/sitemap.xml`} />
      <link rel="alternate" type="application/xml" href={`${domain}/sitemap.xml`} title="XML Sitemap" />
      
      {/* Prevent common indexing issues */}
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Core WebPage schema for every page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${cleanCanonical}#webpage`,
          "url": cleanCanonical,
          "name": pageTitle,
          "description": pageDescription,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "@id": `${domain}/#website`,
            "url": `${domain}/`,
            "name": "Wrapping Chicago"
          },
          "dateModified": modifiedDate,
          "potentialAction": {
            "@type": "ReadAction",
            "target": cleanCanonical
          }
        })}
      </script>
    </Helmet>
  );
};

export default IndexingEnhancer;
