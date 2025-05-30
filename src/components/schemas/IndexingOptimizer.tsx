
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface IndexingOptimizerProps {
  pageTitle: string;
  pageDescription: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  keywords?: string[];
  priority?: 'critical' | 'high' | 'normal' | 'low';
}

const IndexingOptimizer: React.FC<IndexingOptimizerProps> = ({
  pageTitle,
  pageDescription,
  canonicalUrl,
  noIndex = false,
  keywords = [],
  priority = 'normal'
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentUrl = canonicalUrl || `${domain}${location.pathname}`;
  
  // Clean canonical URL - remove trailing slashes except for homepage
  const cleanCanonical = currentUrl === `${domain}/` ? currentUrl : currentUrl.replace(/\/$/, '');
  
  // Generate robots content based on priority
  const getRobotsDirective = () => {
    if (noIndex) return "noindex, nofollow";
    
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
  const modifiedDate = new Date().toISOString();

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

export default IndexingOptimizer;
