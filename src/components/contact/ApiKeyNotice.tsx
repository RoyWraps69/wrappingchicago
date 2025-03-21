
import React from 'react';
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface ApiKeyNoticeProps {
  onDismiss: () => void;
}

const ApiKeyNotice = ({ onDismiss }: ApiKeyNoticeProps) => {
  return (
    <div className="mb-6 p-4 border border-blue-300 bg-blue-50 rounded-md">
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-blue-800 mb-2 font-medium">
            Get Your Free Vehicle Wrap Quote
          </p>
          <p className="text-sm text-blue-700 mb-2">
            Fill out the form below to request pricing information for your vehicle wrap project. One of our specialists will review your request and contact you promptly.
          </p>
          <Button onClick={onDismiss} variant="outline" size="sm" className="mt-1">
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyNotice;
