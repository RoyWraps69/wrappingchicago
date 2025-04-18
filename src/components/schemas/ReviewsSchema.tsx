
import React from 'react';

export interface ReviewsSchemaProps {
  businessName: string;
  reviewCount: number;
  ratingValue: number;
}

const ReviewsSchema: React.FC<ReviewsSchemaProps> = ({ 
  businessName, 
  reviewCount, 
  ratingValue 
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount
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
