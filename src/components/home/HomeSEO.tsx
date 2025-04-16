
import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomeSEO = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Helmet>
      <title>{`Vehicle Wraps Chicago | Premium Car & Truck Wrapping Services | ${currentYear}`}</title>
      <meta 
        name="description" 
        content="Chicago's premier vehicle wrap company. Professional car & truck wraps with premium 3M materials. Transform your business with effective mobile advertising." 
      />
      <meta name="keywords" content="vehicle wraps Chicago, car wraps Chicago, truck wraps Chicago, van wraps Chicago, fleet wraps Chicago, commercial vehicle wraps, custom vehicle wraps, vehicle graphics Chicago, car graphics Chicago, vinyl wraps Chicago, 3M vehicle wraps" />
      <link rel="canonical" href="https://wrappingchicago.com" />
      
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
      <meta property="og:url" content="https://wrappingchicago.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Professional vehicle wrap with vibrant colors on sports car in Chicago - Wrapping Chicago" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vehicle Wraps Chicago | Professional Car, Truck & Van Wrapping Services" />
      <meta name="twitter:description" content="Chicago's leading vehicle wrap provider. Transform your cars, trucks, vans, and fleet vehicles with professional wrapping services. Premium 3M materials with 2-year warranty." />
      <meta name="twitter:image" content="https://wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
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
      <link rel="alternate" hrefLang="en-us" href="https://wrappingchicago.com" />
      <link rel="alternate" href="https://www.wrappingchicago.com" />
    </Helmet>
  );
};

export default HomeSEO;
