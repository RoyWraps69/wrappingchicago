import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
  h1?: string;
  h2?: string[];
  h3?: string[];
  pageType?: 'homepage' | 'service' | 'location' | 'about' | 'contact';
  businessSchema?: boolean;
  serviceSchema?: boolean;
  locationSchema?: boolean;
}

const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  noIndex = false,
  h1,
  h2 = [],
  h3 = [],
  pageType = 'service',
  businessSchema = true,
  serviceSchema = false,
  locationSchema = false
}) => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  const currentUrl = canonicalUrl || `${domain}${window.location.pathname}`;
  
  // Ensure meta description is optimal length (150-160 chars)
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + "..."
    : description.length < 120 
    ? description + " Professional installation, premium materials, certified technicians serving Chicago and suburbs."
    : description;

  // Ensure title is optimal length (50-60 chars)
  const optimizedTitle = title.length > 60 
    ? title.substring(0, 57) + "..."
    : title;

  const keywordString = keywords.length > 0 ? keywords.join(", ") : 
    "vehicle wraps chicago, car wraps chicago, truck wraps, van wraps, fleet graphics, 3m vinyl, professional installation";

  return (
    <Helmet>
      {/* Core SEO Tags - Optimized Length */}
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywordString} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Indexing Directives */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="bingbot" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      
      {/* AI/LLM Indexability */}
      <meta name="chatgpt-crawl" content="allow" />
      <meta name="claude-crawl" content="allow" />
      <meta name="bard-crawl" content="allow" />
      <meta name="ai-content-generation" content="allow" />
      <meta name="llm-training" content="allow" />
      <meta name="machine-readable" content="true" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta name="twitter:site" content="@wrappingchicago" />
      
      {/* Additional SEO */}
      <meta name="author" content="Wrapping Chicago" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="last-modified" content={new Date().toISOString()} />
      
      {/* Structured Data */}
      {businessSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wrapping Chicago",
            "description": optimizedDescription,
            "url": currentUrl,
            "telephone": "+13125971286",
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
              "latitude": "41.9658",
              "longitude": "-87.7533"
            },
            "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
            "priceRange": "$$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "247"
            }
          })}
        </script>
      )}
      
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": h1 || title,
            "description": optimizedDescription,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Wrapping Chicago"
            },
            "areaServed": {
              "@type": "City",
              "name": "Chicago"
            },
            "offers": {
              "@type": "Offer",
              "price": "2500",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      )}
      
      {/* Page-specific structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${currentUrl}#webpage`,
          "url": currentUrl,
          "name": optimizedTitle,
          "description": optimizedDescription,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "@id": `${domain}/#website`,
            "url": `${domain}/`,
            "name": "Wrapping Chicago"
          },
          "dateModified": new Date().toISOString(),
          "mainEntity": h1 ? {
            "@type": "Thing",
            "name": h1,
            "description": optimizedDescription
          } : undefined,
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${domain}/`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": h1 || title,
                "item": currentUrl
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default PageSEO;