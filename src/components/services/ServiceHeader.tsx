
import React from 'react';

interface ServiceHeaderProps {
  title: string;
  showImages?: boolean;
  highlightAI?: boolean;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ 
  title, 
  showImages = false,
  highlightAI = false
}) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-brand-navy mb-6">
        {title}
        {highlightAI && (
          <span className="ml-2 text-sm bg-brand-red text-white px-3 py-1 rounded-full uppercase">
            AI-Powered
          </span>
        )}
      </h1>
      <p className="text-lg mb-6">
        {highlightAI ? (
          <>
            At Wrapping Chicago, we combine <strong>artificial intelligence</strong> with expert craftsmanship to provide 
            premium quality vehicle wrapping services throughout the greater Chicago area. Our team of experienced professionals
            uses only the highest quality materials and <strong>AI design technology</strong> to ensure your wrap looks great and lasts.
          </>
        ) : (
          <>
            At Wrapping Chicago, we provide premium quality vehicle wrapping services
            throughout the greater Chicago area. Our team of experienced professionals
            uses only the highest quality materials to ensure your wrap looks great and lasts.
          </>
        )}
      </p>
      
      {showImages && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png" 
              alt="Fleet wrap example" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/f564c255-9ca3-4457-bef5-c940a4a1557a.png" 
              alt="Color change wrap example" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/fb7a4b97-4b57-4b2e-8f81-42a1098270df.png" 
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
