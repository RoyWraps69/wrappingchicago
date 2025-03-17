
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { AlertCircle, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [fireflyKey, setFireflyKey] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      // Load saved key when modal opens
      const savedFireflyKey = localStorage.getItem('firefly_api_key') || '';
      setFireflyKey(savedFireflyKey);
      setErrorMessage(null);
    }
  }, [isOpen]);

  const validateApiKey = (key: string): boolean => {
    // Basic validation for API key format
    if (!key.trim()) {
      setErrorMessage("API key cannot be empty");
      return false;
    }
    
    if (key.trim().length < 20) {
      setErrorMessage("API key seems too short. Adobe Firefly API keys are typically longer");
      return false;
    }
    
    setErrorMessage(null);
    return true;
  };

  const handleSave = () => {
    try {
      if (!validateApiKey(fireflyKey)) {
        toast.error(errorMessage || 'Invalid API key');
        return;
      }
      
      // Trim whitespace from the API key to avoid authentication issues
      localStorage.setItem('firefly_api_key', fireflyKey.trim());
      toast.success('Adobe Firefly API key saved successfully');
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
        
        <Alert variant="default" className="border-blue-500 bg-blue-50 text-blue-800">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            You need an Adobe Firefly Embed API key for this feature to work properly.
          </AlertDescription>
        </Alert>
        
        {errorMessage && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        
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
            <div className="col-span-4 text-xs text-muted-foreground space-y-2">
              <p>
                <a 
                  href="https://developer.adobe.com/firefly-services/docs/guides/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:underline inline-flex items-center"
                >
                  Adobe Firefly API Documentation <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </p>
              
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <p className="font-medium mb-1">Getting your Adobe Firefly Embed API key:</p>
                <ol className="list-decimal ml-4 space-y-1">
                  <li>Register for the Adobe Firefly Embed service</li>
                  <li>Create a project in the Adobe Developer Console</li>
                  <li>Add the Firefly API service to your project</li>
                  <li>Generate API credentials for the service</li>
                  <li>Copy the API key (not the client secret or client ID)</li>
                </ol>
              </div>
              
              <p className="text-red-600 font-medium">
                Note: If you're seeing authentication errors after saving your key, please verify that:
              </p>
              <ul className="list-disc ml-4 text-red-600">
                <li>Your API key is specifically for the Firefly Embed service</li>
                <li>Your API key has not expired or been revoked</li>
                <li>You've copied the entire key without any extra spaces</li>
              </ul>
              
              <p>The Adobe Firefly API is a premium service and requires an Adobe subscription with Firefly access.</p>
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
