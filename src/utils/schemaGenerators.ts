
import { City } from '@/data/types/city';

export const generateLocalBusinessSchema = (city: City) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://wrappingchicago.com/#organization",
  "name": "Wrapping Chicago",
  "alternateName": "Chicago Vehicle Wrapping Services",
  "description": `Premium vehicle wrapping service serving ${city.name}, IL with professional design for fleet wraps, color change wraps, and commercial graphics. With over 16,000 vehicle wraps completed in our 20 years of business, we've transformed vehicles into eye-catching mobile advertisements throughout Chicago and suburbs.`,
  "url": `https://wrappingchicago.com/vehicle-wraps-${city.slug}-il`,
  "telephone": "(312) 597-1286",
  "email": "roy@chicagofleetwraps.com",
  "foundingDate": "2003",
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
    "latitude": 41.8781,
    "longitude": -87.6298
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
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  // ... Add other business details
});

export const generateWebsiteSchema = (title: string, description: string, url: string, lastModified: string, keywords?: string[]) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${url}/#website`,
  "url": url,
  "name": title,
  "description": description,
  "publisher": {
    "@type": "Organization",
    "name": "Wrapping Chicago",
    // ... Add publisher details
  },
  "dateModified": lastModified,
  ...(keywords && keywords.length > 0 && { "keywords": keywords.join(", ") })
});

export const generateWebPageSchema = (
  title: string,
  description: string,
  url: string,
  lastModified: string,
  keywords?: string[],
  mainImage?: string
) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  "url": url,
  "name": title,
  "description": description,
  // ... Add webpage details
});

export const generateBreadcrumbSchema = (path: string) => {
  const pathSegments = path.split('/').filter(Boolean);
  const domain = "https://www.wrappingchicago.com";
  const breadcrumbItems = [
    {
      position: 1,
      name: "Home",
      item: domain
    }
  ];
  
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    breadcrumbItems.push({
      position: index + 2,
      name: segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('Il', 'IL'),
      item: `${domain}${currentPath}`
    });
  });
  
  return breadcrumbItems;
};
