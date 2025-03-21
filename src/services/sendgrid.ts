
/**
 * Service for handling SendGrid email operations
 */

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<Response> => {
  const sendgridKey = localStorage.getItem('sendgrid_api_key');
  
  if (!sendgridKey) {
    throw new Error('SendGrid API key not found');
  }

  // Prepare the email data
  const emailData = {
    personalizations: [{
      to: [{ email: 'roy@chicagofleetwraps.com' }],
      subject: `New Quote Request: ${data.service}`,
    }],
    from: { email: data.email, name: data.name },
    reply_to: { email: data.email, name: data.name },
    content: [{
      type: 'text/plain',
      value: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}

Message:
${data.message}
      `
    }]
  };

  // Send email using SendGrid API
  return fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sendgridKey}`,
    },
    body: JSON.stringify(emailData),
  });
};

export const setApiKey = (): void => {
  const key = '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';
  localStorage.setItem('sendgrid_api_key', key);
};

export const checkApiKeyExists = (): boolean => {
  const sendgridKey = localStorage.getItem('sendgrid_api_key');
  return !!sendgridKey;
};
