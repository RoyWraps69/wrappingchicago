
import React from 'react';
import { Helmet } from 'react-helmet-async';

const VehicleLettereringSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Vehicle Lettering in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Professional vehicle lettering that builds trust! Chicago businesses rely on our precision vinyl lettering for DOT compliance, company branding, and contact information that stays sharp through city wear and tear."
      />
      <meta name="keywords" content="vehicle lettering Chicago, car lettering Chicago, truck lettering, vinyl lettering, DOT numbers, commercial lettering Chicago" />
      <link rel="canonical" href={`${domain}/services/vehicle-lettering`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`Vehicle Lettering in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get vehicle lettering in Chicago IL services for logos, DOT numbers, and contact info. Precise vinyl lettering applied cleanly for professional results." />
      <meta property="og:url" content={`${domain}/services/vehicle-lettering`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Vehicle Lettering in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get vehicle lettering in Chicago IL services for logos, DOT numbers, and contact info. Precise vinyl lettering applied cleanly for professional results." />
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

export default VehicleLettereringSEO;
