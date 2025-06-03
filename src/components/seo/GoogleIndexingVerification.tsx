
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GoogleIndexingVerificationProps {
  pageUrl: string;
  pageTitle: string;
  pageDescription: string;
}

const GoogleIndexingVerification: React.FC<GoogleIndexingVerificationProps> = ({
  pageUrl,
  pageTitle,
  pageDescription
}) => {
  return (
    <Helmet>
      {/* Google Search Console verification */}
      <meta name="google-site-verification" content="U4rNHPMlXwYvCtVPZ8EbyM81ONQyOhNHo5zS2pL9YyQ" />
      
      {/* Force Google to recognize this as indexable content */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced discovery signals */}
      <link rel="alternate" type="application/rss+xml" title="Wrapping Chicago Updates" href="https://www.wrappingchicago.com/feed.xml" />
      
      {/* Ensure proper page indexing with structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          "url": pageUrl,
          "name": pageTitle,
          "description": pageDescription,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.wrappingchicago.com/#website",
            "url": "https://www.wrappingchicago.com/",
            "name": "Wrapping Chicago",
            "description": "Professional vehicle wrap services in Chicago and surrounding areas"
          },
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Wrapping Chicago",
            "url": "https://www.wrappingchicago.com/",
            "telephone": "+13125971286",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4711 N. Lamon Ave",
              "addressLocality": "Chicago",
              "addressRegion": "IL",
              "postalCode": "60630",
              "addressCountry": "US"
            }
          },
          "dateModified": new Date().toISOString(),
          "potentialAction": {
            "@type": "ReadAction",
            "target": pageUrl
          }
        })}
      </script>
    </Helmet>
  );
};

export default GoogleIndexingVerification;
