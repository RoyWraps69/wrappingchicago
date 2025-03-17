
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LocationPage from '@/components/LocationPage';
import { findCityBySlug } from '@/data/cities';

const CityLocationPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = findCityBySlug(citySlug || '');
  
  if (!city) {
    return <Navigate to="/locations" />;
  }
  
  return <LocationPage city={city} />;
};

export default CityLocationPage;
