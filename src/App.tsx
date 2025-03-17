
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LocationsPage from "./pages/LocationsPage";
import CityLocationPage from "./pages/CityLocationPage";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/locations" element={<LocationsPage />} />
            
            {/* City Routes - consolidated patterns */}
            <Route path="/vehicle-wraps-:citySlug" element={<CityLocationPage />} />
            <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
            <Route path="/vehicle-wraps-:citySlug-il/" element={<CityLocationPage />} />
            <Route path="/vehicle-wraps/:citySlug" element={<CityLocationPage />} />
            <Route path="/vehicle-wraps/:citySlug/" element={<CityLocationPage />} />
            
            {/* Services Routes */}
            <Route path="/services/fleet-wraps" element={<CityLocationPage />} />
            <Route path="/services/color-change-wraps" element={<CityLocationPage />} />
            <Route path="/services/commercial-graphics" element={<CityLocationPage />} />
            <Route path="/services/partial-wraps" element={<CityLocationPage />} />
            
            {/* Contact Route */}
            <Route path="/contact" element={<CityLocationPage />} />
            <Route path="/gallery" element={<CityLocationPage />} />
            
            {/* Exact city matches */}
            <Route path="/arlington-heights" element={<CityLocationPage />} />
            <Route path="/elgin" element={<CityLocationPage />} />
            <Route path="/naperville" element={<CityLocationPage />} />
            <Route path="/chicago" element={<CityLocationPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<CityLocationPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
