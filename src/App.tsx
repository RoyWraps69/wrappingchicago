
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
import AIWrapIdeasPage from './pages/AIWrapIdeas';
import DesignerWrapsPage from './pages/DesignerWrapsPage';
import SitemapPage from './pages/SitemapPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CityLocationPage from './pages/CityLocationPage';
import TruckWrapsChicagoPage from './pages/TruckWrapsChicagoPage';
import CarWrapsPage from './pages/CarWrapsPage';
import LuxuryExoticWrapsPage from './pages/LuxuryExoticWrapsPage';
import TruckWrapsPage from './pages/TruckWrapsPage';
import VanWrapsPage from './pages/VanWrapsPage';
import ColorChangeWrapsPage from './pages/ColorChangeWrapsPage';

function App() {
  // Help Google discover the sitemap
  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'sitemap';
    link.type = 'application/xml';
    link.href = '/sitemap.xml';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleTagManager containerId="GTM-XXXXXXX" />
        <GoogleAnalytics measurementId="G-ZTLS3EEGE7" />
        <GoogleSearchVerification />
        <ScrollToTop />
        <Routes>
          {/* Main navigation routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceType" element={<ServicesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/ai-wrap-ideas" element={<AIWrapIdeasPage />} />
          <Route path="/designer-wraps" element={<DesignerWrapsPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/html-sitemap" element={<SitemapPage />} />
          <Route path="/html-sitemap.html" element={<SitemapPage />} />
          
          {/* Special city-specific routes */}
          <Route path="/truck-wraps-chicago" element={<TruckWrapsChicagoPage />} />
          
          {/* Direct service pages */}
          <Route path="/car-wraps" element={<CarWrapsPage />} />
          <Route path="/truck-wraps" element={<TruckWrapsPage />} />
          <Route path="/van-wraps" element={<VanWrapsPage />} />
          <Route path="/color-change-wraps" element={<ColorChangeWrapsPage />} />
          <Route path="/luxury-exotic-wraps" element={<LuxuryExoticWrapsPage />} />
          
          {/* Location-specific routes */}
          <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
          <Route path="/:citySlug" element={<CityLocationPage />} />
          
          {/* Service-specific redirect routes */}
          <Route path="/fleet-wraps" element={<Navigate to="/services/fleet-wraps" replace />} />
          <Route path="/commercial-graphics" element={<Navigate to="/services/commercial-graphics" replace />} />
          <Route path="/partial-wraps" element={<Navigate to="/services/partial-wraps" replace />} />
          <Route path="/protective-films" element={<Navigate to="/services/protective-films" replace />} />
          <Route path="/vehicle-lettering" element={<Navigate to="/services/vehicle-lettering" replace />} />
          <Route path="/specialty-wraps" element={<Navigate to="/services/specialty-wraps" replace />} />
          <Route path="/retail-graphics" element={<Navigate to="/services/retail-graphics" replace />} />

          {/* 404 catch-all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
