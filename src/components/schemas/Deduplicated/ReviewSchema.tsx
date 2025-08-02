import React from 'react';
import { useSchemaDeduplicator } from '@/components/seo/SchemaDeduplicator';

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  platform?: string;
}

interface ReviewSchemaProps {
  businessName?: string;
  businessUrl?: string;
  averageRating?: number;
  reviewCount?: number;
  reviews?: Review[];
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({
  businessName = "Wrapping Chicago",
  businessUrl = "https://www.wrappingchicago.com",
  averageRating = 4.9,
  reviewCount = 247,
  reviews = [
    {
      author: "Mike Thompson",
      rating: 5,
      reviewBody: "Outstanding vehicle wrap installation! The team wrapped our delivery truck with precision and the graphics look amazing. We've already gotten 3 new customers who said they found us because of our truck. Highly professional service in Chicago.",
      datePublished: "2024-11-15",
      platform: "Google Reviews"
    },
    {
      author: "Sarah Johnson", 
      rating: 5,
      reviewBody: "Best car wrap shop in Chicago! They transformed my BMW with a stunning color change wrap. The installation was flawless, took exactly 3 days as promised, and the customer service was exceptional. Worth every penny!",
      datePublished: "2024-11-10",
      platform: "Google Reviews"
    },
    {
      author: "Dave Rodriguez",
      rating: 5,
      reviewBody: "These guys wrapped our entire fleet of 8 vans and the results are incredible. Professional installation, great pricing for multiple vehicles, and now our brand is everywhere in Chicago. Highly recommend for any business!",
      datePublished: "2024-11-05", 
      platform: "Google Reviews"
    },
    {
      author: "Lisa Chen",
      rating: 5,
      reviewBody: "Amazing experience from start to finish. Free consultation was thorough, design process was collaborative, and installation was perfect. My food truck looks absolutely stunning and business has increased 40% since the wrap!",
      datePublished: "2024-10-28",
      platform: "Google Reviews"
    },
    {
      author: "Carlos Martinez",
      rating: 5,
      reviewBody: "Professional truck wrap installation for my contracting business. The wrap has held up perfectly through Chicago winters and job sites. Great investment that pays for itself in new customer calls.",
      datePublished: "2024-10-20",
      platform: "Google Reviews"
    }
  ]
}) => {
  const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
  
  if (!canRenderSchema('Review', 'DedupReviewSchema')) {
    return null;
  }
  
  registerSchema('Review', 'DedupReviewSchema');

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessUrl}/#business-reviews`,
    "name": businessName,
    "url": businessUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toString(),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "@id": `${businessUrl}/#review-${review.author.toLowerCase().replace(/\s+/g, '-')}`,
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished,
      "publisher": {
        "@type": "Organization",
        "name": review.platform || "Google Reviews"
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

export default ReviewSchema;