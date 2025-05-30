
import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomeSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Vehicle Wraps in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Get vehicle wraps in Chicago IL services for cars, trucks, vans, and fleets. Boost style or brand visibility with custom vinyl graphics installed by experts." 
      />
      <meta name="keywords" content="vehicle wraps Chicago, car wraps Chicago, truck wraps Chicago, van wraps Chicago, fleet wraps Chicago, commercial vehicle wraps, custom vehicle wraps, vehicle graphics Chicago, car graphics Chicago, vinyl wraps Chicago, 3M vehicle wraps" />
      
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
      <meta property="og:title" content={`Vehicle Wraps in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get vehicle wraps in Chicago IL services for cars, trucks, vans, and fleets. Boost style or brand visibility with custom vinyl graphics installed by experts." />
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
      <meta name="twitter:title" content={`Vehicle Wraps in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get vehicle wraps in Chicago IL services for cars, trucks, vans, and fleets. Boost style or brand visibility with custom vinyl graphics installed by experts." />
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
          "url": `${domain}/`,
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
          "image": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
          "@id": `${domain}/#organization`,
          "url": `${domain}/`,
          "telephone": "+13125971286",
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
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Car Wraps",
              "url": `${domain}/services/car-wraps`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Truck Wraps",
              "url": `${domain}/services/truck-wraps`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Van Wraps",
              "url": `${domain}/services/van-wraps`
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Fleet Wraps",
              "url": `${domain}/services/fleet-wraps`
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Color Change Wraps",
              "url": `${domain}/services/color-change-wraps`
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "Commercial Graphics",
              "url": `${domain}/services/commercial-graphics`
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default HomeSEO;
