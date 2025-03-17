
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
import AIWrapIdeas from "./pages/AIWrapIdeas";
import { cities } from "./data/cities";

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
            <Route path="/ai-wrap-ideas" element={<AIWrapIdeas />} />
            
            {/* Services Routes */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/fleet-wraps" element={<ServicesPage />} />
            <Route path="/services/color-change-wraps" element={<ServicesPage />} />
            <Route path="/services/commercial-graphics" element={<ServicesPage />} />
            <Route path="/services/partial-wraps" element={<ServicesPage />} />
            <Route path="/services/protective-films" element={<ServicesPage />} />
            <Route path="/services/vehicle-lettering" element={<ServicesPage />} />
            <Route path="/services/specialty-wraps" element={<ServicesPage />} />
            <Route path="/services/retail-graphics" element={<ServicesPage />} />
            
            {/* Individual City Pages - Explicit routes for each city */}
            {cities.map(city => (
              <Route 
                key={city.slug}
                path={`/vehicle-wraps-${city.slug}-il`} 
                element={<CityLocationPage citySlug={city.slug} />} 
              />
            ))}
            
            {/* Direct city access */}
            {cities.map(city => (
              <Route 
                key={`direct-${city.slug}`}
                path={`/${city.slug}`} 
                element={<CityLocationPage citySlug={city.slug} />} 
              />
            ))}
            
            {/* Legacy routes - keep these for compatibility */}
            <Route path="/vehicle-wraps-:citySlug" element={<CityLocationPage />} />
            <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
            <Route path="/vehicle-wraps/:citySlug" element={<CityLocationPage />} />
            
            {/* Legacy redirects for any old URLs */}
            <Route path="/fleet-wraps" element={<Navigate to="/services/fleet-wraps" replace />} />
            <Route path="/color-change-wraps" element={<Navigate to="/services/color-change-wraps" replace />} />
            <Route path="/commercial-graphics" element={<Navigate to="/services/commercial-graphics" replace />} />
            <Route path="/partial-wraps" element={<Navigate to="/services/partial-wraps" replace />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
