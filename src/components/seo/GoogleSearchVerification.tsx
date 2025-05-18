
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GoogleSearchVerificationProps {
  verificationCode?: string;
}

const GoogleSearchVerification: React.FC<GoogleSearchVerificationProps> = ({ 
  verificationCode = "gQnkHgsJ2bOPDWFClspUxA6EZsE-XWnLasqxsqSESvg" // Default verification code
}) => {
  return (
    <Helmet>
      <meta name="google-site-verification" content={verificationCode} />
    </Helmet>
  );
};

export default GoogleSearchVerification;
