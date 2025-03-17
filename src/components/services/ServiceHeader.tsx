
import React from 'react';

interface ServiceHeaderProps {
  title: string;
  showImages?: boolean;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ title, showImages = false }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-brand-navy mb-6">{title}</h1>
      <p className="text-lg mb-6">
        At Chicago Fleet Wraps, we provide premium quality vehicle wrapping services
        throughout the greater Chicago area. Our team of experienced professionals
        uses only the highest quality materials to ensure your wrap looks great and lasts.
      </p>
      
      {showImages && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/0316f206-884b-44b4-bdb3-e0f7962a1714.png" 
              alt="Fleet wrap example" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/0ec34598-bcc3-486d-9021-dd527bafe83a.png" 
              alt="Color change wrap example" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/22a9b401-dc9c-4e13-90da-50d4e85ea3ca.png" 
              alt="Commercial graphics example" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceHeader;
