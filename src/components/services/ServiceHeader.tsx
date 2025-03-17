
import React from 'react';

interface ServiceHeaderProps {
  title: string;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ title }) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-brand-navy mb-6">{title}</h1>
      <p className="text-lg mb-8">
        At Chicago Fleet Wraps, we provide premium quality vehicle wrapping services
        throughout the greater Chicago area. Our team of experienced professionals
        uses only the highest quality materials to ensure your wrap looks great and lasts.
      </p>
    </>
  );
};

export default ServiceHeader;
