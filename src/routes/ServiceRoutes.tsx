
import React from 'react';
import { Route } from 'react-router-dom';
import CarWrapsPage from '@/pages/CarWrapsPage';
import TruckWrapsPage from '@/pages/TruckWrapsPage';
import VanWrapsPage from '@/pages/VanWrapsPage';
import FleetWrapsPage from '@/pages/FleetWrapsPage';
import ColorChangeWrapsPage from '@/pages/ColorChangeWrapsPage';
import DesignerWrapsPage from '@/pages/DesignerWrapsPage';
import LuxuryExoticWrapsPage from '@/pages/LuxuryExoticWrapsPage';
import TruckWrapsChicago from '@/pages/TruckWrapsChicago';

const ServiceRoutes = () => {
  return (
    <>
      <Route path="/car-wraps" element={<CarWrapsPage />} />
      <Route path="/truck-wraps" element={<TruckWrapsPage />} />
      <Route path="/van-wraps" element={<VanWrapsPage />} />
      <Route path="/fleet-wraps" element={<FleetWrapsPage />} />
      <Route path="/color-change-wraps" element={<ColorChangeWrapsPage />} />
      <Route path="/designer-wraps" element={<DesignerWrapsPage />} />
      <Route path="/luxury-exotic-wraps" element={<LuxuryExoticWrapsPage />} />
      <Route path="/truck-wraps-chicago" element={<TruckWrapsChicago />} />
    </>
  );
};

export default ServiceRoutes;
