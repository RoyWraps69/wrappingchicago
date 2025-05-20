
import React from 'react';
import { Helmet } from 'react-helmet-async';

const IndexHelmetTags: React.FC = () => {
  return (
    <Helmet>
      <link rel="canonical" href="https://www.wrappingchicago.com/" />
      
      {/* Add link relationships to help search engines discover key pages */}
      <link rel="next" href="https://www.wrappingchicago.com/services" />
      
      {/* Define main pages as important in site structure */}
      <link rel="prerender" href="https://www.wrappingchicago.com/about" />
      <link rel="prerender" href="https://www.wrappingchicago.com/services" />
      <link rel="prerender" href="https://www.wrappingchicago.com/gallery" />
      <link rel="prerender" href="https://www.wrappingchicago.com/contact" />
    </Helmet>
  );
};

export default IndexHelmetTags;
