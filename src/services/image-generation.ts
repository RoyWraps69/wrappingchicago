
import { generateImage as generateImageStability } from '@/services/stability';

type GenerateImageParams = {
  prompt: string;
  size?: string;
  quality?: string;
};

export const generateImage = async ({
  prompt,
  size = "1024x1024",
  quality = "standard"
}: GenerateImageParams): Promise<string | null> => {
  console.log(`Generating image with Stability AI and prompt: ${prompt}`);
  
  try {
    // Use only Stability AI for generation
    const result = await generateImageStability({
      prompt,
      size: size as "1024x1024" | "1152x896" | "896x1152" | "768x768"
    });
    
    console.log("Image generation result from Stability AI:", result ? "Success" : "Failed");
    return result;
  } catch (error) {
    console.error(`Error in Stability AI image generation service:`, error);
    throw error; // Rethrow to let caller handle the error
  }
};
