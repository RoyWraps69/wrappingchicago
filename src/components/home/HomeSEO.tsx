
import React from 'react';
import { Helmet } from 'react-helmet';

const HomeSEO = () => {
  return (
    <Helmet>
      <title>Chicago Fleet Wraps | Professional Vehicle & Fleet Wrapping Services</title>
      <meta 
        name="description" 
        content="Chicago Fleet Wraps provides professional vehicle wrapping services including fleet wraps, color change wraps, and commercial graphics throughout Chicago and surrounding areas." 
      />
      <link rel="canonical" href="https://wrappingchicago.com" />
    </Helmet>
  );
};

export default HomeSEO;
