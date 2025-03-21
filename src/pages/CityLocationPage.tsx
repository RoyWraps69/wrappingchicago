
import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import LocationPage from '@/components/LocationPage';
import { findCityBySlug, cities } from '@/data/cities';
import NotFound from './NotFound';

const CityLocationPage = () => {
  const { citySlug: paramCitySlug } = useParams<{ citySlug: string }>();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("CityLocationPage mounted with path:", location.pathname);
  }, [location.pathname]);
  
  // Extract city slug from URL
  const extractCitySlug = () => {
    // First check params
    if (paramCitySlug) {
      return paramCitySlug.replace(/-il$/, '');
    }
    
    // If no params, try to extract from pathname
    const pathParts = location.pathname.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    
    if (lastPart) {
      // Handle various formats
      if (lastPart.includes('vehicle-wraps-')) {
        return lastPart.replace('vehicle-wraps-', '').replace(/-il$/, '');
      } else if (lastPart.endsWith('-il')) {
        return lastPart.replace(/-il$/, '');
      } else {
        return lastPart;
      }
    }
    
    return '';
  };
  
  const slug = extractCitySlug();
  console.log(`Looking for city with slug: "${slug}" from path: ${location.pathname}`);
  
  // Find the city by slug
  const city = findCityBySlug(slug);
  
  // If no city is found, return a 404 page
  if (!city) {
    console.error(`City not found for slug: "${slug}"`);
    return <NotFound />;
  }
  
  console.log(`Rendering city page for: ${city.name} (${city.slug})`);
  return <LocationPage city={city} />;
};

export default CityLocationPage;
