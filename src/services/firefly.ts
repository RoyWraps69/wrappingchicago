
// Adobe Express Embed SDK for image generation
import { GenerateImageParams } from './firefly/types';

interface FireflyResponse {
  url: string;
  status: string;
}

export const generateImage = async ({ 
  prompt,
  size = "1024x1024" 
}: GenerateImageParams): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    try {
      // Get API key from localStorage
      const apiKey = localStorage.getItem('firefly_api_key');
      if (!apiKey) {
        console.error("Adobe Firefly API key not found in localStorage");
        reject(new Error("Adobe Firefly API key not found. Please set your API key in settings."));
        return;
      }

      console.log("Starting Adobe Firefly image generation with prompt:", prompt);
      
      // Create form data for Firefly API request
      const formData = new FormData();
      formData.append('prompt', prompt);
      formData.append('size', size);
      
      // Simulate API call with timeout for testing
      fetch('https://firefly-api.adobe.io/v2/images/generate', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          size,
          n: 1,
        }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Firefly API error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data: FireflyResponse) => {
        console.log("Firefly API response:", data);
        if (data && data.url) {
          resolve(data.url);
        } else {
          reject(new Error("No image URL in Firefly response"));
        }
      })
      .catch(error => {
        console.error("Error in Firefly API call:", error);
        reject(error);
      });
      
    } catch (error) {
      console.error("Error in generateImage:", error);
      reject(error);
    }
  });
};

// Re-export global type declaration
export { type GenerateImageParams } from './firefly/types';
