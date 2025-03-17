
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LocationsPage from "./pages/LocationsPage";
import CityLocationPage from "./pages/CityLocationPage";
import { HelmetProvider } from "react-helmet-async";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            
            {/* Services Routes */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/fleet-wraps" element={<ServicesPage />} />
            <Route path="/services/color-change-wraps" element={<ServicesPage />} />
            <Route path="/services/commercial-graphics" element={<ServicesPage />} />
            <Route path="/services/partial-wraps" element={<ServicesPage />} />
            
            {/* City Routes with standardized patterns */}
            <Route path="/vehicle-wraps-:citySlug" element={<CityLocationPage />} />
            <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
            <Route path="/vehicle-wraps-:citySlug-il/" element={<CityLocationPage />} />
            <Route path="/vehicle-wraps/:citySlug" element={<CityLocationPage />} />
            <Route path="/vehicle-wraps/:citySlug/" element={<CityLocationPage />} />
            
            {/* Direct city access */}
            <Route path="/chicago" element={<CityLocationPage />} />
            <Route path="/arlington-heights" element={<CityLocationPage />} />
            <Route path="/elgin" element={<CityLocationPage />} />
            <Route path="/naperville" element={<CityLocationPage />} />
            <Route path="/evanston" element={<CityLocationPage />} />
            <Route path="/oak-park" element={<CityLocationPage />} />
            <Route path="/schaumburg" element={<CityLocationPage />} />
            
            {/* Legacy redirects for any old URLs */}
            <Route path="/fleet-wraps" element={<Navigate to="/services/fleet-wraps" replace />} />
            <Route path="/color-change-wraps" element={<Navigate to="/services/color-change-wraps" replace />} />
            <Route path="/commercial-graphics" element={<Navigate to="/services/commercial-graphics" replace />} />
            <Route path="/partial-wraps" element={<Navigate to="/services/partial-wraps" replace />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
