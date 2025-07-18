
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
import ChicagoLocationPage from "./pages/locations/ChicagoLocationPage";
import EvanstonLocationPage from "./pages/locations/EvanstonLocationPage";
import NapervilleLocationPage from "./pages/locations/NapervilleLocationPage";
import SchaumburgLocationPage from "./pages/locations/SchaumburgLocationPage";
import SkokieLocationPage from "./pages/locations/SkokieLocationPage";
import ArlingtonHeightsLocationPage from "./pages/locations/ArlingtonHeightsLocationPage";
import PalatineLocationPage from "./pages/locations/PalatineLocationPage";
import WaukeganLocationPage from "./pages/locations/WaukeganLocationPage";
import DesPlainesLocationPage from "./pages/locations/DesPlainesLocationPage";
import ElginLocationPage from "./pages/locations/ElginLocationPage";
import HoffmanEstatesLocationPage from "./pages/locations/HoffmanEstatesLocationPage";
import McLeanCountyLocationPage from "./pages/locations/McLeanCountyLocationPage";
import OakParkLocationPage from "./pages/locations/OakParkLocationPage";
import AuroraLocationPage from "./pages/locations/AuroraLocationPage";
import JolietLocationPage from "./pages/locations/JolietLocationPage";
import CiceroLocationPage from "./pages/locations/CiceroLocationPage";
import BerwynLocationPage from "./pages/locations/BerwynLocationPage";
import WheatonLocationPage from "./pages/locations/WheatonLocationPage";
import DownersGroveLocationPage from "./pages/locations/DownersGroveLocationPage";
import BolingbrookLocationPage from "./pages/locations/BolingbrookLocationPage";
// New Chicago Area Location Pages
import LakeviewChicagoPage from "./pages/locations/LakeviewChicagoPage";
import LoganSquareChicagoPage from "./pages/locations/LoganSquareChicagoPage";
import AndersonvilleChicagoPage from "./pages/locations/AndersonvilleChicagoPage";
import BucktownChicagoPage from "./pages/locations/BucktownChicagoPage";
import GoldCoastChicagoPage from "./pages/locations/GoldCoastChicagoPage";
import ArlingtonHeightsILPage from "./pages/locations/ArlingtonHeightsILPage";
import OakLawnILPage from "./pages/locations/OakLawnILPage";
import TinleyParkILPage from "./pages/locations/TinleyParkILPage";
import OrlandParkILPage from "./pages/locations/OrlandParkILPage";
import PalatineILPage from "./pages/locations/PalatineILPage";
import ElmhurstILPage from "./pages/locations/ElmhurstILPage";
import LombardILPage from "./pages/locations/LombardILPage";
import GlenEllynILPage from "./pages/locations/GlenEllynILPage";
import CityLocationPage from "./pages/CityLocationPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/blog/BlogPostPage";
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
import UnifiedSEOSystem from './components/seo/UnifiedSEOSystem';
import DynamicCanonicalManager from './components/seo/DynamicCanonicalManager';
import DynamicTitleManager from './components/seo/DynamicTitleManager';
import DynamicHeadingManager from './components/seo/DynamicHeadingManager';
import EnhancedSchemaGenerator from './components/seo/EnhancedSchemaGenerator';
import DynamicMetaManager from './components/seo/DynamicMetaManager';
import InternalLinkingHub from './components/navigation/InternalLinkingHub';

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
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
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
                  <Route path="/evanston" element={<EvanstonLocationPage />} />
                  <Route path="/naperville" element={<NapervilleLocationPage />} />
                  <Route path="/schaumburg" element={<SchaumburgLocationPage />} />
                  <Route path="/skokie" element={<SkokieLocationPage />} />
                  <Route path="/arlington-heights" element={<ArlingtonHeightsLocationPage />} />
                  <Route path="/palatine" element={<PalatineLocationPage />} />
                  <Route path="/waukegan" element={<WaukeganLocationPage />} />
                  <Route path="/des-plaines" element={<DesPlainesLocationPage />} />
                  <Route path="/elgin" element={<ElginLocationPage />} />
                  <Route path="/hoffman-estates" element={<HoffmanEstatesLocationPage />} />
                  <Route path="/mclean-county" element={<McLeanCountyLocationPage />} />
          <Route path="/oak-park" element={<OakParkLocationPage />} />
          <Route path="/aurora" element={<AuroraLocationPage />} />
          <Route path="/joliet" element={<JolietLocationPage />} />
          <Route path="/cicero" element={<CiceroLocationPage />} />
          <Route path="/berwyn" element={<BerwynLocationPage />} />
          <Route path="/wheaton" element={<WheatonLocationPage />} />
          <Route path="/downers-grove" element={<DownersGroveLocationPage />} />
          <Route path="/bolingbrook" element={<BolingbrookLocationPage />} />
          <Route path="/truck-wraps-chicago" element={<TruckWrapsChicagoPage />} />
          
          {/* New Chicago Area Location Routes */}
          <Route path="/lakeview-chicago" element={<LakeviewChicagoPage />} />
          <Route path="/logan-square-chicago" element={<LoganSquareChicagoPage />} />
          <Route path="/andersonville-chicago" element={<AndersonvilleChicagoPage />} />
          <Route path="/bucktown-chicago" element={<BucktownChicagoPage />} />
          <Route path="/gold-coast-chicago" element={<GoldCoastChicagoPage />} />
          <Route path="/arlington-heights-il" element={<ArlingtonHeightsILPage />} />
          <Route path="/oak-lawn-il" element={<OakLawnILPage />} />
          <Route path="/tinley-park-il" element={<TinleyParkILPage />} />
          <Route path="/orland-park-il" element={<OrlandParkILPage />} />
          <Route path="/palatine-il" element={<PalatineILPage />} />
          <Route path="/elmhurst-il" element={<ElmhurstILPage />} />
          <Route path="/lombard-il" element={<LombardILPage />} />
          <Route path="/glen-ellyn-il" element={<GlenEllynILPage />} />
                  
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
            {/* Dynamic SEO Components */}
            <DynamicTitleManager />
            <DynamicMetaManager />
            <DynamicCanonicalManager />
            <DynamicHeadingManager />
            <EnhancedSchemaGenerator />
            <UnifiedSEOSystem />
            <InternalLinkingHub />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
