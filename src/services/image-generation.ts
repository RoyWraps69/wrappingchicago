
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
  model
}: GenerateImageParams): Promise<string | null> => {
  console.log(`Generating image with ${model || 'default'} model and prompt: ${prompt}`);
  
  try {
    // Simply pass through to the firefly generator for now
    // The model isn't used in our implementation currently
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
