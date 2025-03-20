
import { useState } from 'react';
import { toast } from 'sonner';
import { WrapIdea } from '@/types/wrap-idea';
import { generateMockIdeas } from '@/utils/ai-wrap-utils';
import { generateImage } from '@/services/image-generation';
import { createImagePrompt } from '@/utils/ai-wrap-utils';

export const useIdeasGeneration = (generatedImage: string | null) => {
  // Ideas generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<WrapIdea[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  // Generate wrap ideas
  const handleGenerateIdeas = async (
    business: string, 
    description: string, 
    selectedVehicleType: string,
    validateApiKey: () => boolean
  ) => {
    if (!business.trim()) {
      toast.error("Please enter your business name");
      return;
    }

    if (!validateApiKey()) return;

    setIsGenerating(true);
    
    // Show a toast to indicate the process has started
    toast.info("Generating new wrap concepts...");
    console.log("Generating ideas for:", business, description, selectedVehicleType);
    
    try {
      // Generate ideas first
      const newIdeas = generateMockIdeas(business, description, selectedVehicleType);
      
      // Generate an image for the first idea if we don't already have one
      if (!generatedImage && newIdeas.length > 0) {
        const prompt = createImagePrompt(
          selectedVehicleType,
          business,
          description || `Professional ${selectedVehicleType} wrap for ${business}`
        );
        
        console.log("Auto-generating image with prompt:", prompt);
        toast.info("Generating a design for your first concept...");
        
        try {
          const imageUrl = await generateImage({
            prompt,
            size: "1024x1024"
          });
          
          if (imageUrl) {
            console.log("Auto-generated image for first idea:", imageUrl);
            newIdeas[0] = {
              ...newIdeas[0],
              imageUrl
            };
          }
        } catch (error) {
          console.error("Error auto-generating image:", error);
          // Continue even if image generation fails
        }
      } else if (generatedImage) {
        // Apply custom image to first idea if available
        console.log("Applying custom image to first idea:", generatedImage);
        newIdeas[0] = {
          ...newIdeas[0],
          imageUrl: generatedImage
        };
      }
      
      console.log("Generated ideas:", newIdeas);
      setGeneratedIdeas(newIdeas);
      setShowResults(true);
      toast.success("New wrap concepts generated!");
      
      // Scroll to results section
      setTimeout(() => {
        const resultsSection = document.getElementById('results-section');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (error) {
      console.error("Error generating ideas:", error);
      toast.error("Failed to generate ideas. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle like idea feedback
  const handleLikeIdea = (ideaId: string) => {
    toast.success("Thanks for your feedback! We'll use this to improve future suggestions.");
  };

  return {
    isGenerating,
    generatedIdeas,
    setGeneratedIdeas,
    showResults,
    setShowResults,
    handleGenerateIdeas,
    handleLikeIdea
  };
};
