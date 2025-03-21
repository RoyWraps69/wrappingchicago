
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CloudflareVerificationProps {
  verificationCode: string;
}

const CloudflareVerification: React.FC<CloudflareVerificationProps> = ({ verificationCode }) => {
  return (
    <Helmet>
      <meta name="cf-verification" content={verificationCode} />
    </Helmet>
  );
};

export default CloudflareVerification;
