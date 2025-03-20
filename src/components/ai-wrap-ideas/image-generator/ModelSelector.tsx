
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { AIProvider } from '@/types/ai-wrap';

interface ModelSelectorProps {
  selectedModel: string;
  setSelectedModel: (value: string) => void;
  aiProvider: AIProvider;
  availableModels: string[];
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({
  selectedModel,
  setSelectedModel,
  aiProvider,
  availableModels
}) => {
  // Get model display names
  const getModelDisplayName = (model: string) => {
    switch (model) {
      case 'firefly-image': return 'Standard Design';
      case 'firefly-vector': return 'Vector Design';
      case 'dall-e-3': return 'Standard Quality';
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
                {aiProvider === 'firefly' ? (
                  <>
                    <strong>Standard Design:</strong> Photorealistic design (faster)
                    <br />
                    <strong>Vector Design:</strong> Illustration style with cleaner lines (slower)
                  </>
                ) : aiProvider === 'openai' ? (
                  <>
                    <strong>DALL-E 3:</strong> Creates high-quality vehicle wrap designs with excellent brand recognition
                  </>
                ) : (
                  <>
                    <strong>Stability AI:</strong> Creates detailed wrap designs with high fidelity
                  </>
                )}
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
        {aiProvider === 'firefly' ? (
          <>Adobe Express creates commercial-use designs using licensed content and AI technology.</>
        ) : aiProvider === 'openai' ? (
          <>DALL-E 3 creates detailed designs with high brand recognition.</>
        ) : (
          <>Stability AI creates high-fidelity wrap designs with excellent details.</>
        )}
        {selectedModel === 'firefly-vector' && 
          " Vector design mode takes longer to process."}
      </p>
    </div>
  );
};
