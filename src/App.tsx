
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from './pages/Index';
import CityLocationPage from './pages/CityLocationPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';
import AIWrapIdeas from './pages/AIWrapIdeas';
import GoogleTagManager from './components/GoogleTagManager';
import GoogleSearchConsole from './components/seo/GoogleSearchConsole';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/navigation/ScrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

// Create a client with optimized settings for performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      cacheTime: 5 * 60 * 1000, // 5 minutes
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
            <Route path="/" element={<Index />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-wrap-ideas" element={<AIWrapIdeas />} />
            
            {/* City location routes with various formats */}
            <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
            <Route path="/:citySlug" element={<CityLocationPage />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
