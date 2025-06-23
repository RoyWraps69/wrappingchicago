
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
import ServiceRoutes from './ServiceRoutes';
import LocationRoutes from './LocationRoutes';

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
      
      <ServiceRoutes />
      <LocationRoutes />
    </Routes>
  );
};

export default AppRoutes;
