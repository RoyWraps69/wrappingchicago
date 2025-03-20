
import { useState } from 'react';
import { toast } from 'sonner';
import { WrapIdea, exampleIdeas } from '@/types/wrap-idea';
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
      
      let imageGenerationFailed = false;
      let failedCount = 0;
      
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
          } else {
            failedCount++;
            // Use an example image when generation fails
            if (exampleIdeas[i]) {
              newIdeas[i] = {
                ...newIdeas[i],
                imageUrl: exampleIdeas[i].imageUrl
              };
            }
            imageGenerationFailed = true;
          }
        } catch (error) {
          failedCount++;
          console.error(`Error generating image for idea ${i+1}:`, error);
          
          // Use an example image when generation fails
          if (exampleIdeas[i]) {
            newIdeas[i] = {
              ...newIdeas[i],
              imageUrl: exampleIdeas[i].imageUrl
            };
          }
          imageGenerationFailed = true;
          // Continue with other ideas even if one fails
        }
        
        // Update the ideas in state after each attempt
        const updatedIdeas = [...newIdeas];
        setGeneratedIdeas(updatedIdeas);
      }
      
      console.log("Final generated ideas:", newIdeas);
      setGeneratedIdeas(newIdeas);
      setShowResults(true);
      
      if (imageGenerationFailed) {
        if (failedCount === newIdeas.length) {
          toast.error("Failed to generate images. Using example images instead.");
        } else {
          toast.warning("Some images failed to generate. Using example images for those.");
        }
      } else {
        toast.success("New wrap concepts generated!");
      }
      
      // Scroll to results section
      setTimeout(() => {
        const resultsSection = document.getElementById('results-section');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (error) {
      console.error("Error generating ideas:", error);
      
      // Fallback to example ideas if generation completely fails
      const fallbackIdeas = exampleIdeas.map((idea, index) => ({
        ...idea,
        id: `fallback-${index}`,
        title: idea.title.includes(business) ? idea.title : `${idea.title} for ${business}`,
        description: description ? `${description} - ${idea.description}` : idea.description,
        vehicleType: selectedVehicleType,
        aiGenerated: true
      }));
      
      setGeneratedIdeas(fallbackIdeas);
      setShowResults(true);
      toast.warning("Failed to generate custom ideas. Showing example concepts instead.");
      
      // Scroll to results section
      setTimeout(() => {
        const resultsSection = document.getElementById('results-section');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
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
