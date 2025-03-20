
import { toast } from 'sonner';
import { WrapIdea, exampleIdeas } from '@/types/wrap-idea';

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

// Check if Stability API key exists
export const checkApiKey = (): { valid: boolean; providerName: string } => {
  const apiKey = localStorage.getItem('stability_api_key');
  return { 
    valid: !!apiKey,
    providerName: 'Stability AI'
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
