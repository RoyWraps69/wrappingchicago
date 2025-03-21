
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
    
    // Using the standard HTML form submission method instead of AJAX
    // This will open a new tab briefly that redirects back to the site
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/roy@chicagofleetwraps.com';
    form.target = '_blank'; // Open in new tab to avoid page navigation
    
    // Append all form fields
    for (const [key, value] of formData.entries()) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    }
    
    // Add honeypot field to prevent spam
    const honeyInput = document.createElement('input');
    honeyInput.type = 'text';
    honeyInput.name = '_honey';
    honeyInput.style.display = 'none';
    form.appendChild(honeyInput);
    
    // Add to DOM, submit, and remove
    document.body.appendChild(form);
    form.submit();
    
    // Short timeout to make sure the form submissions completes
    // before removing the form
    setTimeout(() => {
      document.body.removeChild(form);
    }, 1000);
    
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
