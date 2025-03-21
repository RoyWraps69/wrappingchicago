
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { checkStabilityBalance } from '@/services/stability';
import { Badge } from '@/components/ui/badge';
import { Wallet, RefreshCw } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);

  // Load saved API key when modal opens
  useEffect(() => {
    if (isOpen) {
      const savedKey = localStorage.getItem('stability_api_key') || '';
      setApiKey(savedKey);
      
      // Check balance if there's a saved key
      if (savedKey) {
        verifyApiKeyAndBalance(savedKey, false);
      }
    }
  }, [isOpen]);

  const handleApiKeyChange = (value: string) => {
    setApiKey(value);
    setBalance(null);
  };

  const verifyApiKeyAndBalance = async (key: string, showToast = true) => {
    setIsVerifying(true);
    
    // Store key temporarily for balance check
    localStorage.setItem('stability_api_key', key);
    
    try {
      const credits = await checkStabilityBalance();
      setBalance(credits);
      
      if (credits !== null) {
        if (showToast) {
          toast.success("API key verified successfully!");
        }
        return true;
      } else {
        if (showToast) {
          toast.error("Could not verify API key. Please check and try again.");
        }
        return false;
      }
    } catch (error) {
      console.error("Error verifying API key:", error);
      if (showToast) {
        toast.error("Failed to verify API key");
      }
      return false;
    } finally {
      setIsVerifying(false);
    }
  };

  const handleVerify = async () => {
    if (!apiKey) {
      toast.error("Please enter an API key");
      return;
    }
    
    verifyApiKeyAndBalance(apiKey);
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
          
          {/* API Key verification */}
          <div className="flex items-center justify-between">
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              onClick={handleVerify}
              disabled={!apiKey || isVerifying}
            >
              {isVerifying ? (
                <>
                  <RefreshCw className="mr-2 h-3 w-3 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Key"
              )}
            </Button>
            
            {balance !== null && (
              <div className="flex items-center">
                <Wallet className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-700 mr-2">Credits:</span>
                <Badge variant={balance > 0 ? "success" : "destructive"} className="px-2 py-0">
                  {balance.toFixed(2)}
                </Badge>
              </div>
            )}
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
