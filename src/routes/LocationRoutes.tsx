
import React from 'react';
import { Route } from 'react-router-dom';
import CityLocationPage from '@/pages/CityLocationPage';
import ChicagoLocationPage from '@/pages/ChicagoLocationPage';

const LocationRoutes = () => {
  return (
    <>
      <Route path="/vehicle-wraps-chicago-il" element={<ChicagoLocationPage />} />
      <Route path="/chicago" element={<ChicagoLocationPage />} />
      <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
      <Route path="/:citySlug" element={<CityLocationPage />} />
    </>
  );
};

export default LocationRoutes;
