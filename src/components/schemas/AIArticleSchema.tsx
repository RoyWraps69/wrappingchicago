
import React from 'react';

const AIArticleSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How AI is Revolutionizing Vehicle Wrap Design in Chicago",
    "description": "Learn how artificial intelligence is transforming the vehicle wrap industry by enabling instant custom design generation and visualization.",
    "image": "/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png",
    "datePublished": "2023-08-15T08:00:00+08:00",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Chicago Fleet Wraps",
      "url": "https://chicagofleetwraps.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chicago Fleet Wraps",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chicagofleetwraps.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://chicagofleetwraps.com/ai-wrap-ideas"
    },
    "keywords": "AI vehicle wrap design, artificial intelligence wrap generator, vehicle wrap AI, Chicago fleet wraps"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default AIArticleSchema;
