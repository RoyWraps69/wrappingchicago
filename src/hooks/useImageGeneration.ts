
import { useState } from 'react';
import { toast } from 'sonner';
import { createImagePrompt, downloadImage } from '@/utils/ai-wrap-utils';
import { generateImage } from '@/services/image-generation';

export const useImageGeneration = () => {
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [imageGenerationError, setImageGenerationError] = useState<string | undefined>(undefined);
  const [generationProgress, setGenerationProgress] = useState(0);

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
    
    // Check for API key (either Stability or Firefly)
    const stabilityApiKey = localStorage.getItem('stability_api_key');
    const fireflyApiKey = localStorage.getItem('firefly_api_key');
    
    if (!stabilityApiKey && !fireflyApiKey) {
      toast.error("Image generation requires either a Stability AI or Adobe Firefly API key. Please set an API key in settings.");
      return null;
    }
    
    setImageGenerationError(undefined);
    setIsGeneratingImage(true);
    setGeneratedImage(null); // Reset any previous image
    setGenerationProgress(0); // Reset progress
    
    console.log("Starting image generation process");
    
    // Clear any existing timeouts
    const timeoutWarning = setTimeout(() => {
      toast.info("Design generation in progress. This may take 10-15 seconds...");
    }, 5000);
    
    // Set up progress simulation
    const progressInterval = setInterval(() => {
      setGenerationProgress(prev => {
        const increment = prev < 30 ? 5 : prev < 60 ? 3 : prev < 85 ? 1 : 0.5;
        return Math.min(prev + increment, 90);
      });
    }, 300);
    
    try {
      const fullPrompt = createImagePrompt(
        vehicleType || 'car',
        business, 
        prompt
      );
      console.log("Generating image with prompt:", fullPrompt);
      
      toast.info(`Starting design generation ${fireflyApiKey ? 'with Adobe Firefly' : 'with Stability AI'}...`);
      
      const imageUrl = await generateImage({
        prompt: fullPrompt,
        size: "1024x1024"
      });
      
      // Clear intervals and timeouts
      clearTimeout(timeoutWarning);
      clearInterval(progressInterval);
      
      if (imageUrl) {
        console.log("Image generated successfully:", imageUrl);
        setGeneratedImage(imageUrl);
        setGenerationProgress(100); // Complete the progress
        setIsGeneratingImage(false);
        toast.success("Custom wrap design generated!");
        return imageUrl;
      } else {
        setImageGenerationError("Failed to generate image. Using example designs instead.");
        setIsGeneratingImage(false);
        toast.error("Failed to generate custom image. Using example designs instead.");
        return null;
      }
    } catch (error) {
      console.error("Error generating image:", error);
      
      // Clear intervals and timeouts
      clearTimeout(timeoutWarning);
      clearInterval(progressInterval);
      
      // Check for specific errors
      let errorMessage = "Failed to generate image";
      
      if (error instanceof Error) {
        if (error.message.includes("insufficient") || error.message.includes("credits")) {
          errorMessage = "Your account has insufficient balance. Using example designs instead.";
        } else if (error.message.includes("Invalid API key")) {
          errorMessage = "Invalid API key. Please check your API key in settings.";
        } else {
          errorMessage = error.message;
        }
      }
      
      setImageGenerationError(errorMessage);
      setIsGeneratingImage(false);
      toast.error(errorMessage);
      return null;
    } finally {
      clearTimeout(timeoutWarning);
      clearInterval(progressInterval);
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
    generationProgress,
    handleGenerateImage,
    handleDownloadImage
  };
};
