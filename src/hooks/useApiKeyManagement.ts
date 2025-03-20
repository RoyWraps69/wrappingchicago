
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export const useApiKeyManagement = () => {
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  // Initialize API key state
  useEffect(() => {
    const apiKey = localStorage.getItem('stability_api_key');
    setHasApiKey(!!apiKey);
  }, [isApiKeyModalOpen]);

  // Validate API key
  const validateApiKey = (): boolean => {
    const apiKey = localStorage.getItem('stability_api_key');
    
    if (!apiKey) {
      toast.error("Stability AI API key is required. Please set your API key in settings.");
      setIsApiKeyModalOpen(true);
      return false;
    }
    return true;
  };

  return {
    isApiKeyModalOpen,
    setIsApiKeyModalOpen,
    hasApiKey,
    validateApiKey
  };
};
