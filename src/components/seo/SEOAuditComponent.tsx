
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOAuditComponentProps {
  pageTitle: string;
  pageDescription: string;
  keywords?: string[];
  enableIndexing?: boolean;
  priority?: 'high' | 'normal' | 'low';
}

/**
 * Comprehensive SEO audit component that ensures proper indexing
 * Resolves common Google Search Console issues
 */
const SEOAuditComponent: React.FC<SEOAuditComponentProps> = ({ 
  pageTitle,
  pageDescription,
  keywords = [],
  enableIndexing = true,
  priority = 'normal' 
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentUrl = `${domain}${location.pathname}`;
  
  // Clean canonical URL
  const cleanCanonical = currentUrl.split('?')[0].replace(/\/$/, '') || `${domain}/`;
  
  // Generate robots content
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
      {/* Critical SEO elements */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={cleanCanonical} />
      
      {/* Indexing directives */}
      <meta name="robots" content={getRobotsContent()} />
      <meta name="googlebot" content={getRobotsContent()} />
      <meta name="bingbot" content={getRobotsContent()} />
      
      {/* Keywords if provided */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Page freshness */}
      <meta name="last-modified" content={new Date().toISOString()} />
      
      {/* Language and locale */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      
      {/* Mobile optimization */}
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      
      {/* Geo targeting */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      
      {/* Discovery links */}
      <link rel="sitemap" type="application/xml" href={`${domain}/sitemap.xml`} />
      
      {/* Basic WebPage schema */}
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
            "url": `${domain}/`
          },
          "dateModified": new Date().toISOString(),
          "potentialAction": {
            "@type": "ReadAction",
            "target": cleanCanonical
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOAuditComponent;
