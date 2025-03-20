
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ImageIcon, RefreshCw, Download, AlertCircle, ArrowDown, Info, Settings } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { AIProvider, ImageModel, PROVIDER_MODELS, PROVIDER_NAMES } from '@/types/ai-wrap';

interface ImageGeneratorProps {
  imagePrompt: string;
  setImagePrompt: (value: string) => void;
  onGenerateImage: () => void;
  isGeneratingImage: boolean;
  generatedImage: string | null;
  onDownloadImage: () => void;
  selectedModel: string;
  setSelectedModel: (value: string) => void;
  errorMessage?: string;
  aiProvider: AIProvider;
  setIsApiKeyModalOpen: (value: boolean) => void;
}

const ImageGenerator = ({
  imagePrompt,
  setImagePrompt,
  onGenerateImage,
  isGeneratingImage,
  generatedImage,
  onDownloadImage,
  selectedModel,
  setSelectedModel,
  errorMessage,
  aiProvider,
  setIsApiKeyModalOpen
}: ImageGeneratorProps) => {
  const [progress, setProgress] = React.useState(0);
  
  // Simulate progress when generating image
  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isGeneratingImage) {
      setProgress(0);
      
      interval = setInterval(() => {
        setProgress(prev => {
          // Slowly increase until 90%, the final 10% when the image actually arrives
          const increment = prev < 30 ? 5 : prev < 60 ? 3 : prev < 85 ? 1 : 0.5;
          const newProgress = Math.min(prev + increment, 90);
          return newProgress;
        });
      }, 400);
    } else {
      setProgress(isGeneratingImage ? 0 : 100);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isGeneratingImage]);

  // Get available models for the current provider
  const availableModels = PROVIDER_MODELS[aiProvider] || [];
  const providerName = PROVIDER_NAMES[aiProvider] || 'AI';
  
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
    <div>
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
      
      <p className="text-gray-700 mb-6">
        Have a specific vision in mind? Describe the exact wrap design you want, 
        and our AI will create a custom visualization. 
        This helps us understand precisely what you're looking for.
      </p>
      
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
      )}
      
      {generatedImage && (
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
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2"
              onClick={() => {
                const resultsSection = document.getElementById('results-section');
                if (resultsSection) {
                  resultsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              View Results Below
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
