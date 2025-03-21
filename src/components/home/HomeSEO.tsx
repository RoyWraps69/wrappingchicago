
import React from 'react';
import { Helmet } from 'react-helmet';

const HomeSEO = () => {
  return (
    <Helmet>
      <title>Vehicle Wraps Chicago | Premium Fleet & Color Change Wrapping Services</title>
      <meta 
        name="description" 
        content="Chicago's leading vehicle wrap company offering professional fleet wraps, color change wraps, & commercial graphics. Premium materials with a 2-year warranty and 3-day installation. Transform your vehicles into mobile billboards with eye-catching designs." 
      />
      <meta name="keywords" content="vehicle wraps Chicago, fleet wraps, commercial vehicle graphics, car wrapping, truck wraps, van wraps, color change wraps, vehicle transformation, Chicago wrap shop, 3M certified installers" />
      <link rel="canonical" href="https://wrappingchicago.com" />
      
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".hero-description"]
          },
          "name": "Vehicle Wraps Chicago | Premium Fleet & Color Change Wrapping Services",
          "description": "Chicago's leading vehicle wrap company offering professional fleet wraps, color change wraps, & commercial graphics. Premium materials with a 2-year warranty and 3-day installation.",
          "url": "https://wrappingchicago.com",
          "lastReviewed": new Date().toISOString().split('T')[0]
        })}
      </script>
      
      {/* Open Graph / Social Media Tags */}
      <meta property="og:title" content="Vehicle Wraps Chicago | Transform Your Fleet with Premium Wraps" />
      <meta property="og:description" content="Turn heads with professional vehicle wraps that make your business stand out on every street in Chicago. Premium materials, expert installation, and quick turnaround." />
      <meta property="og:url" content="https://wrappingchicago.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://wrappingchicago.com/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" />
      <meta property="og:image:alt" content="Professional vehicle wrap with vibrant colors on sports car in Chicago - Wrapping Chicago" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vehicle Wraps Chicago | Premium Fleet Wrapping" />
      <meta name="twitter:description" content="Chicago's leading vehicle wrap provider. Transform your vehicle, elevate your brand with professional wrapping services." />
      <meta name="twitter:image" content="https://wrappingchicago.com/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" />
      <meta name="twitter:image:alt" content="Professional vehicle wrap services in Chicago - colorful vehicle design" />
      <meta name="twitter:site" content="@wrappingchicago" />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="Wrapping Chicago" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    </Helmet>
  );
};

export default HomeSEO;
