import React from 'react';
import { useParams } from 'react-router-dom';
import { getLocationBySlug } from '@/data/locations';
import LocationPageSEO from '@/components/locations/LocationPageSEO';
import LocationPageContent from '@/components/locations/LocationPageContent';

const LocationPage = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  
  if (!locationSlug) {
    return <div>Location not found</div>;
  }
  
  const location = getLocationBySlug(locationSlug);
  
  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <>
      <LocationPageSEO location={location} />
      <LocationPageContent location={location} />
    </>
  );
};

export default LocationPage;