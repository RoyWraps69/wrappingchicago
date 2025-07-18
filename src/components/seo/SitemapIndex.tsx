
import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SitemapIndex component for improved sitemap discoverability
 * This component adds explicit sitemap references in the head section
 * to help search engines discover both XML and HTML sitemaps
 */
const SitemapIndex: React.FC = () => {
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      {/* XML Sitemap Link Relations */}
      <link rel="sitemap" type="application/xml" href={`${domain}/sitemap.xml`} />
      <link rel="alternate" type="application/xml" href={`${domain}/sitemap.xml`} title="XML Sitemap" />
      
      {/* HTML Sitemap Link Relations */}
      <link rel="alternate" type="text/html" href={`${domain}/html-sitemap`} title="HTML Sitemap" />
      <link rel="alternate" type="text/html" href={`${domain}/sitemap`} title="Sitemap" />
      
      {/* Help Last-Modified Discovery */}
      <meta name="last-modified" content={new Date().toISOString()} />
      
      {/* Additional Crawlability Hints */}
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Canonical URL is now handled by DynamicCanonicalManager */}
    </Helmet>
  );
};

export default SitemapIndex;
