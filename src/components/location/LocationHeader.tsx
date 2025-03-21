
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { City } from '@/data/cities';

interface LocationHeaderProps {
  city: City;
  cityKeywords: string[];
}

const LocationHeader: React.FC<LocationHeaderProps> = ({ city, cityKeywords }) => {
  return (
    <Helmet>
      <title>Professional Vehicle Wraps in {city.name}, IL | Car, Truck & Fleet Wraps</title>
      <meta 
        name="description" 
        content={`Chicago's top-rated vehicle wrap provider serving ${city.name}, IL. Professional car wraps, truck wraps, van wraps & fleet wraps with over 16,000 completed projects in our 20 years of business. Free quotes available.`} 
      />
      <link rel="canonical" href={`https://wrappingchicago.com/vehicle-wraps-${city.slug}-il`} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={`Professional Vehicle Wraps in ${city.name}, IL | Wrapping Chicago`} />
      <meta property="og:description" content={`Expert vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, car wraps, truck wraps, and commercial graphics with premium 3M materials and installation.`} />
      <meta property="og:url" content={`https://wrappingchicago.com/vehicle-wraps-${city.slug}-il`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Professional Vehicle Wraps in ${city.name}, IL | Wrapping Chicago`} />
      <meta name="twitter:description" content={`Expert vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, car wraps, truck wraps, and commercial graphics with 20 years of experience.`} />
      <meta name="twitter:image" content="/og-image.png" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={city.name} />
      <meta name="keywords" content={cityKeywords.join(", ")} />
    </Helmet>
  );
};

export default LocationHeader;
