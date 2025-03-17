
import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import LocationPage from '@/components/LocationPage';
import { findCityBySlug, cities } from '@/data/cities';
import NotFound from './NotFound';

interface CityLocationPageProps {
  citySlug?: string;
}

const CityLocationPage = ({ citySlug: propCitySlug }: CityLocationPageProps = {}) => {
  const { citySlug: paramCitySlug } = useParams<{ citySlug: string }>();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("CityLocationPage mounted with path:", location.pathname);
  }, [location.pathname]);
  
  // Determine the city slug from props or params
  let slug = propCitySlug || paramCitySlug || '';
  
  // Clean up the slug if it has -il suffix
  slug = slug.replace(/-il$/, '');
  
  // If we still don't have a slug, try to extract from pathname
  if (!slug) {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    
    if (lastPart) {
      // Handle various formats like "vehicle-wraps-arlington-heights-il"
      if (lastPart.includes('vehicle-wraps-')) {
        slug = lastPart.replace('vehicle-wraps-', '').replace(/-il$/, '');
      } else if (lastPart.endsWith('-il')) {
        slug = lastPart.replace(/-il$/, '');
      } else {
        slug = lastPart;
      }
    }
  }
  
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
