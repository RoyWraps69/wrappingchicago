
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { checkApiKeyExists } from '@/services/sendgrid';
import ContactFormFields, { FormValues } from './ContactFormFields';
import SubmissionSuccess from './SubmissionSuccess';

const ContactForm = () => {
  const [apiKeyExists, setApiKeyExists] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });

  useEffect(() => {
    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setIsSubmitted(true);
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }
    
    setApiKeyExists(checkApiKeyExists());
  }, []);

  const handleReset = () => {
    setIsSubmitted(false);
    form.reset();
  };

  if (isSubmitted) {
    return <SubmissionSuccess onReset={handleReset} />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-navy mb-6">Request a Quote</h2>
      <ContactFormFields form={form} apiKeyExists={apiKeyExists} />
    </div>
  );
};

export default ContactForm;
