
import { WrapIdea } from '@/types/wrap-idea';

// AI Provider types
export type AIProvider = 'firefly' | 'openai' | 'stability';

// Image model types
export type ImageModel = 'firefly-image' | 'firefly-vector' | 'dall-e-3' | 'stability-sdxl';

// Provider model mapping
export const PROVIDER_MODELS: Record<AIProvider, ImageModel[]> = {
  'firefly': ['firefly-image', 'firefly-vector'],
  'openai': ['dall-e-3'],
  'stability': ['stability-sdxl']
};

// Provider display names
export const PROVIDER_NAMES: Record<AIProvider, string> = {
  'firefly': 'Adobe Express',
  'openai': 'OpenAI',
  'stability': 'Stability AI'
};

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
