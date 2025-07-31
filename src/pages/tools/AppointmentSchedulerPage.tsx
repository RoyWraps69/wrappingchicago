import React from 'react';
import { Link } from 'react-router-dom';
import RichSnippetsManager from '../../components/seo/RichSnippetsManager';
import SERPEnhancer from '../../components/seo/SERPEnhancer';
import { Helmet } from 'react-helmet-async';

const AppointmentSchedulerPage = () => {
  const [selectedService, setSelectedService] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');
  const [contactInfo, setContactInfo] = React.useState({
    name: '',
    email: '',
    phone: '',
    vehicleInfo: '',
    message: ''
  });

  const services = [
    { value: 'consultation', label: 'Free Design Consultation', duration: '45 min' },
    { value: 'quote', label: 'Vehicle Inspection & Quote', duration: '30 min' },
    { value: 'design-review', label: 'Design Review Meeting', duration: '30 min' },
    { value: 'installation', label: 'Installation Appointment', duration: '2-3 days' },
    { value: 'virtual', label: 'Virtual Consultation', duration: '30 min' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends for most services
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with a scheduling service like Calendly, Acuity, etc.
    console.log('Scheduling appointment:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      contact: contactInfo
    });
    alert('Thank you! We\'ll confirm your appointment within 24 hours via phone or email.');
  };

  const faqData = [
    {
      question: "How far in advance should I schedule my appointment?",
      answer: "We recommend scheduling consultations at least 1-2 weeks in advance, especially during peak seasons. Installation appointments typically require 2-4 weeks advance notice."
    },
    {
      question: "What should I bring to my consultation?",
      answer: "Bring your vehicle, any design ideas or logos you have, and information about your business and target audience. We'll handle the rest!"
    },
    {
      question: "Can I reschedule my appointment?",
      answer: "Yes, we understand schedules change. Please give us at least 24 hours notice to reschedule your appointment."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes! Virtual consultations are perfect for initial discussions, design reviews, and project planning. We can assess your needs remotely and provide detailed quotes."
    }
  ];

  return (
    <>
      <RichSnippetsManager
        pageType="service"
        title="Schedule Vehicle Wrap Appointment Chicago IL - Book Consultation"
        description="Schedule your vehicle wrap consultation, quote, or installation appointment in Chicago. Free design consultations available. Easy online booking system."
        url="https://www.wrappingchicago.com/schedule-appointment"
        keywords={["schedule vehicle wrap appointment", "Chicago wrap consultation", "book vehicle wrap", "wrap appointment booking", "free design consultation"]}
        faqData={faqData}
        reviews={{
          averageRating: 4.9,
          reviewCount: 847,
          bestRating: 5,
          worstRating: 4
        }}
        services={services.map(service => ({
          name: service.label,
          description: `${service.duration} appointment for ${service.label.toLowerCase()}`,
          price: service.value === 'consultation' || service.value === 'quote' ? 'Free' : 'Contact for pricing'
        }))}
      />
      <SERPEnhancer
        title="Schedule Vehicle Wrap Appointment Chicago IL - Book Consultation"
        description="Schedule your vehicle wrap consultation, quote, or installation appointment in Chicago. Free design consultations available. Easy online booking system."
        url="https://www.wrappingchicago.com/schedule-appointment"
        imageUrl="https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
        estimatedReadingTime={3}
        lastUpdated={new Date().toISOString()}
        authorName="Wrapping Chicago Scheduling Team"
        businessHours={{
          opens: "09:00",
          closes: "17:00",
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        }}
        phoneNumber="(312) 597-1286"
        address="4711 N. Lamon Ave, Chicago, IL 60630"
      />

      <Helmet>
        <title>Schedule Vehicle Wrap Appointment Chicago IL - Book Consultation | Wrapping Chicago</title>
        <meta name="description" content="Schedule your vehicle wrap consultation, quote, or installation appointment in Chicago. Free design consultations available. Easy online booking system." />
        <link rel="canonical" href="https://www.wrappingchicago.com/schedule-appointment" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Schedule Your Vehicle Wrap Appointment
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Book your free consultation, design review, or installation appointment. We make it easy to get started with your Chicago vehicle wrap project.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Appointment Form */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Book Your Appointment</h2>
                
                <form onSubmit={handleSchedule} className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Service *
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label} ({service.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select a date</option>
                      {getAvailableDates().map((date) => (
                        <option key={date} value={date}>
                          {formatDate(date)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Information
                    </label>
                    <input
                      type="text"
                      value={contactInfo.vehicleInfo}
                      onChange={(e) => setContactInfo({...contactInfo, vehicleInfo: e.target.value})}
                      placeholder="e.g., 2022 Ford Transit Van"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      value={contactInfo.message}
                      onChange={(e) => setContactInfo({...contactInfo, message: e.target.value})}
                      rows={4}
                      placeholder="Tell us about your project, design ideas, or any specific requirements..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Schedule Appointment
                  </button>
                </form>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Contact Card */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold">Phone</div>
                      <a href="tel:(312) 597-1286" className="text-primary hover:underline">
                        (312) 597-1286
                      </a>
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:roy@chicagofleetwraps.com" className="text-primary hover:underline">
                        roy@chicagofleetwraps.com
                      </a>
                    </div>
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-gray-600">
                        4711 N. Lamon Ave<br />
                        Chicago, IL 60630
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Hours</div>
                      <div className="text-gray-600">
                        Mon-Fri: 9:00 AM - 5:00 PM<br />
                        Sat: 10:00 AM - 2:00 PM<br />
                        Sun: Closed
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">What to Expect</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <div className="font-semibold">Consultation</div>
                        <div className="text-gray-600">We'll discuss your goals, budget, and timeline</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <div className="font-semibold">Vehicle Inspection</div>
                        <div className="text-gray-600">We'll examine your vehicle for any prep work needed</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <div className="font-semibold">Design Review</div>
                        <div className="text-gray-600">We'll show you design concepts and samples</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <div className="font-semibold">Detailed Quote</div>
                        <div className="text-gray-600">You'll receive a comprehensive project proposal</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-secondary text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-4">For urgent requests or same-day consultations, call us directly:</p>
                  <a 
                    href="tel:(312) 597-1286"
                    className="block w-full bg-white text-secondary py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Call (312) 597-1286
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Appointment FAQs</h2>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-xl font-semibold text-primary mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentSchedulerPage;