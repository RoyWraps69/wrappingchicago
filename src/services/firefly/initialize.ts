
import { CCEverywhereOptions } from './types';
import { createImageWithAPI } from './createImageApi';
import { createImageWithEditor } from './openImageEditorApi';
import { createDesignWithAPI } from './createDesignApi';

/**
 * Initializes the Adobe Express SDK and selects the appropriate API method
 * based on what's available in the current SDK version
 */
export const initializeAndGenerateImage = (
  clientId: string,
  prompt: string,
  size: string,
  resolve: (value: string | null) => void,
  reject: (reason?: any) => void
): void => {
  try {
    console.log("Starting image generation with Adobe Express SDK, prompt:", prompt);
    
    // Check if Adobe Express SDK is available
    if (!window.CCEverywhere) {
      console.error("Adobe Express SDK not loaded");
      reject(new Error("Adobe Express SDK not loaded. Please refresh the page and try again."));
      return;
    }
    
    // Initialize Adobe Express (always initialize fresh)
    const options: CCEverywhereOptions = {
      clientId: clientId,
      appName: 'Chicago Fleet Wraps',
      appVersion: { major: 1, minor: 0 },
      redirectUri: window.location.href,
      onError: (error) => {
        console.error("Adobe Express SDK initialization error:", error);
        reject(error);
      }
    };
    
    window.CCEverywhere.initialize(options)
      .then(ccEverywhere => {
        console.log("Adobe Express SDK initialized successfully", ccEverywhere);
        
        // The correct method to use depends on SDK version
        if (typeof ccEverywhere.createImage === 'function') {
          console.log("Using createImage API");
          createImageWithAPI(ccEverywhere, prompt, size, resolve, reject);
        } 
        else if (typeof ccEverywhere.openImageEditor === 'function') {
          console.log("Using openImageEditor API");
          createImageWithEditor(ccEverywhere, prompt, size, resolve, reject);
        }
        else if (typeof ccEverywhere.createDesign === 'function') {
          console.log("Using createDesign API");
          createDesignWithAPI(ccEverywhere, prompt, size, resolve, reject);
        }
        else {
          console.error("No supported image creation method found in SDK");
          reject(new Error("The Adobe Express SDK version does not support image generation. Please check documentation for updates."));
        }
      })
      .catch(error => {
        console.error("Error initializing Adobe Express SDK:", error);
        reject(new Error("Failed to initialize Adobe Express. Please refresh and try again."));
      });
  } catch (error) {
    console.error("Error in initializeAndGenerateImage:", error);
    reject(error);
  }
};
