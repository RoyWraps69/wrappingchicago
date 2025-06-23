
import React, { useState } from 'react';
import { Send, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsletterAndLocations = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-6 uppercase text-white">Updates & Offers</h3>
      <p className="text-white/70 mb-4">
        Subscribe to our newsletter for the latest vehicle wrap trends, exclusive offers, and industry insights.
      </p>
      
      <form onSubmit={handleNewsletterSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white w-full focus:outline-none focus:border-brand-red placeholder:text-white/50"
            required
          />
          <Button type="submit" variant="gradient" size="icon" disabled={isSubmitting}>
            {isSubmitting ? <span className="animate-pulse">...</span> : <Send size={18} />}
          </Button>
        </div>
        {isSuccess && (
          <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
        )}
      </form>
      
      <h3 className="text-xl font-bold mb-4 uppercase text-white">Locations</h3>
      <div className="space-y-3">
        <div className="flex items-start gap-2 bg-gray-900 border border-gray-700 p-3 rounded-lg">
          <Globe className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-white">Chicago, IL</h4>
            <p className="text-gray-300 text-sm">Main Installation Facility</p>
          </div>
        </div>
        
        <div className="flex items-start gap-2 bg-gray-900 border border-gray-700 p-3 rounded-lg">
          <Globe className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-white">Las Vegas, NV</h4>
            <p className="text-gray-300 text-sm">West Coast Installation</p>
          </div>
        </div>
        
        <div className="flex items-start gap-2 bg-gray-900 border border-gray-700 p-3 rounded-lg">
          <Globe className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-white">Central Illinois</h4>
            <p className="text-gray-300 text-sm">Midwest Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterAndLocations;
