
import { useState, useEffect } from 'react';
import { AIProvider, ImageModel } from '@/types/ai-wrap';
import { checkApiKey, getDefaultModelForProvider } from '@/utils/ai-wrap-utils';
import { toast } from 'sonner';

export const useApiKeyManagement = () => {
  const [aiProvider, setAiProvider] = useState<AIProvider>('firefly');
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  // Initialize provider and API key state
  useEffect(() => {
    const selectedProvider = localStorage.getItem('selected_ai_provider') as AIProvider || 'firefly';
    setAiProvider(selectedProvider);
    
    const { valid } = checkApiKey(selectedProvider);
    setHasApiKey(valid);
  }, [isApiKeyModalOpen]);

  // Validate API key
  const validateApiKey = (): boolean => {
    const { valid, providerName } = checkApiKey(aiProvider);
    
    if (!valid) {
      toast.error(`${providerName} API key is required. Please set your API key in settings.`);
      setIsApiKeyModalOpen(true);
      return false;
    }
    return true;
  };

  return {
    aiProvider,
    isApiKeyModalOpen,
    setIsApiKeyModalOpen,
    hasApiKey,
    validateApiKey
  };
};
