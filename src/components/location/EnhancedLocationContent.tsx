
import React from 'react';
import { City } from '@/data/cities';
import { CheckCircle2, MapPin, Clock, Star, Truck, Car, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface EnhancedLocationContentProps {
  city: City;
}

const EnhancedLocationContent = ({ city }: EnhancedLocationContentProps) => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <main className="py-10 bg-white" id="main-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <article className="md:col-span-2">
            {/* H1 Header */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-brand-navy mb-4 flex items-center">
                <Truck className="h-8 w-8 mr-3 text-brand-red" />
                {city.name} Fleet Wraps & Vehicle Graphics
              </h1>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>Last updated: {currentDate}</span>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-500 mr-2">
                  <Star className="h-5 w-5" />
                  <Star className="h-5 w-5" />
                  <Star className="h-5 w-5" />
                  <Star className="h-5 w-5" />
                  <Star className="h-5 w-5" />
                </div>
                <span className="text-gray-700">Premier fleet wraps company serving {city.name}, IL</span>
              </div>
            </header>

            {/* Introduction with keyword density */}
            <section className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Chicago Fleet Wraps is the leading provider of <strong>fleet wraps in {city.name}</strong>, offering comprehensive 
                <strong> commercial vehicle wraps {city.name}, IL</strong> services that transform your business vehicles into 
                powerful mobile advertisements. As the top <strong>van wrap company near {city.name}</strong>, we specialize in 
                creating eye-catching vehicle graphics that boost your brand visibility throughout {city.county} County and beyond.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our expert team provides premium <strong>box truck wraps in {city.name}</strong> and complete 
                <strong> vehicle branding services {city.name}, Illinois</strong>. Whether you need partial wraps, full vehicle transformations, 
                or custom graphics, our certified <strong>car wrap installers {city.name}</strong> deliver exceptional results using 
                industry-leading 3M and Avery vinyl materials. We're proud to offer the most comprehensive 
                <strong> {city.name} vinyl wraps for businesses</strong> throughout the Chicagoland area.
              </p>
            </section>

            {/* H2 Section - Fleet Wrap Services */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-brand-navy mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-brand-red" />
                Professional Fleet Wraps in {city.name}, Illinois
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">
                  Why Choose Our {city.name} Vehicle Wrap Services?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Over 16,000 vehicle wraps completed in 20+ years</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Premium 3M certified installation in {city.name}</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Custom design services for {city.name} businesses</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Fast turnaround for fleet wraps in {city.name}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Our <strong>commercial vehicle wraps {city.name}, IL</strong> services include comprehensive design consultation, 
                premium material selection, and expert installation. We understand that <strong>fleet wraps in {city.name}</strong> 
                need to withstand the demanding conditions of commercial use while maintaining their vibrant appearance for years to come.
              </p>

              <p className="text-gray-700 mb-6">
                As the premier <strong>van wrap company near {city.name}</strong>, we work with businesses of all sizes, from single 
                vehicle startups to large corporate fleets. Our <strong>box truck wraps in {city.name}</strong> have helped countless 
                local businesses increase their brand recognition and generate more leads through mobile advertising.
              </p>
            </section>

            {/* H2 Section - Service Types */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                Complete Vehicle Branding Services {city.name}, Illinois
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <Car className="h-8 w-8 text-brand-red mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Car Wrap Installers {city.name}</h3>
                  <p className="text-gray-700">
                    Professional car wrap installation for personal and business vehicles. Our certified 
                    <strong> car wrap installers {city.name}</strong> use precision techniques to ensure flawless results.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <Truck className="h-8 w-8 text-brand-red mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Commercial Fleet Graphics</h3>
                  <p className="text-gray-700">
                    Comprehensive <strong>fleet wraps in {city.name}</strong> for delivery trucks, service vehicles, 
                    and commercial fleets. Transform your entire fleet into mobile billboards.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Our <strong>{city.name} vinyl wraps for businesses</strong> include partial wraps, full vehicle wraps, 
                color change wraps, and custom graphics packages. We serve all types of commercial vehicles including 
                delivery vans, box trucks, service vehicles, trailers, and specialty equipment throughout {city.name} 
                and surrounding areas.
              </p>

              <p className="text-gray-700 mb-6">
                Every <strong>vehicle branding services {city.name}, Illinois</strong> project begins with a detailed 
                consultation to understand your brand goals, target audience, and budget requirements. Our design team 
                creates custom graphics that effectively communicate your message while maintaining professional aesthetics 
                that reflect positively on your {city.name} business.
              </p>
            </section>

            {/* H2 Section - Local Area Coverage */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-brand-navy mb-6 flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-brand-red" />
                Serving {city.name} and Surrounding Areas
              </h2>
              
              <div className="bg-brand-light p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">
                  Local Landmarks and Service Coverage
                </h3>
                <p className="text-gray-700 mb-4">
                  Our {city.name} vehicle wrap services extend throughout {city.county} County, serving businesses 
                  near major landmarks and commercial districts. We provide on-site consultations and mobile services 
                  within a 25-mile radius of our Chicago facility.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Service Radius from {city.name}:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Downtown {city.name} commercial district</li>
                      <li>• Industrial areas and business parks</li>
                      <li>• Surrounding residential communities</li>
                      <li>• Major highways and transportation corridors</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Driving Directions:</h4>
                    <p className="text-sm text-gray-700">
                      From {city.name}: Take I-90/I-94 toward Chicago, exit at Lamon Ave. 
                      Our facility is located at 4711 N. Lamon Ave, approximately {city.distance} 
                      from downtown {city.name}. Free estimates available for all {city.name} businesses.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* H2 Section - Process and Benefits */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                Our Fleet Wrap Process for {city.name} Businesses
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-brand-red pl-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">1. Design Consultation</h3>
                  <p className="text-gray-700">
                    We begin every <strong>fleet wraps in {city.name}</strong> project with a comprehensive consultation 
                    to understand your brand, goals, and vehicle requirements. Our design team creates custom mockups 
                    specifically tailored for your {city.name} business.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-red pl-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">2. Premium Material Selection</h3>
                  <p className="text-gray-700">
                    All <strong>commercial vehicle wraps {city.name}, IL</strong> use premium 3M or Avery vinyl materials 
                    selected for durability and color retention. We guarantee our materials will maintain their appearance 
                    throughout Chicago's varying weather conditions.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-red pl-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">3. Expert Installation</h3>
                  <p className="text-gray-700">
                    Our certified <strong>car wrap installers {city.name}</strong> ensure precision installation in our 
                    climate-controlled facility. Every wrap is carefully applied to eliminate bubbles, wrinkles, and 
                    imperfections that could compromise the professional appearance.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-brand-navy to-blue-800 text-white p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Transform Your {city.name} Fleet?
              </h2>
              <p className="mb-6 text-blue-100">
                Get your free consultation for <strong>fleet wraps in {city.name}</strong> today. 
                Our team is ready to help your business dominate the roads with professional vehicle graphics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-brand-red hover:bg-red-700">
                  <Link to="/contact">Get Free Quote for {city.name}</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <a href="tel:3125971286">Call (312) 597-1286</a>
                </Button>
              </div>
            </section>

            {/* Additional Content for 1000+ words */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                Why {city.name} Businesses Choose Vehicle Wraps
              </h2>
              
              <p className="text-gray-700 mb-4">
                <strong>Vehicle branding services {city.name}, Illinois</strong> provide unmatched marketing value 
                compared to traditional advertising methods. A single vehicle wrap generates thousands of impressions 
                daily as it travels throughout {city.name} and surrounding communities, making it one of the most 
                cost-effective advertising investments available.
              </p>
              
              <p className="text-gray-700 mb-4">
                Studies show that <strong>{city.name} vinyl wraps for businesses</strong> can generate up to 2,500 
                daily impressions per vehicle, with 95% of Americans recalling wrapped vehicles they've seen. This 
                high recall rate translates directly into increased brand awareness and customer inquiries for 
                {city.name} businesses across all industries.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our <strong>box truck wraps in {city.name}</strong> are particularly effective for service-based 
                businesses, delivery companies, and contractors who spend significant time on the road. The mobile 
                nature of wrapped vehicles ensures your brand message reaches diverse demographics throughout the 
                greater {city.name} metropolitan area.
              </p>
              
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                ROI of Fleet Wraps in {city.name}
              </h3>
              
              <p className="text-gray-700 mb-4">
                The return on investment for <strong>commercial vehicle wraps {city.name}, IL</strong> typically 
                pays for itself within the first year through increased brand recognition and customer acquisition. 
                Unlike traditional advertising that requires ongoing payments, vehicle wraps provide continuous 
                marketing exposure for years without additional costs.
              </p>
              
              <p className="text-gray-700 mb-6">
                Many {city.name} businesses report 15-30% increases in customer inquiries within months of installing 
                professional vehicle wraps. This dramatic improvement in lead generation makes fleet wraps one of the 
                most effective marketing strategies available to local businesses.
              </p>
            </section>

            {/* Internal Linking Section */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">
                Explore Our Services
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <Link to="/services" className="text-brand-red hover:underline">All Services</Link>
                <Link to="/gallery" className="text-brand-red hover:underline">Portfolio Gallery</Link>
                <Link to="/contact" className="text-brand-red hover:underline">Contact Us</Link>
                <Link to="/faq" className="text-brand-red hover:underline">FAQ</Link>
                <Link to="/fleet-wraps" className="text-brand-red hover:underline">Fleet Wraps</Link>
                <Link to="/car-wraps" className="text-brand-red hover:underline">Car Wraps</Link>
                <Link to="/truck-wraps" className="text-brand-red hover:underline">Truck Wraps</Link>
                <Link to="/van-wraps" className="text-brand-red hover:underline">Van Wraps</Link>
              </div>
            </section>
          </article>
          
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md border mb-6">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Quick Quote</h3>
              <p className="text-gray-700 mb-4">
                Get instant pricing for {city.name} vehicle wraps
              </p>
              <Button asChild className="w-full bg-brand-red hover:bg-red-700">
                <Link to="/contact">Get Free Estimate</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Service Hours</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default EnhancedLocationContent;
