
/**
 * Service for handling email operations via mailto links
 */

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  const subject = encodeURIComponent(`New Quote Request: ${data.service}`);
  const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}

Message:
${data.message}
  `);

  // Create mailto link to open Gmail or default email client
  const mailtoLink = `mailto:roy@chicagofleetwraps.com?subject=${subject}&body=${body}`;
  
  // Open the email client
  window.open(mailtoLink, '_blank');
};

// These functions are maintained for backward compatibility but simplified
export const setApiKey = (): void => {
  // No longer needed but kept for compatibility
  return;
};

export const checkApiKeyExists = (): boolean => {
  // Always return true since we don't need an API key anymore
  return true;
};
