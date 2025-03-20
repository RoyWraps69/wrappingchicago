
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
      // Check if Express SDK is loaded
      if (!window.CCEverywhere) {
        reject(new Error("Adobe Express Embed SDK not loaded. Please refresh the page and try again."));
        return;
      }

      console.log("Initializing Adobe Express with prompt:", prompt);
      
      // Get the container element for the Express editor
      const container = document.getElementById('adobe-express-container');
      if (!container) {
        const newContainer = document.createElement('div');
        newContainer.id = 'adobe-express-container';
        newContainer.style.position = 'fixed';
        newContainer.style.left = '-9999px';  // Position off-screen
        newContainer.style.width = '1px';
        newContainer.style.height = '1px';
        document.body.appendChild(newContainer);
      }

      // Initialize the Express SDK - we need to handle redirects better
      window.CCEverywhere.initialize({
        clientId: localStorage.getItem('firefly_api_key') || '',
        appName: 'Vehicle Wrap Designer',
        appVersion: { major: 1, minor: 0 },
        redirectUri: window.location.href,
        onError: (err) => {
          console.error("Adobe Express SDK Error:", err);
          reject(new Error(`Adobe Express SDK Error: ${err.message || 'Unknown error'}`));
        }
      }).then(async (sdk) => {
        try {
          console.log("Adobe Express SDK initialized successfully");
          
          // Get width and height from size
          const [width, height] = size.split('x').map(Number);
          
          // For development testing, return a placeholder image URL when the SDK has issues
          // This lets us test the UI when Express SDK is having issues
          const isDevelopment = window.location.hostname === 'localhost' || 
                                window.location.hostname.includes('lovable.app');
          
          if (isDevelopment) {
            const vehicleType = prompt.toLowerCase().includes('truck') ? 'truck' : 
                              prompt.toLowerCase().includes('van') ? 'van' : 'car';
            
            // Return a placeholder image for development testing
            const placeholderUrl = `https://placehold.co/1024x1024/0B3954/FFFFFF?text=${encodeURIComponent(vehicleType + ' Wrap')}`;
            resolve(placeholderUrl);
            return;
          }
          
          // For production, use the actual Create Design workflow
          try {
            // Create a new design from prompt
            const result = await sdk.createDesign({
              width,
              height,
              browserWidth: width,
              browserHeight: height,
              prompt: prompt,
              outputParams: {
                outputType: "base64"
              }
            });
            
            if (result && result.base64) {
              const base64Image = result.base64;
              const imageUrl = `data:image/png;base64,${base64Image}`;
              resolve(imageUrl);
            } else {
              reject(new Error("No image data received from Adobe Express"));
            }
          } catch (error) {
            console.error("Create design error:", error);
            reject(new Error(`Failed to create design: ${error.message}`));
          }
        } catch (error) {
          console.error("Error using Adobe Express SDK:", error);
          reject(error);
        }
      });
    } catch (error) {
      console.error("Error initializing Adobe Express SDK:", error);
      reject(error);
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
