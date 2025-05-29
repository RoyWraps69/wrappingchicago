
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CommercialGraphicsSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Commercial Graphics & Vehicle Lettering Chicago IL | Professional Business Branding ${currentYear}`}</title>
      <meta 
        name="description" 
        content="Professional commercial graphics and vehicle lettering services in Chicago IL. Custom business vehicle branding, fleet graphics, and professional signage solutions." 
      />
      <meta name="keywords" content="commercial graphics Chicago, vehicle lettering Chicago, business vehicle graphics, fleet graphics, commercial vehicle branding, professional signage, custom vehicle lettering" />
      <link rel="canonical" href={`${domain}/services/commercial-graphics`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`Commercial Graphics & Vehicle Lettering Chicago IL | Professional Business Branding ${currentYear}`} />
      <meta property="og:description" content="Professional commercial graphics and vehicle lettering services in Chicago IL. Custom business vehicle branding, fleet graphics, and professional signage solutions." />
      <meta property="og:url" content={`${domain}/services/commercial-graphics`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Commercial Graphics & Vehicle Lettering Chicago IL | Professional Business Branding ${currentYear}`} />
      <meta name="twitter:description" content="Professional commercial graphics and vehicle lettering services in Chicago IL. Custom business vehicle branding, fleet graphics, and professional signage solutions." />
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

export default CommercialGraphicsSEO;
