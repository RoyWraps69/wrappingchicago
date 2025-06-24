
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOMasterProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  schemaType?: 'WebPage' | 'Service' | 'LocalBusiness' | 'Article';
  breadcrumbs?: Array<{ name: string; url: string; position: number }>;
  lastModified?: string;
  priority?: 'critical' | 'high' | 'medium' | 'low';
  isHomepage?: boolean;
}

const SEOMaster: React.FC<SEOMasterProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png',
  ogType = 'website',
  schemaType = 'WebPage',
  breadcrumbs = [],
  lastModified,
  priority = 'medium',
  isHomepage = false
}) => {
  const location = useLocation();
  const domain = 'https://www.wrappingchicago.com';
  const currentUrl = canonicalUrl || `${domain}${location.pathname}`;
  const cleanCanonical = currentUrl.replace(/\/$/, '') || `${domain}/`;
  const modifiedDate = lastModified || new Date().toISOString();
  const currentYear = new Date().getFullYear();

  // Enhanced robots directive based on priority
  const getRobotsContent = () => {
    const baseRobots = 'index, follow';
    const snippetDirectives = {
      critical: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      high: 'max-snippet:-1, max-image-preview:large, max-video-preview:0', 
      medium: 'max-snippet:160, max-image-preview:large, max-video-preview:0',
      low: 'max-snippet:100, max-image-preview:standard, max-video-preview:0'
    };
    return `${baseRobots}, ${snippetDirectives[priority]}`;
  };

  // Core WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "@id": `${cleanCanonical}#webpage`,
    "url": cleanCanonical,
    "name": title,
    "description": description,
    "inLanguage": "en-US",
    "dateModified": modifiedDate,
    "datePublished": "2023-01-01",
    "author": {
      "@type": "Person",
      "name": "Roy - Vehicle Wrap Expert",
      "jobTitle": "Master Vehicle Wrap Installer",
      "knowsAbout": ["Vehicle Wraps", "Fleet Graphics", "Commercial Branding"],
      "yearsOfExperience": "20+"
    },
    "publisher": {
      "@type": "LocalBusiness",
      "@id": `${domain}/#organization`,
      "name": "Wrapping Chicago",
      "url": domain,
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
        "width": 180,
        "height": 60
      }
    },
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      "url": `${domain}/`,
      "name": "Wrapping Chicago"
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": cleanCanonical
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".speakable"]
    }
  };

  // Enhanced Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map(crumb => ({
      "@type": "ListItem",
      "position": crumb.position,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `${domain}${crumb.url}`
    }))
  } : null;

  // Organization Schema for homepage
  const organizationSchema = isHomepage ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${domain}/#organization`,
    "name": "Wrapping Chicago",
    "alternateName": "Chicago Vehicle Wraps",
    "url": domain,
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.9658,
      "longitude": -87.7533
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "$$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "areaServed": [
      { "@type": "City", "name": "Chicago" },
      { "@type": "City", "name": "Evanston" },
      { "@type": "City", "name": "Naperville" },
      { "@type": "City", "name": "Schaumburg" }
    ],
    "serviceType": "Vehicle Wrapping Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wraps",
            "description": "Professional car wrapping services"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Truck Wraps",
            "description": "Commercial truck wrapping services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Fleet Wraps",
            "description": "Fleet vehicle wrapping services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "287",
      "bestRating": "5",
      "worstRating": "1"
    },
    "logo": {
      "@type": "ImageObject",
      "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
      "width": 180,
      "height": 60
    },
    "image": {
      "@type": "ImageObject",
      "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
      "width": 1200,
      "height": 630
    },
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago", 
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago"
    ]
  } : null;

  return (
    <Helmet>
      {/* CRITICAL: Title and Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* CRITICAL: Canonical URL */}
      <link rel="canonical" href={cleanCanonical} />
      
      {/* CRITICAL: Robots Directives */}
      <meta name="robots" content={getRobotsContent()} />
      <meta name="googlebot" content={getRobotsContent()} />
      <meta name="bingbot" content={getRobotsContent()} />
      
      {/* Keywords */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={cleanCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${domain}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Wrapping Chicago`} />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wrappingchicago" />
      <meta name="twitter:creator" content="@wrappingchicago" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${domain}${ogImage}`} />
      <meta name="twitter:image:alt" content={`${title} - Wrapping Chicago`} />
      
      {/* Enhanced Meta Tags */}
      <meta name="author" content="Wrapping Chicago - Roy, Master Vehicle Wrap Installer" />
      <meta name="copyright" content={`© ${currentYear} Wrapping Chicago. All rights reserved.`} />
      <meta name="last-modified" content={modifiedDate} />
      <meta name="revisit-after" content="7 days" />
      
      {/* Local SEO */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.9658;-87.7533" />
      <meta name="ICBM" content="41.9658, -87.7533" />
      
      {/* Technical SEO */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {organizationSchema && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOMaster;
