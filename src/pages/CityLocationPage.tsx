
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
  const cleanCitySlug = citySlug?.replace(/-il$/, '');
  const city = findCityBySlug(cleanCitySlug || '');
  
  console.log(`Attempting to find city with slug: ${cleanCitySlug}`, city, location.pathname);
  
  if (!city) {
    return <Navigate to="/locations" />;
  }
  
  return <LocationPage city={city} />;
};

export default CityLocationPage;
