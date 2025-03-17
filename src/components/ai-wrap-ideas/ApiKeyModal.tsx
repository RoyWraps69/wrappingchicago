
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { AlertCircle, ExternalLink, Info } from 'lucide-react';
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
    // Enhanced validation for API key format
    if (!key.trim()) {
      setErrorMessage("API key cannot be empty");
      return false;
    }
    
    if (key.trim().length < 20) {
      setErrorMessage("API key seems too short. Adobe Firefly Embed API keys are typically longer");
      return false;
    }
    
    // Check for common formatting issues
    if (key.includes(' ')) {
      setErrorMessage("API key contains spaces. Please remove any spaces from your API key");
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
            Enter your Adobe Firefly Embed API key to use the image generation feature.
            Your API key is stored locally in your browser and is never sent to our servers.
          </DialogDescription>
        </DialogHeader>
        
        <Alert variant="default" className="border-blue-500 bg-blue-50 text-blue-800">
          <Info className="h-4 w-4" />
          <AlertDescription>
            This feature requires an Adobe Firefly <strong>Embed API key</strong>, not a regular API key.
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
              Adobe Firefly Embed API Key
            </Label>
            <Input
              id="firefly-key"
              type="password"
              value={fireflyKey}
              onChange={(e) => setFireflyKey(e.target.value)}
              placeholder="Enter your Firefly Embed API key..."
              className="col-span-4"
            />
            <div className="col-span-4 text-xs text-muted-foreground space-y-2">
              <p>
                <a 
                  href="https://developer.adobe.com/firefly-services/docs/guides/embedding/api-key/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:underline inline-flex items-center"
                >
                  Adobe Firefly Embed API Documentation <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </p>
              
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <p className="font-medium mb-1">Getting your Adobe Firefly Embed API key:</p>
                <ol className="list-decimal ml-4 space-y-1">
                  <li>Sign up for the Adobe Firefly API at <a href="https://developer.adobe.com/firefly-services/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">developer.adobe.com</a></li>
                  <li>Create a new project in the Developer Console</li>
                  <li>Add the "Firefly Image API" to your project</li>
                  <li>Generate <strong>Embed API credentials</strong> (not Service credentials)</li>
                  <li>Copy the API key (NOT client ID or client secret)</li>
                </ol>
              </div>
              
              <p className="text-red-600 font-medium mt-2">
                Common authentication issues:
              </p>
              <ul className="list-disc ml-4 text-red-600">
                <li>Using a regular API key instead of an Embed API key</li>
                <li>Using a Client ID or Client Secret instead of the API key</li>
                <li>Using an expired or revoked API key</li>
                <li>Copy-pasting with extra spaces or characters</li>
              </ul>
              
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
