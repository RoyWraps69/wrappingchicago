
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export const useApiKeyManagement = () => {
  const [hasApiKey, setHasApiKey] = useState(false);

  // Initialize API key state
  useEffect(() => {
    const apiKey = localStorage.getItem('stability_api_key');
    setHasApiKey(!!apiKey);
  }, []);

  // Validate API key
  const validateApiKey = (): boolean => {
    const apiKey = localStorage.getItem('stability_api_key');
    
    if (!apiKey) {
      toast.error("Stability AI API key is required for image generation.");
      return false;
    }
    return true;
  };

  return {
    hasApiKey,
    validateApiKey
  };
};
