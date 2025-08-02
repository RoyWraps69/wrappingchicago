import React from 'react';
import { useSchemaDeduplicator } from '@/components/seo/SchemaDeduplicator';

interface WebPageSchemaProps {
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  pageTitle = "Chicago Vehicle Wraps - Professional Car, Truck & Van Wrapping Services",
  pageDescription = "Chicago's premier vehicle wrap specialists offering professional installation for cars, trucks, vans, and commercial fleets. Expert craftsmanship, premium materials, competitive pricing.",
  pageUrl = "https://www.wrappingchicago.com",
  pageType = 'WebPage',
  breadcrumbs = [
    { name: "Home", url: "https://www.wrappingchicago.com" }
  ]
}) => {
  const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
  
  if (!canRenderSchema('WebPage', 'DedupWebPageSchema')) {
    return null;
  }
  
  registerSchema('WebPage', 'DedupWebPageSchema');

  const schema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${pageUrl}/#webpage`,
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.wrappingchicago.com/#website"
    },
    "about": {
      "@type": "LocalBusiness",
      "@id": "https://www.wrappingchicago.com/#organization"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.wrappingchicago.com/lovable-uploads/99d82949-5568-4a29-8a3a-72ff2ee6836e.png",
      "description": "Chicago vehicle wrap specialists showcasing professional installation services"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".speakable", "h1", "h2"]
    },
    "datePublished": "2024-01-01T00:00:00-06:00",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebPageSchema;