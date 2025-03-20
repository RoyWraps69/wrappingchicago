
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { AIWrapContextType, AIProvider, ImageModel, PROVIDER_MODELS } from '@/types/ai-wrap';
import { useApiKeyManagement } from '@/hooks/useApiKeyManagement';
import { useIdeasGeneration } from '@/hooks/useIdeasGeneration';
import { useImageGeneration } from '@/hooks/useImageGeneration';

const AIWrapContext = createContext<AIWrapContextType | undefined>(undefined);

export const AIWrapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Form state
  const [business, setBusiness] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('car');
  
  // API key management
  const {
    aiProvider,
    setAiProvider,
    isApiKeyModalOpen,
    setIsApiKeyModalOpen,
    hasApiKey,
    validateApiKey
  } = useApiKeyManagement();
  
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
    selectedModel,
    setSelectedModel,
    imageGenerationError,
    handleGenerateImage,
    handleDownloadImage
  } = useImageGeneration(
    setShowResults,
    generatedIdeas,
    setGeneratedIdeas,
    business,
    handleGenerateIdeas,
    aiProvider,
    setAiProvider
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
      ideasCount: generatedIdeas.length,
      aiProvider
    });
  }, [business, description, selectedVehicleType, hasApiKey, isGenerating, showResults, generatedIdeas, aiProvider]);

  // Update model when provider changes
  useEffect(() => {
    // Check if current model is compatible with selected provider
    const providerModels = PROVIDER_MODELS[aiProvider] || [];
    if (!providerModels.includes(selectedModel)) {
      // Set to first available model for this provider
      setSelectedModel(providerModels[0]);
    }
  }, [aiProvider, selectedModel]);

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
    selectedModel,
    setSelectedModel,
    imageGenerationError,
    aiProvider,
    setAiProvider,
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
