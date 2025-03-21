
import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData,
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      
      {/* Robots Meta Tags */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@wrappingchicago" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      
      {/* Google Business Profile */}
      <meta name="business:contact_data:street_address" content="4711 N. Lamon Ave" />
      <meta name="business:contact_data:locality" content="Chicago" />
      <meta name="business:contact_data:region" content="IL" />
      <meta name="business:contact_data:postal_code" content="60630" />
      <meta name="business:contact_data:country_name" content="USA" />
      <meta name="business:contact_data:email" content="roy@chicagofleetwraps.com" />
      <meta name="business:contact_data:phone_number" content="+13125971286" />
      <meta name="business:contact_data:website" content="https://wrappingchicago.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaTags;
