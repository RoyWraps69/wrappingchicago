
import { toast } from 'sonner';

export const storeStabilityApiKey = (apiKey: string): void => {
  try {
    localStorage.setItem('stability_api_key', apiKey);
    toast.success("Stability AI API key has been saved successfully");
    console.log("Stability AI API key stored in localStorage");
  } catch (error) {
    console.error("Error storing Stability AI API key:", error);
    toast.error("Failed to store Stability AI API key");
  }
};
