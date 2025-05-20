
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface IndexingPriorityProps {
  priority?: 'high' | 'default' | 'low';
}

/**
 * Component to help search engines prioritize important pages
 * Use on key landing pages, service pages and high-value content
 */
const IndexingPriority: React.FC<IndexingPriorityProps> = ({ priority = 'default' }) => {
  let headerValue = '';
  
  switch(priority) {
    case 'high':
      headerValue = 'max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      break;
    case 'low':
      headerValue = 'max-snippet:50, max-image-preview:standard, max-video-preview:0';
      break;
    default:
      headerValue = 'max-snippet:150, max-image-preview:large, max-video-preview:0';
  }
  
  return (
    <Helmet>
      <meta name="robots" content={`index, follow, ${headerValue}`} />
      <meta name="googlebot" content={`index, follow, ${headerValue}`} />
      <link rel="stylesheet" href="data:text/css;base64," /> {/* Force the browser to render head earlier */}
      <link rel="preconnect" href="https://www.google.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Helmet>
  );
};

export default IndexingPriority;
