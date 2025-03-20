
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
    const apiKey = localStorage.getItem('stability_api_key');
    if (!apiKey) {
      toast.error("Stability AI API key is required for image generation.");
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
    if (!validateApiKey()) return;
    
    const result = await generateImage(imagePrompt, business, selectedVehicleType);
    
    if (result && generatedIdeas.length > 0) {
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
  };
  
  // Debug logging for context values
  useEffect(() => {
    console.log("AIWrapContext values updated:", {
      business,
      description,
      selectedVehicleType,
      isGenerating,
      showResults,
      ideasCount: generatedIdeas.length,
      hasGeneratedImage: !!generatedImage
    });
  }, [business, description, selectedVehicleType, isGenerating, showResults, generatedIdeas, generatedImage]);

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
    isGenerating,
    generatedIdeas,
    showResults,
    hasApiKey: !!localStorage.getItem('stability_api_key'),
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
