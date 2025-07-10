
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import CarWrapsPage from "./pages/CarWrapsPage";
import TruckWrapsPage from "./pages/TruckWrapsPage";
import VanWrapsPage from "./pages/VanWrapsPage";
import FleetWrapsPage from "./pages/FleetWrapsPage";
import ColorChangeWrapsPage from "./pages/ColorChangeWrapsPage";
import LuxuryExoticWrapsPage from "./pages/LuxuryExoticWrapsPage";
import DesignerWrapsPage from "./pages/DesignerWrapsPage";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import FAQPage from "./pages/FAQPage";
import SitemapPage from "./pages/SitemapPage";
import LocationPage from "./pages/LocationPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";
import SchemaValidator from "./components/seo/SchemaValidator";
import SEOHealthChecker from "./components/seo/SEOHealthChecker";
import CoreWebVitalsOptimizer from "./components/performance/CoreWebVitalsOptimizer";
import AdvancedSEOOptimizer from './components/seo/AdvancedSEOOptimizer';
import CompetitorDominationSEO from './components/seo/CompetitorDominationSEO';
import TechnicalSEOEnhancer from './components/seo/TechnicalSEOEnhancer';
import XMLSitemapGenerator from './components/seo/XMLSitemapGenerator';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:service" element={<ServicesPage />} />
                  <Route path="/car-wraps" element={<CarWrapsPage />} />
                  <Route path="/truck-wraps" element={<TruckWrapsPage />} />
                  <Route path="/van-wraps" element={<VanWrapsPage />} />
                  <Route path="/fleet-wraps" element={<FleetWrapsPage />} />
                  <Route path="/color-change-wraps" element={<ColorChangeWrapsPage />} />
                  <Route path="/luxury-exotic-wraps" element={<LuxuryExoticWrapsPage />} />
                  <Route path="/designer-wraps" element={<DesignerWrapsPage />} />
                  <Route path="/service-areas" element={<ServiceAreasPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/sitemap" element={<SitemapPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/locations/:locationSlug" element={<LocationPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <CoreWebVitalsOptimizer />
            <SchemaValidator />
            <AdvancedSEOOptimizer />
            <CompetitorDominationSEO />
            <TechnicalSEOEnhancer />
            <XMLSitemapGenerator />
            <SEOHealthChecker />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
