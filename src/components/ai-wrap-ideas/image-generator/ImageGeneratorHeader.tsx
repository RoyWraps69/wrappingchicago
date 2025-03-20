
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { AIProvider, PROVIDER_NAMES } from '@/types/ai-wrap';

interface ImageGeneratorHeaderProps {
  aiProvider: AIProvider;
  setIsApiKeyModalOpen: (value: boolean) => void;
}

export const ImageGeneratorHeader: React.FC<ImageGeneratorHeaderProps> = ({
  aiProvider,
  setIsApiKeyModalOpen
}) => {
  const providerName = PROVIDER_NAMES[aiProvider] || 'AI';
  
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-brand-navy">Custom Image Generator</h2>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="bg-white">
          {providerName}
        </Badge>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsApiKeyModalOpen(true)}
          className="h-8 w-8"
        >
          <Settings className="h-4 w-4" />
          <span className="sr-only">AI Provider Settings</span>
        </Button>
      </div>
    </div>
  );
};
