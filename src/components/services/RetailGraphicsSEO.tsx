
import React from 'react';
import { Helmet } from 'react-helmet-async';

const RetailGraphicsSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Retail Graphics in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Chicago storefront makeovers that stop traffic! From Magnificent Mile to neighborhood shops, our retail graphics boost foot traffic with window displays, wall murals, and floor graphics that convert browsers to buyers."
      />
      <meta name="keywords" content="retail graphics Chicago, storefront graphics, window graphics Chicago, retail signage, store graphics, commercial signage Chicago" />
      <link rel="canonical" href={`${domain}/services/retail-graphics`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`Retail Graphics in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get retail graphics in Chicago IL services for storefront windows, walls, and floors. Draw customers with vibrant prints and expert installation." />
      <meta property="og:url" content={`${domain}/services/retail-graphics`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Retail Graphics in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get retail graphics in Chicago IL services for storefront windows, walls, and floors. Draw customers with vibrant prints and expert installation." />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta name="twitter:site" content="@wrappingchicago" />
      
      {/* Additional SEO metadata */}
      <meta name="author" content="Wrapping Chicago" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="format-detection" content="telephone=yes" />
    </Helmet>
  );
};

export default RetailGraphicsSEO;
