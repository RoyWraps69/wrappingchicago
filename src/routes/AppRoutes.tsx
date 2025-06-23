import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import GalleryPage from '@/pages/GalleryPage';
import ContactPage from '@/pages/ContactPage';
import LocationsPage from '@/pages/LocationsPage';
import PricingPage from '@/pages/PricingPage';
import FAQPage from '@/pages/FAQPage';
import AIWrapIdeas from '@/pages/AIWrapIdeas';
import SitemapPage from '@/pages/SitemapPage';
import GlossaryPage from '@/pages/GlossaryPage';
import StatsPage from '@/pages/StatsPage';
import CarWrapsPage from '@/pages/CarWrapsPage';
import TruckWrapsPage from '@/pages/TruckWrapsPage';
import VanWrapsPage from '@/pages/VanWrapsPage';
import FleetWrapsPage from '@/pages/FleetWrapsPage';
import ColorChangeWrapsPage from '@/pages/ColorChangeWrapsPage';
import DesignerWrapsPage from '@/pages/DesignerWrapsPage';
import LuxuryExoticWrapsPage from '@/pages/LuxuryExoticWrapsPage';
import TruckWrapsChicago from '@/pages/TruckWrapsChicago';
import CityLocationPage from '@/pages/CityLocationPage';
import ChicagoLocationPage from '@/pages/ChicagoLocationPage';
import ReturnPolicyPage from '@/pages/ReturnPolicyPage';
import ShippingPage from '@/pages/ShippingPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/ai-wrap-ideas" element={<AIWrapIdeas />} />
      <Route path="/sitemap" element={<SitemapPage />} />
      <Route path="/glossary" element={<GlossaryPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/return-policy" element={<ReturnPolicyPage />} />
      <Route path="/shipping" element={<ShippingPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />
      
      {/* Service Routes */}
      <Route path="/car-wraps" element={<CarWrapsPage />} />
      <Route path="/truck-wraps" element={<TruckWrapsPage />} />
      <Route path="/van-wraps" element={<VanWrapsPage />} />
      <Route path="/fleet-wraps" element={<FleetWrapsPage />} />
      <Route path="/color-change-wraps" element={<ColorChangeWrapsPage />} />
      <Route path="/designer-wraps" element={<DesignerWrapsPage />} />
      <Route path="/luxury-exotic-wraps" element={<LuxuryExoticWrapsPage />} />
      <Route path="/truck-wraps-chicago" element={<TruckWrapsChicago />} />
      
      {/* Location Routes */}
      <Route path="/vehicle-wraps-chicago-il" element={<ChicagoLocationPage />} />
      <Route path="/chicago" element={<ChicagoLocationPage />} />
      <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
      <Route path="/:citySlug" element={<CityLocationPage />} />
    </Routes>
  );
};

export default AppRoutes;
