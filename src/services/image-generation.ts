
import { generateImage as generateImageFirefly } from '@/services/firefly';
import { generateImage as generateImageOpenAI } from '@/services/openai';
import { generateImage as generateImageStability } from '@/services/stability';
import { AIProvider, ImageModel } from '@/types/ai-wrap';

type GenerateImageParams = {
  prompt: string;
  size?: string;
  model?: ImageModel;
  provider?: AIProvider;
  quality?: string;
};

export const generateImage = async ({
  prompt,
  size = "1024x1024",
  model = "firefly-image",
  provider = "firefly",
  quality = "standard"
}: GenerateImageParams): Promise<string | null> => {
  console.log(`Generating image with ${provider} (${model}) model and prompt: ${prompt}`);
  
  try {
    let result: string | null = null;
    
    switch (provider) {
      case 'firefly':
        result = await generateImageFirefly({
          prompt,
          size
        });
        break;
      
      case 'openai':
        result = await generateImageOpenAI({
          prompt,
          size,
          quality,
          model: 'dall-e-3'
        });
        break;
      
      case 'stability':
        result = await generateImageStability({
          prompt,
          size: size as "1024x1024" | "1152x896" | "896x1152" | "768x768"
        });
        break;
      
      default:
        // Default to Firefly if provider is not recognized
        result = await generateImageFirefly({
          prompt,
          size
        });
    }
    
    console.log("Image generation result from", provider, ":", result ? "Success" : "Failed");
    return result;
  } catch (error) {
    console.error(`Error in ${provider} image generation service:`, error);
    throw error; // Rethrow to let caller handle the error
  }
};
