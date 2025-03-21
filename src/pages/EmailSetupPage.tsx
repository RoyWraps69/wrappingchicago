
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
                The contact form is configured to forward submissions to: <strong>roy@chicagofleetwraps.com</strong>
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Simple Setup:</strong> Our contact form is set up to work directly with minimal configuration. The form will automatically send submissions to the email address you've specified.
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
                <li>Check if you receive the email at roy@chicagofleetwraps.com</li>
              </ol>
              
              <h3 className="text-xl font-bold text-brand-navy mb-2 mt-6">Change Email Recipient</h3>
              <p className="mb-4">
                If you need to change where form submissions are sent:
              </p>
              <ol className="list-decimal ml-6 space-y-2 mb-6">
                <li>Open the <code className="bg-gray-100 px-2 py-1 rounded">src/components/contact/ContactForm.tsx</code> file</li>
                <li>Find the line with <code className="bg-gray-100 px-2 py-1 rounded">value="roy@chicagofleetwraps.com"</code></li>
                <li>Change this email address to your preferred recipient</li>
              </ol>
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
