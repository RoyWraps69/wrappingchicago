
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleTagManager containerId="GTM-XXXXXXX" />
        <GoogleAnalytics measurementId="G-ZTLS3EEGE7" />
        <GoogleSearchVerification />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<div className="p-8 text-center">Home Page Coming Soon</div>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceType" element={<div className="p-8 text-center">Service Details Coming Soon</div>} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/vehicle-wraps-:citySlug-il" element={<div className="p-8 text-center">Location Details Coming Soon</div>} />
          <Route path="/:citySlug" element={<div className="p-8 text-center">City Details Coming Soon</div>} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/ai-wrap-ideas" element={<AIWrapIdeas />} />
          <Route path="/designer-wraps" element={<DesignerWrapsPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* Redirect routes for common service URLs */}
          <Route path="/car-wraps" element={<div className="p-8 text-center">Car Wraps Coming Soon</div>} />
          <Route path="/truck-wraps" element={<div className="p-8 text-center">Truck Wraps Coming Soon</div>} />
          <Route path="/van-wraps" element={<div className="p-8 text-center">Van Wraps Coming Soon</div>} />
          <Route path="/fleet-wraps" element={<div className="p-8 text-center">Fleet Wraps Coming Soon</div>} />
          <Route path="/color-change-wraps" element={<div className="p-8 text-center">Color Change Wraps Coming Soon</div>} />
          <Route path="/commercial-graphics" element={<div className="p-8 text-center">Commercial Graphics Coming Soon</div>} />
          <Route path="/partial-wraps" element={<div className="p-8 text-center">Partial Wraps Coming Soon</div>} />
          <Route path="/protective-films" element={<div className="p-8 text-center">Protective Films Coming Soon</div>} />
          <Route path="/vehicle-lettering" element={<div className="p-8 text-center">Vehicle Lettering Coming Soon</div>} />
          <Route path="/specialty-wraps" element={<div className="p-8 text-center">Specialty Wraps Coming Soon</div>} />
          <Route path="/retail-graphics" element={<div className="p-8 text-center">Retail Graphics Coming Soon</div>} />
          <Route path="/luxury-exotic-wraps" element={<div className="p-8 text-center">Luxury Exotic Wraps Coming Soon</div>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
