
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LocationPage from '@/components/LocationPage';
import { findCityBySlug } from '@/data/cities';

const CityLocationPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Clean up city slug if it contains any trailing characters
  // The -il suffix might be part of the URL route, so we need to remove it
  const cleanCitySlug = citySlug?.replace(/-il$/, '');
  const city = findCityBySlug(cleanCitySlug || '');
  
  // For debugging
  console.log(`Attempting to find city with slug: ${cleanCitySlug}`, city);
  
  if (!city) {
    console.error(`City not found for slug: ${cleanCitySlug}`);
    return <Navigate to="/locations" />;
  }
  
  return <LocationPage city={city} />;
};

export default CityLocationPage;
