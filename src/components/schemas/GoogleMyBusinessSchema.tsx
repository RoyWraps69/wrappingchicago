import React from 'react';

const GoogleMyBusinessSchema: React.FC = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.wrappingchicago.com/#localbusiness",
    "name": "Wrapping Chicago",
    "alternateName": ["Chicago Fleet Wraps", "Wrapping Chicago Vehicle Graphics"],
    "description": "Chicago's premier vehicle wrap company providing professional car wraps, truck wraps, van wraps, and commercial fleet graphics. Serving Chicago and surrounding suburbs with 3M and Avery vinyl installations.",
    "url": "https://www.wrappingchicago.com",
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
    "image": [
      "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
      "width": 180,
      "height": 60
    },
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
      "latitude": 41.9658,
      "longitude": -87.7533
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "customer service",
        "areaServed": ["Chicago", "Evanston", "Skokie", "Des Plaines", "Arlington Heights"],
        "availableLanguage": ["English", "Spanish"],
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "sales",
        "areaServed": "Chicago Metropolitan Area",
        "availableLanguage": ["English", "Spanish"]
      }
    ],
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
        "name": "Skokie", 
        "sameAs": "https://en.wikipedia.org/wiki/Skokie,_Illinois"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.9658,
        "longitude": -87.7533
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Wire Transfer"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wraps",
            "description": "Full and partial car wrap installation"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Truck Wraps",
            "description": "Commercial truck wrap and graphics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Fleet Wraps",
            "description": "Multi-vehicle fleet branding solutions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "187",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mike Rodriguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Absolutely incredible work on my delivery truck! The design team understood my vision perfectly and the installation was flawless. Driving through downtown Chicago, I get compliments everywhere I go."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "Sarah Chen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Best decision I made for my catering business. The wrap looks professional and has already brought in new customers. The team at Wrapping Chicago is top-notch!"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago", 
      "https://www.linkedin.com/company/wrappingchicago",
      "https://www.yelp.com/biz/wrapping-chicago",
      "https://www.google.com/maps/place/Wrapping+Chicago"
    ],
    "founder": {
      "@type": "Person",
      "name": "Roy Johnson",
      "jobTitle": "Owner & Master Installer"
    },
    "knowsAbout": [
      "Vehicle Wraps",
      "3M Vinyl",
      "Avery Dennison",
      "Commercial Graphics", 
      "Fleet Branding",
      "Color Change Wraps"
    ],
    "slogan": "Chicago's Premier Vehicle Wrap Experts"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  );
};

export default GoogleMyBusinessSchema;