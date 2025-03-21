
import React from 'react';
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface ApiKeyNoticeProps {
  onDismiss: () => void;
}

const ApiKeyNotice = ({ onDismiss }: ApiKeyNoticeProps) => {
  return (
    <div className="mb-6 p-4 border border-amber-300 bg-amber-50 rounded-md">
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-amber-800 mb-2 font-medium">
            Important: Two-Step Submission Process
          </p>
          <p className="text-sm text-amber-700 mb-2">
            After clicking "Submit Request", your email app will open with your message pre-filled.
            <strong className="font-semibold"> You must click SEND in your email app to complete your request</strong>.
          </p>
          <Button onClick={onDismiss} variant="outline" size="sm" className="mt-1">
            I understand
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyNotice;
