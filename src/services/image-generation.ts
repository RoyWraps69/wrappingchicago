
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
      // Convert the generic size to a stability-compatible size
      const stabilitySize = convertToStabilitySize(size);
      return generateImageStability({
        prompt,
        size: stabilitySize,
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

// Helper function to convert generic size to Stability API compatible size
function convertToStabilitySize(size: string): "1024x1024" | "1152x896" | "896x1152" | "768x768" {
  switch (size) {
    case "1024x1024":
      return "1024x1024";
    case "1152x896":
      return "1152x896";
    case "896x1152":
      return "896x1152";
    case "768x768":
      return "768x768";
    default:
      // Default to 1024x1024 if the size is not supported
      return "1024x1024";
  }
}
