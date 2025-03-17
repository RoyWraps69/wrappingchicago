
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { WrapIdea, exampleIdeas } from '@/types/wrap-idea';
import { toast } from 'sonner';
import { generateImage } from '@/services/openai';

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
  
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    const apiKey = localStorage.getItem('openai_api_key');
    setHasApiKey(!!apiKey);
  }, [isApiKeyModalOpen]);

  const checkApiKey = (): boolean => {
    const apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey) {
      toast.error("OpenAI API key is required. Please set your API key.");
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
    
    // Simulate idea generation (in a real app this would call an API)
    setTimeout(() => {
      // Create ideas based on user input
      const newIdeas = generateMockIdeas(business, description, selectedVehicleType);
      
      // Add generated image to the first idea if available
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
      
      // Smooth scroll to results
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000);
  };
  
  // Helper function to generate mock ideas based on user input
  const generateMockIdeas = (businessName: string, desc: string, vehicleType: string): WrapIdea[] => {
    // This would be replaced with an actual API call to generate ideas
    // For now, we'll use the example ideas but modify them slightly based on input
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
      
      const imageUrl = await generateImage({
        prompt: fullPrompt,
        size: "1024x1024",
        model: selectedModel
      });
      
      if (imageUrl) {
        setGeneratedImage(imageUrl);
        toast.success("Custom wrap design generated!");
        
        // If we already have generated ideas, update the first one with the new image
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
