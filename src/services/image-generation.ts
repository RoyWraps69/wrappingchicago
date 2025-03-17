
import { generateImage as generateImageFirefly } from '@/services/firefly';
import { ImageModel } from '@/types/ai-wrap';

type GenerateImageParams = {
  prompt: string;
  size?: string;
  model: ImageModel;
};

export const generateImage = async ({
  prompt,
  size = "1024x1024",
  model
}: GenerateImageParams): Promise<string | null> => {
  // Only use Firefly for image generation
  return generateImageFirefly({
    prompt,
    size
  });
};
