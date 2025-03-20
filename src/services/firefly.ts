
// Adobe Express Embed SDK for image generation
import { GenerateImageParams } from './firefly/types';
import { initializeAndGenerateImage } from './firefly/initialize';

export const generateImage = async ({ 
  prompt,
  size = "1024x1024" 
}: GenerateImageParams): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    try {
      // Get client ID from localStorage
      const clientId = localStorage.getItem('firefly_api_key');
      if (!clientId) {
        console.error("Adobe Express client ID not found in localStorage");
        reject(new Error("Adobe Express client ID not found. Please set your API key in settings."));
        return;
      }

      // Initialize Adobe Express SDK and generate image
      initializeAndGenerateImage(clientId, prompt, size, resolve, reject);
      
    } catch (error) {
      console.error("Error in generateImage:", error);
      reject(error);
    }
  });
};

// Re-export global type declaration
export { type GenerateImageParams } from './firefly/types';
