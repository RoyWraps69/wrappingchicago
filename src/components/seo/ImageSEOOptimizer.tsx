import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Image SEO Optimizer - Critical Missing Element
 * Google 2025 requires comprehensive image optimization for better rankings
 */
const ImageSEOOptimizer: React.FC = () => {
  const domain = "https://www.wrappingchicago.com";

  return (
    <Helmet>
      {/* Image Sitemap Reference */}
      <link rel="sitemap" type="application/xml" href={`${domain}/image-sitemap.xml`} />
      
      {/* Enhanced Image Schema for Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Chicago Vehicle Wrap Gallery",
          "description": "Professional vehicle wrap installations showcasing our expertise in Chicago",
          "url": `${domain}/gallery`,
          "image": [
            {
              "@type": "ImageObject",
              "contentUrl": `${domain}/gallery/fleet-wrap-chicago-1.jpg`,
              "name": "Commercial Fleet Wrap - Chicago Plumbing Company",
              "description": "Professional fleet wrap installation for Chicago plumbing business showing brand consistency across multiple vehicles",
              "uploadDate": "2024-12-15",
              "creator": {
                "@type": "Organization",
                "name": "Wrapping Chicago"
              },
              "license": `${domain}/license`,
              "copyrightHolder": {
                "@type": "Organization", 
                "name": "Wrapping Chicago"
              }
            },
            {
              "@type": "ImageObject",
              "contentUrl": `${domain}/gallery/car-wrap-color-change.jpg`,
              "name": "Color Change Wrap - Luxury Vehicle Chicago",
              "description": "Premium color change wrap installation on luxury vehicle in Chicago showcasing matte finish capabilities",
              "uploadDate": "2024-12-10",
              "creator": {
                "@type": "Organization",
                "name": "Wrapping Chicago"
              }
            }
          ],
          "provider": {
            "@type": "LocalBusiness",
            "name": "Wrapping Chicago",
            "@id": `${domain}/#organization`
          }
        })}
      </script>

      {/* Product Schema for Vehicle Wrap Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Professional Vehicle Wrap Installation", 
          "description": "Custom vehicle wraps for cars, trucks, vans, and fleets in Chicago area",
          "brand": {
            "@type": "Brand",
            "name": "Wrapping Chicago"
          },
          "offers": {
            "@type": "Offer",
            "price": "2500.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "LocalBusiness",
              "name": "Wrapping Chicago",
              "@id": `${domain}/#organization`
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.9,
            "reviewCount": 247,
            "bestRating": 5,
            "worstRating": 1
          },
          "image": [
            `${domain}/gallery/vehicle-wrap-showcase.jpg`,
            `${domain}/gallery/before-after-wrap.jpg`
          ]
        })}
      </script>
    </Helmet>
  );
};

export default ImageSEOOptimizer;