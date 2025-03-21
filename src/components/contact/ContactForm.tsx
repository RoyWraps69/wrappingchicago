
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { sendEmail } from '@/services/sendgrid';
import ApiKeyNotice from './ApiKeyNotice';
import SubmissionSuccess from './SubmissionSuccess';
import ContactFormFields, { FormValues } from './ContactFormFields';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showNotice, setShowNotice] = useState(true);
  
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
      await sendEmail(data);
      console.log('Email client opened');
      
      // We'll show success state even if the email client may not have opened
      // The user will see their email client open anyway
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Email Client Opening",
        description: "Your default email client should be opening. Please complete sending the email there.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Failed to process email request:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Request Failed",
        description: "There was an error opening your email client. Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const handleDismissNotice = () => {
    setShowNotice(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Request a Quote</h2>
      
      {showNotice && <ApiKeyNotice onDismiss={handleDismissNotice} />}
      
      {submitted ? (
        <SubmissionSuccess onReset={() => setSubmitted(false)} />
      ) : (
        <ContactFormFields 
          form={form} 
          onSubmit={handleSubmit} 
          isSubmitting={isSubmitting} 
          apiKeyExists={true} // Always true now since we don't need API key
        />
      )}
    </div>
  );
};

export default ContactForm;
