
import React from 'react';

interface EventSchemaProps {
  city: string;
}

const EventSchema: React.FC<EventSchemaProps> = ({ city }) => {
  const currentYear = new Date().getFullYear();
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": `Vehicle Wrap Demo Day in ${city}`,
    "startDate": nextMonth.toISOString().split('T')[0],
    "endDate": nextMonth.toISOString().split('T')[0],
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Wrapping Chicago Showroom",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4711 N. Lamon Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60630",
        "addressCountry": "US"
      }
    },
    "image": "https://www.wrappingchicago.com/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png",
    "description": `Join us for a live demonstration of professional vehicle wrapping techniques. See how we transform vehicles with premium vinyl wraps. Special discounts available for ${city} businesses.`,
    "offers": {
      "@type": "Offer",
      "name": `${city} Business Special`,
      "price": "0",
      "priceCurrency": "USD",
      "validFrom": new Date().toISOString().split('T')[0],
      "url": "https://www.wrappingchicago.com/contact",
      "availability": "https://schema.org/InStock"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "url": "https://www.wrappingchicago.com"
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
