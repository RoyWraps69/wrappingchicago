
import React from 'react';
import { cities } from '@/data/cities';
import EnhancedLocationPage from '@/components/location/EnhancedLocationPage';

const ChicagoLocationPage = () => {
  // Get Chicago city data
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  return <EnhancedLocationPage city={chicagoCity} />;
};

export default ChicagoLocationPage;
