import React from 'react';
import ChicagoAreaLocationPage from '@/components/location/ChicagoAreaLocationPage';
import { getLocationBySlug } from '@/data/chicagoAreaLocations';

const LakeviewChicagoPage = () => {
  const location = getLocationBySlug('lakeview-chicago');
  
  if (!location) {
    return <div>Location not found</div>;
  }

  return <ChicagoAreaLocationPage location={location} />;
};

export default LakeviewChicagoPage;