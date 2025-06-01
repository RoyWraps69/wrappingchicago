
import React from 'react';
import { Helmet } from 'react-helmet-async';

const FleetWrapsSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Fleet Wraps in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Get fleet wraps in Chicago IL services for consistent company branding. Uniform graphics across all vehicles, installed quickly by experienced pros." 
      />
      <meta name="keywords" content="fleet wraps Chicago, commercial fleet wraps, fleet graphics Chicago, fleet branding, fleet vehicle wraps, business fleet wraps Chicago" />
      <link rel="canonical" href={`${domain}/services/fleet-wraps`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`Fleet Wraps in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get fleet wraps in Chicago IL services for consistent company branding. Uniform graphics across all vehicles, installed quickly by experienced pros." />
      <meta property="og:url" content={`${domain}/services/fleet-wraps`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Fleet Wraps in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get fleet wraps in Chicago IL services for consistent company branding. Uniform graphics across all vehicles, installed quickly by experienced pros." />
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

export default FleetWrapsSEO;
