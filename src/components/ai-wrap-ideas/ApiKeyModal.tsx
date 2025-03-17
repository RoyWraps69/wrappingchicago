
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [fireflyKey, setFireflyKey] = useState('');
  
  useEffect(() => {
    if (isOpen) {
      // Load saved key when modal opens
      const savedFireflyKey = localStorage.getItem('firefly_api_key') || '';
      setFireflyKey(savedFireflyKey);
    }
  }, [isOpen]);

  const handleSave = () => {
    try {
      if (fireflyKey) {
        // Trim whitespace from the API key to avoid authentication issues
        localStorage.setItem('firefly_api_key', fireflyKey.trim());
        toast.success('Adobe Firefly API key saved successfully');
      } else {
        toast.error('Please enter a valid API key for Adobe Firefly');
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
          <DialogTitle>Adobe Firefly API Settings</DialogTitle>
          <DialogDescription>
            Enter your Adobe Firefly API key to use the image generation feature.
            Your API key is stored locally in your browser and is never sent to our servers.
          </DialogDescription>
        </DialogHeader>
        
        <Alert variant="default" className="border-amber-500 bg-amber-50 text-amber-800">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Adobe Firefly requires a specific authentication format. You need to provide both a Client ID 
            and obtain an Access Token for API access.
          </AlertDescription>
        </Alert>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firefly-key" className="col-span-4">
              Adobe Firefly API Key (OAuth Access Token)
            </Label>
            <Input
              id="firefly-key"
              type="password"
              value={fireflyKey}
              onChange={(e) => setFireflyKey(e.target.value)}
              placeholder="Your Firefly OAuth Access Token..."
              className="col-span-4"
            />
            <div className="col-span-4 text-xs text-muted-foreground">
              <p>Get your API credentials from the <a href="https://developer.adobe.com/console/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Adobe Developer Console</a></p>
              <p className="mt-2">To generate valid credentials for Firefly:</p>
              <ol className="list-decimal ml-4 mt-1">
                <li>Create an Adobe Developer account</li>
                <li>Create a new project in the Console</li>
                <li>Add the Firefly API to your project</li>
                <li>Create an OAuth API credential (Web OAuth 2.0)</li>
                <li>Generate an Access Token using your OAuth credentials</li>
                <li>Paste the Access Token here (not the Client ID)</li>
              </ol>
              <p className="mt-2 text-red-600 font-medium">Important: For the Adobe Firefly API v2, you need an OAuth Access Token, not just the Client ID.</p>
              <p className="mt-2">The Adobe Firefly API is a premium service and requires an Adobe subscription with Firefly access.</p>
            </div>
          </div>
        </div>

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
