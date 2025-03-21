
import React from 'react';
import { Helmet } from 'react-helmet';

const HomeSEO = () => {
  return (
    <Helmet>
      <title>Vehicle Wraps Chicago | Premium Fleet & Color Change Wrapping Services</title>
      <meta 
        name="description" 
        content="Wrapping Chicago provides professional vehicle wrapping services with eye-catching designs. Transform your vehicles into mobile billboards with our premium fleet wraps, color change wraps, and commercial graphics." 
      />
      <meta name="keywords" content="vehicle wraps Chicago, fleet wraps, commercial vehicle graphics, car wrapping, truck wraps, van wraps, color change wraps, vehicle transformation" />
      <link rel="canonical" href="https://wrappingchicago.com" />
      
      {/* Open Graph / Social Media Tags */}
      <meta property="og:title" content="Vehicle Wraps Chicago | Transform Your Fleet with Premium Wraps" />
      <meta property="og:description" content="Turn heads with professional vehicle wraps that make your business stand out on every street in Chicago. Premium materials, expert installation, and quick turnaround." />
      <meta property="og:url" content="https://wrappingchicago.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://wrappingchicago.com/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" />
      <meta property="og:image:alt" content="Professional vehicle wrap with vibrant colors on sports car in Chicago - Wrapping Chicago" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vehicle Wraps Chicago | Premium Fleet Wrapping" />
      <meta name="twitter:description" content="Chicago's leading vehicle wrap provider. Transform your vehicle, elevate your brand with professional wrapping services." />
      <meta name="twitter:image" content="https://wrappingchicago.com/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" />
      <meta name="twitter:image:alt" content="Professional vehicle wrap services in Chicago - colorful vehicle design" />
    </Helmet>
  );
};

export default HomeSEO;
