
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SpecialtyWrapsSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Specialty Wraps in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Get specialty wraps in Chicago IL services like chrome, matte, carbon fiber, or textured finishes. Achieve unique looks with professional vinyl application." 
      />
      <meta name="keywords" content="specialty wraps Chicago, chrome wraps Chicago, matte wraps Chicago, carbon fiber wraps, textured wraps, unique vehicle wraps Chicago" />
      <link rel="canonical" href={`${domain}/services/specialty-wraps`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`Specialty Wraps in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get specialty wraps in Chicago IL services like chrome, matte, carbon fiber, or textured finishes. Achieve unique looks with professional vinyl application." />
      <meta property="og:url" content={`${domain}/services/specialty-wraps`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Specialty Wraps in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get specialty wraps in Chicago IL services like chrome, matte, carbon fiber, or textured finishes. Achieve unique looks with professional vinyl application." />
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

export default SpecialtyWrapsSEO;
