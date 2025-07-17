import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface CanonicalRedirectManagerProps {
  canonicalUrl?: string;
  preventRedirect?: boolean;
}

/**
 * Manages canonical URLs and handles common URL redirect issues
 * Prevents 404s by redirecting common URL variations to correct canonical URLs
 */
const CanonicalRedirectManager: React.FC<CanonicalRedirectManagerProps> = ({
  canonicalUrl,
  preventRedirect = false
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const domain = "https://www.wrappingchicago.com";
  
  useEffect(() => {
    if (preventRedirect) return;
    
    const currentPath = location.pathname;
    const currentSearch = location.search;
    
    // Common redirect patterns to fix 404s
    const redirectMap: Record<string, string> = {
      // Service redirects
      '/services/car-wraps': '/car-wraps',
      '/services/truck-wraps': '/truck-wraps',
      '/services/van-wraps': '/van-wraps',
      '/services/fleet-wraps': '/fleet-wraps',
      '/services/color-change-wraps': '/color-change-wraps',
      '/services/designer-wraps': '/designer-wraps',
      '/services/luxury-exotic-wraps': '/luxury-exotic-wraps',
      
      // Location redirects
      '/chicago-il': '/chicago',
      '/vehicle-wraps-chicago': '/vehicle-wraps-chicago-il',
      '/wraps-chicago': '/vehicle-wraps-chicago-il',
      '/chicago-vehicle-wraps': '/vehicle-wraps-chicago-il',
      '/truck-wraps-chicago-il': '/truck-wraps-chicago',
      
      // Common variations
      '/contact-us': '/contact',
      '/about-us': '/about',
      '/our-services': '/services',
      '/portfolio': '/gallery',
      '/work': '/gallery',
      '/projects': '/gallery',
      
      // Remove trailing slashes (except for homepage)
      ...(currentPath !== '/' && currentPath.endsWith('/') 
        ? { [currentPath]: currentPath.slice(0, -1) }
        : {}),
    };
    
    // Check for exact match redirects
    if (redirectMap[currentPath]) {
      navigate(redirectMap[currentPath] + currentSearch, { replace: true });
      return;
    }
    
    // Handle city variations that might cause 404s
    const cityPatterns = [
      { from: /^\/([a-z-]+)-vehicle-wraps$/i, to: '/vehicle-wraps-$1-il' },
      { from: /^\/vehicle-wraps-([a-z-]+)$/i, to: '/vehicle-wraps-$1-il' },
      { from: /^\/([a-z-]+)-wraps$/i, to: '/vehicle-wraps-$1-il' },
    ];
    
    for (const pattern of cityPatterns) {
      const match = currentPath.match(pattern.from);
      if (match && match[1] !== 'chicago') {
        const newPath = pattern.to.replace('$1', match[1]);
        navigate(newPath + currentSearch, { replace: true });
        return;
      }
    }
  }, [location, navigate, preventRedirect]);
  
  // Generate canonical URL
  const getCanonicalUrl = (): string => {
    if (canonicalUrl) return canonicalUrl;
    
    let cleanPath = location.pathname;
    
    // Remove trailing slashes except for homepage
    if (cleanPath !== '/' && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }
    
    return `${domain}${cleanPath}`;
  };
  
  const finalCanonicalUrl = getCanonicalUrl();
  
  return (
    <Helmet>
      <link rel="canonical" href={finalCanonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta property="og:url" content={finalCanonicalUrl} />
      
      {/* Additional canonical signals */}
      <link rel="alternate" href={finalCanonicalUrl} hrefLang="en-us" />
      <link rel="alternate" href={finalCanonicalUrl} hrefLang="en" />
    </Helmet>
  );
};

export default CanonicalRedirectManager;