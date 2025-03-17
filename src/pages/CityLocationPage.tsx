
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
    console.log("Rendering service/contact page with default city:", defaultCity.name);
    return <LocationPage city={defaultCity} />;
  }
  
  // Clean up city slug if it contains any trailing characters
  let cleanCitySlug = citySlug || '';
  
  // Handle different URL formats
  if (cleanCitySlug.endsWith('-il')) {
    cleanCitySlug = cleanCitySlug.replace(/-il$/, '');
  }
  
  // Also handle if the city name is part of a larger slug
  if (location.pathname.includes('vehicle-wraps-') && !citySlug) {
    // Try to extract from the full path
    const pathParts = location.pathname.split('/');
    const potentialSlug = pathParts[pathParts.length - 1];
    
    if (potentialSlug.startsWith('vehicle-wraps-')) {
      cleanCitySlug = potentialSlug.replace('vehicle-wraps-', '').replace(/-il\/?$/, '');
    }
  }
  
  console.log(`Attempting to find city with slug: "${cleanCitySlug}", full path: ${location.pathname}`);
  console.log("Available cities:", cities.map(c => `${c.name} (${c.slug})`).join(', '));
  
  const city = findCityBySlug(cleanCitySlug);
  
  if (!city) {
    console.error(`City not found for slug: ${cleanCitySlug}`);
    
    // If no city is found, try to match by name (case insensitive)
    const cityByName = cities.find(c => 
      c.name.toLowerCase() === cleanCitySlug.toLowerCase() ||
      c.slug.toLowerCase() === cleanCitySlug.toLowerCase()
    );
    
    if (cityByName) {
      console.log(`Found city by name: ${cityByName.name}`);
      return <LocationPage city={cityByName} />;
    }
    
    // As a fallback for demo purposes, use the first city
    console.log("No matching city found, using default city for demo");
    return <LocationPage city={cities[0]} />;
  }
  
  console.log(`Rendering city page for: ${city.name}`);
  return <LocationPage city={city} />;
};

export default CityLocationPage;
