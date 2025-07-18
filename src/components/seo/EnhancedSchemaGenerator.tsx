import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Enhanced Schema Markup Generator - Comprehensive structured data for every page
 * Addresses missing schema markup SEO issue
 */
const EnhancedSchemaGenerator: React.FC = () => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentYear = new Date().getFullYear();
  
  const getSchemaForRoute = (pathname: string) => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "AutomotiveService",
      "@id": `${domain}/#organization`,
      "name": "Wrapping Chicago",
      "alternateName": "Chicago Fleet Wraps",
      "url": domain,
      "logo": `${domain}/lovable-uploads/b7fa2b01-f82f-4426-8eeb-faddf57c95e9.png`,
      "image": `${domain}/lovable-uploads/b7fa2b01-f82f-4426-8eeb-faddf57c95e9.png`,
      "description": "Chicago's premier vehicle wrap company with 20+ years experience. Specializing in car wraps, truck wraps, fleet graphics, and commercial vehicle branding.",
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
        "latitude": "41.8781",
        "longitude": "-87.6298"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Chicago",
          "sameAs": "https://en.wikipedia.org/wiki/Chicago"
        },
        {
          "@type": "City", 
          "name": "Evanston",
          "sameAs": "https://en.wikipedia.org/wiki/Evanston,_Illinois"
        },
        {
          "@type": "City",
          "name": "Naperville", 
          "sameAs": "https://en.wikipedia.org/wiki/Naperville,_Illinois"
        }
      ],
      "serviceType": [
        "Vehicle Wrapping",
        "Car Wraps",
        "Truck Wraps", 
        "Fleet Graphics",
        "Commercial Vehicle Branding"
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
              "description": "Custom car wrapping services"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Truck Wraps",
              "description": "Commercial truck graphics and wrapping"
            }
          }
        ]
      },
      "openingHours": "Mo-Fr 08:00-17:00",
      "priceRange": "$$-$$$",
      "foundingDate": "2000",
      "yearsInOperation": currentYear - 2000,
      "slogan": "Chicago's Premier Vehicle Wrap Specialists"
    };

    const baseLocalBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${domain}/#localbusiness`,
      "name": "Wrapping Chicago",
      "url": domain,
      "telephone": "+13125971286",
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
        "latitude": "41.8781",
        "longitude": "-87.6298"
      },
      "openingHours": "Mo-Fr 08:00-17:00"
    };

    const baseWebPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${domain}${pathname}#webpage`,
      "url": `${domain}${pathname}`,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${domain}/#website`,
        "url": domain,
        "name": "Wrapping Chicago",
        "publisher": {
          "@id": `${domain}/#organization`
        }
      }
    };

    // Homepage schemas
    if (pathname === '/') {
      return [
        baseOrganization,
        baseLocalBusiness,
        {
          ...baseWebPage,
          "name": "Chicago Vehicle Wraps - Car & Truck Wrapping Services",
          "description": "Chicago's #1 vehicle wrap company. Professional car wraps, truck graphics, and fleet branding with 20+ years experience.",
          "mainEntity": {
            "@id": `${domain}/#organization`
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Vehicle Wrapping Services",
          "provider": {
            "@id": `${domain}/#organization`
          },
          "areaServed": "Chicago, IL",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vehicle Wrap Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Car Wraps"
                },
                "priceRange": "$2500-$5000"
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Truck Wraps"
                },
                "priceRange": "$3500-$7000"
              }
            ]
          }
        }
      ];
    }
    
    // Service page schemas
    if (pathname === '/car-wraps') {
      return [
        baseOrganization,
        {
          ...baseWebPage,
          "name": "Car Wraps Chicago - Custom Vehicle Wrapping Services",
          "description": "Professional car wrapping services in Chicago. Custom designs, color changes, and paint protection with premium materials."
        },
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Car Wrap Service",
          "description": "Professional car wrapping service with premium vinyl materials",
          "brand": {
            "@type": "Brand",
            "name": "Wrapping Chicago"
          },
          "offers": {
            "@type": "Offer",
            "price": "2500",
            "priceCurrency": "USD",
            "priceRange": "$2500-$5000",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@id": `${domain}/#organization`
            }
          },
          "category": "Vehicle Services",
          "serviceType": "Car Wrapping"
        }
      ];
    }
    
    if (pathname === '/truck-wraps') {
      return [
        baseOrganization,
        {
          ...baseWebPage,
          "name": "Truck Wraps Chicago - Commercial Vehicle Graphics",
          "description": "Professional truck wrapping and commercial vehicle graphics in Chicago. Transform your fleet into mobile billboards."
        },
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Truck Wrap Service", 
          "description": "Commercial truck wrapping service for business vehicles",
          "brand": {
            "@type": "Brand",
            "name": "Wrapping Chicago"
          },
          "offers": {
            "@type": "Offer",
            "price": "3500",
            "priceCurrency": "USD", 
            "priceRange": "$3500-$7000",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@id": `${domain}/#organization`
            }
          },
          "category": "Commercial Vehicle Services",
          "serviceType": "Truck Wrapping"
        }
      ];
    }
    
    // Location page schemas
    if (pathname.includes('chicago') || pathname.includes('evanston') || pathname.includes('naperville')) {
      const cityName = pathname.includes('chicago') ? 'Chicago' : 
                     pathname.includes('evanston') ? 'Evanston' : 'Naperville';
      
      return [
        baseOrganization,
        {
          ...baseLocalBusiness,
          "name": `Wrapping Chicago - ${cityName} Vehicle Wraps`,
          "areaServed": {
            "@type": "City",
            "name": cityName,
            "containedInPlace": "Illinois"
          }
        },
        {
          ...baseWebPage,
          "name": `Vehicle Wraps ${cityName} IL - Professional Installation`,
          "description": `Professional vehicle wrapping services in ${cityName}, Illinois. Expert installation with premium materials.`
        }
      ];
    }
    
    // Default schemas for other pages
    return [
      baseOrganization,
      {
        ...baseWebPage,
        "name": "Wrapping Chicago - Professional Vehicle Wrap Services",
        "description": "Professional vehicle wrapping services in Chicago with expert installation and premium materials."
      }
    ];
  };

  const schemas = getSchemaForRoute(location.pathname);

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </Helmet>
  );
};

export default EnhancedSchemaGenerator;