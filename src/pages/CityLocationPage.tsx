
import React, { useEffect } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import LocationPage from '@/components/LocationPage';
import { findCityBySlug, cities } from '@/data/cities';

const CityLocationPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Check if it's a service or contact page
  if (location.pathname.includes('/services/') || location.pathname === '/contact' || location.pathname === '/gallery') {
    // For demo purposes, just show Chicago
    const defaultCity = cities[0];
    return <LocationPage city={defaultCity} />;
  }
  
  // Clean up city slug if it contains any trailing characters
  let cleanCitySlug = citySlug || '';
  
  // Handle different URL formats
  if (cleanCitySlug.endsWith('-il')) {
    cleanCitySlug = cleanCitySlug.replace(/-il$/, '');
  }
  
  console.log(`Attempting to find city with slug: ${cleanCitySlug}`, location.pathname);
  
  const city = findCityBySlug(cleanCitySlug);
  
  if (!city) {
    console.error(`City not found for slug: ${cleanCitySlug}`);
    // If no city is found, try to match by name (case insensitive)
    const cityByName = cities.find(c => 
      c.name.toLowerCase() === cleanCitySlug.toLowerCase() ||
      c.slug.toLowerCase() === cleanCitySlug.toLowerCase()
    );
    
    if (cityByName) {
      return <LocationPage city={cityByName} />;
    }
    
    return <Navigate to="/locations" />;
  }
  
  return <LocationPage city={city} />;
};

export default CityLocationPage;
