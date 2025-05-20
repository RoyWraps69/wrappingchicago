
import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomeHelmetTags: React.FC = () => {
  return (
    <Helmet>
      <link rel="canonical" href="https://www.wrappingchicago.com/" />
      {/* Add a rel next to ensure Google crawls the services page */}
      <link rel="next" href="https://www.wrappingchicago.com/services" />
      {/* Add additional discovery links for key content sections */}
      <link rel="prefetch" href="/services" />
      <link rel="prefetch" href="/gallery" />
      <link rel="prefetch" href="/locations" />
      <link rel="prefetch" href="/sitemap" />
      
      {/* Add structured data for enhanced visibility */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.wrappingchicago.com/"
            }
          ]
        }
      `}</script>
    </Helmet>
  );
};

export default HomeHelmetTags;
