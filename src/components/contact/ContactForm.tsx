
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
      
      console.log('Email client opened successfully!');
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Email Client Opened",
        description: "Complete the process in your email client to send your request.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Failed to open email client:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Request Failed",
        description: "There was an error opening your email client. Please contact us directly.",
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
