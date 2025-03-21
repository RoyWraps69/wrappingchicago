
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
    
    // Add special FormSubmit configurations
    formData.append('_subject', `Chicago Fleet Wraps: Quote Request from ${data.name}`);
    formData.append('_captcha', 'false'); // Disable captcha
    formData.append('_template', 'table'); // Use table template for better readability
    formData.append('_replyto', data.email); // Ensure reply-to is set to sender
    formData.append('_next', window.location.href); // Current URL for redirect
    
    // Using the standard endpoint instead of AJAX for more reliable delivery
    const response = await fetch('https://formsubmit.co/roy@chicagofleetwraps.com', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      console.error('FormSubmit error response status:', response.status);
      throw new Error(`Failed to send email: ${response.status}`);
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
