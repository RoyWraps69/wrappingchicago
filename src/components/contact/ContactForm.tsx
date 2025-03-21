
import React, { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { sendEmail, checkApiKeyExists } from '@/services/sendgrid';
import ApiKeyNotice from './ApiKeyNotice';
import SubmissionSuccess from './SubmissionSuccess';
import ContactFormFields, { FormValues } from './ContactFormFields';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiKeyExists, setApiKeyExists] = useState(false);
  
  useEffect(() => {
    // Check if API key exists in localStorage
    setApiKeyExists(checkApiKeyExists());
  }, []);
  
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });

  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await sendEmail(data);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`SendGrid API error: ${response.status} ${errorText}`);
      }
      
      console.log('Email sent successfully!');
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Request Submitted",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Email failed to send:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Request Failed",
        description: "There was an error sending your request. Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const handleApiKeySet = () => {
    setApiKeyExists(true);
    
    toast({
      title: "API Key Saved",
      description: "SendGrid API key has been saved to your browser.",
    });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Request a Quote</h2>
      
      {!apiKeyExists && <ApiKeyNotice onApiKeySet={handleApiKeySet} />}
      
      {submitted ? (
        <SubmissionSuccess onReset={() => setSubmitted(false)} />
      ) : (
        <ContactFormFields 
          form={form} 
          onSubmit={handleSubmit} 
          isSubmitting={isSubmitting} 
          apiKeyExists={apiKeyExists} 
        />
      )}
    </div>
  );
};

export default ContactForm;
