import { generateImage as generateImageStability } from '@/services/stability';
import { generateImage as generateImageFirefly } from '@/services/firefly';

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
  console.log(`Starting image generation with prompt: ${prompt}`);
  
  // Check which API key is available
  const stabilityApiKey = localStorage.getItem('stability_api_key');
  const fireflyApiKey = localStorage.getItem('firefly_api_key');
  
  try {
    // Prefer Firefly if available since that's what the user is asking about
    if (fireflyApiKey) {
      console.log("Using Adobe Firefly API for image generation");
      try {
        const result = await generateImageFirefly({
          prompt,
          size
        });
        
        console.log("Image generation result from Adobe Firefly:", result ? "Success" : "Failed");
        return result;
      } catch (fireflyError) {
        console.error("Error in Adobe Firefly image generation:", fireflyError);
        // Fall back to Stability if Firefly fails and we have that key
        if (stabilityApiKey) {
          console.log("Falling back to Stability API");
          return await generateImageStability({
            prompt,
            size: size as "1024x1024" | "1152x896" | "896x1152" | "768x768"
          });
        }
        throw fireflyError;
      }
    }
    // Otherwise use Stability if available
    else if (stabilityApiKey) {
      console.log("Using Stability AI for image generation");
      return await generateImageStability({
        prompt,
        size: size as "1024x1024" | "1152x896" | "896x1152" | "768x768"
      });
    } 
    else {
      console.error("No API keys found for image generation services");
      throw new Error("No image generation API keys found. Please add either a Stability AI or Adobe Firefly key in settings.");
    }
  } catch (error) {
    console.error(`Error in image generation service:`, error);
    throw error; // Rethrow to let caller handle the error
  }
};
