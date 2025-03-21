
import React from 'react';

interface Review {
  author: string;
  reviewBody: string;
  reviewRating: {
    ratingValue: string;
  };
}

interface ReviewsSchemaProps {
  reviews: Review[];
}

const ReviewsSchema: React.FC<ReviewsSchemaProps> = ({ reviews }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": reviews.map((review, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.reviewRating.ratingValue,
          "bestRating": "5"
        },
        "reviewBody": review.reviewBody
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ReviewsSchema;
