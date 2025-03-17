
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
      setErrorMessage("API key seems too short. Adobe Express client IDs are typically longer");
      return false;
    }
    
    // Check for common formatting issues
    if (key.includes(' ')) {
      setErrorMessage("API key contains spaces. Please remove any spaces from your client ID");
      return false;
    }
    
    setErrorMessage(null);
    return true;
  };

  const handleSave = () => {
    try {
      if (!validateApiKey(fireflyKey)) {
        toast.error(errorMessage || 'Invalid client ID');
        return;
      }
      
      // Trim whitespace from the API key to avoid authentication issues
      localStorage.setItem('firefly_api_key', fireflyKey.trim());
      toast.success('Adobe Express client ID saved successfully');
      onClose();
    } catch (error) {
      toast.error('Failed to save client ID');
      console.error('Error saving client ID:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adobe Express SDK Settings</DialogTitle>
          <DialogDescription>
            Enter your Adobe Express client ID to use the image generation feature.
            Your client ID is stored locally in your browser and is never sent to our servers.
          </DialogDescription>
        </DialogHeader>
        
        <Alert variant="default" className="border-blue-500 bg-blue-50 text-blue-800">
          <Info className="h-4 w-4" />
          <AlertDescription>
            This feature requires an Adobe Express <strong>client ID</strong> from the Developer Console.
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
              Adobe Express Client ID
            </Label>
            <Input
              id="firefly-key"
              type="password"
              value={fireflyKey}
              onChange={(e) => setFireflyKey(e.target.value)}
              placeholder="Enter your Adobe Express client ID..."
              className="col-span-4"
            />
            <div className="col-span-4 text-xs text-muted-foreground space-y-2">
              <p>
                <a 
                  href="https://developer.adobe.com/express/embed-sdk/docs/guides/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:underline inline-flex items-center"
                >
                  Adobe Express Embed SDK Documentation <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </p>
              
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <p className="font-medium mb-1">Getting your Adobe Express client ID:</p>
                <ol className="list-decimal ml-4 space-y-1">
                  <li>Sign up as an Adobe developer at <a href="https://developer.adobe.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">developer.adobe.com</a></li>
                  <li>Create a new project in the Developer Console</li>
                  <li>Add the "Creative Cloud Embed API" to your project</li>
                  <li>Create credentials and copy your client ID</li>
                  <li>Add your domain to the allowed domains list</li>
                </ol>
              </div>
              
              <p className="text-red-600 font-medium mt-2">
                Common authentication issues:
              </p>
              <ul className="list-disc ml-4 text-red-600">
                <li>Using an API key instead of a client ID</li>
                <li>Not adding your domain to allowed domains</li>
                <li>Using an expired or revoked client ID</li>
                <li>Copy-pasting with extra spaces or characters</li>
              </ul>
              
              <p className="mt-2">Adobe Express is available with free tier limitations. Check Adobe's documentation for details.</p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Save Client ID
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyModal;
