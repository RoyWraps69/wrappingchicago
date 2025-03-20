
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
        
        // Fallback to placeholder for development
        console.log("Falling back to placeholder image for development");
        const businessText = prompt.split(',')[0] || 'Vehicle';
        const placeholderUrl = `https://placehold.co/1024x1024/0B3954/FFFFFF?text=${encodeURIComponent(businessText + ' Wrap')}`;
        resolve(placeholderUrl);
        return;
      }
      
      // Initialize Adobe Express
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
        console.log("Adobe Express SDK initialized successfully");
        
        // Use the SDK to create a design
        return ccEverywhere.createDesign({
          width: 1024,
          height: 1024,
          browserWidth: window.innerWidth,
          browserHeight: window.innerHeight,
          prompt: prompt,
          outputParams: {
            outputType: 'base64'
          }
        });
      })
      .then(result => {
        console.log("Adobe Express design created:", result);
        
        if (result?.base64) {
          // Convert base64 to URL
          const imageUrl = `data:image/png;base64,${result.base64}`;
          console.log("Generated image URL from Adobe Express");
          resolve(imageUrl);
        } else {
          // Fallback if we don't get a base64 result
          console.warn("No base64 data returned from Adobe Express, using fallback");
          const vehicleType = prompt.toLowerCase().includes('truck') ? 'truck' : 
                              prompt.toLowerCase().includes('van') ? 'van' : 'car';
          const businessText = prompt.split(',')[0] || vehicleType;
          const placeholderUrl = `https://placehold.co/1024x1024/0B3954/FFFFFF?text=${encodeURIComponent(prompt)}`;
          console.log("Using placeholder instead:", placeholderUrl);
          resolve(placeholderUrl);
        }
      })
      .catch(error => {
        console.error("Error with Adobe Express design creation:", error);
        
        // Fallback to placeholder on error
        const vehicleType = prompt.toLowerCase().includes('truck') ? 'truck' : 
                            prompt.toLowerCase().includes('van') ? 'van' : 'car';
        const businessText = prompt.split(',')[0] || vehicleType;
        const placeholderUrl = `https://placehold.co/1024x1024/0B3954/FFFFFF?text=${encodeURIComponent(prompt)}`;
        console.log("Error occurred, using placeholder:", placeholderUrl);
        resolve(placeholderUrl);
      });
    } catch (error) {
      console.error("Error in generateImage:", error);
      
      // Fallback to placeholder on unexpected error
      const placeholderUrl = `https://placehold.co/1024x1024/0B3954/FFFFFF?text=${encodeURIComponent("Error: " + error)}`;
      console.log("Unexpected error, using error placeholder:", placeholderUrl);
      resolve(placeholderUrl);
    }
  });
};

// Type definition for the Adobe Express SDK
declare global {
  interface Window {
    CCEverywhere: {
      initialize: (options: {
        clientId: string,
        appName: string,
        appVersion: { major: number, minor: number },
        redirectUri: string,
        onError: (error: any) => void
      }) => Promise<{
        createDesign: (options: {
          width: number,
          height: number,
          browserWidth: number,
          browserHeight: number,
          prompt: string,
          outputParams: {
            outputType: string
          }
        }) => Promise<{
          base64?: string,
          [key: string]: any
        }>
      }>
    }
  }
}
