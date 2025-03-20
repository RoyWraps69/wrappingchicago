
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { checkApiKey } from '@/utils/ai-wrap-utils';

export const useApiKeyManagement = () => {
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  // Initialize API key state
  useEffect(() => {
    const { valid } = checkApiKey();
    setHasApiKey(valid);
  }, [isApiKeyModalOpen]);

  // Validate API key
  const validateApiKey = (): boolean => {
    const { valid, providerName } = checkApiKey();
    
    if (!valid) {
      toast.error(`${providerName} API key is required. Please set your API key in settings.`);
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
