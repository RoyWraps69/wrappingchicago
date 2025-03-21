
import React from 'react';

const ReviewsSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "John Smith"
        },
        "datePublished": "2022-11-15",
        "reviewBody": "Wrapping Chicago did an amazing job on our delivery vans. The quality is outstanding and the service was professional from start to finish."
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
        "datePublished": "2023-03-22",
        "reviewBody": "I couldn't be happier with the color change wrap they did on my Tesla. The attention to detail was impressive."
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
          "name": "Robert Chen"
        },
        "datePublished": "2023-09-15",
        "reviewBody": "Their AI wrap design tool saved us so much time in the design phase. The final wrap looks exactly like the generated concept!"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "87",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ReviewsSchema;
