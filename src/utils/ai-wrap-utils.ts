
import { toast } from 'sonner';
import { WrapIdea, exampleIdeas } from '@/types/wrap-idea';
import { AIProvider, ImageModel } from '@/types/ai-wrap';

// Generate mock ideas for demonstration
export const generateMockIdeas = (businessName: string, desc: string, vehicleType: string): WrapIdea[] => {
  console.log("Generating mock ideas with:", businessName, desc, vehicleType);
  
  // Create a deep copy of the example ideas to avoid mutating the original
  const ideasCopy = JSON.parse(JSON.stringify(exampleIdeas));
  
  // Set vehicle-specific placeholders
  const vehiclePlaceholder = vehicleType === 'truck' ? 
    'https://placehold.co/1024x1024/ff5e7d/FFFFFF?text=Truck+Wrap' :
    vehicleType === 'van' ? 
      'https://placehold.co/1024x1024/0B3954/FFFFFF?text=Van+Wrap' :
      'https://placehold.co/1024x1024/0B3954/FFFFFF?text=Car+Wrap';
  
  // Customize the ideas based on inputs
  const customizedIdeas = ideasCopy.map((idea: WrapIdea, index: number) => {
    const newIdea = {
      ...idea,
      id: `${Date.now()}-${index}`,
      title: businessName ? `${idea.title} for ${businessName}` : idea.title,
      description: desc ? `${desc} - ${idea.description}` : idea.description,
      vehicleType: vehicleType || idea.vehicleType,
      imageUrl: vehiclePlaceholder // Always set a placeholder to ensure we have an image
    };
    console.log(`Generated idea ${index}:`, newIdea);
    return newIdea;
  });
  
  console.log("Final generated ideas:", customizedIdeas);
  return customizedIdeas;
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
  // Make sure we have a valid vehicle type
  const vehicleType = selectedVehicleType || 'car';
  
  // Create a descriptive prompt for the image generation
  return `${vehicleType} vehicle wrap design for ${business ? business + ',' : ''} ${imagePrompt}. Professional, high quality, photorealistic.`;
};

// Get the default model based on provider
export const getDefaultModelForProvider = (provider: AIProvider): ImageModel => {
  return 'firefly-image';
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
