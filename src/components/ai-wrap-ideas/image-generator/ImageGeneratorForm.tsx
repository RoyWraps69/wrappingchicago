
import React, { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ImageIcon, RefreshCw, Wallet, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { checkStabilityBalance } from '@/services/stability';
import { Badge } from '@/components/ui/badge';

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
    const checkBalance = async () => {
      setIsCheckingBalance(true);
      try {
        const credits = await checkStabilityBalance();
        setBalance(credits);
      } catch (error) {
        console.error("Failed to check balance:", error);
      } finally {
        setIsCheckingBalance(false);
      }
    };

    const apiKey = localStorage.getItem('stability_api_key');
    if (apiKey) {
      checkBalance();
    } else {
      setBalance(null);
    }
  }, []);

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
      
      {/* Account balance indicator */}
      {localStorage.getItem('stability_api_key') && (
        <div className="flex items-center mb-4 text-sm">
          <Wallet className="h-4 w-4 mr-2 text-gray-500" />
          {isCheckingBalance ? (
            <span className="text-gray-500">Checking account balance...</span>
          ) : balance !== null ? (
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Stability AI Credits:</span>
              <Badge variant={balance > 0 ? "default" : "destructive"} className="px-2 py-0">
                {balance.toFixed(2)}
              </Badge>
            </div>
          ) : (
            <span className="text-gray-500">Unable to check balance</span>
          )}
        </div>
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
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Your Stability AI account has insufficient credits. Please add credits to continue generating images.
          </AlertDescription>
        </Alert>
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
