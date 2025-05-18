
import React from 'react';
import { Helmet } from 'react-helmet-async';

const GoogleSearchVerification = () => {
  // Replace this with your actual verification code from Google Search Console
  const verificationCode = "YOUR_VERIFICATION_CODE";
  
  return (
    <Helmet>
      <meta name="google-site-verification" content={verificationCode} />
    </Helmet>
  );
};

export default GoogleSearchVerification;
