
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { AIProvider, ImageModel } from '@/types/ai-wrap';

interface ModelSelectorProps {
  selectedModel: string;
  setSelectedModel: (value: string) => void;
  availableModels: string[];
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({
  selectedModel,
  setSelectedModel,
  availableModels
}) => {
  // Get model display names
  const getModelDisplayName = (model: string) => {
    switch (model) {
      case 'stability-sdxl': return 'Standard Quality';
      default: return model;
    }
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <label htmlFor="modelSelect" className="block text-sm font-medium text-gray-700 mb-1">
          Design Generation Mode
        </label>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-full">
                <Info className="h-4 w-4 text-gray-500" />
                <span className="sr-only">Info</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">
                <strong>Stability AI:</strong> Creates detailed wrap designs with high fidelity
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <Select value={selectedModel} onValueChange={setSelectedModel}>
        <SelectTrigger id="modelSelect" className="w-full">
          <SelectValue placeholder="Select design mode" />
        </SelectTrigger>
        <SelectContent>
          {availableModels.map((model) => (
            <SelectItem key={model} value={model}>
              {getModelDisplayName(model)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-xs text-gray-500 mt-1">
        Stability AI creates high-fidelity wrap designs with excellent details.
      </p>
    </div>
  );
};
