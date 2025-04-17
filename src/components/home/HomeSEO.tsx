
import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomeSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Vehicle Wraps Chicago | Premium Car & Truck Wrapping Services | ${currentYear}`}</title>
      <meta 
        name="description" 
        content="Chicago's premier vehicle wrap company. Professional car & truck wraps with premium 3M materials. Transform your business with effective mobile advertising." 
      />
      <meta name="keywords" content="vehicle wraps Chicago, car wraps Chicago, truck wraps Chicago, van wraps Chicago, fleet wraps Chicago, commercial vehicle wraps, custom vehicle wraps, vehicle graphics Chicago, car graphics Chicago, vinyl wraps Chicago, 3M vehicle wraps" />
      <link rel="canonical" href={domain} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="shortcut icon" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <meta name="msapplication-TileImage" content="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <meta name="msapplication-TileColor" content="#11172D" />
      
      {/* Open Graph / Social Media Tags */}
      <meta property="og:title" content="Vehicle Wraps Chicago | Professional Car, Truck & Van Wrapping Services" />
      <meta property="og:description" content="Turn heads with professional vehicle wraps, car wraps, truck wraps, and van wraps that make your business stand out on every street in Chicago. Premium 3M materials, expert installation, and quick turnaround." />
      <meta property="og:url" content={domain} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Professional vehicle wrap with vibrant colors on sports car in Chicago - Wrapping Chicago" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vehicle Wraps Chicago | Professional Car, Truck & Van Wrapping Services" />
      <meta name="twitter:description" content="Chicago's leading vehicle wrap provider. Transform your cars, trucks, vans, and fleet vehicles with professional wrapping services. Premium 3M materials with 2-year warranty." />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta name="twitter:image:alt" content="Professional vehicle wrap services in Chicago - colorful vehicle design" />
      <meta name="twitter:site" content="@wrappingchicago" />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="Wrapping Chicago" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Local Business SEO */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      
      {/* Preload critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Page speed optimizations */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Alternate URL versions */}
      <link rel="alternate" hrefLang="en-us" href={domain} />
      <link rel="alternate" href={domain} />
      
      {/* Structured Data for Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Wrapping Chicago - Vehicle Wraps & Graphics",
          "url": domain,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${domain}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Structured Data for Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Wrapping Chicago",
          "image": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
          "@id": domain,
          "url": domain,
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
      
      {/* Structured Data for Service List */}
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
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default HomeSEO;
