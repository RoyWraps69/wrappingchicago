
import { CreateDesignOptions, ImageGenerationResult } from './types';

/**
 * Helper function for using the createDesign API in Adobe Express SDK (fallback)
 */
export const createDesignWithAPI = (
  ccEverywhere: any, 
  prompt: string, 
  size: string,
  resolve: (value: string | null) => void,
  reject: (reason?: any) => void
): void => {
  // Size mapping - Adobe Express expects specific dimensions
  const [width, height] = size.split('x').map(Number);
  
  const windowWidth = window.innerWidth * 0.8;
  const windowHeight = window.innerHeight * 0.8;
  
  const options: CreateDesignOptions = {
    width: width || 1024,
    height: height || 1024,
    browserWidth: windowWidth, 
    browserHeight: windowHeight,
    prompt: prompt,
    outputParams: {
      outputType: 'base64'
    }
  };
  
  ccEverywhere.createDesign(options)
    .then((result: ImageGenerationResult) => {
      console.log("Adobe Express design created:", result);
      
      if (result?.base64) {
        // Convert base64 to URL
        const imageUrl = `data:image/png;base64,${result.base64}`;
        console.log("Generated image URL from Adobe Express");
        resolve(imageUrl);
      } else {
        console.warn("No base64 data returned from Adobe Express");
        reject(new Error("No image data returned from Adobe Express. Please try again."));
      }
    })
    .catch((error: any) => {
      console.error("Error with Adobe Express design creation:", error);
      reject(error);
    });
};
