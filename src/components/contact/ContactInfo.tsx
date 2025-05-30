
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="mb-8">
      <header>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      </header>
      
      <div className="space-y-4">
        <article className="flex items-start">
          <Phone className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-1 phone-marker" />
          <div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <a href="tel:3125971286" className="text-gray-700 hover:text-brand-red">
              (312) 597-1286
            </a>
          </div>
        </article>
        
        <article className="flex items-start">
          <Mail className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-1 email-marker" />
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <a href="mailto:roy@chicagofleetwraps.com" className="text-gray-700 hover:text-brand-red">
              roy@chicagofleetwraps.com
            </a>
          </div>
        </article>
        
        <article className="flex items-start">
          <MapPin className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-1 location-marker" />
          <div>
            <h3 className="font-semibold text-gray-900">Address</h3>
            <address className="text-gray-700 not-italic">
              4711 N. Lamon Ave<br />
              Chicago, IL 60630
            </address>
          </div>
        </article>
        
        <article className="flex items-start">
          <Clock className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Business Hours</h3>
            <div className="text-gray-700 business-hours">
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ContactInfo;
