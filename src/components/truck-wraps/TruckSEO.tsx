
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TruckSEO = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Helmet>
      <title>{`Truck Wraps Chicago | Commercial & Box Truck Wrapping Services | ${currentYear}`}</title>
      <meta 
        name="description" 
        content="Professional truck wraps in Chicago with over 16,000 wraps completed in our 20 years of business. Serving delivery trucks, box trucks, pickup trucks & commercial fleets with expert installation and premium 3M materials." 
      />
      <link rel="canonical" href="https://wrappingchicago.com/truck-wraps-chicago" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={`Truck Wraps Chicago | Commercial & Box Truck Wrapping Services | ${currentYear}`} />
      <meta property="og:description" content="Expert truck wrapping services in Chicago. Transform your commercial vehicles with high-impact truck wraps that boost your business visibility." />
      <meta property="og:url" content="https://wrappingchicago.com/truck-wraps-chicago" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Truck Wraps Chicago | Commercial & Box Truck Wrapping Services | ${currentYear}`} />
      <meta name="twitter:description" content="Expert truck wrapping services in Chicago with 20 years of experience. Transform your commercial vehicles with high-impact truck wraps." />
      <meta name="twitter:image" content="/og-image.png" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="keywords" content="truck wraps Chicago, commercial truck wraps, box truck wraps, pickup truck wraps, delivery truck wraps, truck graphics Chicago, truck lettering Chicago, semi truck wraps, truck advertising, fleet truck wraps Chicago, business truck wraps Chicago, truck vinyl wraps, truck wrap installation Chicago, truck wrap cost, custom truck wraps Chicago" />
    </Helmet>
  );
};

export default TruckSEO;
