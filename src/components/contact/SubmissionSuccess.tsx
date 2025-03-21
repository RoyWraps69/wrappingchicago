
import React from 'react';
import { Check, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface SubmissionSuccessProps {
  onReset: () => void;
}

const SubmissionSuccess = ({ onReset }: SubmissionSuccessProps) => {
  return (
    <div className="text-center py-8">
      <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <Check className="h-6 w-6 text-green-600" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">First Step Complete!</h3>
      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4 max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-5 w-5 text-amber-600" />
          <p className="text-amber-800 font-medium">Action Required</p>
        </div>
        <p className="text-gray-600 text-sm text-left">
          Your email app should now be open with your request ready to send. 
          <strong className="font-bold"> Please click SEND in your email app to complete your submission.</strong>
        </p>
      </div>
      <p className="text-gray-600 mb-4">We'll get back to you as soon as possible after receiving your email.</p>
      <Button 
        onClick={onReset}
        className="mt-4"
      >
        Submit Another Request
      </Button>
    </div>
  );
};

export default SubmissionSuccess;
