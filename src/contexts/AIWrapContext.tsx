
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { AIWrapContextType } from '@/types/ai-wrap';
import { useIdeasGeneration } from '@/hooks/useIdeasGeneration';
import { useImageGeneration } from '@/hooks/useImageGeneration';
import { toast } from 'sonner';

const AIWrapContext = createContext<AIWrapContextType | undefined>(undefined);

export const AIWrapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Form state
  const [business, setBusiness] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('car');
  
  // API key management
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  
  // Check for API key
  useEffect(() => {
    const apiKey = localStorage.getItem('stability_api_key');
    setHasApiKey(!!apiKey);
  }, [isApiKeyModalOpen]);
  
  // Ideas generation
  const {
    isGenerating,
    generatedIdeas,
    setGeneratedIdeas,
    showResults,
    setShowResults,
    handleGenerateIdeas: generateIdeas,
    handleLikeIdea
  } = useIdeasGeneration(null); // Pass null initially, will be updated with generatedImage
  
  // Validate API key
  const validateApiKey = (): boolean => {
    const apiKey = localStorage.getItem('stability_api_key');
    if (!apiKey) {
      toast.error("Stability AI API key is required. Please set your API key in settings.");
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
  
  // Image generation
  const {
    imagePrompt,
    setImagePrompt,
    isGeneratingImage,
    generatedImage,
    imageGenerationError,
    handleGenerateImage,
    handleDownloadImage
  } = useImageGeneration(
    setShowResults,
    generatedIdeas,
    setGeneratedIdeas,
    business,
    handleGenerateIdeas
  );
  
  // Update ideas generation with latest generated image
  useEffect(() => {
    if (generatedImage && generatedIdeas.length > 0) {
      console.log("Updating first idea with generated image:", generatedImage);
      const updatedIdeas = [...generatedIdeas];
      updatedIdeas[0] = {
        ...updatedIdeas[0],
        imageUrl: generatedImage
      };
      setGeneratedIdeas(updatedIdeas);
    }
  }, [generatedImage]);

  // Debug logging for context values
  useEffect(() => {
    console.log("AIWrapContext values updated:", {
      business,
      description,
      selectedVehicleType,
      hasApiKey,
      isGenerating,
      showResults,
      ideasCount: generatedIdeas.length
    });
  }, [business, description, selectedVehicleType, hasApiKey, isGenerating, showResults, generatedIdeas]);

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
    isApiKeyModalOpen,
    setIsApiKeyModalOpen,
    hasApiKey,
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
