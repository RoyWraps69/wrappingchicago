
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './styles/GlobalStyles.css'; // Enhanced global styles for SEO
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/navigation/ScrollToTop';
import GoogleTagManager from './components/GoogleTagManager';
import GoogleAnalytics from './components/GoogleAnalytics';
import GoogleSearchVerification from './components/seo/GoogleSearchVerification';
import SitemapIndex from './components/seo/SitemapIndex';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import LocationsPage from './pages/LocationsPage';
import GalleryPage from './pages/GalleryPage';
import AIWrapIdeasPage from './pages/AIWrapIdeas';
import DesignerWrapsPage from './pages/DesignerWrapsPage';
import SitemapPage from './pages/SitemapPage';
import HTMLSitemap from './components/seo/HTMLSitemap';
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
  // Help search engines discover site resources
  useEffect(() => {
    // Create and add structured data for the website
    const structuredData = document.createElement('script');
    structuredData.type = 'application/ld+json';
    structuredData.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.wrappingchicago.com/#website",
      "url": "https://www.wrappingchicago.com/",
      "name": "Wrapping Chicago - Professional Vehicle Wrap Services",
      "description": "Chicago's premier vehicle wrap company offering professional car wraps, truck wraps, van wraps, fleet wraps & commercial graphics throughout Chicago and surrounding suburbs.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.wrappingchicago.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Wrapping Chicago",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
          "width": "180",
          "height": "60"
        }
      }
    });
    document.head.appendChild(structuredData);
    
    // Add preloading for critical resources
    const preloadLinks = [
      { rel: 'preload', as: 'font', href: '/fonts/main-font.woff2', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];
    
    preloadLinks.forEach(link => {
      const preloadLink = document.createElement('link');
      Object.keys(link).forEach(attr => {
        if (attr === 'crossOrigin') {
          preloadLink.crossOrigin = link[attr];
        } else {
          preloadLink.setAttribute(attr, link[attr]);
        }
      });
      document.head.appendChild(preloadLink);
    });
    
    // Add DNS prefetching for external resources
    const dnsPrefetchLinks = [
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://maps.googleapis.com'
    ];
    
    dnsPrefetchLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = href;
      document.head.appendChild(link);
    });
    
    // Clean up function
    return () => {
      document.head.removeChild(structuredData);
      // Cleanup other dynamically added elements if needed
    };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleTagManager containerId="GTM-XXXXXXX" />
        <GoogleAnalytics measurementId="G-ZTLS3EEGE7" />
        <GoogleSearchVerification />
        <SitemapIndex /> {/* Global sitemap references */}
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
          
          {/* Sitemap routes - both dynamic and static HTML */}
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/html-sitemap" element={<HTMLSitemap />} />
          <Route path="/html-sitemap.html" element={<Navigate to="/html-sitemap" replace />} />
          
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
          
          {/* Location-specific routes */}
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
