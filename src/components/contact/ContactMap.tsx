
import React from 'react';

const ContactMap = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-brand-navy mb-4">Find Us</h3>
      <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '300px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.123456789!2d-87.7454321!3d41.9654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU3JzU1LjYiTiA4N8KwNDQnNDMuNiJX!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wrapping Chicago Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
