
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIWrapIdeasSEO = () => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <Helmet>
      <title>{`AI Wrap Ideas in Chicago IL | Wrapping Chicago`}</title>
      <meta 
        name="description" 
        content="Get AI wrap ideas in Chicago IL services to help generate creative vehicle concepts. Inspire unique designs, then let our experts bring them to life in vinyl." 
      />
      <meta name="keywords" content="AI wrap ideas Chicago, AI vehicle wrap design, creative wrap concepts, vehicle wrap inspiration, custom wrap ideas, AI design Chicago" />
      <link rel="canonical" href={`${domain}/ai-wrap-ideas`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={`AI Wrap Ideas in Chicago IL | Wrapping Chicago`} />
      <meta property="og:description" content="Get AI wrap ideas in Chicago IL services to help generate creative vehicle concepts. Inspire unique designs, then let our experts bring them to life in vinyl." />
      <meta property="og:url" content={`${domain}/ai-wrap-ideas`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`AI Wrap Ideas in Chicago IL | Wrapping Chicago`} />
      <meta name="twitter:description" content="Get AI wrap ideas in Chicago IL services to help generate creative vehicle concepts. Inspire unique designs, then let our experts bring them to life in vinyl." />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta name="twitter:site" content="@wrappingchicago" />
      
      {/* Additional SEO metadata */}
      <meta name="author" content="Wrapping Chicago" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="format-detection" content="telephone=yes" />
    </Helmet>
  );
};

export default AIWrapIdeasSEO;
