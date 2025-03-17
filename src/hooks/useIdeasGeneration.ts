
import { useState } from 'react';
import { toast } from 'sonner';
import { WrapIdea } from '@/types/wrap-idea';
import { generateMockIdeas } from '@/utils/ai-wrap-utils';

export const useIdeasGeneration = (generatedImage: string | null) => {
  // Ideas generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<WrapIdea[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  // Generate wrap ideas
  const handleGenerateIdeas = (
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
    
    setTimeout(() => {
      const newIdeas = generateMockIdeas(business, description, selectedVehicleType);
      
      // Apply custom image to first idea if available
      if (generatedImage) {
        newIdeas[0] = {
          ...newIdeas[0],
          imageUrl: generatedImage
        };
      }
      
      setGeneratedIdeas(newIdeas);
      setIsGenerating(false);
      setShowResults(true);
      toast.success("New wrap concepts generated!");
      
      // Scroll to results section
      setTimeout(() => {
        const resultsSection = document.getElementById('results-section');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }, 2000);
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
