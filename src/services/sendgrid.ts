
/**
 * Service for handling email operations via form submission
 */

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// FormSubmit.co is used for direct email submission
// This file is kept for compatibility with existing code
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
