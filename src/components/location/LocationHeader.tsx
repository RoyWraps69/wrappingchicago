
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { City } from '@/data/cities';

interface LocationHeaderProps {
  city: City;
  cityKeywords: string[];
}

const LocationHeader: React.FC<LocationHeaderProps> = ({ city, cityKeywords }) => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`Professional Vehicle Wraps in ${city.name}, IL | Car, Truck & Fleet Wraps | ${currentYear}`}</title>
      <meta 
        name="description" 
        content={`Chicago's top-rated vehicle wrap provider serving ${city.name}, IL. Professional car wraps, truck wraps, van wraps & fleet wraps with over 16,000 completed projects in our 20 years of business. Free quotes available.`} 
      />
      <link rel="canonical" href={`${domain}/vehicle-wraps-${city.slug}-il`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta property="og:title" content={`Professional Vehicle Wraps in ${city.name}, IL | Wrapping Chicago | ${currentYear}`} />
      <meta property="og:description" content={`Expert vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, car wraps, truck wraps, and commercial graphics with premium 3M materials and installation.`} />
      <meta property="og:url" content={`${domain}/vehicle-wraps-${city.slug}-il`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Professional Vehicle Wraps in ${city.name}, IL | Wrapping Chicago | ${currentYear}`} />
      <meta name="twitter:description" content={`Expert vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, car wraps, truck wraps, and commercial graphics with 20 years of experience.`} />
      <meta name="twitter:image" content="/og-image.png" />
      <meta name="twitter:site" content="@wrappingchicago" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={city.name} />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      <meta name="keywords" content={cityKeywords.join(", ")} />
      <meta name="author" content="Wrapping Chicago" />
      <meta name="format-detection" content="telephone=yes" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    </Helmet>
  );
};

export default LocationHeader;
