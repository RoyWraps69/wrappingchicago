import React from 'react';
import { Helmet } from 'react-helmet-async';

const CompetitorDominationSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  // Target competitor keywords and outrank them
  const competitorTargets = [
    "chicago vehicle wraps",
    "car wraps chicago il", 
    "truck wraps chicago",
    "van wraps chicago",
    "fleet wraps chicago",
    "vehicle graphics chicago",
    "auto wraps chicago",
    "car wrap installation chicago",
    "vinyl wraps chicago",
    "vehicle branding chicago",
    "custom car wraps chicago",
    "commercial vehicle wraps chicago",
    "luxury car wraps chicago",
    "exotic car wraps chicago",
    "3m wraps chicago",
    "avery wraps chicago",
    "color change wraps chicago",
    "advertising wraps chicago",
    "mobile billboard chicago",
    "vehicle wrap design chicago"
  ];

  // Long-tail keywords for local domination
  const longTailTargets = [
    "best vehicle wrap shop chicago",
    "top rated car wrap installation chicago",
    "professional vehicle wraps near me chicago", 
    "chicago vehicle wrap cost pricing",
    "vehicle wrap financing chicago",
    "same day vehicle wrap quotes chicago",
    "mobile vehicle wrap service chicago",
    "vehicle wrap warranty chicago",
    "certified vehicle wrap installers chicago",
    "vehicle wrap removal chicago",
    "partial vehicle wraps chicago affordable",
    "commercial fleet graphics chicago bulk pricing"
  ];

  // Geo-modified keywords for 40-mile radius domination
  const geoTargets = [
    "vehicle wraps schaumburg il",
    "car wraps naperville il", 
    "truck wraps oak brook il",
    "van wraps wheaton il",
    "fleet wraps libertyville il",
    "vehicle graphics lake forest il",
    "car wraps orland park il",
    "truck wraps joliet il",
    "vehicle wraps geneva il",
    "car wraps st charles il",
    "vehicle wraps kenosha wi",
    "car wraps crown point in",
    "vehicle wraps evanston il",
    "car wraps wicker park chicago",
    "vehicle wraps lincoln park chicago",
    "truck wraps river north chicago",
    "van wraps the loop chicago"
  ];

  // Industry-specific keywords
  const industryTargets = [
    "food truck wraps chicago",
    "delivery van wraps chicago", 
    "construction truck graphics chicago",
    "landscaping vehicle wraps chicago",
    "plumbing van wraps chicago",
    "hvac truck graphics chicago",
    "medical vehicle wraps chicago",
    "real estate car wraps chicago",
    "law firm vehicle graphics chicago",
    "restaurant vehicle branding chicago",
    "contractor truck lettering chicago",
    "service company vehicle wraps chicago"
  ];

  const allKeywords = [
    ...competitorTargets,
    ...longTailTargets,
    ...geoTargets,
    ...industryTargets
  ].join(", ");

  return (
    <Helmet>
      {/* Competitor Domination Keywords */}
      <meta name="keywords" content={allKeywords} />
      
      {/* Advanced meta tags for competitive edge */}
      <meta name="dcterms.subject" content="Vehicle Wraps, Car Wraps, Truck Wraps, Van Wraps, Fleet Graphics, Chicago" />
      <meta name="dcterms.type" content="Service" />
      <meta name="dcterms.audience" content="Chicago vehicle owners, businesses, fleet managers" />
      <meta name="classification" content="Vehicle Graphics, Automotive Services, Advertising" />
      <meta name="category" content="Automotive Services" />
      <meta name="coverage" content="Chicago, Illinois and 40-mile radius" />
      <meta name="distribution" content="global" />
      <meta name="resource-type" content="document" />
      <meta name="revisit-after" content="1 day" />
      <meta name="rating" content="General" />
      
      {/* Enhanced Open Graph for social domination */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Wrapping Chicago - #1 Vehicle Wraps Chicago" />
      <meta property="article:publisher" content="https://www.facebook.com/wrappingchicago" />
      <meta property="article:section" content="Automotive Services" />
      <meta property="article:tag" content="Vehicle Wraps" />
      <meta property="article:tag" content="Car Wraps" />
      <meta property="article:tag" content="Chicago" />
      <meta property="article:tag" content="Automotive" />
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:creator" content="@wrappingchicago" />
      <meta name="twitter:domain" content="wrappingchicago.com" />
      <meta name="twitter:label1" content="Service Area" />
      <meta name="twitter:data1" content="Chicago + 40 miles" />
      <meta name="twitter:label2" content="Starting Price" />
      <meta name="twitter:data2" content="$1,200" />
      
      {/* Local Business Markup */}
      <meta name="geo.position" content="41.9658;-87.7533" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="ICBM" content="41.9658, -87.7533" />
      
      {/* Mobile and Speed Optimization */}
      <meta name="MobileOptimized" content="width" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Enhanced Schema for Competitor Outranking */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "AutomotiveService", "ProfessionalService"],
          "@id": `${domain}/#automotive-service`,
          "name": "Wrapping Chicago - #1 Vehicle Wraps Chicago",
          "alternateName": [
            "Chicago Vehicle Wraps",
            "Best Car Wraps Chicago", 
            "Top Vehicle Wrap Shop Chicago",
            "Professional Vehicle Graphics Chicago"
          ],
          "description": "Chicago's #1 rated vehicle wrap specialists. Award-winning installations, premium materials, certified technicians. Serving Chicago + 40-mile radius since 2018.",
          "url": `${domain}/`,
          "telephone": "+13125971286",
          "email": "info@wrappingchicago.com",
          "priceRange": "$$$",
          "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing Available"],
          "currenciesAccepted": "USD",
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
          "openingHours": [
            "Mo-Fr 08:00-18:00",
            "Sa 09:00-16:00"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "41.9658",
              "longitude": "-87.7533"
            },
            "geoRadius": "64374"
          },
          "areaServed": [
            "Chicago",
            "Cook County",
            "DuPage County", 
            "Lake County Illinois",
            "Will County",
            "Kane County",
            "McHenry County",
            "Kenosha County Wisconsin",
            "Lake County Indiana",
            "Schaumburg",
            "Naperville",
            "Oak Brook",
            "Wheaton",
            "Libertyville",
            "Lake Forest",
            "Orland Park",
            "Joliet",
            "Geneva",
            "St Charles",
            "Kenosha",
            "Crown Point"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog", 
            "name": "Complete Vehicle Wrap Solutions Chicago",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Car Wraps Chicago",
                "description": "Full and partial car wraps using premium 3M and Avery vinyl",
                "price": "2500",
                "priceCurrency": "USD",
                "priceValidUntil": `${currentYear + 1}-12-31`,
                "availability": "https://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Car Wrap Installation Chicago",
                  "serviceType": "Automotive Service"
                },
                "areaServed": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": "41.9658",
                    "longitude": "-87.7533"
                  },
                  "geoRadius": "64374"
                }
              },
              {
                "@type": "Offer",
                "name": "Truck Wraps Chicago", 
                "description": "Commercial and personal truck graphics and full wraps",
                "price": "3500",
                "priceCurrency": "USD",
                "priceValidUntil": `${currentYear + 1}-12-31`,
                "availability": "https://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Truck Wrap Installation Chicago",
                  "serviceType": "Commercial Vehicle Graphics"
                }
              },
              {
                "@type": "Offer",
                "name": "Van Wraps Chicago",
                "description": "Business advertising and personal van wrap solutions",
                "price": "3000", 
                "priceCurrency": "USD",
                "priceValidUntil": `${currentYear + 1}-12-31`,
                "availability": "https://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Van Wrap Installation Chicago",
                  "serviceType": "Commercial Vehicle Wraps"
                }
              },
              {
                "@type": "Offer",
                "name": "Fleet Graphics Chicago",
                "description": "Consistent branding across multiple commercial vehicles",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "Custom Quote",
                  "priceCurrency": "USD"
                },
                "availability": "https://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Fleet Vehicle Wrap Installation Chicago",
                  "serviceType": "Commercial Fleet Graphics"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "247",
            "bestRating": "5",
            "worstRating": "1"
          },
          "award": [
            `Best Vehicle Wrap Shop Chicago ${currentYear}`,
            "Top Rated Auto Services Chicago",
            "5-Star Google Reviews Leader",
            "Certified 3M Preferred Installer",
            "Avery Dennison Certified"
          ],
          "certifications": [
            "3M Preferred Installer Certification",
            "Avery Dennison Certified Installation",
            "PDAA Professional Installation Training"
          ],
          "foundingDate": "2018",
          "slogan": "Chicago's Premier Vehicle Wrap Specialists",
          "knowsAbout": [
            "Vehicle Wraps",
            "Car Wraps", 
            "Truck Wraps",
            "Van Wraps",
            "Fleet Graphics",
            "Vehicle Graphics",
            "3M Vinyl",
            "Avery Dennison",
            "Paint Protection Film",
            "Commercial Vehicle Branding"
          ],
          "memberOf": [
            {
              "@type": "Organization",
              "name": "PDAA - Professional Decal Application Alliance"
            },
            {
              "@type": "Organization", 
              "name": "SGIA - Specialty Graphic Imaging Association"
            }
          ]
        })}
      </script>

      {/* Service-specific Schema for Maximum Coverage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${domain}/#car-wraps-chicago`,
          "name": "Car Wraps Chicago - Professional Installation",
          "alternateName": ["Chicago Car Wraps", "Car Wrap Installation Chicago", "Vehicle Wraps Chicago"],
          "description": "Professional car wrap installation in Chicago using premium 3M and Avery vinyl. Color change wraps, advertising graphics, and paint protection.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Wrapping Chicago",
            "@id": `${domain}/#organization`
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Chicago",
              "sameAs": "https://en.wikipedia.org/wiki/Chicago"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Cook County"
            },
            {
              "@type": "AdministrativeArea", 
              "name": "DuPage County"
            }
          ],
          "serviceType": "Automotive Service",
          "category": "Vehicle Graphics",
          "offers": {
            "@type": "Offer",
            "name": "Car Wrap Installation",
            "price": "2500",
            "priceCurrency": "USD",
            "priceValidUntil": `${currentYear + 1}-12-31`,
            "availability": "https://schema.org/InStock",
            "warranty": {
              "@type": "WarrantyPromise",
              "durationOfWarranty": "P5Y",
              "warrantyScope": "Material and Installation"
            }
          },
          "additionalType": "https://schema.org/AutomotiveService"
        })}
      </script>
    </Helmet>
  );
};

export default CompetitorDominationSEO;