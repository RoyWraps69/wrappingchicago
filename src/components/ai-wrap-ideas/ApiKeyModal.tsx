
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AIProvider, PROVIDER_NAMES } from '@/types/ai-wrap';
import { useAIWrap } from '@/contexts/AIWrapContext';
import { toast } from 'sonner';
import { getApiKeyStorageKey } from '@/utils/ai-wrap-utils';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const { aiProvider, setAiProvider } = useAIWrap();
  const [activeTab, setActiveTab] = useState<AIProvider>(aiProvider);
  const [apiKeys, setApiKeys] = useState<Record<AIProvider, string>>({
    'firefly': '',
    'openai': '',
    'stability': ''
  });

  // Load saved API keys when modal opens
  useEffect(() => {
    if (isOpen) {
      const keys: Record<AIProvider, string> = {
        'firefly': localStorage.getItem('firefly_api_key') || '',
        'openai': localStorage.getItem('openai_api_key') || '',
        'stability': localStorage.getItem('stability_api_key') || ''
      };
      setApiKeys(keys);
      setActiveTab(aiProvider);
    }
  }, [isOpen, aiProvider]);

  const handleApiKeyChange = (provider: AIProvider, value: string) => {
    setApiKeys(prev => ({
      ...prev,
      [provider]: value
    }));
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value as AIProvider);
  };

  const handleSave = () => {
    // Save all API keys to localStorage
    Object.entries(apiKeys).forEach(([provider, key]) => {
      const storageKey = getApiKeyStorageKey(provider as AIProvider);
      
      if (key) {
        localStorage.setItem(storageKey, key);
      }
    });

    // Set the selected provider
    setAiProvider(activeTab);
    localStorage.setItem('selected_ai_provider', activeTab);
    
    toast.success(`${PROVIDER_NAMES[activeTab]} selected as your AI provider!`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>AI Provider Settings</DialogTitle>
          <DialogDescription>
            Configure your preferred AI image generation provider
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="firefly">Adobe Express</TabsTrigger>
            <TabsTrigger value="openai">DALL-E 3</TabsTrigger>
            <TabsTrigger value="stability">Stability AI</TabsTrigger>
          </TabsList>

          <TabsContent value="firefly" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firefly-key">Adobe Express Client ID</Label>
              <Input
                id="firefly-key"
                type="text"
                placeholder="Enter your Adobe Express Client ID"
                value={apiKeys.firefly}
                onChange={(e) => handleApiKeyChange('firefly', e.target.value)}
              />
              <p className="text-xs text-gray-500">
                Adobe Express requires a Client ID from their developer portal.
                For testing, we've provided a default key.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="openai" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="openai-key">OpenAI API Key</Label>
              <Input
                id="openai-key"
                type="password"
                placeholder="Enter your OpenAI API key"
                value={apiKeys.openai}
                onChange={(e) => handleApiKeyChange('openai', e.target.value)}
              />
              <p className="text-xs text-gray-500">
                Get your API key from the <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">OpenAI dashboard</a>. 
                DALL-E 3 offers excellent vehicle wrap designs.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="stability" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="stability-key">Stability AI API Key</Label>
              <Input
                id="stability-key"
                type="password"
                placeholder="Enter your Stability AI API key"
                value={apiKeys.stability}
                onChange={(e) => handleApiKeyChange('stability', e.target.value)}
              />
              <p className="text-xs text-gray-500">
                Get your API key from the <a href="https://platform.stability.ai/account/keys" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Stability AI dashboard</a>. 
                Their SDXL model specializes in detailed graphics.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex justify-between items-center pt-4 sm:justify-between">
          <p className="text-sm text-gray-500">
            Your API keys are stored locally in your browser.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save & Select
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyModal;
