
import { WrapIdea } from '@/types/wrap-idea';

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
