
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import MXRecordsTable, { MXRecord } from '@/components/email/MXRecordsTable';

const EmailSetupPage = () => {
  // Example MX records - you'll replace these with your actual MX records
  const exampleMXRecords: MXRecord[] = [
    { priority: 10, host: '@', pointsTo: 'mx1.example.com', ttl: '3600' },
    { priority: 20, host: '@', pointsTo: 'mx2.example.com', ttl: '3600' },
    { priority: 30, host: '@', pointsTo: 'mx3.example.com', ttl: '3600' },
  ];

  return (
    <>
      <Helmet>
        <title>Email Setup | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content="Email configuration settings for Chicago Fleet Wraps domain."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            <h1 className="text-4xl font-bold text-brand-navy mb-6">Email Configuration</h1>
            
            <div className="prose max-w-none mb-8">
              <p className="text-lg">
                Configure your email settings using the MX records below. These records 
                need to be added to your domain's DNS settings to properly route emails.
              </p>
            </div>
            
            <MXRecordsTable 
              records={exampleMXRecords}
              title="Email Server MX Records"
              description="Add these MX records to your domain's DNS settings to configure your email service."
            />
            
            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Need Help?</h2>
              <p className="mb-4">
                If you need assistance setting up your email or have questions about the MX records,
                please contact our support team.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-brand-red hover:bg-red-700 text-white py-2 px-6 rounded transition-colors"
                >
                  Contact Support
                </a>
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
