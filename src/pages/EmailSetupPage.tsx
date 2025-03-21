
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EmailSetupPage = () => {
  return (
    <>
      <Helmet>
        <title>Email Setup | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content="Email configuration settings for Chicago Fleet Wraps contact form."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            <h1 className="text-4xl font-bold text-brand-navy mb-6">Email Configuration</h1>
            
            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">EmailJS Setup Instructions</h2>
              <p className="mb-4">
                Follow these steps to configure EmailJS for the contact form:
              </p>
              
              <ol className="list-decimal ml-6 space-y-3 mb-6">
                <li>
                  <p className="font-medium">Create an EmailJS account</p>
                  <p className="text-gray-600">Go to <a href="https://www.emailjs.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">EmailJS.com</a> and create a free account.</p>
                </li>
                <li>
                  <p className="font-medium">Create an Email Service (Using Gmail)</p>
                  <p className="text-gray-600">
                    Connect your Gmail account as a service provider:
                    <ul className="list-disc ml-6 mt-2">
                      <li>In EmailJS dashboard, go to "Email Services" and click "Add New Service"</li>
                      <li>Select "Gmail" as your service provider</li>
                      <li>Follow the prompts to connect your Gmail account</li>
                      <li>Name your service and note the Service ID</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p className="font-medium">Create an Email Template</p>
                  <p className="text-gray-600">
                    Create a template with variables that match our contact form:
                    <ul className="list-disc ml-6 mt-2">
                      <li>In EmailJS dashboard, go to "Email Templates" and click "Create New Template"</li>
                      <li>Design your email template using these variables in double curly braces: from_name, from_email, from_phone, service, message</li>
                      <li>Example: "New message from &#123;&#123;from_name&#125;&#125; (&#123;&#123;from_email&#125;&#125;)"</li>
                      <li>Save your template and note the Template ID</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p className="font-medium">Get your User ID</p>
                  <p className="text-gray-600">Find your EmailJS User ID in the "Integration" section of your EmailJS dashboard.</p>
                </li>
                <li>
                  <p className="font-medium">Update the Code</p>
                  <p className="text-gray-600">Replace the placeholder values in the ContactForm.tsx file with your actual IDs:</p>
                  <pre className="bg-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                    <code>
                      const EMAILJS_SERVICE_ID = "your_service_id";<br/>
                      const EMAILJS_TEMPLATE_ID = "your_template_id";<br/>
                      const EMAILJS_USER_ID = "your_user_id";
                    </code>
                  </pre>
                </li>
              </ol>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Note:</strong> The free plan includes 200 emails per month, which should be sufficient for most small businesses. For higher volumes, consider upgrading to a paid plan.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Need Help?</h2>
              <p className="mb-4">
                If you need assistance setting up your email or have questions about EmailJS configuration,
                please contact our support team.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.emailjs.com/docs/" target="_blank" rel="noreferrer">EmailJS Documentation</a>
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default EmailSetupPage;
