
// Adobe Firefly service for image generation

interface GenerateImageParams {
  prompt: string;
  size?: string;
}

export const generateImage = async ({ 
  prompt,
  size = "1024x1024" 
}: GenerateImageParams): Promise<string | null> => {
  // This requires an Adobe Firefly API key which should be provided by the user
  const apiKey = localStorage.getItem('firefly_api_key');
  
  if (!apiKey) {
    throw new Error("Adobe Firefly API key is required. Please set your API key in settings.");
  }

  try {
    // Parse dimensions from size string
    const [width, height] = size.split('x').map(Number);
    
    console.log("Using Firefly API key:", apiKey.substring(0, 5) + '...' + apiKey.substring(apiKey.length - 5));
    
    // Adobe Firefly API uses a different OAuth flow 
    // We need to use the correct authentication method
    const response = await fetch('https://firefly-api.adobe.io/v2/images/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey.trim(),
        // Adobe Firefly doesn't use Bearer token but OAuth
        // Remove the Authorization header as it's causing the 401 error
      },
      body: JSON.stringify({
        prompt: `Vehicle wrap design concept: ${prompt}`,
        n: 1,
        size: {
          width,
          height
        },
        contentClass: "photo"
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Firefly API error:", errorData);
      
      const errorMessage = errorData.message || "Failed to generate image";
      
      if (errorData.error_code === '401013' || errorData.error_code === '403003') {
        throw new Error("Authentication failed. Your API key may be invalid or improperly formatted.");
      } else if (errorData.code === 'invalid_api_key' || errorData.error_code === '401012') {
        throw new Error("Invalid API key. Please check your Adobe Firefly API key and try again.");
      } else if (errorData.code === 'quota_exceeded') {
        throw new Error("You've exceeded your Adobe Firefly API quota. Please check your usage limits.");
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    // Adobe Firefly will return a URL directly to the generated image
    if (data.outputs && data.outputs.length > 0) {
      return data.outputs[0].url;
    }
    
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
