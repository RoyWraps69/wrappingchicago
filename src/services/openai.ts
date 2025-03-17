
// OpenAI service for image generation

interface GenerateImageParams {
  prompt: string;
  size?: string;
  quality?: string;
  n?: number;
}

export const generateImage = async ({ 
  prompt, 
  size = "1024x1024", 
  quality = "standard",
  n = 1 
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
        model: "dall-e-3", // Using DALL-E 3 for higher quality images
        prompt: `Vehicle wrap design concept: ${prompt}`,
        n,
        size,
        quality,
        response_format: "url"
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to generate image");
    }

    const data = await response.json();
    return data.data[0]?.url || null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
