
import { useState } from 'react';
import { toast } from 'sonner';
import { ImageModel } from '@/types/ai-wrap';
import { createImagePrompt, downloadImage } from '@/utils/ai-wrap-utils';
import { generateImage } from '@/services/image-generation';
import { WrapIdea } from '@/types/wrap-idea';

export const useImageGeneration = (
  setShowResults: (show: boolean) => void,
  generatedIdeas: WrapIdea[],
  setGeneratedIdeas: (ideas: WrapIdea[]) => void,
  business: string,
  handleGenerateIdeas: () => void
) => {
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<ImageModel>('firefly-image');
  const [imageGenerationError, setImageGenerationError] = useState<string | undefined>(undefined);

  // Generate custom image
  const handleGenerateImage = async () => {
    if (!imagePrompt.trim()) {
      toast.error("Please enter a description for your wrap design");
      return;
    }
    
    setImageGenerationError(undefined);
    setIsGeneratingImage(true);
    console.log("Starting image generation process...");
    
    // Clear any existing timeouts
    const timeoutWarning = setTimeout(() => {
      toast.info("Design generation in progress. This may take 15-30 seconds...");
    }, 8000);
    
    const timeoutExtended = setTimeout(() => {
      toast.info("Still working on your design. Complex designs may take longer to generate...");
    }, 25000);
    
    try {
      const fullPrompt = createImagePrompt(
        'car',  // Default to car if no vehicle type selected
        business, 
        imagePrompt
      );
      console.log("Generating image with prompt:", fullPrompt);
      
      toast.info(`Starting design generation...`);
      
      const imageUrl = await generateImage({
        prompt: fullPrompt,
        size: "1024x1024",
        model: selectedModel
      });
      
      // Clear timeouts
      clearTimeout(timeoutWarning);
      clearTimeout(timeoutExtended);
      
      if (imageUrl) {
        console.log("Image generated successfully:", imageUrl);
        setGeneratedImage(imageUrl);
        toast.success("Custom wrap design generated!");
        
        // If we already have ideas, update the first one with the new image
        if (generatedIdeas.length > 0) {
          console.log("Updating first idea with new image");
          const updatedIdeas = [...generatedIdeas];
          updatedIdeas[0] = {
            ...updatedIdeas[0],
            imageUrl: imageUrl
          };
          setGeneratedIdeas(updatedIdeas);
        } else {
          // If we don't have any generated ideas yet, generate them now
          if (business.trim()) {
            console.log("No ideas exist yet, generating ideas with business:", business);
            handleGenerateIdeas();
          }
        }
        
        // Always show results after generating an image
        setShowResults(true);
        setTimeout(() => {
          const resultsSection = document.getElementById('results-section');
          if (resultsSection) {
            resultsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        setImageGenerationError("Failed to generate image. Please try again.");
        toast.error("Failed to generate image. Please try again.");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to generate image";
      setImageGenerationError(errorMessage);
      toast.error(errorMessage);
    } finally {
      clearTimeout(timeoutWarning);
      clearTimeout(timeoutExtended);
      setIsGeneratingImage(false);
    }
  };

  // Handle image download
  const handleDownloadImage = () => {
    if (!generatedImage) {
      toast.error("No image to download. Please generate an image first.");
      return;
    }
    downloadImage(generatedImage);
  };

  return {
    imagePrompt,
    setImagePrompt,
    isGeneratingImage,
    generatedImage,
    selectedModel,
    setSelectedModel,
    imageGenerationError,
    handleGenerateImage,
    handleDownloadImage
  };
};
