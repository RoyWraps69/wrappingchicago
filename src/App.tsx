
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import LocationsPage from './pages/LocationsPage';
import LocationPage from './pages/LocationPage';
import GalleryPage from './pages/GalleryPage';
import AIWrapIdeas from './pages/AIWrapIdeas';
import DesignerWrapsPage from './pages/DesignerWrapsPage';
import SitemapPage from './pages/SitemapPage';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/navigation/ScrollToTop';
import GoogleTagManager from './components/GoogleTagManager';
import GoogleAnalytics from './components/GoogleAnalytics';
import GoogleSearchVerification from './components/seo/GoogleSearchVerification';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleTagManager />
        <GoogleAnalytics />
        <GoogleSearchVerification />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceType" element={<ServiceDetailsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/vehicle-wraps-:citySlug-il" element={<LocationPage />} />
          <Route path="/:citySlug" element={<LocationPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/ai-wrap-ideas" element={<AIWrapIdeas />} />
          <Route path="/designer-wraps" element={<DesignerWrapsPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* Redirect routes for common service URLs */}
          <Route path="/car-wraps" element={<ServiceDetailsPage />} />
          <Route path="/truck-wraps" element={<ServiceDetailsPage />} />
          <Route path="/van-wraps" element={<ServiceDetailsPage />} />
          <Route path="/fleet-wraps" element={<ServiceDetailsPage />} />
          <Route path="/color-change-wraps" element={<ServiceDetailsPage />} />
          <Route path="/commercial-graphics" element={<ServiceDetailsPage />} />
          <Route path="/partial-wraps" element={<ServiceDetailsPage />} />
          <Route path="/protective-films" element={<ServiceDetailsPage />} />
          <Route path="/vehicle-lettering" element={<ServiceDetailsPage />} />
          <Route path="/specialty-wraps" element={<ServiceDetailsPage />} />
          <Route path="/retail-graphics" element={<ServiceDetailsPage />} />
          <Route path="/luxury-exotic-wraps" element={<ServiceDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
