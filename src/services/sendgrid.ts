
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
    // Create a FormData object
    const formData = new FormData();
    
    // Add the form fields
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('service', data.service);
    formData.append('message', data.message);
    
    // Add FormSubmit specific configurations
    formData.append('_subject', `Chicago Fleet Wraps: Quote Request from ${data.name}`);
    formData.append('_replyto', data.email);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    
    // Send via fetch API directly to formsubmit.co
    const response = await fetch('https://formsubmit.co/ajax/roy@chicagofleetwraps.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Form submission error response:', errorText);
      throw new Error(`Form submission failed with status: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('Form submission result:', result);
    
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
