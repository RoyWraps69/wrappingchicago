
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface CanonicalManagerProps {
  customCanonical?: string;
  noIndex?: boolean;
}

/**
 * Canonical URL Manager Component
 * Ensures proper canonical URLs to prevent duplicate content issues
 */
const CanonicalManager: React.FC<CanonicalManagerProps> = ({ 
  customCanonical, 
  noIndex = false 
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  
  // Generate canonical URL
  const getCanonicalUrl = () => {
    if (customCanonical) return customCanonical;
    
    // Clean up the pathname
    let cleanPath = location.pathname;
    
    // Remove trailing slashes except for homepage
    if (cleanPath !== '/' && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }
    
    // Remove query parameters for canonical
    return `${domain}${cleanPath}`;
  };
  
  const canonicalUrl = getCanonicalUrl();
  const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      
      {/* Prevent common duplicate content issues */}
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Additional canonical signals */}
      <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
    </Helmet>
  );
};

export default CanonicalManager;
