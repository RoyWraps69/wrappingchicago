
import React from 'react';
import { Check } from 'lucide-react';
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
      <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h3>
      <p className="text-gray-600 mb-4">
        Your message has been sent to roy@chicagofleetwraps.com. We'll review your request and get back to you as soon as possible.
      </p>
      <p className="text-gray-500 text-sm mb-6">
        If you don't receive a response within 24 hours, please check your spam folder or call us directly at (773) 455-0467.
      </p>
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
