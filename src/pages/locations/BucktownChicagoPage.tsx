import React from 'react';
import ChicagoAreaLocationPage from '@/components/location/ChicagoAreaLocationPage';
import { getLocationBySlug } from '@/data/chicagoAreaLocations';

const BucktownChicagoPage = () => {
  const location = getLocationBySlug('bucktown-chicago');
  
  if (!location) {
    return <div>Location not found</div>;
  }

  return <ChicagoAreaLocationPage location={location} />;
};

export default BucktownChicagoPage;