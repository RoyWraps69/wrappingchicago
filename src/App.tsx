
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
import ServiceAreasPage from "./pages/ServiceAreasPage";
import FAQPage from "./pages/FAQPage";
import SitemapPage from "./pages/SitemapPage";
import LocationPage from "./pages/LocationPage";
import LocationsPage from "./pages/LocationsPage";
import ChicagoLocationPage from "./pages/ChicagoLocationPage";
import CityLocationPage from "./pages/CityLocationPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";
import CarWrapsPage from "./pages/CarWrapsPage";
import TruckWrapsPage from "./pages/TruckWrapsPage";
import VanWrapsPage from "./pages/VanWrapsPage";
import FleetWrapsPage from "./pages/FleetWrapsPage";
import ColorChangeWrapsPage from "./pages/ColorChangeWrapsPage";
import DesignerWrapsPage from "./pages/DesignerWrapsPage";
import LuxuryExoticWrapsPage from "./pages/LuxuryExoticWrapsPage";
import AIWrapIdeasPage from "./pages/AIWrapIdeasPage";
import GlossaryPage from "./pages/GlossaryPage";
import StatsPage from "./pages/StatsPage";

// Trade-specific pages
import PlumbingWrapsPage from "./pages/trades/PlumbingWrapsPage";
import HVACWrapsPage from "./pages/trades/HVACWrapsPage";
import ElectricalWrapsPage from "./pages/trades/ElectricalWrapsPage";
import MoversWrapsPage from "./pages/trades/MoversWrapsPage";
import LogisticsWrapsPage from "./pages/trades/LogisticsWrapsPage";
import DeliveryWrapsPage from "./pages/trades/DeliveryWrapsPage";

// Legal and other pages
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import ReturnPolicyPage from "./pages/ReturnPolicyPage";
import ShippingPage from "./pages/ShippingPage";
import TruckWrapsChicagoPage from "./pages/TruckWrapsChicagoPage";
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
                  {/* Homepage */}
                  <Route path="/" element={<Index />} />
                  
                  {/* Core pages - HIGH PRIORITY ROUTES FIRST */}
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/sitemap" element={<SitemapPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/service-areas" element={<ServiceAreasPage />} />
                  <Route path="/ai-wrap-ideas" element={<AIWrapIdeasPage />} />
                  <Route path="/glossary" element={<GlossaryPage />} />
                  <Route path="/stats" element={<StatsPage />} />
                  
                  {/* Legal pages */}
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms" element={<TermsOfServicePage />} />
                  <Route path="/return-policy" element={<ReturnPolicyPage />} />
                  <Route path="/shipping" element={<ShippingPage />} />
                  
                  {/* Service pages */}
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/car-wraps" element={<CarWrapsPage />} />
                  <Route path="/truck-wraps" element={<TruckWrapsPage />} />
                  <Route path="/van-wraps" element={<VanWrapsPage />} />
                  <Route path="/fleet-wraps" element={<FleetWrapsPage />} />
                  <Route path="/color-change-wraps" element={<ColorChangeWrapsPage />} />
                  <Route path="/luxury-exotic-wraps" element={<LuxuryExoticWrapsPage />} />
                  <Route path="/designer-wraps" element={<DesignerWrapsPage />} />
                  
                  {/* Trade-specific pages */}
                  <Route path="/plumbing-wraps" element={<PlumbingWrapsPage />} />
                  <Route path="/hvac-wraps" element={<HVACWrapsPage />} />
                  <Route path="/electrical-wraps" element={<ElectricalWrapsPage />} />
                  <Route path="/movers-wraps" element={<MoversWrapsPage />} />
                  <Route path="/logistics-wraps" element={<LogisticsWrapsPage />} />
                  <Route path="/delivery-wraps" element={<DeliveryWrapsPage />} />
                  
                  {/* Location pages */}
                  <Route path="/locations" element={<LocationsPage />} />
                  <Route path="/locations/:locationSlug" element={<LocationPage />} />
                  
                  {/* Specific city routes - MUST come before dynamic routes */}
                  <Route path="/vehicle-wraps-chicago-il" element={<ChicagoLocationPage />} />
                  <Route path="/chicago" element={<ChicagoLocationPage />} />
                  <Route path="/truck-wraps-chicago" element={<TruckWrapsChicagoPage />} />
                  
                  {/* Dynamic city routes - MUST be after specific routes */}
                  <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
                  
                  {/* Catch-all city route - MUST be last before 404 */}
                  <Route path="/:citySlug" element={<CityLocationPage />} />
                  
                  {/* 404 - MUST be absolute last */}
                  <Route path="*" element={<NotFound />} />
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
