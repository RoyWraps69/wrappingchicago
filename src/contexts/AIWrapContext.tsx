
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { toast } from 'sonner';
import { AIWrapContextType } from '@/types/ai-wrap';
import { useIdeasGeneration } from '@/hooks/useIdeasGeneration';
import { useImageGeneration } from '@/hooks/useImageGeneration';

const AIWrapContext = createContext<AIWrapContextType | undefined>(undefined);

export const AIWrapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Form state
  const [business, setBusiness] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('car');
  
  // API Key Modal state
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  
  // Image generation
  const {
    imagePrompt,
    setImagePrompt,
    isGeneratingImage,
    generatedImage,
    imageGenerationError,
    generationProgress,
    handleGenerateImage: generateImage,
    handleDownloadImage
  } = useImageGeneration();
  
  // Ideas generation
  const {
    isGenerating,
    generatedIdeas,
    setGeneratedIdeas,
    showResults,
    setShowResults,
    handleGenerateIdeas: generateIdeas,
    handleLikeIdea
  } = useIdeasGeneration(generatedImage);
  
  // Validate API key
  const validateApiKey = (): boolean => {
    const stabilityApiKey = localStorage.getItem('stability_api_key');
    const fireflyApiKey = localStorage.getItem('firefly_api_key');
    
    if (!stabilityApiKey && !fireflyApiKey) {
      toast.error("An API key is required for image generation. Please add either a Stability AI or Adobe Firefly key in settings.");
      setIsApiKeyModalOpen(true);
      return false;
    }
    return true;
  };
  
  // Define the wrapper function for handleGenerateIdeas
  const handleGenerateIdeas = () => {
    console.log("AIWrapContext: handleGenerateIdeas called with", business, description, selectedVehicleType);
    return generateIdeas(business, description, selectedVehicleType, validateApiKey);
  };
  
  // Define the wrapper function for handleGenerateImage
  const handleGenerateImage = async () => {
    console.log("AIWrapContext: handleGenerateImage called");
    
    if (!validateApiKey()) return;
    
    try {
      const result = await generateImage(imagePrompt, business, selectedVehicleType);
      console.log("Image generation completed, result:", result ? "Success" : "Failed");
      
      if (result && generatedIdeas.length > 0) {
        console.log("Updating first idea with new image");
        // Update first idea with the new image
        const updatedIdeas = [...generatedIdeas];
        updatedIdeas[0] = {
          ...updatedIdeas[0],
          imageUrl: result
        };
        setGeneratedIdeas(updatedIdeas);
        
        // Show results
        setShowResults(true);
        
        // Scroll to results
        setTimeout(() => {
          const resultsSection = document.getElementById('results-section');
          if (resultsSection) {
            resultsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } catch (error) {
      console.error("Error in handleGenerateImage:", error);
      toast.error("Failed to generate image. Please try again.");
    }
  };
  
  // Context state management - debug logging removed for production

  const value: AIWrapContextType = {
    business,
    setBusiness,
    description,
    setDescription,
    selectedVehicleType,
    setSelectedVehicleType,
    imagePrompt,
    setImagePrompt,
    isGeneratingImage,
    generatedImage,
    imageGenerationError,
    generationProgress,
    isGenerating,
    generatedIdeas,
    showResults,
    hasApiKey: !!(localStorage.getItem('stability_api_key') || localStorage.getItem('firefly_api_key')),
    isApiKeyModalOpen,
    setIsApiKeyModalOpen,
    handleGenerateIdeas,
    handleGenerateImage,
    handleLikeIdea,
    handleDownloadImage,
    checkApiKey: validateApiKey
  };

  return <AIWrapContext.Provider value={value}>{children}</AIWrapContext.Provider>;
};

export const useAIWrap = () => {
  const context = useContext(AIWrapContext);
  if (context === undefined) {
    throw new Error('useAIWrap must be used within an AIWrapProvider');
  }
  return context;
};
