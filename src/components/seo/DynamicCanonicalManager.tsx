import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Dynamic Canonical URL Manager
 * Ensures canonical URLs always match the current page URL
 */
const DynamicCanonicalManager: React.FC = () => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  
  // Generate clean canonical URL based on current route
  const getCanonicalUrl = () => {
    let path = location.pathname;
    
    // Remove trailing slash except for homepage
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    
    // Ensure path starts with /
    if (!path.startsWith('/')) {
      path = '/' + path;
    }
    
    return `${domain}${path}`;
  };

  const canonicalUrl = getCanonicalUrl();

  return (
    <Helmet>
      {/* Primary canonical URL - matches current page exactly */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph URL must match canonical */}
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Language alternates */}
      <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      
      {/* Help search engines understand URL structure */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    </Helmet>
  );
};

export default DynamicCanonicalManager;