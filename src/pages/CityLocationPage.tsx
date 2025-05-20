
import React, { useEffect } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import LocationPage from '@/components/LocationPage';
import { findCityBySlug, cities } from '@/data/cities';
import NotFoundPage from './NotFoundPage';

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
  'gallery',
  'about',
  'ai-wrap-ideas',
  'contact',
  'locations',
  'sitemap',
  'email-setup'
];

const CityLocationPage = () => {
  const { citySlug: paramCitySlug } = useParams<{ citySlug: string }>();
  const location = useLocation();
  
  useEffect(() => {
    console.log("CityLocationPage mounted with path:", location.pathname);
    
    // Add local schema verification for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log("Verifying local schema data for:", paramCitySlug);
    }
    
    // Add local business structured data directly to head for immediate indexing
    const head = document.querySelector('head');
    if (head) {
      const cityName = paramCitySlug ? 
        paramCitySlug.replace(/-il$/, '').split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ') : 
        'Chicago';
        
      const localBusinessScript = document.createElement('script');
      localBusinessScript.type = 'application/ld+json';
      localBusinessScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Wrapping Chicago",
        "description": `Vehicle wrapping services in ${cityName}, IL. Expert installation of car wraps, truck wraps, van wraps, and fleet wraps with premium 3M materials.`,
        "url": window.location.href,
        "telephone": "(312) 597-1286",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4711 N. Lamon Ave",
          "addressLocality": "Chicago",
          "addressRegion": "IL",
          "postalCode": "60630",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.8781,
          "longitude": -87.6298
        },
        "areaServed": {
          "@type": "City",
          "name": cityName
        }
      });
      head.appendChild(localBusinessScript);
      
      // Clean up when component unmounts
      return () => {
        head.removeChild(localBusinessScript);
      };
    }
  }, [location.pathname, paramCitySlug]);
  
  // Extract city slug from URL
  const extractCitySlug = () => {
    // First check if we're directly on the chicago-il path 
    if (location.pathname === '/vehicle-wraps-chicago-il') {
      return 'chicago';
    }
    
    // Check params
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
    return <Navigate to={location.pathname} replace />;
  }
  
  // Find the city by slug
  const city = findCityBySlug(slug);
  
  // Special handling for Chicago
  if (slug === 'chicago' || location.pathname === '/vehicle-wraps-chicago-il') {
    const chicagoCity = cities.find(c => c.slug === 'chicago') || cities[0];
    console.log('Rendering Chicago page specifically');
    return <LocationPage city={chicagoCity} allCities={cities} />;
  }
  
  // If no city is found, return a 404 page
  if (!city) {
    console.error(`City not found for slug: "${slug}"`);
    return <NotFoundPage />;
  }
  
  console.log(`Rendering city page for: ${city.name} (${city.slug})`);
  return <LocationPage city={city} allCities={cities} />;
};

export default CityLocationPage;
