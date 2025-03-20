
// Adobe Express Embed SDK for image generation

interface GenerateImageParams {
  prompt: string;
  size?: string;
}

export const generateImage = async ({ 
  prompt,
  size = "1024x1024" 
}: GenerateImageParams): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    try {
      console.log("Starting image generation with Adobe Express SDK, prompt:", prompt);
      
      // Get client ID from localStorage
      const clientId = localStorage.getItem('firefly_api_key');
      if (!clientId) {
        console.error("Adobe Express client ID not found in localStorage");
        reject(new Error("Adobe Express client ID not found. Please set your API key in settings."));
        return;
      }

      // Check if Adobe Express SDK is available
      if (!window.CCEverywhere) {
        console.error("Adobe Express SDK not loaded");
        reject(new Error("Adobe Express SDK not loaded. Please refresh the page and try again."));
        return;
      }
      
      // Initialize Adobe Express (always initialize fresh)
      window.CCEverywhere.initialize({
        clientId: clientId,
        appName: 'Chicago Fleet Wraps',
        appVersion: { major: 1, minor: 0 },
        redirectUri: window.location.href,
        onError: (error) => {
          console.error("Adobe Express SDK initialization error:", error);
          reject(error);
        }
      })
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
      console.error("Error in generateImage:", error);
      reject(error);
    }
  });
};

// Helper function for the createImage API
const createImageWithAPI = (
  ccEverywhere: any, 
  prompt: string, 
  size: string,
  resolve: (value: string | null) => void,
  reject: (reason?: any) => void
) => {
  // Size mapping - Adobe Express expects specific dimensions
  const [width, height] = size.split('x').map(Number);
  
  ccEverywhere.createImage({
    width: width || 1024,
    height: height || 1024,
    prompt: prompt,
    outputParams: {
      outputType: 'base64'
    }
  })
  .then((result: any) => {
    console.log("Adobe Express image created:", result);
    
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

// Helper function for the openImageEditor API
const createImageWithEditor = (
  ccEverywhere: any, 
  prompt: string, 
  size: string,
  resolve: (value: string | null) => void,
  reject: (reason?: any) => void
) => {
  // Size mapping - Adobe Express expects specific dimensions
  const [width, height] = size.split('x').map(Number);
  
  ccEverywhere.openImageEditor({
    inputParams: {
      prompt: prompt
    },
    outputParams: {
      outputType: 'base64'
    }
  })
  .then((result: any) => {
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

// Helper function for the createDesign API (fallback)
const createDesignWithAPI = (
  ccEverywhere: any, 
  prompt: string, 
  size: string,
  resolve: (value: string | null) => void,
  reject: (reason?: any) => void
) => {
  // Size mapping - Adobe Express expects specific dimensions
  const [width, height] = size.split('x').map(Number);
  
  const windowWidth = window.innerWidth * 0.8;
  const windowHeight = window.innerHeight * 0.8;
  
  ccEverywhere.createDesign({
    width: width || 1024,
    height: height || 1024,
    browserWidth: windowWidth, 
    browserHeight: windowHeight,
    prompt: prompt,
    outputParams: {
      outputType: 'base64'
    }
  })
  .then((result: any) => {
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

// Type definition for the Adobe Express SDK
declare global {
  interface Window {
    CCEverywhere: {
      isInitialized?: boolean;
      initialize: (options: {
        clientId: string,
        appName: string,
        appVersion: { major: number, minor: number },
        redirectUri: string,
        onError: (error: any) => void
      }) => Promise<any>;
    }
  }
}
