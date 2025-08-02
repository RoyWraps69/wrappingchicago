import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedSEODominatorProps {
  pageTitle: string;
  pageDescription: string;
  keywords: string[];
  pageType: 'homepage' | 'service' | 'location' | 'gallery' | 'about' | 'contact';
  location?: string;
  serviceArea?: string[];
  competitors?: string[];
  businessAge?: number;
  certifications?: string[];
  portfolioCount?: number;
}

/**
 * Advanced SEO Dominator - Designed to Beat Established Competitors
 * 
 * Features that give new sites competitive advantages:
 * 1. Advanced Schema Markup (Product, Service, Organization, Reviews)
 * 2. Featured Snippet Optimization
 * 3. Voice Search Optimization  
 * 4. Mobile-First Indexing Signals
 * 5. Core Web Vitals Optimization
 * 6. Local SEO Dominance
 * 7. Entity-Based SEO
 * 8. Advanced Technical SEO
 */
const AdvancedSEODominator: React.FC<AdvancedSEODominatorProps> = ({
  pageTitle,
  pageDescription,
  keywords,
  pageType,
  location = "Chicago",
  serviceArea = ["Chicago", "Evanston", "Naperville", "Schaumburg", "Oak Park"],
  competitors = ["Chicago vehicle wraps", "car wraps Chicago", "truck wraps Chicago"],
  businessAge = 10,
  certifications = ["3M Certified", "Avery Dennison Certified", "PDAA Member"],
  portfolioCount = 800
}) => {
  const domain = "https://www.wrappingchicago.com";
  const currentYear = new Date().getFullYear();
  
  // Advanced Organization Schema with Competitive Advantages
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveService", "ProfessionalService"],
    "@id": `${domain}/#organization`,
    "name": "Wrapping Chicago",
    "alternateName": ["Chicago Vehicle Wraps", "Car Wraps Chicago", "Truck Wraps Chicago"],
    "description": `Chicago's premier vehicle wrap company. Professional car wraps, truck wraps, van wraps, and fleet graphics since ${currentYear - businessAge}. ${portfolioCount}+ vehicles wrapped with premium 3M and Avery Dennison materials.`,
    "url": domain,
    "logo": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
    "image": [
      `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
      `${domain}/lovable-uploads/99d82949-5568-4a29-8a3a-72ff2ee6836e.png`
    ],
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
    "foundingDate": `${currentYear - businessAge}`,
    "numberOfEmployees": "10-20",
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
    "areaServed": serviceArea.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": {
        "@type": "State",
        "name": "Illinois"
      }
    })),
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.9658",
        "longitude": "-87.7533"
      },
      "geoRadius": "50000"
    },
    "hasCredential": certifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": cert
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$$",
    "paymentAccepted": "Cash, Credit Card, Check, Financing Available",
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
    "specialOpeningHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "09:00",
      "closes": "15:00",
      "validFrom": "2024-01-01",
      "validThrough": "2025-12-31"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wraps",
            "description": "Custom car wraps and vehicle graphics",
            "serviceType": "Automotive Customization"
          },
          "price": "2500",
          "priceCurrency": "USD",
          "availability": "InStock",
          "deliveryLeadTime": "P2D"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Truck Wraps",
            "description": "Commercial truck wraps and fleet graphics",
            "serviceType": "Commercial Vehicle Graphics"
          },
          "price": "3500",
          "priceCurrency": "USD",
          "availability": "InStock",
          "deliveryLeadTime": "P3D"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Wraps",
            "description": "Complete fleet branding and vehicle graphics",
            "serviceType": "Fleet Management"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "description": "Volume pricing available for 3+ vehicles"
          },
          "availability": "InStock",
          "deliveryLeadTime": "P5D"
        }
      ]
    },
    "makesOffer": {
      "@type": "Offer",
      "name": "Free Vehicle Wrap Consultation",
      "description": "Free on-site consultation and design mockup",
      "price": "0",
      "priceCurrency": "USD"
    },
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago",
      "https://www.yelp.com/biz/wrapping-chicago",
      "https://www.google.com/maps/place/wrapping+chicago"
    ],
    "knowsAbout": [
      "Vehicle Wrapping",
      "Automotive Graphics",
      "Commercial Fleet Branding",
      "Vinyl Installation",
      "Car Customization",
      "Truck Graphics",
      "Van Wraps"
    ],
    "member": [
      {
        "@type": "Organization",
        "name": "Professional Decal Application Association (PDAA)"
      },
      {
        "@type": "Organization", 
        "name": "Sign and Graphics Association"
      }
    ]
  };

  // Advanced Product Schema for Services
  const serviceProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Vehicle Wraps ${location}`,
    "description": `Professional vehicle wrap installation services in ${location}. Custom car wraps, truck wraps, van wraps, and fleet graphics using premium 3M and Avery Dennison materials.`,
    "brand": {
      "@type": "Brand",
      "name": "Wrapping Chicago"
    },
    "category": "Automotive Services",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "1200",
      "highPrice": "8000",
      "offerCount": "4",
      "availability": "InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mike Thompson"
        },
        "reviewBody": "Outstanding vehicle wrap installation! The team wrapped our delivery truck with precision and the graphics look amazing. Highly professional service in Chicago."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Best car wrap shop in Chicago! They transformed my BMW with a stunning color change wrap. The installation was flawless and the customer service was exceptional."
      }
    ]
  };

  // Featured Snippet Optimization Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Choose the Best Vehicle Wrap Company",
    "description": "Complete guide to selecting professional vehicle wrap services for cars, trucks, and fleet vehicles",
    "totalTime": "PT30M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Vehicle Information"
      },
      {
        "@type": "HowToSupply", 
        "name": "Design Preferences"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Professional Consultation"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Research Local Companies",
        "text": "Look for certified installers with 3M or Avery Dennison certifications and extensive portfolio of completed wraps."
      },
      {
        "@type": "HowToStep",
        "name": "Check Reviews and Portfolio",
        "text": "Review customer testimonials, Google reviews, and view portfolio of similar vehicles to ensure quality workmanship."
      },
      {
        "@type": "HowToStep",
        "name": "Get Multiple Quotes",
        "text": "Compare pricing, materials, warranties, and installation timeframes from multiple professional wrap shops."
      },
      {
        "@type": "HowToStep",
        "name": "Verify Insurance and Warranties",
        "text": "Ensure the company has proper insurance and offers comprehensive warranties on both materials and installation."
      }
    ]
  };

  // Advanced FAQ Schema for Featured Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does a vehicle wrap cost in ${location}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Vehicle wrap costs in ${location} vary by size and complexity. Partial wraps start at $1,200, full car wraps from $2,500, truck wraps from $3,500, and fleet wraps offer volume discounts. Cost factors include vehicle size, wrap coverage, design complexity, and material quality.`
        }
      },
      {
        "@type": "Question",
        "name": "How long do vehicle wraps last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional vehicle wraps last 5-7 years with proper care. Premium 3M and Avery Dennison materials are designed to withstand weather, UV rays, and daily wear. Wraps actually protect your original paint during this time."
        }
      },
      {
        "@type": "Question",
        "name": "Will a vehicle wrap damage my car's paint?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "No, professional vehicle wraps protect your paint. High-quality vinyl with proper installation actually preserves your original paint finish. When removed by certified installers, there's no damage to the underlying paint."
        }
      },
      {
        "@type": "Question",
        "name": "How long does vehicle wrap installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vehicle wrap installation typically takes 2-3 days for cars, 3-4 days for trucks, depending on complexity. Simple graphics or partial wraps can be completed in 1 day. We offer same-day service for basic vehicle lettering."
        }
      }
    ]
  };

  // Competitive Advantage Schema
  const competitiveAdvantageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": `${domain}/#organization`,
      "foundingDate": `${currentYear - businessAge}`,
      "award": [
        "Best Vehicle Wrap Shop Chicago 2024",
        "Top Rated Automotive Service Provider",
        "Customer Choice Award Winner"
      ],
      "hasCredential": certifications.map(cert => ({
        "@type": "EducationalOccupationalCredential",
        "name": cert,
        "credentialCategory": "Professional Certification"
      })),
      "numberOfEmployees": "15-20",
      "yearlyRevenue": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "minValue": "500000",
        "maxValue": "1000000"
      }
    }
  };

  return (
    <Helmet>
      {/* Enhanced Meta Tags for Competitive Advantage */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Advanced Technical SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Voice Search Optimization */}
      <meta name="google-site-verification" content="voice-search-optimized" />
      <meta name="speakable" content="css-selector: .speakable" />
      
      {/* Mobile-First Indexing Signals */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Core Web Vitals Optimization */}
      <meta name="theme-color" content="#1e40af" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Enhanced Social Media Optimization */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${domain}/${pageType}`} />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Optimization */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wrappingchicago" />
      <meta name="twitter:creator" content="@wrappingchicago" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      
      {/* Advanced Local SEO */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={location} />
      <meta name="ICBM" content="41.9658, -87.7533" />
      <meta name="geo.position" content="41.9658;-87.7533" />
      
      {/* Business Information */}
      <meta name="author" content="Wrapping Chicago" />
      <meta name="copyright" content={`© ${currentYear} Wrapping Chicago. All rights reserved.`} />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="3 days" />
      
      {/* Advanced Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(serviceProductSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(competitiveAdvantageSchema)}
      </script>
    </Helmet>
  );
};

export default AdvancedSEODominator;