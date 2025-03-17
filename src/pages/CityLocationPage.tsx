
import React, { useEffect } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import LocationPage from '@/components/LocationPage';
import { findCityBySlug, cities } from '@/data/cities';

const CityLocationPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("CityLocationPage mounted with path:", location.pathname);
  }, [location.pathname]);
  
  // Redirect specific routes to their dedicated pages
  if (location.pathname === '/services') {
    return <Navigate to="/services" replace />;
  }
  
  if (location.pathname === '/about') {
    return <Navigate to="/about" replace />;
  }
  
  if (location.pathname === '/contact') {
    return <Navigate to="/contact" replace />;
  }
  
  if (location.pathname === '/gallery') {
    return <Navigate to="/gallery" replace />;
  }
  
  if (location.pathname.includes('/services/')) {
    return <Navigate to={location.pathname} replace />;
  }
  
  // Extract the city slug from the URL path
  let cleanCitySlug = '';
  
  if (citySlug) {
    cleanCitySlug = citySlug;
    // Remove "-il" suffix if present
    cleanCitySlug = cleanCitySlug.replace(/-il$/, '');
  } else {
    // No citySlug param, try to extract from pathname
    const pathParts = location.pathname.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    
    if (lastPart) {
      if (lastPart.includes('vehicle-wraps-')) {
        cleanCitySlug = lastPart.replace('vehicle-wraps-', '').replace(/-il$/, '');
      } else if (lastPart.endsWith('-il')) {
        cleanCitySlug = lastPart.replace(/-il$/, '');
      } else {
        cleanCitySlug = lastPart;
      }
    }
  }
  
  // Special case for direct access to /vehicle-wraps-arlington-heights-il
  if (location.pathname === '/vehicle-wraps-arlington-heights-il') {
    cleanCitySlug = 'arlington-heights';
  }
  
  console.log(`Extracted city slug: "${cleanCitySlug}" from path: ${location.pathname}`);
  
  // If we still don't have a slug, try to parse the full path
  if (!cleanCitySlug && location.pathname) {
    // Try to match known patterns
    const knownCities = cities.map(c => c.slug);
    for (const cityName of knownCities) {
      if (location.pathname.includes(cityName)) {
        cleanCitySlug = cityName;
        break;
      }
    }
  }

  // Find the city by slug
  let city = findCityBySlug(cleanCitySlug);
  
  if (!city) {
    console.warn(`City not found for slug: "${cleanCitySlug}"`);
    
    // Fallback for "arlington-heights" specifically
    if (cleanCitySlug.includes('arlington') || location.pathname.includes('arlington')) {
      const arlingtonHeights = cities.find(c => c.slug === 'arlington-heights' || c.name.toLowerCase().includes('arlington'));
      if (arlingtonHeights) {
        console.log(`Using specific match for Arlington Heights`);
        city = arlingtonHeights;
      }
    } else {
      // Fallback to using first city for demo
      console.log(`No city match found, using default city (${cities[0].name})`);
      city = cities[0];
    }
  }
  
  console.log(`Final city selected: ${city.name} (${city.slug})`);
  return <LocationPage city={city} />;
};

export default CityLocationPage;
