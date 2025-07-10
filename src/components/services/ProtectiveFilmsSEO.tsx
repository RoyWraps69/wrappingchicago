
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ProtectiveFilmsSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Protective Films in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Shield your investment from Chicago's harsh elements! Premium paint protection film (PPF) installation guards against road salt, construction debris, and city driving hazards. Invisible armor for luxury and exotic vehicles."
      />
      <meta name="keywords" content="protective films Chicago, PPF Chicago, paint protection film, clear bra Chicago, vehicle protection film, scratch protection Chicago" />
      <link rel="canonical" href={`${domain}/services/protective-films`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`Protective Films in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get protective films in Chicago IL services to shield paint or wraps from chips and scratches. Clear PPF installed flawlessly for lasting defense." />
      <meta property="og:url" content={`${domain}/services/protective-films`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Protective Films in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get protective films in Chicago IL services to shield paint or wraps from chips and scratches. Clear PPF installed flawlessly for lasting defense." />
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

export default ProtectiveFilmsSEO;
