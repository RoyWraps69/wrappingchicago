
import { WrapIdea } from '@/types/wrap-idea';

// Define the possible image generation providers
export type ImageModel = 'stability-sdxl' | 'adobe-firefly';

// Define the AI Provider type
export type AIProvider = 'stability' | 'firefly';

export interface AIWrapContextType {
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
  imageGenerationError: string | undefined;
  generationProgress: number;
  
  // Ideas generation state
  isGenerating: boolean;
  generatedIdeas: WrapIdea[];
  showResults: boolean;
  
  // API key state
  hasApiKey: boolean;
  isApiKeyModalOpen: boolean;
  setIsApiKeyModalOpen: (isOpen: boolean) => void;
  
  // Actions
  handleGenerateIdeas: () => void;
  handleGenerateImage: () => void;
  handleLikeIdea: (ideaId: string) => void;
  handleDownloadImage: () => void;
  checkApiKey: () => boolean;
}
