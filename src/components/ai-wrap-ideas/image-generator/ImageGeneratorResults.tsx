
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface ImageGeneratorResultsProps {
  generatedImage: string;
  onDownloadImage: () => void;
}

export const ImageGeneratorResults: React.FC<ImageGeneratorResultsProps> = ({
  generatedImage,
  onDownloadImage
}) => {
  return (
    <div className="mt-4">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        <img 
          src={generatedImage} 
          alt="Generated wrap design" 
          className="w-full h-auto"
        />
        <Button
          variant="secondary"
          size="sm"
          className="absolute bottom-4 right-4 bg-white/80 hover:bg-white"
          onClick={onDownloadImage}
        >
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
      <div className="mt-4 flex flex-col items-center text-center">
        <p className="text-gray-700 mb-2">
          Your design has been generated! Scroll down to see it applied to your wrap concepts.
        </p>
      </div>
    </div>
  );
};
