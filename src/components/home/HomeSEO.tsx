
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getAllKeywords } from './seo/HomeKeywords';
import HomeStructuredData from './seo/HomeStructuredData';

const HomeSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  const allKeywords = getAllKeywords().join(", ");
  
  return (
    <>
      <Helmet>
        <title>{`Vehicle Wraps Chicago | Car Wraps, Truck Wraps, Van Wraps & Fleet Graphics | ${currentYear}`}</title>
        <meta 
          name="description" 
          content="Professional vehicle wraps in Chicago IL. Custom car wraps, truck wraps, van wraps, and fleet graphics with premium 3M vinyl. Get quotes for color change wraps, luxury wraps, and commercial branding solutions." 
        />
        <meta name="keywords" content={allKeywords} />
        
        {/* Critical: Explicit canonical URL for homepage */}
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
        <meta property="og:description" content="Wrapping Chicago - Premier vehicle wrap specialists. Custom car wraps, truck wraps, van wraps, and fleet graphics with premium 3M vinyl. Professional installation, design consultation, and competitive pricing." />
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
        
        {/* OTTO UUID for SEO tracking */}
        <meta name="otto-uuid" content="9f6f3de6-77b6-40f9-8e7a-7e851522164f" />
        
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
        
        {/* Last modified for better crawl frequency */}
        <meta name="last-modified" content={new Date().toISOString()} />
      </Helmet>
      
      <HomeStructuredData />
    </>
  );
};

export default HomeSEO;
