
import React, { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ImageIcon, RefreshCw, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { checkStabilityBalance } from '@/services/stability';
import { toast } from 'sonner';

interface ImageGeneratorFormProps {
  imagePrompt: string;
  setImagePrompt: (value: string) => void;
  onGenerateImage: () => void;
  isGeneratingImage: boolean;
  errorMessage?: string;
  progress: number;
}

export const ImageGeneratorForm: React.FC<ImageGeneratorFormProps> = ({
  imagePrompt,
  setImagePrompt,
  onGenerateImage,
  isGeneratingImage,
  errorMessage,
  progress
}) => {
  const [balance, setBalance] = useState<number | null>(null);
  const [isCheckingBalance, setIsCheckingBalance] = useState(false);

  // Check account balance on component mount and when API key changes
  useEffect(() => {
    checkBalance();
  }, []);

  const checkBalance = async () => {
    setIsCheckingBalance(true);
    try {
      const apiKey = localStorage.getItem('stability_api_key');
      if (!apiKey) {
        setBalance(null);
        return;
      }
      
      const credits = await checkStabilityBalance();
      setBalance(credits);
    } catch (error) {
      console.error("Failed to check balance:", error);
    } finally {
      setIsCheckingBalance(false);
    }
  };

  const handleRefreshBalance = () => {
    checkBalance();
    toast.info("Refreshing Stability AI account balance...");
  };

  return (
    <>
      {errorMessage && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {errorMessage}
          </AlertDescription>
        </Alert>
      )}
      
      <div className="mb-4">
        <label htmlFor="imagePrompt" className="block text-sm font-medium text-gray-700 mb-1">
          Describe Your Ideal Wrap Design
        </label>
        <Textarea
          id="imagePrompt"
          placeholder="Example: A sleek black van with green gradient stripes and modern typography for a landscaping business"
          value={imagePrompt}
          onChange={(e) => setImagePrompt(e.target.value)}
          rows={5}
          className="w-full"
        />
      </div>
      
      <Button
        onClick={onGenerateImage}
        disabled={isGeneratingImage || (balance !== null && balance <= 0)}
        className="w-full bg-brand-navy hover:bg-blue-800 text-white py-3 h-auto mb-6"
      >
        {isGeneratingImage ? (
          <>
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            Creating Your Design...
          </>
        ) : (
          <>
            <ImageIcon className="mr-2 h-4 w-4" />
            Generate Custom Design
          </>
        )}
      </Button>
      
      {balance !== null && balance <= 0 && !errorMessage && (
        <div className="space-y-3 mb-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Your Stability AI account has insufficient credits. Please add credits to continue generating images.
            </AlertDescription>
          </Alert>
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRefreshBalance} 
              className="text-xs"
            >
              <RefreshCw className="mr-2 h-3 w-3" />
              I've Added Credits
            </Button>
          </div>
        </div>
      )}
      
      {isGeneratingImage && (
        <ProgressIndicator progress={progress} />
      )}
    </>
  );
};

// Sub-component for progress indicator
const ProgressIndicator: React.FC<{
  progress: number;
}> = ({ progress }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-500 mb-1">
        <span>Generating design</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
      <p className="text-xs text-gray-500 mt-2">
        Creating your custom wrap design with Stability AI.
        This typically takes 5-10 seconds with Stability AI's SDXL model.
      </p>
    </div>
  );
};
