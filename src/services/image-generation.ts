
import { generateImage as generateImageFirefly } from '@/services/firefly';
import { ImageModel } from '@/types/ai-wrap';

type GenerateImageParams = {
  prompt: string;
  size?: string;
  model?: ImageModel;
};

export const generateImage = async ({
  prompt,
  size = "1024x1024",
  model = "firefly-image"
}: GenerateImageParams): Promise<string | null> => {
  console.log(`Generating image with ${model} model and prompt: ${prompt}`);
  
  try {
    // For now, we're just using Firefly regardless of the model type
    // In the future, we could branch based on model type
    const result = await generateImageFirefly({
      prompt,
      size
    });
    
    console.log("Image generation result:", result);
    return result;
  } catch (error) {
    console.error("Error in image generation service:", error);
    throw error;
  }
};
