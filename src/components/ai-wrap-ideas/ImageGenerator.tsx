
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ImageIcon, RefreshCw, Download, AlertCircle, ArrowDown } from 'lucide-react';
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
  errorMessage
}: ImageGeneratorProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-brand-navy">Custom Image Generator</h2>
        <Badge variant="outline" className="ml-2">
          Adobe Express
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

      <div className="mb-4">
        <label htmlFor="modelSelect" className="block text-sm font-medium text-gray-700 mb-1">
          Design Generation Mode
        </label>
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger id="modelSelect" className="w-full">
            <SelectValue placeholder="Select design mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="firefly-image">Standard Design</SelectItem>
            <SelectItem value="firefly-vector">Vector Design</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-gray-500 mt-1">
          Adobe Express creates commercial-use designs using licensed content and AI technology.
        </p>
      </div>
      
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
