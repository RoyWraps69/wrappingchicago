
import React, { useEffect } from 'react';
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
}

const ImageGenerator = (props: ImageGeneratorProps) => {
  const [progress, setProgress] = React.useState(0);
  
  // Simulate progress when generating image
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (props.isGeneratingImage) {
      // Reset progress when starting
      setProgress(0);
      
      interval = setInterval(() => {
        setProgress(prev => {
          // Slowly increase until 90%, the final 10% when the image actually arrives
          const increment = prev < 30 ? 5 : prev < 60 ? 3 : prev < 85 ? 1 : 0.5;
          const newProgress = Math.min(prev + increment, 90);
          console.log("Progress updated:", newProgress);
          return newProgress;
        });
      }, 300); // Slightly faster for Stability AI
      
      console.log("Progress simulation started");
    } else {
      // Complete or reset progress based on whether generation is complete
      setProgress(props.generatedImage ? 100 : 0);
      console.log("Progress complete or reset:", props.generatedImage ? 100 : 0);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
        console.log("Progress interval cleared");
      }
    };
  }, [props.isGeneratingImage, props.generatedImage]);

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
