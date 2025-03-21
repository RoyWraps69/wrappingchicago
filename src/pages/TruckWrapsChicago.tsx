
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Truck, Shield, CheckCircle2 } from 'lucide-react';
import Schema from '@/components/Schema';
import { cities } from '@/data/cities';

const TruckWrapsChicago = () => {
  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  // FAQ data for schema
  const faqData = [
    {
      question: "How much do truck wraps cost in Chicago?",
      answer: "Truck wrap costs in Chicago vary by size and complexity. Box truck wraps typically range from $3,000-$6,000, while pickup truck wraps start around $2,000. Partial wraps are available from $1,200."
    },
    {
      question: "How long do truck wraps last?",
      answer: "With proper care and maintenance, our premium truck wraps typically last 5-7 years. All commercial truck wraps come with a 2-year warranty and are made with durable 3M vinyl materials."
    },
    {
      question: "Do truck wraps damage paint?",
      answer: "No, our professional truck wraps protect your vehicle's paint when properly installed and removed. The vinyl acts as a barrier against sun damage, minor scratches, and road debris."
    },
    {
      question: "How long does it take to wrap a truck?",
      answer: "Most commercial truck wraps can be completed in 3-5 business days. Larger vehicles like box trucks or semi-trucks may take 5-7 days depending on design complexity."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Truck Wraps Chicago | Commercial & Box Truck Wrapping Services</title>
        <meta 
          name="description" 
          content="Professional truck wraps in Chicago with over 16,000 wraps completed in our 20 years of business. Serving delivery trucks, box trucks, pickup trucks & commercial fleets with expert installation and premium 3M materials." 
        />
        <link rel="canonical" href="https://wrappingchicago.com/truck-wraps-chicago" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Truck Wraps Chicago | Commercial & Box Truck Wrapping Services" />
        <meta property="og:description" content="Expert truck wrapping services in Chicago. Transform your commercial vehicles with high-impact truck wraps that boost your business visibility." />
        <meta property="og:url" content="https://wrappingchicago.com/truck-wraps-chicago" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Truck Wraps Chicago | Commercial & Box Truck Wrapping Services" />
        <meta name="twitter:description" content="Expert truck wrapping services in Chicago with 20 years of experience. Transform your commercial vehicles with high-impact truck wraps." />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content="Chicago" />
        <meta name="keywords" content="truck wraps Chicago, commercial truck wraps, box truck wraps, pickup truck wraps, delivery truck wraps, truck graphics Chicago, truck lettering Chicago, semi truck wraps, truck advertising, fleet truck wraps Chicago, business truck wraps Chicago, truck vinyl wraps, truck wrap installation Chicago, truck wrap cost, custom truck wraps Chicago" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path="/truck-wraps-chicago"
        pageTitle="Truck Wraps Chicago | Commercial & Box Truck Wrapping Services"
        pageDescription="Professional truck wraps in Chicago with over 16,000 wraps completed in our 20 years of business. Serving delivery trucks, box trucks, pickup trucks & commercial fleets with expert installation and premium 3M materials."
        faqs={faqData}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs />
          </div>
          
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Professional Truck Wraps in Chicago, IL
                </h1>
                <p className="text-xl mb-8">
                  Transform your commercial trucks into powerful mobile billboards with expert truck wrapping services.
                  Serving Chicago businesses for over 20 years with more than 16,000 wraps completed.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-red hover:bg-red-700 text-white"
                  >
                    <Link to="/contact" className="inline-flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Get a Free Quote
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white bg-white/10 text-white hover:bg-white/20"
                  >
                    <a href="tel:3125971286" className="inline-flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      (312) 597-1286
                    </a>
                  </Button>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-brand-red" />
                    <span>16,000+ Wraps Completed</span>
                  </div>
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                    <Shield className="h-5 w-5 mr-2 text-brand-red" />
                    <span>3M Certified Installers</span>
                  </div>
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                    <Truck className="h-5 w-5 mr-2 text-brand-red" />
                    <span>Commercial Truck Specialists</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Main Content */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-brand-navy mb-4">
                    Chicago's Premier Truck Wrap Provider
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Wrapping Chicago specializes in high-quality truck wraps for businesses throughout the Chicagoland area. 
                    Our expert team has wrapped thousands of commercial trucks over our 20 years in business, establishing 
                    us as the leading truck wrap installer in Chicago.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Whether you need wraps for box trucks, delivery trucks, pickup trucks, or an entire fleet, 
                    our experienced installers use premium 3M vinyl materials to ensure your truck wraps look 
                    spectacular and last for years to come.
                  </p>
                  <p className="text-gray-700">
                    Our truck wraps are designed to maximize your business visibility while you're on the road, 
                    effectively turning your commercial vehicles into powerful mobile billboards that generate 
                    thousands of impressions daily throughout Chicago.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" 
                    alt="Professional truck wrap with vibrant graphics and business branding - Commercial vehicle wrap in Chicago" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-6 text-center">
                  Our Truck Wrap Services in Chicago
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mr-2">
                        <path d="M10 17h4V5H2v12h3" />
                        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                        <circle cx="7.5" cy="17.5" r="2.5" />
                        <circle cx="17.5" cy="17.5" r="2.5" />
                      </svg>
                      <h3 className="font-semibold text-lg text-brand-navy">Box Truck Wraps</h3>
                    </div>
                    <p className="text-gray-700">
                      Full and partial wraps for box trucks of all sizes. Maximize the large, flat surfaces 
                      of your box truck with eye-catching graphics that can't be missed on Chicago streets.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mr-2">
                        <rect x="1" y="3" width="15" height="13" rx="1" />
                        <path d="m16 8 2 3h4l-3 5H8" />
                        <circle cx="7" cy="18" r="2" />
                        <path d="M9 18h6" />
                        <circle cx="17" cy="18" r="2" />
                      </svg>
                      <h3 className="font-semibold text-lg text-brand-navy">Delivery Truck Wraps</h3>
                    </div>
                    <p className="text-gray-700">
                      Customized wraps for delivery vehicles that increase brand recognition. Perfect for 
                      courier services, food delivery, and distribution companies operating in Chicago.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mr-2">
                        <path d="M16 16v-8" />
                        <path d="M16 8h-8" />
                        <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
                        <circle cx="9" cy="17" r="1" />
                        <path d="M9 17H6a2 2 0 0 1-2-2V5" />
                      </svg>
                      <h3 className="font-semibold text-lg text-brand-navy">Pickup Truck Wraps</h3>
                    </div>
                    <p className="text-gray-700">
                      Professional wraps for pickup trucks used by contractors, landscapers, and service businesses. 
                      Partial and full wrap options available for different budgets.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mr-2">
                        <rect x="3" y="8" width="18" height="8" rx="1" />
                        <path d="M10 8V5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3" />
                        <path d="M7 16v3c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-3" />
                      </svg>
                      <h3 className="font-semibold text-lg text-brand-navy">Semi Truck Wraps</h3>
                    </div>
                    <p className="text-gray-700">
                      Large-scale wraps for semi-trucks and trailers. Create massive mobile billboards 
                      that travel throughout Chicago and beyond, generating thousands of impressions.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <Shield className="h-6 w-6 text-brand-red mr-2" />
                      <h3 className="font-semibold text-lg text-brand-navy">Fleet Truck Wraps</h3>
                    </div>
                    <p className="text-gray-700">
                      Consistent branding across your entire fleet of trucks. We manage large fleet projects 
                      with consistent quality and timely delivery for businesses throughout Chicago.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mr-2">
                        <rect width="18" height="10" x="3" y="3" rx="2"/>
                        <rect width="18" height="8" x="3" y="13" rx="2"/>
                      </svg>
                      <h3 className="font-semibold text-lg text-brand-navy">Truck Lettering & Graphics</h3>
                    </div>
                    <p className="text-gray-700">
                      Cost-effective vinyl lettering and graphics for trucks. Perfect for businesses looking 
                      for simple identification and contact information on their vehicles.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-4">
                  Why Choose Wrapping Chicago for Your Truck Wraps?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">Unmatched Experience</h3>
                    <p className="text-gray-700 mb-6">
                      With over 20 years in business and more than 16,000 vehicle wraps completed, our team 
                      has the expertise to handle trucks of all shapes and sizes. Our experience means your 
                      truck wrap project will be done right the first time.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">Premium 3M Materials</h3>
                    <p className="text-gray-700">
                      We use only genuine 3M vinyl materials for our truck wraps, ensuring maximum durability 
                      and longevity. Our commercial grade vinyl stands up to Chicago's harsh weather conditions, 
                      from summer heat to winter snow and salt.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">Expert Installation</h3>
                    <p className="text-gray-700 mb-6">
                      Our 3M certified installers are highly trained in the proper techniques for truck wrap 
                      application. We ensure perfect alignment, smooth finishes, and proper handling of complex 
                      curves and panel seams on commercial trucks.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">Comprehensive Warranty</h3>
                    <p className="text-gray-700">
                      All our truck wraps come with a 2-year warranty, giving you peace of mind that your 
                      investment is protected. We stand behind our work and ensure your truck wrap maintains 
                      its appearance and functionality.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-6">
                  Ready to Transform Your Trucks?
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                  Contact Wrapping Chicago today for a free consultation and quote on your truck wrap project. 
                  Our expert team will guide you through the process from design to installation, ensuring your 
                  commercial trucks make the maximum impact on Chicago streets.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-red hover:bg-red-700 text-white"
                  >
                    <Link to="/contact" className="inline-flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Get a Free Truck Wrap Quote
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                  >
                    <a href="tel:3125971286" className="inline-flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (312) 597-1286
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TruckWrapsChicago;
