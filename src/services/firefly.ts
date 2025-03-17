
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
    
    // Adobe Firefly API endpoint for image generation
    const apiUrl = 'https://firefly-api.adobe.io/v2/images/generate';
    
    const requestBody = {
      prompt: `Vehicle wrap design concept: ${prompt}`,
      n: 1,
      size: {
        width,
        height
      },
      contentClass: "photo"
    };
    
    console.log("Sending request to Firefly API:", JSON.stringify(requestBody, null, 2));
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey.trim(),
        // Note: Adobe Firefly API requires specific authentication
        // For the Client ID approach, only x-api-key is needed
      },
      body: JSON.stringify(requestBody)
    });

    const responseText = await response.text();
    console.log("Firefly API response status:", response.status);
    console.log("Firefly API response headers:", JSON.stringify(Object.fromEntries([...response.headers]), null, 2));
    
    let responseData;
    try {
      responseData = JSON.parse(responseText);
      console.log("Firefly API response data:", JSON.stringify(responseData, null, 2));
    } catch (e) {
      console.log("Raw response (not JSON):", responseText);
      throw new Error("Received invalid JSON response from Firefly API");
    }

    if (!response.ok) {
      if (responseData.error_code === '403003' || responseData.error_code === '401013') {
        throw new Error("Authentication failed. Your API key is invalid. Please ensure you're using the Client ID from your Adobe Developer Console project.");
      } else if (responseData.error_code === '401012') {
        throw new Error("Invalid API key format. Please check your Adobe Firefly API key format and try again.");
      } else if (responseData.code === 'quota_exceeded') {
        throw new Error("You've exceeded your Adobe Firefly API quota. Please check your usage limits.");
      }
      
      throw new Error(responseData.message || "Failed to generate image");
    }
    
    // Adobe Firefly will return a URL directly to the generated image
    if (responseData.outputs && responseData.outputs.length > 0) {
      return responseData.outputs[0].url;
    }
    
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
