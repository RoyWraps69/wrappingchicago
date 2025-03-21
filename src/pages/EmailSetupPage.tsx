
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const EmailSetupPage = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    const storedKey = localStorage.getItem('sendgrid_api_key');
    setHasKey(!!storedKey);
    if (storedKey) {
      // Mask the key for display
      setApiKey('•'.repeat(20) + storedKey.slice(-5));
    }
  }, []);

  const handleSaveApiKey = () => {
    localStorage.setItem('sendgrid_api_key', apiKey);
    setHasKey(true);
    toast({
      title: "API Key Saved",
      description: "SendGrid API key has been saved to your browser.",
    });
  };

  const handleClearApiKey = () => {
    localStorage.removeItem('sendgrid_api_key');
    setApiKey('');
    setHasKey(false);
    toast({
      title: "API Key Removed",
      description: "SendGrid API key has been removed from your browser.",
    });
  };

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
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>SendGrid Configuration:</strong> The contact form uses SendGrid to send emails. You need to provide your SendGrid API key below.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-md mb-6">
                <h3 className="text-lg font-semibold mb-2">SendGrid API Key</h3>
                {hasKey ? (
                  <div>
                    <p className="mb-2">Current API key: <code className="bg-gray-100 px-2 py-1 rounded">{apiKey}</code></p>
                    <Button onClick={handleClearApiKey} variant="outline" size="sm">Remove API Key</Button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Input 
                      type="password" 
                      value={apiKey} 
                      onChange={(e) => setApiKey(e.target.value)} 
                      placeholder="Enter your SendGrid API key"
                      className="max-w-md"
                    />
                    <div>
                      <Button 
                        onClick={handleSaveApiKey} 
                        disabled={!apiKey} 
                        size="sm"
                      >
                        Save API Key
                      </Button>
                    </div>
                  </div>
                )}
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
              
              <h3 className="text-xl font-bold text-brand-navy mb-2 mt-6">Security Notice</h3>
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 mb-6">
                <p className="text-sm">
                  <strong>Important:</strong> The API key is stored only in your browser's local storage. For production use, 
                  this should be handled server-side or through environment variables for better security. Consider using a backend 
                  service or serverless function to handle email sending in production.
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
