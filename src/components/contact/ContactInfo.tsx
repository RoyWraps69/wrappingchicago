
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-brand-navy mb-6">Get in Touch</h2>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <Phone className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-brand-navy">Phone</h3>
            <a href="tel:3125971286" className="text-gray-700 hover:text-brand-red">
              (312) 597-1286
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-brand-navy">Email</h3>
            <a href="mailto:info@wrappingchicago.com" className="text-gray-700 hover:text-brand-red">
              info@wrappingchicago.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-brand-navy">Address</h3>
            <p className="text-gray-700">
              4711 N. Lamon Ave<br />
              Chicago, IL 60630
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-brand-navy">Hours</h3>
            <p className="text-gray-700">
              Monday - Friday: 9:00 AM - 5:00 PM<br />
              Saturday: By Appointment<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
