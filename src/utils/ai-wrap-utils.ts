
import { toast } from 'sonner';
import { WrapIdea, exampleIdeas } from '@/types/wrap-idea';
import { AIProvider, ImageModel } from '@/types/ai-wrap';

// Generate mock ideas for demonstration
export const generateMockIdeas = (businessName: string, desc: string, vehicleType: string): WrapIdea[] => {
  return exampleIdeas.map((idea, index) => ({
    ...idea,
    id: `${Date.now()}-${index}`,
    title: businessName ? `${idea.title} for ${businessName}` : idea.title,
    description: desc ? `${desc} - ${idea.description}` : idea.description,
    vehicleType: vehicleType || idea.vehicleType
  }));
};

// Check if API key exists for the selected provider
export const checkApiKey = (aiProvider: AIProvider): { valid: boolean; providerName: string } => {
  let apiKey;
  let providerName;
  
  if (aiProvider === 'openai') {
    apiKey = localStorage.getItem('openai_api_key');
    providerName = 'OpenAI';
  } else if (aiProvider === 'stability') {
    apiKey = localStorage.getItem('stability_api_key');
    providerName = 'Stability AI';
  } else {
    apiKey = localStorage.getItem('firefly_api_key');
    providerName = 'Adobe Firefly';
  }
  
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
  return `${selectedVehicleType} vehicle wrap design for ${business ? business + ',' : ''} ${imagePrompt}. Professional, high quality, photorealistic.`;
};

// Get the default model based on provider
export const getDefaultModelForProvider = (provider: AIProvider): ImageModel => {
  switch (provider) {
    case 'openai':
      return 'dall-e-3';
    case 'stability':
      return 'stable-diffusion-xl-1024-v1-0';
    case 'firefly':
    default:
      return 'firefly-image';
  }
};

// Download the generated image
export const downloadImage = (imageUrl: string | null): void => {
  if (!imageUrl) return;
  
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = `wrap-design-${new Date().getTime()}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  toast.success("Image downloaded successfully!");
};
