import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MainPageSchemaProps {
  pageType: 'homepage' | 'services' | 'about' | 'contact' | 'gallery' | 'pricing';
  title: string;
  description: string;
  url: string;
  keywords?: string[];
}

const MainPageSchema: React.FC<MainPageSchemaProps> = ({ 
  pageType, 
  title, 
  description, 
  url,
  keywords = []
}) => {
  const domain = "https://www.wrappingchicago.com";
  
  // Base organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${domain}/#organization`,
    "name": "Wrapping Chicago",
    "alternateName": ["Chicago Vehicle Wraps", "Car Wraps Chicago"],
    "description": "Professional vehicle wraps, car wraps, truck wraps, and fleet graphics serving Chicago and suburbs since 2014",
    "url": domain,
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
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
    "serviceArea": [
      {
        "@type": "City",
        "name": "Chicago",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago"
      },
      {
        "@type": "State", 
        "name": "Illinois",
        "sameAs": "https://en.wikipedia.org/wiki/Illinois"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wraps",
            "serviceType": "Vehicle Wrapping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Truck Wraps",
            "serviceType": "Commercial Vehicle Graphics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Wraps", 
            "serviceType": "Fleet Branding"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$$",
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
    "paymentAccepted": "Cash, Credit Card, Check",
    "currenciesAccepted": "USD",
    "foundingDate": "2014",
    "slogan": "Chicago's Premier Vehicle Wrap Specialists",
    "logo": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
    "image": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago", 
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago"
    ]
  };

  // Page-specific schemas
  const getPageSpecificSchema = () => {
    switch (pageType) {
      case 'homepage':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${domain}/#website`,
          "name": "Wrapping Chicago",
          "url": domain,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${domain}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          },
          "mainEntity": {
            "@id": `${domain}/#organization`
          }
        };
      
      case 'services':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Professional Vehicle Wrap Services Chicago",
          "provider": {
            "@id": `${domain}/#organization`
          },
          "serviceType": "Vehicle Wrapping",
          "description": "Complete vehicle wrap services including car wraps, truck wraps, van wraps, and fleet graphics in Chicago and surrounding areas",
          "areaServed": {
            "@type": "State",
            "name": "Illinois"
          }
        };
      
      case 'about':
        return {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@id": `${domain}/#organization`
          }
        };
      
      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@id": `${domain}/#organization`
          }
        };
      
      case 'gallery':
        return {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Vehicle Wrap Gallery - Wrapping Chicago",
          "description": "Portfolio of professional vehicle wraps, car wraps, and truck wraps completed by Chicago's premier wrap shop"
        };
      
      case 'pricing':
        return {
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          "name": "Vehicle Wrap Pricing Chicago",
          "description": "Transparent pricing for car wraps, truck wraps, and fleet graphics in Chicago"
        };
      
      default:
        return null;
    }
  };

  const pageSchema = getPageSpecificSchema();

  return (
    <Helmet>
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Page-specific Schema */}
      {pageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      )}
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": domain
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": title,
              "item": url
            }
          ]
        })}
      </script>
      
      {/* Enhanced Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
    </Helmet>
  );
};

export default MainPageSchema;