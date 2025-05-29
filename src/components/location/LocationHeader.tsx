
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
  
  // Generate coordinates for the city or fallback to Chicago coordinates
  const latitude = city.coordinates ? city.coordinates.lat : 41.8781;
  const longitude = city.coordinates ? city.coordinates.lng : -87.6298;
  
  return (
    <Helmet>
      <title>Professional Vehicle Wraps in {city.name}, IL | Car, Truck & Fleet Wraps | {currentYear}</title>
      <meta 
        name="description" 
        content={`Chicago's top-rated vehicle wrap provider serving ${city.name}, IL. Professional car wraps, truck wraps, van wraps & fleet wraps with over 16,000 completed projects in our 20 years of business. Free quotes available.`} 
      />
      <link rel="canonical" href={`${domain}/vehicle-wraps-${city.slug}-il`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`Professional Vehicle Wraps in ${city.name}, IL | Wrapping Chicago | ${currentYear}`} />
      <meta property="og:description" content={`Expert vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, car wraps, truck wraps, and commercial graphics with premium 3M materials and installation.`} />
      <meta property="og:url" content={`${domain}/vehicle-wraps-${city.slug}-il`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Professional Vehicle Wraps in ${city.name}, IL | Wrapping Chicago | ${currentYear}`} />
      <meta name="twitter:description" content={`Expert vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, car wraps, truck wraps, and commercial graphics with 20 years of experience.`} />
      <meta name="twitter:image" content="/og-image.png" />
      <meta name="twitter:site" content="@wrappingchicago" />
      
      {/* Enhanced geo metadata */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={city.name} />
      <meta name="geo.position" content={`${latitude};${longitude}`} />
      <meta name="ICBM" content={`${latitude}, ${longitude}`} />
      <meta name="keywords" content={cityKeywords.join(", ")} />
      <meta name="author" content="Wrapping Chicago" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="locale" content="en_US" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="local" />
      <meta name="coverage" content="Illinois" />
      <meta name="target" content="all" />
      <meta name="rating" content="general" />
      <meta name="topic" content="Vehicle Wraps, Car Wraps, Truck Wraps" />
      <meta name="subject" content={`Vehicle Wrapping Services in ${city.name}`} />
      <meta name="classification" content="business" />
      <meta name="directory" content="submission" />
      <meta name="category" content="Vehicle Graphics, Commercial Wraps" />
      <meta name="apple-mobile-web-app-title" content={`Wrapping Chicago - ${city.name}`} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Enhanced Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      
      {/* Enhanced Local Business Data */}
      <meta property="business:contact_data:street_address" content="4711 N. Lamon Ave" />
      <meta property="business:contact_data:locality" content="Chicago" />
      <meta property="business:contact_data:region" content="IL" />
      <meta property="business:contact_data:postal_code" content="60630" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta property="business:contact_data:email" content="roy@chicagofleetwraps.com" />
      <meta property="business:contact_data:phone_number" content="+13125971286" />
      <meta property="business:contact_data:website" content={domain} />
      <meta property="place:location:latitude" content={latitude.toString()} />
      <meta property="place:location:longitude" content={longitude.toString()} />
    </Helmet>
  );
};

export default LocationHeader;
