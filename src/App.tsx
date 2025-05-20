
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './styles/GlobalStyles.css'; // Added global styles
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
    // Create sitemap link for discovery
    const link = document.createElement('link');
    link.rel = 'sitemap';
    link.type = 'application/xml';
    link.href = '/sitemap.xml';
    document.head.appendChild(link);
    
    // Create HTML sitemap discovery
    const htmlSitemapLink = document.createElement('link');
    htmlSitemapLink.rel = 'alternate';
    htmlSitemapLink.type = 'text/html';
    htmlSitemapLink.href = '/html-sitemap.html';
    htmlSitemapLink.title = 'HTML Sitemap';
    document.head.appendChild(htmlSitemapLink);
    
    // Add canonical link for homepage
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://www.wrappingchicago.com' + window.location.pathname;
    document.head.appendChild(canonicalLink);
    
    // Add structured data for website
    const structuredData = document.createElement('script');
    structuredData.type = 'application/ld+json';
    structuredData.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.wrappingchicago.com/",
      "name": "Wrapping Chicago - Vehicle Wrap Services",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.wrappingchicago.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    });
    document.head.appendChild(structuredData);
    
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(htmlSitemapLink);
      document.head.removeChild(canonicalLink);
      document.head.removeChild(structuredData);
    };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleTagManager containerId="GTM-XXXXXXX" />
        <GoogleAnalytics measurementId="G-ZTLS3EEGE7" />
        <GoogleSearchVerification />
        <ScrollToTop />
        
        {/* Skip link for accessibility and SEO best practices */}
        <a href="#main-content" className="skip-link">Skip to main content</a>
        
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
          
          {/* Direct service pages - Improved priority over redirects */}
          <Route path="/car-wraps" element={<CarWrapsPage />} />
          <Route path="/truck-wraps" element={<TruckWrapsPage />} />
          <Route path="/van-wraps" element={<VanWrapsPage />} />
          <Route path="/color-change-wraps" element={<ColorChangeWrapsPage />} />
          <Route path="/luxury-exotic-wraps" element={<LuxuryExoticWrapsPage />} />
          
          {/* Service-specific redirect routes */}
          <Route path="/fleet-wraps" element={<Navigate to="/services/fleet-wraps" replace />} />
          <Route path="/commercial-graphics" element={<Navigate to="/services/commercial-graphics" replace />} />
          <Route path="/partial-wraps" element={<Navigate to="/services/partial-wraps" replace />} />
          <Route path="/protective-films" element={<Navigate to="/services/protective-films" replace />} />
          <Route path="/vehicle-lettering" element={<Navigate to="/services/vehicle-lettering" replace />} />
          <Route path="/specialty-wraps" element={<Navigate to="/services/specialty-wraps" replace />} />
          <Route path="/retail-graphics" element={<Navigate to="/services/retail-graphics" replace />} />
          
          {/* Location-specific routes - Less likely to cause crawl issues */}
          <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
          <Route path="/:citySlug" element={<CityLocationPage />} />
          
          {/* 404 catch-all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
