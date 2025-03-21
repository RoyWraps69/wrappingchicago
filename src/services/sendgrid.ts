
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

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    // Format the email data for submission
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('service', data.service);
    formData.append('message', data.message);
    
    // Send a POST request to a serverless function endpoint or email service
    const response = await fetch('https://formsubmit.co/roy@chicagofleetwraps.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    
    return;
  } catch (error) {
    console.error('Email submission error:', error);
    throw error;
  }
};

// These functions are maintained for backward compatibility
export const setApiKey = (): void => {
  // No longer needed
  return;
};

export const checkApiKeyExists = (): boolean => {
  // Always return true since we don't need an API key anymore
  return true;
};
