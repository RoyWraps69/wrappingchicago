
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
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Contact Form Setup</h2>
              <p className="mb-4">
                The contact form is configured to open your default email client with a pre-filled message addressed to: <strong>roy@chicagofleetwraps.com</strong>
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Simple Email Configuration:</strong> When a user submits the contact form, their default email client (like Gmail) will open with all the information pre-filled. They just need to click send.
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-brand-navy mb-2 mt-6">Testing the Form</h3>
              <p className="mb-4">
                To test if your contact form is working correctly:
              </p>
              <ol className="list-decimal ml-6 space-y-2 mb-6">
                <li>Go to your <Link to="/contact" className="text-blue-600 hover:underline">Contact page</Link></li>
                <li>Fill out the form with test information</li>
                <li>Submit the form</li>
                <li>Your default email client will open with a pre-filled message</li>
                <li>Simply send the email to complete the test</li>
              </ol>
              
              <div className="p-4 bg-green-50 border-l-4 border-green-400 mb-6">
                <p className="text-sm">
                  <strong>Simple and Secure:</strong> This approach doesn't require any API keys or external services. It uses the visitor's own email client to send the message, which is simple and reliable.
                </p>
              </div>
            </Card>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Need Help?</h2>
              <p className="mb-4">
                If you need assistance with your contact form or have any questions,
                please don't hesitate to reach out.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button asChild>
                  <a href="mailto:support@chicagofleetwraps.com">Email Support</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
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
