import React from 'react';
import { Helmet } from 'react-helmet-async';

const TechnicalSEOEnhancer = () => {
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      {/* Advanced Technical SEO */}
      <link rel="preload" href="/fonts/primary.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Sitemap and Feed Links */}
      <link rel="sitemap" type="application/xml" href={`${domain}/sitemap.xml`} />
      <link rel="alternate" type="application/rss+xml" title="Wrapping Chicago Blog RSS" href={`${domain}/rss.xml`} />
      <link rel="alternate" type="application/atom+xml" title="Wrapping Chicago Blog Atom" href={`${domain}/atom.xml`} />
      
      {/* Enhanced Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google.com *.googleapis.com *.gstatic.com; style-src 'self' 'unsafe-inline' *.googleapis.com; img-src 'self' data: *.google.com *.googleapis.com; font-src 'self' *.googleapis.com *.gstatic.com;" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()" />
      
      {/* Enhanced Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      <meta httpEquiv="Expires" content={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()} />
      
      {/* Advanced Crawling Directives */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1, noimageindex" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="slurp" content="index, follow" />
      <meta name="duckduckbot" content="index, follow" />
      <meta name="baiduspider" content="index, follow" />
      <meta name="yandexbot" content="index, follow" />
      
      {/* Page Speed Optimization */}
      <link rel="preload" href={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} as="image" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      {/* Enhanced Language and Location */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      <meta name="country" content="United States" />
      <meta name="state" content="Illinois" />
      <meta name="city" content="Chicago" />
      
      {/* Advanced Schema.org for Technical SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "@id": `${domain}/#tech-article`,
          "headline": "Complete Guide to Vehicle Wraps in Chicago - Installation, Cost, and Benefits",
          "description": "Comprehensive guide covering everything about vehicle wraps in Chicago including installation process, costs, materials, and benefits for businesses and individuals.",
          "author": {
            "@type": "Organization",
            "name": "Wrapping Chicago",
            "@id": `${domain}/#organization`
          },
          "publisher": {
            "@type": "Organization", 
            "name": "Wrapping Chicago",
            "@id": `${domain}/#organization`
          },
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${domain}/`
          },
          "image": {
            "@type": "ImageObject",
            "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
            "width": 1200,
            "height": 630
          },
          "articleSection": "Automotive",
          "keywords": "vehicle wraps, car wraps, truck wraps, chicago, installation, cost, benefits",
          "wordCount": 2500,
          "inLanguage": "en-US"
        })}
      </script>

      {/* How-To Schema for Installation Process */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "@id": `${domain}/#howto-vehicle-wrap`,
          "name": "How Vehicle Wrap Installation Works in Chicago",
          "description": "Step-by-step process of professional vehicle wrap installation from design to completion",
          "image": {
            "@type": "ImageObject",
            "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`
          },
          "totalTime": "PT3D",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "2500"
          },
          "supply": [
            {
              "@type": "HowToSupply",
              "name": "Premium Vinyl Film"
            },
            {
              "@type": "HowToSupply", 
              "name": "Application Tools"
            },
            {
              "@type": "HowToSupply",
              "name": "Heat Gun"
            }
          ],
          "tool": [
            {
              "@type": "HowToTool",
              "name": "Squeegee"
            },
            {
              "@type": "HowToTool",
              "name": "Cutting Knife"
            }
          ],
          "step": [
            {
              "@type": "HowToStep",
              "name": "Design and Consultation",
              "text": "Work with customer to create custom design and choose materials",
              "url": `${domain}/services`
            },
            {
              "@type": "HowToStep",
              "name": "Vehicle Preparation",
              "text": "Thoroughly clean and prepare vehicle surface for optimal adhesion",
              "url": `${domain}/services`
            },
            {
              "@type": "HowToStep",
              "name": "Vinyl Application",
              "text": "Professional installation using certified techniques and tools",
              "url": `${domain}/services`
            },
            {
              "@type": "HowToStep",
              "name": "Quality Inspection",
              "text": "Final inspection and detail work to ensure perfect finish",
              "url": `${domain}/services`
            }
          ]
        })}
      </script>

      {/* Video Schema for Maximum Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "@id": `${domain}/#installation-video`,
          "name": "Professional Vehicle Wrap Installation Process - Wrapping Chicago",
          "description": "Watch our certified technicians install a complete vehicle wrap using premium materials and professional techniques.",
          "thumbnailUrl": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
          "uploadDate": "2024-01-01T00:00:00Z",
          "duration": "PT10M",
          "contentUrl": `${domain}/videos/installation-process.mp4`,
          "embedUrl": `${domain}/videos/embed/installation-process`,
          "publisher": {
            "@type": "Organization",
            "name": "Wrapping Chicago",
            "@id": `${domain}/#organization`
          }
        })}
      </script>

      {/* Review Schema for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "@id": `${domain}/#featured-review`,
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Wrapping Chicago",
            "@id": `${domain}/#organization`
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "author": {
            "@type": "Person",
            "name": "Sarah Johnson"
          },
          "datePublished": "2024-03-15",
          "reviewBody": "Absolutely incredible work on my Tesla Model Y wrap! The team at Wrapping Chicago exceeded every expectation. The installation was flawless, and the color change wrap looks better than factory paint. Highly recommend for anyone in Chicago looking for premium vehicle wraps!"
        })}
      </script>

      {/* Product Schema for Vehicle Wrap Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "@id": `${domain}/#vehicle-wrap-product`,
          "name": "Professional Vehicle Wrap Installation Chicago",
          "description": "Complete vehicle wrap service including design, materials, and professional installation",
          "brand": {
            "@type": "Brand",
            "name": "Wrapping Chicago"
          },
          "category": "Automotive Service",
          "offers": {
            "@type": "Offer",
            "price": "2500",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Wrapping Chicago",
              "@id": `${domain}/#organization`
            },
            "warranty": {
              "@type": "WarrantyPromise",
              "durationOfWarranty": "P5Y"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "247",
            "bestRating": "5"
          }
        })}
      </script>
    </Helmet>
  );
};

export default TechnicalSEOEnhancer;