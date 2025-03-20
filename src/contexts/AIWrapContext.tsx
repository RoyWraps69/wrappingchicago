
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { AIWrapContextType } from '@/types/ai-wrap';
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
    handleGenerateIdeas
  );

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
