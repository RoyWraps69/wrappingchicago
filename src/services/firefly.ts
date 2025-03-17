
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

      // Initialize the Express SDK
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
          
          // Use design prompt to create an image
          const [width, height] = size.split('x').map(Number);
          
          // Create a new design from prompt
          const imageResponse = await sdk.createDesign({
            width: width,
            height: height,
            browserWidth: width,
            browserHeight: height,
            prompt: `Vehicle wrap design concept: ${prompt}`,
            outputParams: {
              outputType: "base64"
            }
          });
          
          console.log("Image generated successfully", imageResponse);
          
          if (imageResponse && imageResponse.base64) {
            // Convert base64 to data URL
            const imageUrl = `data:image/png;base64,${imageResponse.base64}`;
            resolve(imageUrl);
          } else {
            reject(new Error("Failed to generate image. No image data received."));
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
