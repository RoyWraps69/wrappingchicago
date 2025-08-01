import React from 'react';

const EntityKnowledgeGraph: React.FC = () => {
  const entitySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.wrappingchicago.com/#organization",
        "name": "Wrapping Chicago",
        "url": "https://www.wrappingchicago.com",
        "sameAs": [
          "https://en.wikipedia.org/wiki/Vehicle_wrap",
          "https://www.facebook.com/wrappingchicago",
          "https://www.instagram.com/wrappingchicago",
          "https://www.linkedin.com/company/wrappingchicago"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
        },
        "description": "Chicago's premier vehicle wrap company specializing in 3M and Avery vinyl installations",
        "founder": {
          "@type": "Person",
          "name": "Roy Johnson",
          "jobTitle": "Master Installer",
          "knowsAbout": [
            "3M Vinyl Installation",
            "Avery Dennison Wraps", 
            "Commercial Fleet Graphics",
            "Vehicle Wrap Design"
          ]
        },
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vehicle Wraps",
              "category": "Automotive Services",
              "serviceType": "Vehicle Graphics Installation"
            }
          }
        ],
        "knowsAbout": [
          {
            "@type": "Thing",
            "name": "3M Vinyl",
            "sameAs": "https://en.wikipedia.org/wiki/3M"
          },
          {
            "@type": "Thing",
            "name": "Avery Dennison",
            "sameAs": "https://en.wikipedia.org/wiki/Avery_Dennison"
          },
          {
            "@type": "Thing",
            "name": "Vehicle Wrap",
            "sameAs": "https://en.wikipedia.org/wiki/Vehicle_wrap"
          },
          {
            "@type": "Thing",
            "name": "Chicago",
            "sameAs": "https://en.wikipedia.org/wiki/Chicago"
          }
        ]
      },
      {
        "@type": "Place",
        "@id": "https://www.wrappingchicago.com/#place",
        "name": "Chicago, Illinois",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.8781,
          "longitude": -87.6298
        },
        "containedInPlace": {
          "@type": "State",
          "name": "Illinois",
          "sameAs": "https://en.wikipedia.org/wiki/Illinois"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.wrappingchicago.com/#service",
        "name": "Vehicle Wrap Installation",
        "description": "Professional vehicle wrap installation using premium 3M and Avery materials",
        "provider": {
          "@id": "https://www.wrappingchicago.com/#organization"
        },
        "areaServed": {
          "@id": "https://www.wrappingchicago.com/#place"
        },
        "category": [
          "Automotive Services",
          "Commercial Graphics",
          "Advertising Services"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Vehicle Wrap Services",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Car Wraps",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full Car Wrap",
                    "description": "Complete vehicle color change or advertising wrap"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Partial Car Wrap",
                    "description": "Strategic placement graphics and branding"
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.wrappingchicago.com/#website",
        "url": "https://www.wrappingchicago.com",
        "name": "Wrapping Chicago - Vehicle Wrap Services",
        "publisher": {
          "@id": "https://www.wrappingchicago.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.wrappingchicago.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "about": [
          {
            "@type": "Thing",
            "name": "Vehicle Wraps",
            "sameAs": "https://en.wikipedia.org/wiki/Vehicle_wrap"
          },
          {
            "@type": "Thing", 
            "name": "Commercial Graphics",
            "description": "Business vehicle branding and advertising"
          }
        ]
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.wrappingchicago.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Vehicle Wrap Services",
        "item": "https://www.wrappingchicago.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Chicago",
        "item": "https://www.wrappingchicago.com/chicago"
      }
    ]
  };

  return (
    <>
      {/* Entity Knowledge Graph Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Wikipedia and Authority Links */}
      <div className="hidden" itemScope itemType="https://schema.org/Organization">
        <link itemProp="sameAs" href="https://en.wikipedia.org/wiki/Vehicle_wrap" />
        <link itemProp="sameAs" href="https://en.wikipedia.org/wiki/Chicago" />
        <link itemProp="sameAs" href="https://en.wikipedia.org/wiki/3M" />
        <link itemProp="sameAs" href="https://en.wikipedia.org/wiki/Avery_Dennison" />
        <meta itemProp="name" content="Wrapping Chicago" />
        <meta itemProp="description" content="Chicago's premier vehicle wrap company" />
      </div>
    </>
  );
};

export default EntityKnowledgeGraph;