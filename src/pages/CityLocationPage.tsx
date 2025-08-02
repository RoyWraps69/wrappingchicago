
import React from 'react';
import { useParams } from 'react-router-dom';
import { cities, findCityBySlug } from '@/data/cities';
import TradeLocationPage from '@/components/location/TradeLocationPage';
import { SchemaDeduplicatorProvider } from '@/components/seo/SchemaDeduplicator';

const CityLocationPage = () => {
  const { citySlug } = useParams();
  
  console.log('CityLocationPage - citySlug from params:', citySlug);
  console.log('CityLocationPage - current URL path:', window.location.pathname);
  
  // Handle different URL patterns to extract city slug
  let actualCitySlug = citySlug;
  
  // If no citySlug parameter, try to extract from URL path
  if (!citySlug) {
    const path = window.location.pathname;
    if (path === '/chicago') {
      actualCitySlug = 'chicago';
    } else if (path.startsWith('/vehicle-wraps-') && path.endsWith('-il')) {
      // Extract city slug from vehicle-wraps-{city}-il pattern
      actualCitySlug = path.replace('/vehicle-wraps-', '').replace('-il', '');
    } else {
      // Default to Chicago for root path
      actualCitySlug = 'chicago';
    }
  }
  
  console.log('CityLocationPage - extracted actualCitySlug:', actualCitySlug);
  
  // Find the city data using the enhanced finder
  const currentCity = findCityBySlug(actualCitySlug);
  
  console.log('CityLocationPage - found city:', currentCity);
  
  // Fallback to Chicago if city not found
  const city = currentCity || cities.find(city => city.slug === 'chicago') || cities[0];
  
  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <SchemaDeduplicatorProvider>
      <TradeLocationPage citySlug={city.slug} businessType="general" />
    </SchemaDeduplicatorProvider>
  );
};

export default CityLocationPage;
