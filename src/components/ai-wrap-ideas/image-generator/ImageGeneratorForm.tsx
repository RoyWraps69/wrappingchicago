
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ImageIcon, RefreshCw, Info } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { AIProvider, PROVIDER_MODELS } from '@/types/ai-wrap';
import { AlertCircle } from 'lucide-react';
import { ModelSelector } from './ModelSelector';

interface ImageGeneratorFormProps {
  imagePrompt: string;
  setImagePrompt: (value: string) => void;
  selectedModel: string;
  setSelectedModel: (value: string) => void;
  onGenerateImage: () => void;
  isGeneratingImage: boolean;
  errorMessage?: string;
  aiProvider: AIProvider;
  progress: number;
}

export const ImageGeneratorForm: React.FC<ImageGeneratorFormProps> = ({
  imagePrompt,
  setImagePrompt,
  selectedModel,
  setSelectedModel,
  onGenerateImage,
  isGeneratingImage,
  errorMessage,
  aiProvider,
  progress
}) => {
  // Get available models for the current provider
  const availableModels = PROVIDER_MODELS[aiProvider] || [];
  const providerName = aiProvider === 'firefly' ? 'Adobe Express' : 
                       aiProvider === 'openai' ? 'DALL-E 3' : 'Stability AI';
  
  return (
    <>
      {errorMessage && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {errorMessage}
          </AlertDescription>
        </Alert>
      )}
      
      <div className="mb-4">
        <label htmlFor="imagePrompt" className="block text-sm font-medium text-gray-700 mb-1">
          Describe Your Ideal Wrap Design
        </label>
        <Textarea
          id="imagePrompt"
          placeholder="Example: A sleek black van with green gradient stripes and modern typography for a landscaping business"
          value={imagePrompt}
          onChange={(e) => setImagePrompt(e.target.value)}
          rows={5}
          className="w-full"
        />
      </div>

      {availableModels.length > 0 && (
        <ModelSelector 
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          aiProvider={aiProvider}
          availableModels={availableModels}
        />
      )}
      
      <Button
        onClick={onGenerateImage}
        disabled={isGeneratingImage}
        className="w-full bg-brand-navy hover:bg-blue-800 text-white py-3 h-auto mb-6"
      >
        {isGeneratingImage ? (
          <>
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            Creating Your Design...
          </>
        ) : (
          <>
            <ImageIcon className="mr-2 h-4 w-4" />
            Generate Custom Design
          </>
        )}
      </Button>
      
      {isGeneratingImage && (
        <ProgressIndicator progress={progress} aiProvider={aiProvider} selectedModel={selectedModel} />
      )}
    </>
  );
};

// Sub-component for progress indicator
const ProgressIndicator: React.FC<{
  progress: number;
  aiProvider: AIProvider;
  selectedModel: string;
}> = ({ progress, aiProvider, selectedModel }) => {
  const providerName = aiProvider === 'firefly' ? 'Adobe Express' : 
                       aiProvider === 'openai' ? 'DALL-E 3' : 'Stability AI';
  
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-500 mb-1">
        <span>Generating design</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
      <p className="text-xs text-gray-500 mt-2">
        Creating your custom wrap design with {providerName}.
        {aiProvider === 'openai' 
          ? " This typically takes 10-15 seconds with DALL-E 3."
          : aiProvider === 'stability'
            ? " This typically takes 5-10 seconds with Stability AI."
            : " This typically takes 15-30 seconds with Adobe Express."}
        {selectedModel === 'firefly-vector' && " Vector designs may take longer to process."}
      </p>
    </div>
  );
};
