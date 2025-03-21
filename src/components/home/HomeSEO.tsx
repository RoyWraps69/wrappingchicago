
import React from 'react';
import { Helmet } from 'react-helmet';

const HomeSEO = () => {
  return (
    <Helmet>
      <title>Wrapping Chicago | Professional Vehicle & Fleet Wrapping Services</title>
      <meta 
        name="description" 
        content="Wrapping Chicago provides professional vehicle wrapping services including fleet wraps, color change wraps, and commercial graphics throughout Chicago and surrounding areas." 
      />
      <meta name="keywords" content="vehicle wraps Chicago, fleet wraps, commercial vehicle graphics, car wrapping, truck wraps, van wraps, color change wraps" />
      <link rel="canonical" href="https://wrappingchicago.com" />
      
      {/* Open Graph / Social Media Tags */}
      <meta property="og:title" content="Wrapping Chicago | Professional Vehicle Wrapping Services" />
      <meta property="og:description" content="Transform your vehicles with premium wraps that make your business stand out on Chicago streets." />
      <meta property="og:url" content="https://wrappingchicago.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://wrappingchicago.com/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Wrapping Chicago | Professional Vehicle Wrapping" />
      <meta name="twitter:description" content="Chicago's leading vehicle wrap provider for businesses and individuals." />
      <meta name="twitter:image" content="https://wrappingchicago.com/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png" />
    </Helmet>
  );
};

export default HomeSEO;
