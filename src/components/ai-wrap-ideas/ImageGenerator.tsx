
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ImageIcon, RefreshCw, Download, AlertCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

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
  aiProvider: string;
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
  aiProvider
}: ImageGeneratorProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-brand-navy">Custom Image Generator</h2>
        <Badge variant="outline" className="ml-2">
          {aiProvider === 'stability' ? 'Stability AI' : 'OpenAI DALL-E'}
        </Badge>
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

      {aiProvider === 'openai' && (
        <div className="mb-4">
          <label htmlFor="modelSelect" className="block text-sm font-medium text-gray-700 mb-1">
            DALL-E Model
          </label>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger id="modelSelect" className="w-full">
              <SelectValue placeholder="Select DALL-E model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dall-e-3">DALL-E 3 (Higher quality, slower)</SelectItem>
              <SelectItem value="dall-e-2">DALL-E 2 (Faster, less detailed)</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500 mt-1">
            DALL-E 3 offers higher quality images but may use more API credits.
          </p>
        </div>
      )}
      
      {aiProvider === 'stability' && (
        <div className="mb-4">
          <label htmlFor="modelSelect" className="block text-sm font-medium text-gray-700 mb-1">
            Stable Diffusion Model
          </label>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger id="modelSelect" className="w-full">
              <SelectValue placeholder="Select Stable Diffusion model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stable-diffusion-xl-1024-v1-0">SDXL 1.0 (High quality)</SelectItem>
              <SelectItem value="stable-diffusion-v1-6">SD 1.6 (Faster)</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500 mt-1">
            SDXL offers higher quality images but may use more API credits.
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
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
