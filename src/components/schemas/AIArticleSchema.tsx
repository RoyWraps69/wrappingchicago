
import React from 'react';

const AIArticleSchema = () => {
  const domain = "https://www.wrappingchicago.com";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How AI is Revolutionizing Vehicle Wrap Design in Chicago",
    "description": "Learn how artificial intelligence is transforming the vehicle wrap industry by enabling instant custom design generation and visualization.",
    "image": {
      "@type": "ImageObject",
      "url": `${domain}/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png`,
      "height": 800,
      "width": 1200,
      "caption": "AI-generated vehicle wrap design on a luxury sedan - metallic blue color change wrap example"
    },
    "datePublished": "2023-08-15T08:00:00+08:00",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "url": domain
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${domain}/ai-wrap-ideas`
    },
    "keywords": "AI vehicle wrap design, artificial intelligence wrap generator, vehicle wrap AI, Chicago fleet wraps, Wrapping Chicago"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default AIArticleSchema;
