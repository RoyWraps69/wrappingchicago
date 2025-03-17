
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { toast } from 'sonner';
import { WrapIdea } from '@/types/wrap-idea';
import { AIWrapContextType, AIProvider, ImageModel } from '@/types/ai-wrap';
import { 
  generateMockIdeas, 
  checkApiKey, 
  createImagePrompt, 
  getDefaultModelForProvider,
  downloadImage
} from '@/utils/ai-wrap-utils';
import { generateImage } from '@/services/image-generation';

const AIWrapContext = createContext<AIWrapContextType | undefined>(undefined);

export const AIWrapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Form state
  const [business, setBusiness] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('car');
  
  // Ideas generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<WrapIdea[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  // Image generation state
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<ImageModel>('firefly-image');
  const [imageGenerationError, setImageGenerationError] = useState<string | undefined>(undefined);
  const [aiProvider, setAiProvider] = useState<AIProvider>('firefly');
  
  // API key state
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  // Initialize provider and API key state
  useEffect(() => {
    const selectedProvider = localStorage.getItem('selected_ai_provider') as AIProvider || 'firefly';
    setAiProvider(selectedProvider);
    
    const { valid } = checkApiKey(selectedProvider);
    setHasApiKey(valid);
    
    // Set default model for provider
    setSelectedModel(getDefaultModelForProvider(selectedProvider));
  }, [isApiKeyModalOpen]);

  // Validate API key
  const validateApiKey = (): boolean => {
    const { valid, providerName } = checkApiKey(aiProvider);
    
    if (!valid) {
      toast.error(`${providerName} API key is required. Please set your API key in settings.`);
      setIsApiKeyModalOpen(true);
      return false;
    }
    return true;
  };

  // Generate wrap ideas
  const handleGenerateIdeas = () => {
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
  
  // Generate custom image
  const handleGenerateImage = async () => {
    if (!imagePrompt.trim()) {
      toast.error("Please enter a description for your wrap design");
      return;
    }
    
    if (!validateApiKey()) return;
    
    setImageGenerationError(undefined);
    setIsGeneratingImage(true);
    
    // Clear any existing timeouts
    const timeoutWarning = setTimeout(() => {
      toast.info("Design generation in progress. This may take 15-30 seconds...");
    }, 8000);
    
    const timeoutExtended = setTimeout(() => {
      toast.info("Still working on your design. Complex designs may take longer to generate...");
    }, 25000);
    
    try {
      const fullPrompt = createImagePrompt(selectedVehicleType, business, imagePrompt);
      console.log("Generating image with prompt:", fullPrompt);
      
      toast.info(`Starting design generation with Adobe Express...`);
      
      const imageUrl = await generateImage({
        prompt: fullPrompt,
        size: "1024x1024",
        model: selectedModel
      });
      
      // Clear timeouts
      clearTimeout(timeoutWarning);
      clearTimeout(timeoutExtended);
      
      if (imageUrl) {
        console.log("Image generated successfully:", imageUrl.substring(0, 100) + "...");
        setGeneratedImage(imageUrl);
        toast.success("Custom wrap design generated!");
        
        // If we already have ideas, update the first one with the new image
        if (generatedIdeas.length > 0) {
          const updatedIdeas = [...generatedIdeas];
          updatedIdeas[0] = {
            ...updatedIdeas[0],
            imageUrl: imageUrl
          };
          setGeneratedIdeas(updatedIdeas);
          console.log("Updated first idea with new image");
        } else {
          // If we don't have any generated ideas yet, generate them now
          if (business.trim()) {
            handleGenerateIdeas();
          }
        }
        
        // Always show results after generating an image
        setShowResults(true);
        setTimeout(() => {
          const resultsSection = document.getElementById('results-section');
          if (resultsSection) {
            resultsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        setImageGenerationError("Failed to generate image. Please try again.");
        toast.error("Failed to generate image. Please try again.");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to generate image";
      setImageGenerationError(errorMessage);
      toast.error(errorMessage);
    } finally {
      clearTimeout(timeoutWarning);
      clearTimeout(timeoutExtended);
      setIsGeneratingImage(false);
    }
  };

  // Handle like idea feedback
  const handleLikeIdea = (ideaId: string) => {
    toast.success("Thanks for your feedback! We'll use this to improve future suggestions.");
  };

  // Handle image download
  const handleDownloadImage = () => {
    downloadImage(generatedImage);
  };

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
