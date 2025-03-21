
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import SubmissionSuccess from './SubmissionSuccess';
import ContactFormFields, { FormValues } from './ContactFormFields';

const ContactForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });

  // Check for success parameter in URL to show success message after redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setSubmitted(true);
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Request a Quote</h2>
      
      {submitted ? (
        <SubmissionSuccess onReset={() => setSubmitted(false)} />
      ) : (
        <ContactFormFields 
          form={form}
          apiKeyExists={true}
        />
      )}
      
      <p className="text-xs text-gray-500 mt-4">
        * This form submits directly to roy@chicagofleetwraps.com
      </p>
    </div>
  );
};

export default ContactForm;
