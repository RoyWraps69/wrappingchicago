
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="mb-8 bg-white p-6 rounded-lg border-2 border-black">
      <header>
        <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
      </header>
      
      <div className="space-y-6">
        <article className="flex items-start p-4 bg-white border-2 border-black rounded-lg hover:border-brand-red transition-colors">
          <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-black text-lg">Phone</h3>
            <a href="tel:3125971286" className="text-brand-red hover:text-red-700 font-semibold text-lg">
              (312) 597-1286
            </a>
          </div>
        </article>
        
        <article className="flex items-start p-4 bg-white border-2 border-black rounded-lg hover:border-brand-red transition-colors">
          <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-black text-lg">Email</h3>
            <a href="mailto:roy@chicagofleetwraps.com" className="text-brand-red hover:text-red-700 font-semibold">
              roy@chicagofleetwraps.com
            </a>
          </div>
        </article>
        
        <article className="flex items-start p-4 bg-white border-2 border-black rounded-lg hover:border-brand-red transition-colors">
          <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-black text-lg">Address</h3>
            <address className="text-black font-medium not-italic">
              4711 N. Lamon Ave<br />
              Chicago, IL 60630
            </address>
          </div>
        </article>
        
        <article className="flex items-start p-4 bg-white border-2 border-black rounded-lg hover:border-brand-red transition-colors">
          <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-black text-lg">Business Hours</h3>
            <div className="text-black font-medium">
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
