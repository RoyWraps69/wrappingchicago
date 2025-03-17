
// OpenAI service for image generation

interface GenerateImageParams {
  prompt: string;
  size?: string;
  quality?: string;
  n?: number;
  model?: string;
}

export const generateImage = async ({ 
  prompt, 
  size = "1024x1024", 
  quality = "standard",
  n = 1,
  model = "dall-e-3"
}: GenerateImageParams): Promise<string | null> => {
  // This requires an OpenAI API key which should be provided by the user
  // and handled securely in a production environment
  const apiKey = localStorage.getItem('openai_api_key');
  
  if (!apiKey) {
    throw new Error("OpenAI API key is required. Please set your API key in settings.");
  }

  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model, // Configurable model
        prompt: `Vehicle wrap design concept: ${prompt}`,
        n,
        size,
        quality,
        response_format: "url"
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.error?.message || "Failed to generate image";
      
      // Check for specific error types
      if (errorData.error?.code === 'invalid_api_key') {
        throw new Error("Invalid API key. Please check your OpenAI API key and try again.");
      } else if (errorData.error?.type === 'insufficient_quota') {
        throw new Error("You've exceeded your OpenAI API quota. Please check your usage limits.");
      } else if (errorData.error?.code === 'billing_hard_limit_reached') {
        throw new Error("Your OpenAI account has reached its billing hard limit. Please check your account settings or upgrade your plan.");
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data.data[0]?.url || null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
