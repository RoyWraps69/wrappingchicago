
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
      console.log("Mock ideas generated:", newIdeas.length);
      
      // Generate images for all ideas sequentially
      for (let i = 0; i < newIdeas.length; i++) {
        // For the first idea, use the existing generated image if available
        if (i === 0 && generatedImage) {
          console.log("Using existing generated image for first idea:", generatedImage);
          newIdeas[0] = {
            ...newIdeas[0],
            imageUrl: generatedImage
          };
          continue; // Skip to next iteration
        }
        
        // Create a custom prompt for each idea
        const prompt = createImagePrompt(
          selectedVehicleType,
          business,
          i === 0 ? 
            (description || `Professional ${selectedVehicleType} wrap for ${business}`) :
            `${newIdeas[i].title} - ${newIdeas[i].description}`
        );
        
        console.log(`Generating image for idea ${i+1} with prompt:`, prompt);
        toast.info(`Generating design for concept ${i+1}...`);
        
        try {
          const imageUrl = await generateImage({
            prompt,
            size: "1024x1024"
          });
          
          if (imageUrl) {
            console.log(`Generated image for idea ${i+1}:`, imageUrl);
            newIdeas[i] = {
              ...newIdeas[i],
              imageUrl
            };
            
            // Update the ideas in state after each successful generation
            // This allows the UI to update as each image is generated
            const updatedIdeas = [...newIdeas];
            setGeneratedIdeas(updatedIdeas);
          }
        } catch (error) {
          console.error(`Error generating image for idea ${i+1}:`, error);
          toast.error(`Failed to generate image for concept ${i+1}. Continuing with other concepts.`);
          // Continue with other ideas even if one fails
        }
      }
      
      console.log("Final generated ideas:", newIdeas);
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
