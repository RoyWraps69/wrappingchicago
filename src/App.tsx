
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './styles/GlobalStyles.css';
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
import FleetWrapsPage from './pages/FleetWrapsPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import LiveChatWidget from './components/chat/LiveChatWidget';

function App() {
  // Help search engines discover site resources
  useEffect(() => {
    // Create and add structured data for the website
    const structuredData = document.createElement('script');
    structuredData.type = 'application/ld+json';
    structuredData.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.chicagofleetwraps.com/#website",
      "url": "https://www.chicagofleetwraps.com/",
      "name": "Chicago Fleet Wraps - Professional Vehicle Wrap Services",
      "description": "Chicago Fleet Wraps offers high-impact vehicle wraps, fleet branding, and color change services that turn vehicles into rolling billboards.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.chicagofleetwraps.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Chicago Fleet Wraps",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.chicagofleetwraps.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
          "width": "180",
          "height": "60"
        },
        "sameAs": [
          "https://www.facebook.com/ChicagoFleetWraps",
          "https://www.instagram.com/chicagofleetwraps",
          "https://www.tiktok.com/@chicagofleetwraps"
        ]
      }
    });
    document.head.appendChild(structuredData);
    
    // Add preloading for critical resources
    const preloadLinks = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
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
      'https://maps.googleapis.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
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
        <SitemapIndex />
        <ScrollToTop />
        
        <a href="#main-content" className="skip-link">Skip to main content</a>
        
        <Routes>
          {/* Main navigation routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceType" element={<ServicesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/ai-wrap-ideas" element={<AIWrapIdeasPage />} />
          <Route path="/designer-wraps" element={<DesignerWrapsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
          
          {/* Sitemap routes */}
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/html-sitemap" element={<HTMLSitemap />} />
          <Route path="/html-sitemap.html" element={<Navigate to="/html-sitemap" replace />} />
          
          {/* Special city-specific routes */}
          <Route path="/truck-wraps-chicago" element={<TruckWrapsChicagoPage />} />
          
          {/* Direct service pages */}
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
          <Route path="/vehicle-wraps-chicago-il" element={<CityLocationPage />} />
          <Route path="/chicago" element={<CityLocationPage />} />
          <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
          <Route path="/:citySlug" element={<CityLocationPage />} />
          
          {/* 404 catch-all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
        {/* Add Live Chat Widget */}
        <LiveChatWidget />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
