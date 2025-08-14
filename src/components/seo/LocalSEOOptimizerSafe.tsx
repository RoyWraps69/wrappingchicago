import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalSEOOptimizerProps {
  locationName: string;
  isMainLocation?: boolean;
}

const LocalSEOOptimizer: React.FC<LocalSEOOptimizerProps> = ({
  locationName,
  isMainLocation = false
}) => {
  console.log('LocalSEOOptimizer rendering with:', { locationName, isMainLocation });
  
  try {
    return (
      <Helmet>
        {/* Local SEO Meta Tags */}
        <meta name="geo.region" content="IL" />
        <meta name="geo.placename" content={locationName} />
        <meta name="geo.position" content="41.8781;-87.6298" />
        <meta name="ICBM" content="41.8781, -87.6298" />
        
        {/* NAP Information */}
        <meta name="business.name" content="Wrapping Chicago" />
        <meta name="business.address" content="4711 N. Lamon Ave, Chicago, IL 60630" />
        <meta name="business.phone" content="(312) 597-1286" />
        
        {/* Service Area */}
        <meta name="service-area" content={`${locationName}, Chicago metropolitan area`} />
        <meta name="coverage-area" content="Chicago, IL and surrounding suburbs" />
        
        {/* Local Keywords */}
        <meta name="local-keywords" content={`vehicle wraps ${locationName}, car wraps ${locationName}`} />
        
        {/* Business Hours */}
        <meta name="business-hours" content="Mon-Fri 9AM-5PM, Sat 10AM-3PM" />
      </Helmet>
    );
  } catch (error) {
    console.error('LocalSEOOptimizer error:', error);
    return null;
  }
};

export default LocalSEOOptimizer;