
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
import CommercialGraphicsPage from "./pages/CommercialGraphicsPage";
import ProtectiveFilmsPage from "./pages/ProtectiveFilmsPage";
import VehicleLetteringPage from "./pages/VehicleLetteringPage";
import SpecialtyWrapsPage from "./pages/SpecialtyWrapsPage";
import RetailGraphicsPage from "./pages/RetailGraphicsPage";
import PartialWrapsPage from "./pages/PartialWrapsPage";
import AIWrapIdeasPage from "./pages/AIWrapIdeasPage";
import GlossaryPage from "./pages/GlossaryPage";
import StatsPage from "./pages/StatsPage";

// New core pages
import TestimonialsPage from "./pages/TestimonialsPage";
import IndustriesPage from "./pages/IndustriesPage";
// New tool pages
import InstantQuoteCalculatorPage from "./pages/tools/InstantQuoteCalculatorPage";
import AppointmentSchedulerPage from "./pages/tools/AppointmentSchedulerPage";
// Blog articles
import VehicleWrapTrendsArticle from "./pages/blog/VehicleWrapTrendsArticle";
import VehicleWrapROIArticle from "./pages/blog/VehicleWrapROIArticle";

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
import ScrollToTop from './components/navigation/ScrollToTop';
import AppWithChat from './components/AppWithChat';
import ErrorBoundary from './components/ErrorBoundary';
import GoogleAnalytics from './components/analytics/GoogleAnalytics';

const queryClient = new QueryClient();

function App() {
  console.log('App.tsx: App component rendering');
  return (
    <div style={{padding: '20px', fontSize: '24px', color: 'black'}}>
      <h1>Website Loading Test</h1>
      <p>If you can see this, React is working!</p>
    </div>
  );
}

export default App;
