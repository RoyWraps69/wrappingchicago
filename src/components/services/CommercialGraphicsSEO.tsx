
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CommercialGraphicsSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Commercial Graphics in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Elevate your Chicago business visibility! Commercial vehicle graphics, storefront signage, and branded displays that work 24/7 across Chicagoland. From startups to Fortune 500 companies, we amplify your message."
      />
      <meta name="keywords" content="commercial graphics Chicago, vehicle lettering Chicago, business vehicle graphics, fleet graphics, commercial vehicle branding, professional signage, custom vehicle lettering" />
      <link rel="canonical" href={`${domain}/services/commercial-graphics`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`Commercial Graphics in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get commercial graphics in Chicago IL services for vehicles, windows, and signage. Elevate brand presence with vivid prints and expert installation." />
      <meta property="og:url" content={`${domain}/services/commercial-graphics`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Commercial Graphics in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get commercial graphics in Chicago IL services for vehicles, windows, and signage. Elevate brand presence with vivid prints and expert installation." />
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
