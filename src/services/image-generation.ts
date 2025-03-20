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
  
  // Firefly doesn't actually use the model parameter in our implementation
  // but we'll keep it for future functionality
  return generateImageFirefly({
    prompt,
    size
  });
};
