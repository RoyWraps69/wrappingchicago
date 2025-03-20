import { toast } from 'sonner';
import { WrapIdea, exampleIdeas } from '@/types/wrap-idea';
import { AIProvider, ImageModel, PROVIDER_NAMES } from '@/types/ai-wrap';

// Generate mock ideas for demonstration
export const generateMockIdeas = (businessName: string, desc: string, vehicleType: string): WrapIdea[] => {
  console.log("Generating mock ideas with:", businessName, desc, vehicleType);
  
  // Create a deep copy of the example ideas to avoid mutating the original
  const ideasCopy = JSON.parse(JSON.stringify(exampleIdeas));
  
  // Customize the ideas based on inputs without placeholders
  const customizedIdeas = ideasCopy.map((idea: WrapIdea, index: number) => {
    const newIdea = {
      ...idea,
      id: `${Date.now()}-${index}`,
      title: businessName ? `${idea.title} for ${businessName}` : idea.title,
      description: desc ? `${desc} - ${idea.description}` : idea.description,
      vehicleType: vehicleType || idea.vehicleType,
      // Don't set a default imageUrl - wait for AI generation
      imageUrl: undefined
    };
    console.log(`Generated idea ${index}:`, newIdea);
    return newIdea;
  });
  
  console.log("Final generated ideas:", customizedIdeas);
  return customizedIdeas;
};

// Check if API key exists for the selected provider
export const checkApiKey = (aiProvider: AIProvider): { valid: boolean; providerName: string } => {
  let apiKey: string | null = null;
  let storageKey = '';
  let providerName = '';
  
  switch (aiProvider) {
    case 'firefly':
      storageKey = 'firefly_api_key';
      providerName = PROVIDER_NAMES.firefly;
      break;
    case 'openai':
      storageKey = 'openai_api_key';
      providerName = PROVIDER_NAMES.openai;
      break;
    case 'stability':
      storageKey = 'stability_api_key';
      providerName = PROVIDER_NAMES.stability;
      break;
    default:
      storageKey = 'firefly_api_key';
      providerName = PROVIDER_NAMES.firefly;
  }
  
  apiKey = localStorage.getItem(storageKey);
  
  return { 
    valid: !!apiKey,
    providerName
  };
};

// Helper to create the full prompt for image generation
export const createImagePrompt = (
  selectedVehicleType: string, 
  business: string, 
  imagePrompt: string
): string => {
  // Make sure we have a valid vehicle type
  const vehicleType = selectedVehicleType || 'car';
  
  // Create a descriptive prompt for the image generation
  return `${vehicleType} vehicle wrap design for ${business ? business + ',' : ''} ${imagePrompt}. Professional, high quality, photorealistic.`;
};

// Get the default model based on provider
export const getDefaultModelForProvider = (provider: AIProvider): ImageModel => {
  switch (provider) {
    case 'firefly':
      return 'firefly-image';
    case 'openai':
      return 'dall-e-3';
    case 'stability':
      return 'stability-sdxl';
    default:
      return 'firefly-image';
  }
};

// Get localStorage key for a provider
export const getApiKeyStorageKey = (provider: AIProvider): string => {
  switch (provider) {
    case 'firefly':
      return 'firefly_api_key';
    case 'openai':
      return 'openai_api_key';
    case 'stability':
      return 'stability_api_key';
    default:
      return 'firefly_api_key';
  }
};

// Download the generated image
export const downloadImage = (imageUrl: string | null): void => {
  if (!imageUrl) {
    toast.error("No image available to download");
    return;
  }
  
  console.log("Downloading image:", imageUrl);
  
  try {
    // Create a download link and trigger a click
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `wrap-design-${new Date().getTime()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Image downloaded successfully!");
  } catch (error) {
    console.error("Error downloading image:", error);
    toast.error("Failed to download image");
  }
};
