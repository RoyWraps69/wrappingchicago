
import React, { useEffect } from 'react';

const ContactMap = () => {
  useEffect(() => {
    // Scroll to top when contact page is visited
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-brand-navy mb-4">Find Us</h3>
      <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '300px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.123456789!2d-87.6298!3d41.8781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0x__PLACEHOLDER__!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1234567890123"
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
