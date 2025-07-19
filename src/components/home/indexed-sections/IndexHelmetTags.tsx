
import React from 'react';
import { Helmet } from 'react-helmet-async';

const IndexHelmetTags: React.FC = () => {
  const domain = "https://www.wrappingchicago.com";

  return (
    <Helmet>
      {/* Primary canonical link */}
      <link rel="canonical" href={domain} />
      
      {/* Improved link structure for search engines */}
      <link rel="start" href={domain} />
      <link rel="index" href={`${domain}/sitemap`} />
      <link rel="sitemap" type="application/xml" href={`${domain}/sitemap.xml`} />
      
      {/* Discovery links for key sections */}
      <link rel="next" href={`${domain}/services`} />
      <link rel="section" href={`${domain}/car-wraps`} title="Car Wraps" />
      <link rel="section" href={`${domain}/truck-wraps`} title="Truck Wraps" />
      <link rel="section" href={`${domain}/van-wraps`} title="Van Wraps" />
      <link rel="section" href={`${domain}/fleet-wraps`} title="Fleet Wraps" />
      <link rel="section" href={`${domain}/gallery`} title="Gallery" />
      
      {/* Performance optimization - prerender critical pages */}
      <link rel="prerender" href={`${domain}/about`} />
      <link rel="prerender" href={`${domain}/services`} />
      <link rel="prerender" href={`${domain}/gallery`} />
      <link rel="prerender" href={`${domain}/contact`} />
      
      {/* Prefetch for seamless navigation */}
      <link rel="prefetch" href={`${domain}/services`} />
      <link rel="prefetch" href={`${domain}/gallery`} />
      <link rel="prefetch" href={`${domain}/locations`} />
      <link rel="prefetch" href={`${domain}/sitemap`} />
      <link rel="prefetch" href={`${domain}/about`} />
      <link rel="prefetch" href={`${domain}/contact`} />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="https://www.google.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      
      {/* Preconnect critical domains */}
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Additional metadata for search engines */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#11172D" />
      
      {/* Enhanced structured data for homepage */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "${domain}/#webpage",
          "url": "${domain}/",
          "name": "Vehicle Wraps Chicago | Premium Car & Truck Wrapping Services",
          "description": "Wrapping Chicago - Comprehensive vehicle customization company offering automotive transformation, commercial fleet branding, luxury enhancement & business marketing solutions with advanced application technology and premium materials.",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", "h2.speakable", ".speakable"]
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "Wrapping Chicago",
            "url": "${domain}",
            "logo": {
              "@type": "ImageObject",
              "url": "${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
              "width": "180",
              "height": "60"
            }
          }
        }
      `}</script>
      
      {/* Breadcrumb structured data with proper itemListElement */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "${domain}/"
            }
          ]
        }
      `}</script>
      
      {/* Enhanced Publisher data */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "${domain}/#organization",
          "name": "Wrapping Chicago",
          "url": "${domain}",
          "logo": {
            "@type": "ImageObject",
            "url": "${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png", 
            "width": "180",
            "height": "60"
          },
          "sameAs": [
            "https://www.facebook.com/wrappingchicago",
            "https://www.instagram.com/wrappingchicago",
            "https://twitter.com/wrappingchicago",
            "https://www.linkedin.com/company/wrappingchicago"
          ]
        }
      `}</script>
    </Helmet>
  );
};

export default IndexHelmetTags;
