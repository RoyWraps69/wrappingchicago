import React from 'react';
import { useParams } from 'react-router-dom';
import { getLocationBySlug } from '@/data/locations';
import { getLocationContent } from '@/data/locationContent';
import LuxuryLocationLayout from './layouts/LuxuryLocationLayout';
import FamilyLocationLayout from './layouts/FamilyLocationLayout';
import CreativeLocationLayout from './layouts/CreativeLocationLayout';
import LocationPageSEO from '../locations/LocationPageSEO';

const DynamicLocationPage = () => {
  const { locationSlug } = useParams();
  
  if (!locationSlug) {
    return <div>Location not found</div>;
  }

  const location = getLocationBySlug(locationSlug);
  const content = getLocationContent(locationSlug);
  
  if (!location) {
    return <div>Location not found</div>;
  }

  // Default to basic layout if no custom content exists
  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 p-8">
        <LocationPageSEO location={location} />
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Vehicle Wraps {location.name}</h1>
          <p className="text-lg text-muted-foreground mb-8">{location.description}</p>
          <p className="text-muted-foreground">Unique content coming soon for this location.</p>
        </div>
      </div>
    );
  }

  // Render appropriate layout based on content type
  const renderLayout = () => {
    switch (content.layoutConfig.type) {
      case 'luxury-enclave':
        return <LuxuryLocationLayout location={location} content={content} />;
      case 'family-suburb':
        return <FamilyLocationLayout location={location} content={content} />;
      case 'urban-neighborhood':
        return <CreativeLocationLayout location={location} content={content} />;
      default:
        return <CreativeLocationLayout location={location} content={content} />;
    }
  };

  return (
    <>
      <LocationPageSEO location={location} />
      {renderLayout()}
    </>
  );
};

export default DynamicLocationPage;