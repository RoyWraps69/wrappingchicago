import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SERPEnhancerProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  videoUrl?: string;
  estimatedReadingTime?: number;
  lastUpdated?: string;
  authorName?: string;
  businessHours?: {
    opens: string;
    closes: string;
    days: string[];
  };
  phoneNumber?: string;
  address?: string;
  price?: {
    min: number;
    max: number;
    currency: string;
  };
}

const SERPEnhancer: React.FC<SERPEnhancerProps> = ({
  title,
  description,
  url,
  imageUrl,
  videoUrl,
  estimatedReadingTime,
  lastUpdated,
  authorName,
  businessHours,
  phoneNumber,
  address,
  price
}) => {
  const domain = "https://www.wrappingchicago.com";
  
  // Video Object Schema (if video exists)
  const videoSchema = videoUrl ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": imageUrl || `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
    "contentUrl": videoUrl,
    "uploadDate": lastUpdated || new Date().toISOString(),
    "duration": "PT5M",
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`
      }
    }
  } : null;

  // Product Schema for services
  const productSchema = price ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": title,
    "description": description,
    "image": imageUrl || `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
    "brand": {
      "@type": "Brand",
      "name": "Wrapping Chicago"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": price.currency,
      "lowPrice": price.min,
      "highPrice": price.max,
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Wrapping Chicago"
      }
    }
  } : null;

  // OpeningHours Schema
  const openingHoursSchema = businessHours ? {
    "@context": "https://schema.org",
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": businessHours.days,
    "opens": businessHours.opens,
    "closes": businessHours.closes
  } : null;

  return (
    <Helmet>
      {/* Enhanced Meta Tags for SERP Features */}
      <meta name="description" content={description.substring(0, 155)} />
      
      {/* Estimated Reading Time */}
      {estimatedReadingTime && (
        <meta name="twitter:label1" content="Reading time" />
      )}
      {estimatedReadingTime && (
        <meta name="twitter:data1" content={`${estimatedReadingTime} min read`} />
      )}
      
      {/* Last Updated */}
      {lastUpdated && (
        <meta name="article:modified_time" content={lastUpdated} />
      )}
      
      {/* Author Information */}
      {authorName && (
        <meta name="author" content={authorName} />
      )}
      
      {/* Phone Number for Rich Snippets */}
      {phoneNumber && (
        <meta name="telephone" content={phoneNumber} />
      )}
      
      {/* Address for Rich Snippets */}
      {address && (
        <meta name="address" content={address} />
      )}
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description.substring(0, 200)} />
      <meta property="og:image" content={imageUrl || `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title.substring(0, 70)} />
      <meta name="twitter:description" content={description.substring(0, 200)} />
      <meta name="twitter:image" content={imageUrl || `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@wrappingchicago" />
      <meta name="twitter:creator" content="@wrappingchicago" />
      
      {/* Video Meta Tags */}
      {videoUrl && (
        <>
          <meta property="og:video" content={videoUrl} />
          <meta property="og:video:type" content="video/mp4" />
          <meta property="og:video:width" content="1920" />
          <meta property="og:video:height" content="1080" />
          <meta name="twitter:player" content={videoUrl} />
          <meta name="twitter:player:width" content="1920" />
          <meta name="twitter:player:height" content="1080" />
        </>
      )}
      
      {/* Structured Data for Rich Snippets */}
      {videoSchema && (
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
      )}
      
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
      
      {/* Additional SERP Enhancement Tags */}
      <meta name="application-name" content="Wrapping Chicago" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      
      {/* Indexing and Crawling Optimization */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Page Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Enhanced Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Wrapping Chicago" />
      
      {/* Language and Region Targeting */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.language" content="en" />
      
      {/* Enhanced Business Information */}
      <meta name="business:contact_data:street_address" content="4711 N. Lamon Ave" />
      <meta name="business:contact_data:locality" content="Chicago" />
      <meta name="business:contact_data:region" content="IL" />
      <meta name="business:contact_data:postal_code" content="60630" />
      <meta name="business:contact_data:country_name" content="USA" />
      <meta name="business:contact_data:phone_number" content="(312) 597-1286" />
      <meta name="business:contact_data:email" content="roy@chicagofleetwraps.com" />
      
      {/* Price Information for SERP */}
      {price && (
        <>
          <meta name="price:amount" content={`${price.min}-${price.max}`} />
          <meta name="price:currency" content={price.currency} />
          <meta name="product:price:amount" content={`${price.min}`} />
          <meta name="product:price:currency" content={price.currency} />
        </>
      )}
    </Helmet>
  );
};

export default SERPEnhancer;