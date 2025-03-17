import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { WrapIdea, exampleIdeas } from '@/types/wrap-idea';
import { toast } from 'sonner';
import { generateImage as generateImageOpenAI } from '@/services/openai';
import { generateImage as generateImageStability } from '@/services/stability';

interface AIWrapContextType {
  // Form state
  business: string;
  setBusiness: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  selectedVehicleType: string;
  setSelectedVehicleType: (value: string) => void;
  
  // Image generation state
  imagePrompt: string;
  setImagePrompt: (value: string) => void;
  isGeneratingImage: boolean;
  generatedImage: string | null;
  selectedModel: string;
  setSelectedModel: (value: string) => void;
  imageGenerationError: string | undefined;
  aiProvider: string;
  
  // Ideas generation state
  isGenerating: boolean;
  generatedIdeas: WrapIdea[];
  showResults: boolean;
  
  // API key state
  isApiKeyModalOpen: boolean;
  setIsApiKeyModalOpen: (value: boolean) => void;
  hasApiKey: boolean;
  
  // Actions
  handleGenerateIdeas: () => void;
  handleGenerateImage: () => void;
  handleLikeIdea: (ideaId: string) => void;
  handleDownloadImage: () => void;
  checkApiKey: () => boolean;
}

const AIWrapContext = createContext<AIWrapContextType | undefined>(undefined);

export const AIWrapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [business, setBusiness] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('car');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<WrapIdea[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState('dall-e-3');
  const [imageGenerationError, setImageGenerationError] = useState<string | undefined>(undefined);
  const [aiProvider, setAiProvider] = useState('openai');
  
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    const selectedProvider = localStorage.getItem('selected_ai_provider') || 'openai';
    setAiProvider(selectedProvider);
    
    if (selectedProvider === 'openai') {
      const apiKey = localStorage.getItem('openai_api_key');
      setHasApiKey(!!apiKey);
      
      setSelectedModel('dall-e-3');
    } else {
      const apiKey = localStorage.getItem('stability_api_key');
      setHasApiKey(!!apiKey);
      
      setSelectedModel('stable-diffusion-xl-1024-v1-0');
    }
  }, [isApiKeyModalOpen]);

  const checkApiKey = (): boolean => {
    let apiKey;
    let providerName;
    
    if (aiProvider === 'openai') {
      apiKey = localStorage.getItem('openai_api_key');
      providerName = 'OpenAI';
    } else {
      apiKey = localStorage.getItem('stability_api_key');
      providerName = 'Stability AI';
    }
    
    if (!apiKey) {
      toast.error(`${providerName} API key is required. Please set your API key.`);
      setIsApiKeyModalOpen(true);
      return false;
    }
    return true;
  };

  const handleGenerateIdeas = () => {
    if (!business.trim()) {
      toast.error("Please enter your business name");
      return;
    }

    if (!checkApiKey()) return;

    setIsGenerating(true);
    
    setTimeout(() => {
      const newIdeas = generateMockIdeas(business, description, selectedVehicleType);
      
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
      
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000);
  };
  
  const generateMockIdeas = (businessName: string, desc: string, vehicleType: string): WrapIdea[] => {
    return exampleIdeas.map((idea, index) => ({
      ...idea,
      id: `${Date.now()}-${index}`,
      title: businessName ? `${idea.title} for ${businessName}` : idea.title,
      description: desc ? `${desc} - ${idea.description}` : idea.description,
      vehicleType: vehicleType || idea.vehicleType
    }));
  };
  
  const handleGenerateImage = async () => {
    if (!imagePrompt.trim()) {
      toast.error("Please enter a description for your wrap design");
      return;
    }
    
    if (!checkApiKey()) return;
    
    setImageGenerationError(undefined);
    setIsGeneratingImage(true);
    
    try {
      const fullPrompt = `${selectedVehicleType} vehicle wrap design for ${business ? business + ',' : ''} ${imagePrompt}. Professional, high quality, photorealistic.`;
      
      let imageUrl;
      
      if (aiProvider === 'openai') {
        imageUrl = await generateImageOpenAI({
          prompt: fullPrompt,
          size: "1024x1024",
          model: selectedModel
        });
      } else {
        imageUrl = await generateImageStability({
          prompt: fullPrompt,
          size: "1024x1024",
          steps: 30,
          cfgScale: 7
        });
      }
      
      if (imageUrl) {
        setGeneratedImage(imageUrl);
        toast.success("Custom wrap design generated!");
        
        if (generatedIdeas.length > 0) {
          const updatedIdeas = [...generatedIdeas];
          updatedIdeas[0] = {
            ...updatedIdeas[0],
            imageUrl: imageUrl
          };
          setGeneratedIdeas(updatedIdeas);
        }
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
      setIsGeneratingImage(false);
    }
  };

  const handleLikeIdea = (ideaId: string) => {
    toast.success("Thanks for your feedback! We'll use this to improve future suggestions.");
  };

  const handleDownloadImage = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `wrap-design-${new Date().getTime()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Image downloaded successfully!");
  };

  const value = {
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
    checkApiKey
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
