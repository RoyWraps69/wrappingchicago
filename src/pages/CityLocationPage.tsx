
import React, { useEffect } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import LocationPage from '@/components/LocationPage';
import { findCityBySlug, cities } from '@/data/cities';
import NotFound from './NotFound';

// List of known service routes to prevent them from being treated as city pages
const SERVICE_ROUTES = [
  'services',
  'fleet-wraps',
  'color-change-wraps',
  'commercial-graphics',
  'partial-wraps',
  'protective-films',
  'vehicle-lettering',
  'specialty-wraps',
  'retail-graphics',
  'designer-wraps',
  'luxury-exotic-wraps',
  'car-wraps',
  'truck-wraps',
  'van-wraps',
  'gallery', // Added gallery to the list of service routes
  'about', // Already in the list
  'ai-wrap-ideas',
  'contact',
  'locations'
];

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
  
  // Check if this is actually a service route being mistaken for a city
  if (SERVICE_ROUTES.includes(slug) || location.pathname.includes('/services/')) {
    console.log(`Identified as a service route, not a city: ${slug}`);
    
    // For direct service pages like /partial-wraps, send to the appropriate ServicesPage route
    if (location.pathname.startsWith('/')) {
      return <Navigate to={location.pathname} replace />;
    }
    
    return <Navigate to={`/services/${slug}`} replace />;
  }
  
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
