
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [openAIKey, setOpenAIKey] = useState('');
  const [stabilityAIKey, setStabilityAIKey] = useState('');
  const [fireflyKey, setFireflyKey] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('firefly');
  
  useEffect(() => {
    if (isOpen) {
      // Load saved keys when modal opens
      const savedOpenAIKey = localStorage.getItem('openai_api_key') || '';
      const savedStabilityAIKey = localStorage.getItem('stability_api_key') || '';
      const savedFireflyKey = localStorage.getItem('firefly_api_key') || '';
      
      setOpenAIKey(savedOpenAIKey);
      setStabilityAIKey(savedStabilityAIKey);
      setFireflyKey(savedFireflyKey);
      
      // Get the currently selected provider or default to Firefly
      const savedProvider = localStorage.getItem('selected_ai_provider') || 'firefly';
      setSelectedProvider(savedProvider);
    }
  }, [isOpen]);

  const handleSave = () => {
    try {
      // Save API keys based on selected provider
      if (selectedProvider === 'openai' && openAIKey) {
        localStorage.setItem('openai_api_key', openAIKey);
        localStorage.setItem('selected_ai_provider', 'openai');
        toast.success('OpenAI API key saved successfully');
      } else if (selectedProvider === 'stability' && stabilityAIKey) {
        localStorage.setItem('stability_api_key', stabilityAIKey);
        localStorage.setItem('selected_ai_provider', 'stability');
        toast.success('Stability AI API key saved successfully');
      } else if (selectedProvider === 'firefly' && fireflyKey) {
        localStorage.setItem('firefly_api_key', fireflyKey);
        localStorage.setItem('selected_ai_provider', 'firefly');
        toast.success('Adobe Firefly API key saved successfully');
      } else {
        toast.error(`Please enter a valid API key for ${
          selectedProvider === 'openai' ? 'OpenAI' : 
          selectedProvider === 'stability' ? 'Stability AI' : 'Adobe Firefly'
        }`);
        return;
      }
      
      onClose();
    } catch (error) {
      toast.error('Failed to save API key');
      console.error('Error saving API key:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>AI Provider Settings</DialogTitle>
          <DialogDescription>
            Enter your AI provider API key to use the image generation feature.
            Your API key is stored locally in your browser and is never sent to our servers.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs value={selectedProvider} onValueChange={setSelectedProvider} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="firefly">Adobe Firefly</TabsTrigger>
            <TabsTrigger value="openai">OpenAI</TabsTrigger>
            <TabsTrigger value="stability">Stability AI</TabsTrigger>
          </TabsList>
          
          <TabsContent value="firefly" className="pt-4">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="firefly-key" className="col-span-4">
                  Adobe Firefly API Key
                </Label>
                <Input
                  id="firefly-key"
                  type="password"
                  value={fireflyKey}
                  onChange={(e) => setFireflyKey(e.target.value)}
                  placeholder="Your Firefly API key..."
                  className="col-span-4"
                />
                <div className="col-span-4 text-xs text-muted-foreground">
                  <p>Get your API key from the <a href="https://developer.adobe.com/console/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Adobe Developer Console</a></p>
                  <p className="mt-2">Adobe Firefly provides state-of-the-art AI image generation designed specifically for commercial use.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="openai" className="pt-4">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="openai-key" className="col-span-4">
                  OpenAI API Key
                </Label>
                <Input
                  id="openai-key"
                  type="password"
                  value={openAIKey}
                  onChange={(e) => setOpenAIKey(e.target.value)}
                  placeholder="sk-..."
                  className="col-span-4"
                />
                <div className="col-span-4 text-xs text-muted-foreground">
                  <p>Get your API key from <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">OpenAI Dashboard</a></p>
                  <p className="mt-2">This uses DALL-E models which require credits on your OpenAI account.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="stability" className="pt-4">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="stability-key" className="col-span-4">
                  Stability AI API Key
                </Label>
                <Input
                  id="stability-key"
                  type="password"
                  value={stabilityAIKey}
                  onChange={(e) => setStabilityAIKey(e.target.value)}
                  placeholder="sk-..."
                  className="col-span-4"
                />
                <div className="col-span-4 text-xs text-muted-foreground">
                  <p>Get your API key from <a href="https://platform.stability.ai/account/keys" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Stability AI Dashboard</a></p>
                  <p className="mt-2">This uses Stable Diffusion XL which requires credits on your Stability AI account.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Save API Key
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyModal;
