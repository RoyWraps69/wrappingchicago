
import React from 'react';
import { Helmet } from 'react-helmet-async';

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
  lastModified?: string;
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
  lastModified,
}) => {
  const currentYear = new Date().getFullYear();
  const formattedTitle = title.includes(currentYear.toString()) ? title : `${title} | ${currentYear}`;
  const domain = "https://wrappingchicago.com";
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {lastModified && <meta name="last-modified" content={lastModified} />}
      
      {/* Performance optimizations */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <link rel="shortcut icon" href="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <meta name="msapplication-TileImage" content="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" />
      <meta name="msapplication-TileColor" content="#11172D" />
      <meta name="theme-color" content="#11172D" />
      
      {/* Robots Meta Tags */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
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
      <meta name="business:contact_data:website" content={domain} />
      
      {/* Mobile optimization */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
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
