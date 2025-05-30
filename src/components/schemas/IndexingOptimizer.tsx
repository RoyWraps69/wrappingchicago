
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface IndexingOptimizerProps {
  pageTitle: string;
  pageDescription: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

const IndexingOptimizer: React.FC<IndexingOptimizerProps> = ({
  pageTitle,
  pageDescription,
  canonicalUrl,
  noIndex = false
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentUrl = canonicalUrl || `${domain}${location.pathname}`;
  
  // Clean canonical URL - remove trailing slashes except for homepage
  const cleanCanonical = currentUrl === `${domain}/` ? currentUrl : currentUrl.replace(/\/$/, '');
  
  const robotsContent = noIndex 
    ? "noindex, nofollow" 
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  return (
    <Helmet>
      {/* Critical: Canonical URL */}
      <link rel="canonical" href={cleanCanonical} />
      
      {/* Critical: Robots directive */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
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
      
      {/* Clean WebPage schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${cleanCanonical}#webpage`,
          "url": cleanCanonical,
          "name": pageTitle,
          "description": pageDescription,
          "isPartOf": {
            "@type": "WebSite",
            "@id": `${domain}/#website`,
            "url": `${domain}/`
          },
          "inLanguage": "en-US",
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

export default IndexingOptimizer;
