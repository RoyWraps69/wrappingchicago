import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdvancedSEOOptimizer = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      {/* Advanced Schema.org Markup for Maximum SERP Dominance */}
      
      {/* Organization Schema - Enhanced */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${domain}/#organization`,
          "name": "Wrapping Chicago",
          "alternateName": ["Chicago Vehicle Wraps", "Wrapping Chicago IL", "Chicago Car Wraps"],
          "description": "Chicago's premier vehicle wrap specialists serving the entire Chicagoland metropolitan area with custom car wraps, truck wraps, van wraps, and fleet graphics.",
          "url": `${domain}/`,
          "logo": {
            "@type": "ImageObject",
            "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
            "width": 1200,
            "height": 630
          },
          "image": {
            "@type": "ImageObject", 
            "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
            "width": 1200,
            "height": 630
          },
          "telephone": "+13125971286",
          "email": "info@wrappingchicago.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4711 N. Lamon Ave",
            "addressLocality": "Chicago",
            "addressRegion": "IL", 
            "postalCode": "60630",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.9658",
            "longitude": "-87.7533"
          },
          "foundingDate": "2018",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "15"
          },
          "priceRange": "$$$",
          "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing"],
          "currenciesAccepted": "USD",
          "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "247",
            "bestRating": "5",
            "worstRating": "1"
          },
          "sameAs": [
            "https://www.facebook.com/wrappingchicago",
            "https://www.instagram.com/wrappingchicago", 
            "https://www.youtube.com/wrappingchicago",
            "https://twitter.com/wrappingchicago"
          ]
        })}
      </script>

      {/* Local Business Schema - Multi-Location */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${domain}/#localbusiness`,
          "name": "Wrapping Chicago",
          "description": "Professional vehicle wraps serving Chicago and 40-mile radius including suburbs in Illinois, Wisconsin, and Indiana",
          "url": `${domain}/`,
          "telephone": "+13125971286",
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4711 N. Lamon Ave",
            "addressLocality": "Chicago", 
            "addressRegion": "IL",
            "postalCode": "60630",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.9658",
            "longitude": "-87.7533" 
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "41.9658",
              "longitude": "-87.7533"
            },
            "geoRadius": "64374" // 40 miles in meters
          },
          "openingHours": [
            "Mo-Fr 08:00-18:00",
            "Sa 09:00-16:00"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;