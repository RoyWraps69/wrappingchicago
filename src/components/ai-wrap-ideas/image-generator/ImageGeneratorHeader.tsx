
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ImageGeneratorHeaderProps {
  setIsApiKeyModalOpen?: (value: boolean) => void;
}

export const ImageGeneratorHeader: React.FC<ImageGeneratorHeaderProps> = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-brand-navy">Custom Image Generator</h2>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="bg-white">
          Stability AI
        </Badge>
      </div>
    </div>
  );
};
