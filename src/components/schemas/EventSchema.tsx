
import React from 'react';

interface EventSchemaProps {
  city: string;
}

const EventSchema: React.FC<EventSchemaProps> = ({ city }) => {
  // Current date for reference
  const today = new Date();
  
  // Create future dates for events (1 and 2 months from now)
  const futureDate1 = new Date();
  futureDate1.setMonth(today.getMonth() + 1);
  
  const futureDate2 = new Date();
  futureDate2.setMonth(today.getMonth() + 2);
  
  // Format dates to ISO string and trim time part
  const formatDate = (date: Date) => date.toISOString().split('T')[0];
  
  // Create two upcoming events schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    "name": "Vehicle Wrap Workshop Series",
    "description": `Learn about vehicle wrap options, design considerations, and maintenance tips at our free workshop series in ${city}.`,
    "startDate": formatDate(today),
    "endDate": formatDate(futureDate2),
    "location": {
      "@type": "Place",
      "name": "Wrapping Chicago Design Studio",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4711 N. Lamon Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60630",
        "addressCountry": "US"
      }
    },
    "image": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
    "organizer": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "url": "https://www.wrappingchicago.com"
    },
    "subEvent": [
      {
        "@type": "BusinessEvent",
        "name": "Fleet Wrap Showcase",
        "description": `Join us for a showcase of innovative fleet wrap designs and learn how vehicle wraps can boost your business visibility in ${city}.`,
        "startDate": `${formatDate(futureDate1)}T10:00:00-05:00`,
        "endDate": `${formatDate(futureDate1)}T12:00:00-05:00`,
        "location": {
          "@type": "Place",
          "name": "Wrapping Chicago Design Studio",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4711 N. Lamon Ave",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60630",
            "addressCountry": "US"
          }
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": formatDate(today)
        },
        "performer": {
          "@type": "Person",
          "name": "Roy, Design Director"
        }
      },
      {
        "@type": "BusinessEvent",
        "name": "Vehicle Wrap Materials Workshop",
        "description": `Hands-on workshop exploring different vehicle wrap materials, finishes, and durability factors for ${city} climate conditions.`,
        "startDate": `${formatDate(futureDate2)}T14:00:00-05:00`,
        "endDate": `${formatDate(futureDate2)}T16:00:00-05:00`,
        "location": {
          "@type": "Place",
          "name": "Wrapping Chicago Design Studio",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4711 N. Lamon Ave",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60630",
            "addressCountry": "US"
          }
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": formatDate(today)
        },
        "performer": {
          "@type": "Person",
          "name": "Vehicle Wrap Installation Team"
        }
      }
    ],
    "potentialAction": {
      "@type": "RegisterAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.wrappingchicago.com/events-registration",
        "inLanguage": "en-US"
      },
      "result": {
        "@type": "Reservation",
        "name": "Workshop Registration"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default EventSchema;
