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

// Check if API key exists for Firefly
export const checkApiKey = (aiProvider: AIProvider): { valid: boolean; providerName: string } => {
  const apiKey = localStorage.getItem('firefly_api_key');
  return { 
    valid: !!apiKey,
    providerName: 'Adobe Firefly'
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
  return 'firefly-image';
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
