
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CommercialGraphicsSEO = () => {
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>Commercial Graphics in Chicago IL | Wrapping Chicago</title>
      <meta 
        name="description" 
        content="Get commercial graphics in Chicago IL services for vehicles, windows, and signage. Elevate brand presence with vivid prints and expert installation." 
      />
      <meta name="keywords" content="commercial graphics Chicago, vehicle graphics Chicago, business vehicle graphics, commercial vehicle wraps, vehicle lettering Chicago, fleet graphics, business signage" />
      <link rel="canonical" href={`${domain}/services/commercial-graphics`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Commercial Graphics in Chicago IL | Wrapping Chicago" />
      <meta property="og:description" content="Get commercial graphics in Chicago IL services for vehicles, windows, and signage. Elevate brand presence with vivid prints and expert installation." />
      <meta property="og:url" content={`${domain}/services/commercial-graphics`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Commercial Graphics in Chicago IL | Wrapping Chicago" />
      <meta name="twitter:description" content="Get commercial graphics in Chicago IL services for vehicles, windows, and signage. Elevate brand presence with vivid prints and expert installation." />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
    </Helmet>
  );
};

export default CommercialGraphicsSEO;
