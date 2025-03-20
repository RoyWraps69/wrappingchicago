
import { useState } from 'react';
import { toast } from 'sonner';
import { createImagePrompt, downloadImage } from '@/utils/ai-wrap-utils';
import { generateImage } from '@/services/image-generation';

export const useImageGeneration = () => {
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [imageGenerationError, setImageGenerationError] = useState<string | undefined>(undefined);

  // Generate custom image
  const handleGenerateImage = async (
    prompt: string,
    business: string,
    vehicleType: string
  ): Promise<string | null> => {
    if (!prompt.trim()) {
      toast.error("Please enter a description for your wrap design");
      return null;
    }
    
    // Check for API key
    const apiKey = localStorage.getItem('stability_api_key');
    if (!apiKey) {
      toast.error("Stability AI API key is required. Please set your API key in settings.");
      return null;
    }
    
    setImageGenerationError(undefined);
    setIsGeneratingImage(true);
    console.log("Starting image generation process with Stability AI");
    
    // Clear any existing timeouts
    const timeoutWarning = setTimeout(() => {
      toast.info("Design generation in progress. This may take 10-15 seconds...");
    }, 5000);
    
    try {
      const fullPrompt = createImagePrompt(
        vehicleType || 'car',
        business, 
        prompt
      );
      console.log("Generating image with prompt:", fullPrompt);
      
      toast.info("Starting design generation with Stability AI...");
      
      const imageUrl = await generateImage({
        prompt: fullPrompt,
        size: "1024x1024"
      });
      
      // Clear timeout
      clearTimeout(timeoutWarning);
      
      if (imageUrl) {
        console.log("Image generated successfully:", imageUrl);
        setGeneratedImage(imageUrl);
        toast.success("Custom wrap design generated!");
        return imageUrl;
      } else {
        setImageGenerationError("Failed to generate image. Please try again.");
        toast.error("Failed to generate image. Please try again.");
        return null;
      }
    } catch (error) {
      console.error("Error generating image:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to generate image";
      setImageGenerationError(errorMessage);
      toast.error(errorMessage);
      return null;
    } finally {
      clearTimeout(timeoutWarning);
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
    imageGenerationError,
    handleGenerateImage,
    handleDownloadImage
  };
};
