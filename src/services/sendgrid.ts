
/**
 * Service for handling email operations via FormSubmit.co
 * This file is maintained for compatibility with existing code
 */

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// This service is no longer actively used since we're using FormSubmit.co
// These methods are kept for backward compatibility
export const sendEmail = async (data: EmailData): Promise<void> => {
  console.log('Email would be sent with the following data:', data);
  // No implementation needed as FormSubmit.co handles the actual sending
  return Promise.resolve();
};

export const setApiKey = (): void => {
  // No longer needed with FormSubmit.co
  return;
};

export const checkApiKeyExists = (): boolean => {
  // Always return true since we're using FormSubmit.co which doesn't require an API key
  return true;
};
