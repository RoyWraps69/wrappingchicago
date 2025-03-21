
import React from 'react';
import { Button } from "@/components/ui/button";

interface ApiKeyNoticeProps {
  onDismiss: () => void;
}

const ApiKeyNotice = ({ onDismiss }: ApiKeyNoticeProps) => {
  return (
    <div className="mb-6 p-4 border border-blue-300 bg-blue-50 rounded-md">
      <p className="text-sm text-blue-800 mb-2">
        The contact form will open your default email client (Gmail or other) to send the message.
      </p>
      <Button onClick={onDismiss} variant="outline" size="sm">
        Got it
      </Button>
    </div>
  );
};

export default ApiKeyNotice;
