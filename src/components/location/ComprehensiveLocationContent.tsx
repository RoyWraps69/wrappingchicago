
import React from 'react';
import { City } from '@/data/cities';
import { CheckCircle2, MapPin, Clock, Star, Truck, Car, Shield, Phone, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ComprehensiveLocationContentProps {
  city: City;
}

const ComprehensiveLocationContent = ({ city }: ComprehensiveLocationContentProps) => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <main className="py-12 bg-white" id="main-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            
            {/* Introduction Section */}
            <section>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>Last updated: {currentDate}</span>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Chicago Fleet Wraps is the premier provider of <strong>fleet wraps in {city.name}</strong>, 
                  offering comprehensive <strong>commercial vehicle wraps {city.name}, IL</strong> services 
                  that transform business vehicles into powerful mobile advertisements. As the leading 
                  <strong> van wrap company near {city.name}</strong>, we specialize in creating 
                  eye-catching vehicle graphics that boost brand visibility throughout {city.county} County.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Our expert team provides premium <strong>box truck wraps in {city.name}</strong> and 
                  complete <strong>vehicle branding services {city.name}, Illinois</strong>. With over 
                  16,000 vehicles wrapped in our 20+ years of operation, we're the trusted choice for 
                  <strong> {city.name} vinyl wraps for businesses</strong> throughout the Chicagoland area.
                </p>
              </div>
            </section>

            {/* Fleet Wrap Services Section */}
            <section>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 flex items-center">
                <Truck className="h-8 w-8 mr-3 text-brand-red" />
                Professional Fleet Wraps in {city.name}, Illinois
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">
                  Why Choose Our {city.name} Vehicle Wrap Services?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Over 16,000 vehicle wraps completed</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Premium 3M certified installation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Custom design services for {city.name} businesses</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Fast turnaround times</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>5-7 year material warranty</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Free design consultation</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Our <strong>commercial vehicle wraps {city.name}, IL</strong> services include comprehensive 
                design consultation, premium material selection, and expert installation. We understand that 
                <strong> fleet wraps in {city.name}</strong> need to withstand demanding commercial use while 
                maintaining vibrant appearance for years.
              </p>

              <p className="text-gray-700 mb-6">
                As the premier <strong>van wrap company near {city.name}</strong>, we work with businesses 
                of all sizes, from single vehicle startups to large corporate fleets. Our 
                <strong> box truck wraps in {city.name}</strong> have helped countless local businesses 
                increase brand recognition and generate leads through mobile advertising.
              </p>
            </section>

            {/* Service Types Section */}
            <section>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                Complete Vehicle Branding Services {city.name}, Illinois
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <Car className="h-10 w-10 text-brand-red mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">
                    Car Wrap Installers {city.name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Professional car wrap installation for personal and business vehicles. Our certified 
                    <strong> car wrap installers {city.name}</strong> use precision techniques for flawless results.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Color change wraps</li>
                    <li>• Partial vehicle wraps</li>
                    <li>• Custom graphics packages</li>
                    <li>• Protective clear films</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <Truck className="h-10 w-10 text-brand-red mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">
                    Commercial Fleet Graphics
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive <strong>fleet wraps in {city.name}</strong> for delivery trucks, 
                    service vehicles, and commercial fleets. Transform your entire fleet into mobile billboards.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Box truck wraps</li>
                    <li>• Van and cargo vehicle wraps</li>
                    <li>• Trailer graphics</li>
                    <li>• Fleet branding packages</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Our <strong>{city.name} vinyl wraps for businesses</strong> include full vehicle wraps, 
                partial wraps, color change wraps, and custom graphics packages. We serve all types of 
                commercial vehicles including delivery vans, box trucks, service vehicles, trailers, 
                and specialty equipment throughout {city.name} and surrounding areas.
              </p>

              <p className="text-gray-700 mb-6">
                Every <strong>vehicle branding services {city.name}, Illinois</strong> project begins 
                with detailed consultation to understand your brand goals, target audience, and budget. 
                Our design team creates custom graphics that effectively communicate your message while 
                maintaining professional aesthetics that reflect positively on your {city.name} business.
              </p>
            </section>

            {/* Local Coverage Section */}
            <section>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 flex items-center">
                <MapPin className="h-7 w-7 mr-3 text-brand-red" />
                Serving {city.name} and Surrounding Areas
              </h2>
              
              <div className="bg-brand-light p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">
                  Local Service Coverage and Directions
                </h3>
                <p className="text-gray-700 mb-4">
                  Our {city.name} vehicle wrap services extend throughout {city.county} County, 
                  serving businesses near major landmarks and commercial districts. We provide 
                  on-site consultations and mobile services within a 25-mile radius of our Chicago facility.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Service Areas from {city.name}:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Downtown {city.name} commercial district</li>
                      <li>• Industrial areas and business parks</li>
                      <li>• Surrounding residential communities</li>
                      <li>• Major highways and transportation corridors</li>
                      <li>• Shopping centers and retail locations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Driving Directions:</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>From {city.name} to our facility:</strong>
                    </p>
                    <p className="text-sm text-gray-700">
                      Take I-90/I-94 toward Chicago, exit at Lamon Ave. Our facility is located at 
                      4711 N. Lamon Ave, approximately {city.distance} from downtown {city.name}. 
                      Free estimates available for all {city.name} businesses.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                Our Fleet Wrap Process for {city.name} Businesses
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-brand-red pl-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    1. Design Consultation & Planning
                  </h3>
                  <p className="text-gray-700">
                    We begin every <strong>fleet wraps in {city.name}</strong> project with comprehensive 
                    consultation to understand your brand, goals, and vehicle requirements. Our design team 
                    creates custom mockups specifically tailored for your {city.name} business, ensuring 
                    maximum visual impact and brand recognition.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-red pl-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    2. Premium Material Selection
                  </h3>
                  <p className="text-gray-700">
                    All <strong>commercial vehicle wraps {city.name}, IL</strong> use premium 3M or Avery 
                    vinyl materials selected for durability and color retention. We guarantee our materials 
                    will maintain their appearance throughout Chicago's varying weather conditions, from 
                    harsh winters to hot summers.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-red pl-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    3. Expert Installation Process
                  </h3>
                  <p className="text-gray-700">
                    Our certified <strong>car wrap installers {city.name}</strong> ensure precision 
                    installation in our climate-controlled facility. Every wrap is carefully applied to 
                    eliminate bubbles, wrinkles, and imperfections that could compromise professional appearance.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-red pl-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    4. Quality Assurance & Delivery
                  </h3>
                  <p className="text-gray-700">
                    Before delivery, every <strong>{city.name} vinyl wraps for businesses</strong> project 
                    undergoes thorough quality inspection. We provide care instructions and warranty 
                    information to ensure your investment continues generating results for years to come.
                  </p>
                </div>
              </div>
            </section>

            {/* ROI and Benefits Section */}
            <section>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                Why {city.name} Businesses Choose Vehicle Wraps
              </h2>
              
              <p className="text-gray-700 mb-4">
                <strong>Vehicle branding services {city.name}, Illinois</strong> provide unmatched 
                marketing value compared to traditional advertising methods. A single vehicle wrap 
                generates thousands of impressions daily as it travels throughout {city.name} and 
                surrounding communities, making it one of the most cost-effective advertising investments available.
              </p>
              
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Vehicle Wrap ROI Statistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-700">
                  <div>
                    <div className="text-2xl font-bold">2,500+</div>
                    <div className="text-sm">Daily impressions per vehicle</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm">Brand recall rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$0.70</div>
                    <div className="text-sm">Cost per thousand impressions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">5-7 Years</div>
                    <div className="text-sm">Average wrap lifespan</div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Studies show that <strong>{city.name} vinyl wraps for businesses</strong> can generate 
                up to 2,500 daily impressions per vehicle, with 95% of Americans recalling wrapped vehicles 
                they've seen. This high recall rate translates directly into increased brand awareness and 
                customer inquiries for {city.name} businesses across all industries.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our <strong>box truck wraps in {city.name}</strong> are particularly effective for 
                service-based businesses, delivery companies, and contractors who spend significant time 
                on the road. The mobile nature of wrapped vehicles ensures your brand message reaches 
                diverse demographics throughout the greater {city.name} metropolitan area.
              </p>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-brand-navy to-blue-800 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-4">
                  Get your free quote for <strong>fleet wraps in {city.name}</strong> today!
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-brand-red hover:bg-red-700">
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                    <a href="tel:3125971286" className="inline-flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4" />
                      (312) 597-1286
                    </a>
                  </Button>
                </div>
              </div>

              {/* Service Links */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-lg font-semibold text-brand-navy mb-4">Our Services</h3>
                <div className="space-y-2">
                  <Link to="/services/fleet-wraps" className="block text-gray-700 hover:text-brand-red transition-colors">
                    Fleet Wraps
                  </Link>
                  <Link to="/services/car-wraps" className="block text-gray-700 hover:text-brand-red transition-colors">
                    Car Wraps
                  </Link>
                  <Link to="/services/truck-wraps" className="block text-gray-700 hover:text-brand-red transition-colors">
                    Truck Wraps
                  </Link>
                  <Link to="/services/van-wraps" className="block text-gray-700 hover:text-brand-red transition-colors">
                    Van Wraps
                  </Link>
                  <Link to="/services/color-change-wraps" className="block text-gray-700 hover:text-brand-red transition-colors">
                    Color Change Wraps
                  </Link>
                </div>
              </div>

              {/* Local Info */}
              <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-brand-navy mb-4">About {city.name}</h3>
                <p className="text-gray-700 text-sm mb-3">{city.description}</p>
                <div className="text-sm text-gray-600">
                  <div><strong>County:</strong> {city.county}</div>
                  <div><strong>Distance:</strong> {city.distance}</div>
                  <div><strong>Population:</strong> {city.population}</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ComprehensiveLocationContent;
