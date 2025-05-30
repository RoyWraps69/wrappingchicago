
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactItem from '@/components/location/ContactItem';

const ContactDetails = () => {
  return (
    <div className="space-y-4 mb-8">
      <ContactItem icon={MapPin} title="Address">
        <span>4711 N. Lamon Ave<br />Chicago, IL 60630</span>
      </ContactItem>
      
      <ContactItem icon={Phone} title="Phone">
        <a href="tel:3125971286" className="text-brand-red hover:underline">
          (312) 597-1286
        </a>
      </ContactItem>
      
      <ContactItem icon={Mail} title="Email">
        <a href="mailto:roy@chicagofleetwraps.com" className="text-brand-red hover:underline">
          roy@chicagofleetwraps.com
        </a>
      </ContactItem>
      
      <ContactItem icon={Clock} title="Hours">
        <span>Monday - Friday: 9am - 5pm<br />Saturday: By appointment<br />Sunday: Closed</span>
      </ContactItem>
    </div>
  );
};

export default ContactDetails;
