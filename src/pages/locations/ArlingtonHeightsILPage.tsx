import React from 'react';
import ChicagoAreaLocationPage from '@/components/location/ChicagoAreaLocationPage';
import { getLocationBySlug } from '@/data/chicagoAreaLocations';

const ArlingtonHeightsILPage = () => {
  const location = getLocationBySlug('arlington-heights-il');
  
  if (!location) {
    return <div>Location not found</div>;
  }

  return <ChicagoAreaLocationPage location={location} />;
};

export default ArlingtonHeightsILPage;