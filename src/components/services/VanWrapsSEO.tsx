
import React from 'react';
import { Helmet } from 'react-helmet-async';

const VanWrapsSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Van Wraps in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Get van wraps in Chicago IL services to turn your van into a mobile billboard. Custom graphics printed and installed with precision for maximum exposure." 
      />
      <meta name="keywords" content="van wraps Chicago, commercial van wraps, cargo van wraps, van graphics Chicago, van lettering Chicago, van advertising, mobile billboard Chicago" />
      <link rel="canonical" href={`${domain}/services/van-wraps`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`Van Wraps in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get van wraps in Chicago IL services to turn your van into a mobile billboard. Custom graphics printed and installed with precision for maximum exposure." />
      <meta property="og:url" content={`${domain}/services/van-wraps`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Van Wraps in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get van wraps in Chicago IL services to turn your van into a mobile billboard. Custom graphics printed and installed with precision for maximum exposure." />
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

export default VanWrapsSEO;
