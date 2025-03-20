
import React from 'react';
import { ImageGeneratorForm } from './ImageGeneratorForm';
import { ImageGeneratorHeader } from './ImageGeneratorHeader';
import { ImageGeneratorResults } from './ImageGeneratorResults';
import { AIProvider, ImageModel } from '@/types/ai-wrap';

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

const ImageGenerator = (props: ImageGeneratorProps) => {
  const [progress, setProgress] = React.useState(0);
  
  // Simulate progress when generating image
  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (props.isGeneratingImage) {
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
      setProgress(props.isGeneratingImage ? 0 : 100);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [props.isGeneratingImage]);

  return (
    <div>
      <ImageGeneratorHeader 
        aiProvider={props.aiProvider} 
        setIsApiKeyModalOpen={props.setIsApiKeyModalOpen} 
      />
      
      <p className="text-gray-700 mb-6">
        Have a specific vision in mind? Describe the exact wrap design you want, 
        and our AI will create a custom visualization. 
        This helps us understand precisely what you're looking for.
      </p>
      
      <ImageGeneratorForm 
        imagePrompt={props.imagePrompt}
        setImagePrompt={props.setImagePrompt}
        selectedModel={props.selectedModel}
        setSelectedModel={props.setSelectedModel}
        onGenerateImage={props.onGenerateImage}
        isGeneratingImage={props.isGeneratingImage}
        errorMessage={props.errorMessage}
        aiProvider={props.aiProvider}
        progress={progress}
      />
      
      {props.generatedImage && (
        <ImageGeneratorResults
          generatedImage={props.generatedImage}
          onDownloadImage={props.onDownloadImage}
        />
      )}
    </div>
  );
};

export default ImageGenerator;
