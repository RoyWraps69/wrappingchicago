
// Stability AI service for image generation

interface GenerateImageParams {
  prompt: string;
  size: "1024x1024" | "1152x896" | "896x1152" | "768x768";
  cfgScale?: number;
  steps?: number;
  samples?: number;
}

interface BalanceResponse {
  credits: number;
}

// Check account balance
export const checkStabilityBalance = async (): Promise<number | null> => {
  const apiKey = localStorage.getItem('stability_api_key');
  
  if (!apiKey) {
    return null;
  }
  
  try {
    const response = await fetch('https://api.stability.ai/v1/user/balance', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error("Failed to check balance:", response.status);
      return null;
    }

    const data = await response.json() as BalanceResponse;
    console.log("Account balance retrieved:", data.credits);
    return data.credits;
  } catch (error) {
    console.error("Error checking account balance:", error);
    return null;
  }
}

export const generateImage = async ({ 
  prompt, 
  size = "1024x1024",
  cfgScale = 7,
  steps = 30,
  samples = 1
}: GenerateImageParams): Promise<string | null> => {
  // This requires a Stability AI API key which should be provided by the user
  const apiKey = localStorage.getItem('stability_api_key');
  
  if (!apiKey) {
    throw new Error("Stability AI API key is required. Please set your API key in settings.");
  }

  // Check balance before proceeding
  const balance = await checkStabilityBalance();
  if (balance !== null && balance <= 0) {
    throw new Error("Your Stability AI account has insufficient balance. Please add credits to your account.");
  }

  // Parse dimensions from size string
  const [width, height] = size.split('x').map(Number);
  
  console.log(`Making request to Stability AI with dimensions: ${width}x${height}`);

  try {
    const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: `Vehicle wrap design concept: ${prompt}`,
            weight: 1
          }
        ],
        cfg_scale: cfgScale,
        height,
        width,
        samples,
        steps
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: "Failed to generate image" }));
      const errorMessage = errorData.message || "Failed to generate image";
      
      if (response.status === 401) {
        throw new Error("Invalid API key. Please check your Stability AI API key and try again.");
      } else if (errorData.name === 'insufficient_credits') {
        throw new Error("You've used all your Stability AI credits. Please check your account settings.");
      }
      
      console.error("Stability API error:", errorData);
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log("Stability API response received", data.artifacts ? `with ${data.artifacts.length} images` : "with no images");
    
    // Stability returns an array of generated images
    if (data.artifacts && data.artifacts.length > 0) {
      // Convert base64 to URL
      const base64Image = data.artifacts[0].base64;
      return `data:image/png;base64,${base64Image}`;
    }
    
    console.error("No images returned from Stability API");
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
