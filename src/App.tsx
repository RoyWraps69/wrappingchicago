import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from './pages/Index';
import CityLocationPage from './pages/CityLocationPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';
import AIWrapIdeas from './pages/AIWrapIdeas';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import GoogleTagManager from './components/GoogleTagManager';
import GoogleSearchConsole from './components/seo/GoogleSearchConsole';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/navigation/ScrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

// Import new pages
import CarWrapsPage from './pages/CarWrapsPage';
import TruckWrapsPage from './pages/TruckWrapsPage';
import VanWrapsPage from './pages/VanWrapsPage';

// Create a client with optimized settings for performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <GoogleTagManager containerId="GTM-ZTLS3EEGE7" />
        <GoogleSearchConsole verificationCode="gQnkHgsJ2bOPDWFClspUxA6EZsE-XWnLasqxsqSESvg" />
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Index />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-wrap-ideas" element={<AIWrapIdeas />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Services main route */}
            <Route path="/services" element={<ServicesPage />} />
            
            {/* New dedicated service pages with full content */}
            <Route path="/services/car-wraps" element={<CarWrapsPage />} />
            <Route path="/services/truck-wraps" element={<TruckWrapsPage />} />
            <Route path="/services/van-wraps" element={<VanWrapsPage />} />
            
            {/* Other services routes under /services/ path - using ServicesPage component */}
            <Route path="/services/fleet-wraps" element={<ServicesPage />} />
            <Route path="/services/color-change-wraps" element={<ServicesPage />} />
            <Route path="/services/commercial-graphics" element={<ServicesPage />} />
            <Route path="/services/partial-wraps" element={<ServicesPage />} />
            <Route path="/services/protective-films" element={<ServicesPage />} />
            <Route path="/services/vehicle-lettering" element={<ServicesPage />} />
            <Route path="/services/specialty-wraps" element={<ServicesPage />} />
            <Route path="/services/retail-graphics" element={<ServicesPage />} />
            <Route path="/services/designer-wraps" element={<ServicesPage />} />
            <Route path="/services/luxury-exotic-wraps" element={<ServicesPage />} />
            
            {/* Direct service routes */}
            <Route path="/fleet-wraps" element={<ServicesPage />} />
            <Route path="/partial-wraps" element={<ServicesPage />} />
            <Route path="/color-change-wraps" element={<ServicesPage />} />
            <Route path="/commercial-graphics" element={<ServicesPage />} />
            <Route path="/protective-films" element={<ServicesPage />} />
            <Route path="/vehicle-lettering" element={<ServicesPage />} />
            <Route path="/specialty-wraps" element={<ServicesPage />} />
            <Route path="/retail-graphics" element={<ServicesPage />} />
            <Route path="/car-wraps" element={<CarWrapsPage />} />
            <Route path="/truck-wraps" element={<TruckWrapsPage />} />
            <Route path="/van-wraps" element={<VanWrapsPage />} />
            <Route path="/designer-wraps" element={<ServicesPage />} />
            <Route path="/luxury-exotic-wraps" element={<ServicesPage />} />
            
            {/* City location routes with various formats */}
            <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
            <Route path="/:citySlug" element={<CityLocationPage />} />
            
            {/* Add Sitemap route */}
            <Route path="/sitemap" element={<SitemapPage />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
