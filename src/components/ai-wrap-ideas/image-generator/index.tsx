
import React from 'react';
import { ImageGeneratorForm } from './ImageGeneratorForm';
import { ImageGeneratorHeader } from './ImageGeneratorHeader';
import { ImageGeneratorResults } from './ImageGeneratorResults';

interface ImageGeneratorProps {
  imagePrompt: string;
  setImagePrompt: (value: string) => void;
  onGenerateImage: () => void;
  isGeneratingImage: boolean;
  generatedImage: string | null;
  onDownloadImage: () => void;
  errorMessage?: string;
  progress?: number;
}

const ImageGenerator = (props: ImageGeneratorProps) => {
  return (
    <div>
      <ImageGeneratorHeader />
      
      <p className="text-gray-700 mb-6">
        Have a specific vision in mind? Describe the exact wrap design you want, 
        and our AI will create a custom visualization. 
        This helps us understand precisely what you're looking for.
      </p>
      
      <ImageGeneratorForm 
        imagePrompt={props.imagePrompt}
        setImagePrompt={props.setImagePrompt}
        onGenerateImage={props.onGenerateImage}
        isGeneratingImage={props.isGeneratingImage}
        errorMessage={props.errorMessage}
        progress={props.progress}
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
