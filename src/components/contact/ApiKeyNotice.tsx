
import React from 'react';
import { Button } from "@/components/ui/button";
import { setApiKey } from '@/services/sendgrid';

interface ApiKeyNoticeProps {
  onApiKeySet: () => void;
}

const ApiKeyNotice = ({ onApiKeySet }: ApiKeyNoticeProps) => {
  const handleSetApiKey = () => {
    setApiKey();
    onApiKeySet();
  };

  return (
    <div className="mb-6 p-4 border border-yellow-300 bg-yellow-50 rounded-md">
      <p className="text-sm text-yellow-800 mb-2">
        SendGrid API key is required to send emails. Click the button below to set up the API key.
      </p>
      <Button onClick={handleSetApiKey} variant="outline" size="sm">
        Set SendGrid API Key
      </Button>
    </div>
  );
};

export default ApiKeyNotice;
