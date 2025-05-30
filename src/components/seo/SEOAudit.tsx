
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOAuditProps {
  enableIndexing?: boolean;
  priority?: 'high' | 'normal' | 'low';
}

/**
 * SEO Audit component to ensure proper indexing and canonical implementation
 * Helps resolve Google Search Console issues with duplicate content and indexing
 */
const SEOAudit: React.FC<SEOAuditProps> = ({ 
  enableIndexing = true,
  priority = 'normal' 
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentUrl = `${domain}${location.pathname}`;
  
  // Generate robots content based on priority
  const getRobotsContent = () => {
    if (!enableIndexing) return "noindex, nofollow";
    
    const baseRobots = "index, follow";
    const snippetSettings = {
      high: "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      normal: "max-snippet:150, max-image-preview:large, max-video-preview:0",
      low: "max-snippet:50, max-image-preview:standard, max-video-preview:0"
    };
    
    return `${baseRobots}, ${snippetSettings[priority]}`;
  };
  
  return (
    <Helmet>
      {/* Critical: Ensure proper indexing directives */}
      <meta name="robots" content={getRobotsContent()} />
      <meta name="googlebot" content={getRobotsContent()} />
      <meta name="bingbot" content={getRobotsContent()} />
      
      {/* Prevent crawling of URL parameters that cause duplicates */}
      <meta name="googlebot" content="index, follow, noimageindex" />
      
      {/* Page freshness for better crawl frequency */}
      <meta name="revisit-after" content="7 days" />
      <meta name="last-modified" content={new Date().toISOString()} />
      
      {/* Prevent session ID and tracking parameter indexing */}
      <link rel="canonical" href={currentUrl.split('?')[0]} />
      
      {/* Enhanced crawl hints */}
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Mobile optimization for indexing */}
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      
      {/* Geo targeting for local SEO */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      <meta name="geo.position" content="41.8781;-87.6298" />
      
      {/* Language and locale specifications */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      
      {/* Site verification and ownership */}
      <meta name="google-site-verification" content="U4rNHPMlXwYvCtVPZ8EbyM81ONQyOhNHo5zS2pL9YyQ" />
      
      {/* Structured data for better understanding */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${currentUrl}#webpage`,
          "url": currentUrl,
          "isPartOf": {
            "@type": "WebSite",
            "@id": `${domain}/#website`,
            "url": `${domain}/`
          },
          "inLanguage": "en-US",
          "potentialAction": {
            "@type": "ReadAction",
            "target": currentUrl
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOAudit;
