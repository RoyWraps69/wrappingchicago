
import React from 'react';
import { City } from '@/data/types/city';
import EnhancedLocationPage from './location/EnhancedLocationPage';

interface LocationPageProps {
  city: City;
  allCities?: City[];
}

const LocationPage = ({ city, allCities = [] }: LocationPageProps) => {
  if (!city) {
    return <div>City not found</div>;
  }

  return <EnhancedLocationPage city={city} />;
};

export default LocationPage;
