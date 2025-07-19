
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
        {/* Title removed - handled by DynamicTitleManager */}
        {/* Meta tags removed - handled by DynamicMetaManager */}
        
        {/* Canonical URLs removed - handled by DynamicCanonicalManager */}
        
        {/* Enhanced favicon setup */}
        <link rel="icon" type="image/png" sizes="32x32" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
        <link rel="shortcut icon" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
        <meta name="msapplication-TileImage" content="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
        <meta name="msapplication-TileColor" content="#11172D" />
        
        {/* All OG tags removed - handled by DynamicMetaManager */}
        
        {/* Twitter tags removed - handled by DynamicMetaManager */}
        
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
