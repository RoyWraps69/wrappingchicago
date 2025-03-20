
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState('');

  // Load saved API key when modal opens
  useEffect(() => {
    if (isOpen) {
      const savedKey = localStorage.getItem('stability_api_key') || '';
      setApiKey(savedKey);
    }
  }, [isOpen]);

  const handleApiKeyChange = (value: string) => {
    setApiKey(value);
  };

  const handleSave = () => {
    // Save API key to localStorage
    if (apiKey) {
      localStorage.setItem('stability_api_key', apiKey);
      toast.success("Stability AI API key saved successfully");
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Stability AI API Key</DialogTitle>
          <DialogDescription>
            Enter your Stability AI API key to generate custom wrap designs
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="stability-key">Stability AI API Key</Label>
            <Input
              id="stability-key"
              type="password"
              placeholder="Enter your Stability AI API key"
              value={apiKey}
              onChange={(e) => handleApiKeyChange(e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Get your API key from the <a href="https://platform.stability.ai/account/keys" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Stability AI dashboard</a>. 
              Their SDXL model specializes in detailed graphics.
            </p>
          </div>
        </div>

        <DialogFooter className="flex justify-between items-center pt-4 sm:justify-between">
          <p className="text-sm text-gray-500">
            Your API key is stored locally in your browser.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyModal;
