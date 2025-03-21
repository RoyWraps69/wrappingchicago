
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from './pages/Index';
import CityLocationPage from './pages/CityLocationPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';
import GoogleTagManager from './components/GoogleTagManager';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <GoogleTagManager containerId="GTM-XXXXXXX" /> {/* Replace with your actual GTM ID */}
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/vehicle-wraps-:citySlug-il" element={<CityLocationPage />} />
            <Route path="/:citySlug" element={<CityLocationPage />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
