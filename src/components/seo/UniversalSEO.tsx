
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface UniversalSEOProps {
  pageTitle: string;
  pageDescription: string;
  keywords?: string[];
  noIndex?: boolean;
  canonicalUrl?: string;
}

const UniversalSEO: React.FC<UniversalSEOProps> = ({
  pageTitle,
  pageDescription,
  keywords = [],
  noIndex = false,
  canonicalUrl
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentUrl = canonicalUrl || `${domain}${location.pathname}`;
  
  // Clean canonical URL
  const cleanCanonical = currentUrl.split('?')[0].replace(/\/$/, '') || `${domain}/`;
  
  return (
    <Helmet>
      {/* Critical SEO Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={cleanCanonical} />
      
      {/* Indexing Directives */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="bingbot" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      
      {/* Keywords */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={cleanCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      
      {/* Additional SEO Enhancement */}
      <meta name="author" content="Wrapping Chicago" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="last-modified" content={new Date().toISOString()} />
      <meta name="revisit-after" content="7 days" />
      
      {/* Language and Mobile */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      
      {/* Basic WebPage Schema */}
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

export default UniversalSEO;
