
import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomeSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  // Comprehensive keyword integration
  const primaryKeywords = [
    "vehicle wraps Chicago", "car wraps Chicago", "truck wraps Chicago", "van wraps Chicago", 
    "fleet wraps Chicago", "vinyl wrap Chicago", "custom graphics Chicago", "commercial graphics Chicago",
    "color change wraps Chicago", "luxury wraps Chicago", "3M vinyl wraps Chicago", "Avery wraps Chicago"
  ];
  
  const longTailKeywords = [
    "car wrap cost Chicago", "vehicle wrap pricing Chicago", "fleet wrap services Chicago",
    "best truck wrap installers Chicago", "custom car wrap designs Chicago", "professional vehicle wrap consultation",
    "premium 3M vinyl wraps Chicago", "luxury exotic car wraps Chicago", "commercial fleet branding solutions"
  ];
  
  const allKeywords = [...primaryKeywords, ...longTailKeywords].join(", ");
  
  return (
    <Helmet>
      <title>{`Vehicle Wraps Chicago | Car Wraps, Truck Wraps, Van Wraps & Fleet Graphics | ${currentYear}`}</title>
      <meta 
        name="description" 
        content="Professional vehicle wraps in Chicago IL. Custom car wraps, truck wraps, van wraps, and fleet graphics with premium 3M vinyl. Get quotes for color change wraps, luxury wraps, and commercial branding solutions." 
      />
      <meta name="keywords" content={allKeywords} />
      
      {/* Critical: Explicit canonical URL for homepage to prevent duplicates */}
      <link rel="canonical" href={`${domain}/`} />
      
      {/* Prevent common duplicate content issues */}
      <link rel="alternate" href={`${domain}/`} hrefLang="en-us" />
      <link rel="alternate" href={`${domain}/`} hrefLang="en" />
      
      {/* Enhanced favicon setup */}
      <link rel="icon" type="image/png" sizes="32x32" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="shortcut icon" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <meta name="msapplication-TileImage" content="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <meta name="msapplication-TileColor" content="#11172D" />
      
      {/* Enhanced Open Graph / Social Media Tags */}
      <meta property="og:title" content={`Vehicle Wraps Chicago | Premium Car Wraps, Truck Wraps & Fleet Graphics | ${currentYear}`} />
      <meta property="og:description" content="Chicago's premier vehicle wrap specialists. Custom car wraps, truck wraps, van wraps, and fleet graphics with premium 3M vinyl. Professional installation, design consultation, and competitive pricing." />
      <meta property="og:url" content={`${domain}/`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Professional vehicle wrap with vibrant colors on sports car in Chicago - Wrapping Chicago" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Vehicle Wraps Chicago | Car Wraps, Truck Wraps, Van Wraps & Fleet Graphics | ${currentYear}`} />
      <meta name="twitter:description" content="Professional vehicle wraps in Chicago IL. Custom car wraps, truck wraps, van wraps, and fleet graphics with premium 3M vinyl. Get quotes for color change wraps and commercial branding." />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta name="twitter:image:alt" content="Professional vehicle wrap services in Chicago - colorful vehicle design" />
      <meta name="twitter:site" content="@wrappingchicago" />
      
      {/* Enhanced SEO meta tags - Critical for indexing */}
      <meta name="author" content="Wrapping Chicago" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Local Business SEO */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.9658;-87.7533" />
      <meta name="ICBM" content="41.9658, -87.7533" />
      
      {/* Performance optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Page speed optimizations */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Prevent indexing of URL parameters and session IDs */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Last modified for better crawl frequency */}
      <meta name="last-modified" content={new Date().toISOString()} />
      
      {/* Enhanced Structured Data for Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Wrapping Chicago - Vehicle Wraps & Graphics",
          "alternateName": "Chicago Vehicle Wraps",
          "url": `${domain}/`,
          "description": "Professional vehicle wraps in Chicago IL. Car wraps, truck wraps, van wraps, fleet graphics, custom graphics, color change wraps, luxury wraps, and commercial branding solutions.",
          "keywords": primaryKeywords.join(", "),
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${domain}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Enhanced Structured Data for Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Wrapping Chicago",
          "alternateName": "Chicago Vehicle Wraps",
          "image": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
          "@id": `${domain}/#organization`,
          "url": `${domain}/`,
          "telephone": "+13125971286",
          "email": "roy@chicagofleetwraps.com",
          "priceRange": "$$",
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
            "latitude": 41.8781,
            "longitude": -87.6298
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 41.8781,
              "longitude": -87.6298
            },
            "geoRadius": 50000
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vehicle Wrap Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Car Wraps Chicago",
                  "description": "Custom car wrap installation with premium vinyl materials"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Truck Wraps Chicago",
                  "description": "Professional truck wrap services for commercial and personal vehicles"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Van Wraps Chicago",
                  "description": "Van wrap installation for cargo vans, sprinter vans, and commercial vehicles"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fleet Wraps Chicago",
                  "description": "Fleet branding solutions and commercial vehicle graphics"
                }
              }
            ]
          },
          "sameAs": [
            "https://www.facebook.com/wrappingchicago",
            "https://www.instagram.com/wrappingchicago"
          ]
        })}
      </script>
      
      {/* Enhanced Structured Data for Service List */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Vehicle Wrap Services in Chicago",
          "description": "Complete vehicle wrap services including car wraps, truck wraps, van wraps, fleet graphics, and custom designs",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Car Wraps Chicago",
              "description": "Custom car wrap designs with premium vinyl materials",
              "url": `${domain}/services/car-wraps`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Truck Wraps Chicago",
              "description": "Professional truck wrap installation for advertising and protection",
              "url": `${domain}/services/truck-wraps`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Van Wraps Chicago",
              "description": "Van graphics and wraps for commercial and personal vehicles",
              "url": `${domain}/services/van-wraps`
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Fleet Wraps Chicago",
              "description": "Fleet branding and commercial vehicle graphics solutions",
              "url": `${domain}/services/fleet-wraps`
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Color Change Wraps Chicago",
              "description": "Color change vehicle wraps for luxury and exotic cars",
              "url": `${domain}/services/color-change-wraps`
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "Commercial Graphics Chicago",
              "description": "Custom commercial graphics and advertising wraps",
              "url": `${domain}/services/commercial-graphics`
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default HomeSEO;
