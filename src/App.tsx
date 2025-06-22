import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient } from 'react-query';
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import ServicePage from './pages/ServicePage';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import AIWrapIdeas from './pages/AIWrapIdeas';
import HTMLSitemap from './pages/HTMLSitemap';
import CarWraps from './pages/CarWraps';
import TruckWraps from './pages/TruckWraps';
import VanWraps from './pages/VanWraps';
import FleetWraps from './pages/FleetWraps';
import ColorChangeWraps from './pages/ColorChangeWraps';
import CommercialGraphics from './pages/CommercialGraphics';
import PartialWraps from './pages/PartialWraps';
import ProtectiveFilms from './pages/ProtectiveFilms';
import VehicleLettering from './pages/VehicleLettering';
import SpecialtyWraps from './pages/SpecialtyWraps';
import RetailGraphics from './pages/RetailGraphics';
import DesignerWraps from './pages/DesignerWraps';
import LuxuryExoticWraps from './pages/LuxuryExoticWraps';
import TruckWrapsChicago from './pages/TruckWrapsChicago';
import CityLocationPage from './pages/CityLocationPage';
import ChicagoLocationPage from './pages/ChicagoLocationPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <HelmetProvider>
      <QueryClient>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServicePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/ai-wrap-ideas" element={<AIWrapIdeas />} />
            <Route path="/sitemap" element={<HTMLSitemap />} />
            
            {/* Service-specific routes */}
            <Route path="/car-wraps" element={<CarWraps />} />
            <Route path="/truck-wraps" element={<TruckWraps />} />
            <Route path="/van-wraps" element={<VanWraps />} />
            <Route path="/fleet-wraps" element={<FleetWraps />} />
            <Route path="/color-change-wraps" element={<ColorChangeWraps />} />
            <Route path="/commercial-graphics" element={<CommercialGraphics />} />
            <Route path="/partial-wraps" element={<PartialWraps />} />
            <Route path="/protective-films" element={<ProtectiveFilms />} />
            <Route path="/vehicle-lettering" element={<VehicleLettering />} />
            <Route path="/specialty-wraps" element={<SpecialtyWraps />} />
            <Route path="/retail-graphics" element={<RetailGraphics />} />
            <Route path="/designer-wraps" element={<DesignerWraps />} />
            <Route path="/luxury-exotic-wraps" element={<LuxuryExoticWraps />} />
            
            {/* Special pages */}
            <Route path="/truck-wraps-chicago" element={<TruckWrapsChicago />} />
            
            {/* Location routes - specific handling for Chicago */}
            <Route path="/vehicle-wraps-chicago-il" element={<ChicagoLocationPage />} />
            <Route path="/chicago" element={<ChicagoLocationPage />} />
            <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
            <Route path="/:citySlug" element={<CityLocationPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClient>
    </HelmetProvider>
  );
}

export default App;
