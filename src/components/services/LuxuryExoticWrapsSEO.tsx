
import React from 'react';
import { Helmet } from 'react-helmet-async';

const LuxuryExoticWrapsSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Luxury Vehicle Wraps in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Concours-quality wraps for Chicago's finest automobiles! Specialized in Ferrari, Lamborghini, McLaren, and luxury vehicle transformations using premium films and master-level installation techniques that preserve resale value."
      />
      <meta name="keywords" content="luxury vehicle wraps Chicago, exotic car wraps, high-end car wraps, premium vehicle wraps, luxury car graphics Chicago, supercar wraps" />
      <link rel="canonical" href={`${domain}/services/luxury-exotic-wraps`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`Luxury Vehicle Wraps in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get luxury vehicle wraps in Chicago IL services for exotic and high-end cars. Premium films and meticulous craftsmanship deliver showroom-worthy finishes." />
      <meta property="og:url" content={`${domain}/services/luxury-exotic-wraps`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Luxury Vehicle Wraps in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get luxury vehicle wraps in Chicago IL services for exotic and high-end cars. Premium films and meticulous craftsmanship deliver showroom-worthy finishes." />
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

export default LuxuryExoticWrapsSEO;
