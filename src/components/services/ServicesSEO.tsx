
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Vehicle Wrap Services in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Get vehicle wrap services in Chicago IL for complete design, print, and installation. Transform any vehicle with durable vinyl and eye-catching branding." 
      />
      <meta name="keywords" content="vehicle wrap services Chicago, car wrap services, truck wrap services, van wrap services, fleet wrap services, commercial vehicle graphics, custom vehicle wraps Chicago, vehicle branding services, professional vehicle wraps" />
      <link rel="canonical" href={`${domain}/services`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`Vehicle Wrap Services in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get vehicle wrap services in Chicago IL for complete design, print, and installation. Transform any vehicle with durable vinyl and eye-catching branding." />
      <meta property="og:url" content={`${domain}/services`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Vehicle Wrap Services in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get vehicle wrap services in Chicago IL for complete design, print, and installation. Transform any vehicle with durable vinyl and eye-catching branding." />
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

export default ServicesSEO;
