
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/navigation/ScrollToTop';
import GoogleTagManager from './components/GoogleTagManager';
import GoogleAnalytics from './components/GoogleAnalytics';
import GoogleSearchVerification from './components/seo/GoogleSearchVerification';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import LocationsPage from './pages/LocationsPage';
import GalleryPage from './pages/GalleryPage';
import AIWrapIdeas from './pages/AIWrapIdeas';
import DesignerWrapsPage from './pages/DesignerWrapsPage';
import SitemapPage from './pages/SitemapPage';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleTagManager containerId="GTM-XXXXXXX" />
        <GoogleAnalytics measurementId="G-ZTLS3EEGE7" />
        <GoogleSearchVerification />
        <ScrollToTop />
        <Routes>
          {/* Main navigation routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceType" element={<ServicesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/ai-wrap-ideas" element={<AIWrapIdeas />} />
          <Route path="/designer-wraps" element={<DesignerWrapsPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* Location-specific routes */}
          <Route path="/vehicle-wraps-:citySlug-il" element={<LocationsPage />} />
          <Route path="/:citySlug" element={<LocationsPage />} />
          
          {/* Service-specific direct routes */}
          <Route path="/car-wraps" element={<Navigate to="/services/car-wraps" replace />} />
          <Route path="/truck-wraps" element={<Navigate to="/services/truck-wraps" replace />} />
          <Route path="/van-wraps" element={<Navigate to="/services/van-wraps" replace />} />
          <Route path="/fleet-wraps" element={<Navigate to="/services/fleet-wraps" replace />} />
          <Route path="/color-change-wraps" element={<Navigate to="/services/color-change-wraps" replace />} />
          <Route path="/commercial-graphics" element={<Navigate to="/services/commercial-graphics" replace />} />
          <Route path="/partial-wraps" element={<Navigate to="/services/partial-wraps" replace />} />
          <Route path="/protective-films" element={<Navigate to="/services/protective-films" replace />} />
          <Route path="/vehicle-lettering" element={<Navigate to="/services/vehicle-lettering" replace />} />
          <Route path="/specialty-wraps" element={<Navigate to="/services/specialty-wraps" replace />} />
          <Route path="/retail-graphics" element={<Navigate to="/services/retail-graphics" replace />} />
          <Route path="/luxury-exotic-wraps" element={<Navigate to="/services/luxury-exotic-wraps" replace />} />

          {/* 404 catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
