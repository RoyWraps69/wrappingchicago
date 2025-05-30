
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface CanonicalManagerProps {
  customCanonical?: string;
  alternateUrls?: Array<{ url: string; hreflang?: string; }>;
}

const CanonicalManager: React.FC<CanonicalManagerProps> = ({ 
  customCanonical,
  alternateUrls = []
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  
  // Generate canonical URL based on current location or custom override
  const getCanonicalUrl = () => {
    if (customCanonical) {
      return customCanonical.startsWith('http') ? customCanonical : `${domain}${customCanonical}`;
    }
    
    // Clean up the current path
    let cleanPath = location.pathname;
    
    // Remove trailing slash unless it's the homepage
    if (cleanPath !== '/' && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }
    
    // Handle common duplicate content issues
    const pathMappings: { [key: string]: string } = {
      '/index': '/',
      '/index.html': '/',
      '/home': '/',
      '/services/': '/services',
      '/gallery/': '/gallery',
      '/about/': '/about',
      '/contact/': '/contact',
    };
    
    const mappedPath = pathMappings[cleanPath] || cleanPath;
    return `${domain}${mappedPath}`;
  };
  
  const canonicalUrl = getCanonicalUrl();
  
  return (
    <Helmet>
      {/* Primary canonical tag */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Self-referencing alternate for language */}
      <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      
      {/* Additional alternate URLs if provided */}
      {alternateUrls.map((alt, index) => (
        <link 
          key={index}
          rel="alternate" 
          href={alt.url.startsWith('http') ? alt.url : `${domain}${alt.url}`}
          {...(alt.hreflang && { hrefLang: alt.hreflang })}
        />
      ))}
      
      {/* Prevent duplicate content from URL parameters */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Add last modified date for better crawling */}
      <meta name="last-modified" content={new Date().toISOString()} />
    </Helmet>
  );
};

export default CanonicalManager;
