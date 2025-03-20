
import { OpenImageEditorOptions, ImageGenerationResult } from './types';

/**
 * Helper function for using the openImageEditor API in Adobe Express SDK
 */
export const createImageWithEditor = (
  ccEverywhere: any, 
  prompt: string, 
  size: string,
  resolve: (value: string | null) => void,
  reject: (reason?: any) => void
): void => {
  const options: OpenImageEditorOptions = {
    inputParams: {
      prompt: prompt
    },
    outputParams: {
      outputType: 'base64'
    }
  };
  
  ccEverywhere.openImageEditor(options)
    .then((result: ImageGenerationResult) => {
      console.log("Adobe Express image created with editor:", result);
      
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
      console.error("Error with Adobe Express image creation:", error);
      reject(error);
    });
};
