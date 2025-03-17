
import { generateImage as generateImageOpenAI } from '@/services/openai';
import { generateImage as generateImageStability } from '@/services/stability';
import { generateImage as generateImageFirefly } from '@/services/firefly';
import { AIProvider, ImageModel } from '@/types/ai-wrap';

type GenerateImageParams = {
  prompt: string;
  size?: string;
  aiProvider: AIProvider;
  model: ImageModel;
};

export const generateImage = async ({
  prompt,
  size = "1024x1024",
  aiProvider,
  model
}: GenerateImageParams): Promise<string | null> => {
  switch (aiProvider) {
    case 'openai':
      return generateImageOpenAI({
        prompt,
        size,
        model
      });
    case 'stability':
      return generateImageStability({
        prompt,
        size,
        steps: 30,
        cfgScale: 7
      });
    case 'firefly':
    default:
      return generateImageFirefly({
        prompt,
        size
      });
  }
};
