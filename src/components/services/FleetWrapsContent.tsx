
import React from 'react';
import { Truck, CheckCircle, ListChecks, BarChart3, Building, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FleetWrapsContent: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Professional Fleet Vehicle Wrapping Services in Chicago</h2>
      <p className="mb-4 text-gray-700">
        Make your company vehicles work harder for your business with our professional fleet wrapping services in Chicago. 
        A wrapped fleet creates thousands of impressions every day, turning your vehicles into powerful mobile 
        billboards that generate leads and build brand recognition 24/7 throughout the Chicago area and beyond.
      </p>
      
      <p className="mb-6 text-gray-700">
        With over 16,000 vehicle wraps completed in our 20 years of business, our team of experienced professionals 
        specializes in fleet vehicle wraps for businesses of all sizes. From small local businesses to large corporations, 
        we provide expert design, high-quality materials, and meticulous installation to ensure your fleet looks 
        professional and makes a lasting impression on the streets of Chicago.
      </p>
      
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-xl font-semibold text-brand-navy mb-3">Chicago Fleet Wrap Specialists</h3>
        <p className="text-gray-700">
          Our Chicago-based vehicle wrap shop has proudly served the Chicagoland area for two decades, establishing 
          ourselves as leaders in the fleet wrapping industry. We understand the unique challenges of Chicago's urban environment, 
          weather conditions, and business landscape, allowing us to create fleet wrapping solutions that truly stand out and last.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-brand-navy mr-2" />
            <h3 className="text-xl font-semibold text-brand-navy">Benefits of Fleet Vehicle Wraps</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Create thousands of impressions daily throughout Chicago</li>
            <li>Lower cost-per-impression than traditional advertising</li>
            <li>Build brand consistency across your entire commercial fleet</li>
            <li>Protect your vehicles' original paint from Chicago's harsh weather</li>
            <li>Easy to update or remove without damage</li>
            <li>Typically lasts 5-7 years with proper care</li>
            <li>Transform ordinary vehicles into eye-catching mobile advertisements</li>
            <li>Reach potential customers in areas traditional advertising can't</li>
            <li>Professional appearance builds customer trust</li>
          </ul>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <ListChecks className="w-6 h-6 text-brand-navy mr-2" />
            <h3 className="text-xl font-semibold text-brand-navy">Our Chicago Fleet Wrap Process</h3>
          </div>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Initial consultation to understand your business needs</li>
            <li>Professional design tailored to your brand and message</li>
            <li>Vehicle measurement and custom template creation</li>
            <li>High-quality printing on premium 3M vinyl materials</li>
            <li>Expert installation by our experienced Chicago-based technicians</li>
            <li>Thorough inspection and quality assurance</li>
            <li>Detailed care instructions to maximize wrap lifespan</li>
            <li>Optional maintenance programs to keep your fleet looking fresh</li>
            <li>Full support throughout the wrap's lifetime</li>
          </ol>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-brand-navy mb-4 flex items-center">
          <BarChart3 className="w-6 h-6 text-brand-red mr-2" />
          Fleet Wrap ROI for Chicago Businesses
        </h3>
        <p className="mb-4 text-gray-700">
          Fleet vehicle wraps offer an exceptional return on investment for Chicago businesses. Consider these statistics:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
          <li>A single wrapped vehicle in Chicago can generate between 30,000-70,000 impressions daily</li>
          <li>Fleet wraps cost as little as $0.04 per thousand impressions, compared to $1.78 for outdoor advertising</li>
          <li>97% of Chicago consumers recall ads seen on vehicles</li>
          <li>96% say fleet graphics make a more memorable impression than billboards</li>
          <li>98% of in-car audiences notice truck-side advertising</li>
        </ul>
        <p className="text-gray-700">
          With Chicago's dense population and busy streets, your wrapped fleet will be seen by thousands of potential customers every day, 
          providing continuous advertising 24/7 for a one-time investment. Unlike traditional advertising with recurring monthly costs, 
          vehicle wraps continue working for your business for years.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-brand-navy mb-4 flex items-center">
          <Building className="w-6 h-6 text-brand-red mr-2" />
          Chicago Industries We Serve
        </h3>
        <p className="mb-4 text-gray-700">
          We've provided professional fleet wrapping services for a wide range of Chicago businesses and industries, including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Construction Companies</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">HVAC Services</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Plumbing Contractors</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Food Delivery Services</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Electricians</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Landscaping Companies</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Real Estate Agencies</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Catering Services</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Home Service Providers</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Security Companies</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Cleaning Services</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Local Delivery Fleets</div>
        </div>
        <p className="text-gray-700">
          No matter what industry you're in, our expert vehicle wrap designers can create a custom fleet wrap solution 
          that perfectly represents your Chicago business and helps you stand out from the competition.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-brand-navy mb-4 flex items-center">
          <Car className="w-6 h-6 text-brand-red mr-2" />
          Types of Fleet Vehicles We Wrap
        </h3>
        <p className="mb-4 text-gray-700">
          Our Chicago vehicle wrap installation team has experience wrapping virtually every type of fleet vehicle, including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Cargo Vans</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Pickup Trucks</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Box Trucks</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Service Vans</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Sprinter Vans</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Transit Vans</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Delivery Trucks</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Company Cars</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Food Trucks</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Trailers</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Semi Trucks</div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Refrigerated Trucks</div>
        </div>
        <p className="text-gray-700 mb-6">
          Whether you have a single vehicle or a large fleet of mixed vehicle types, we can create a cohesive branding 
          solution that works across all your vehicles, maintaining consistent branding while adapting to each 
          vehicle's unique shape and size.
        </p>
        
        <div className="bg-brand-light p-6 rounded-lg border border-brand-navy/20 mb-6">
          <h4 className="text-lg font-semibold text-brand-navy mb-3">Chicago Fleet Wrap Case Study</h4>
          <p className="text-gray-700 mb-3">
            A Chicago-based HVAC company saw a 32% increase in service calls after wrapping their fleet of 12 service vans with 
            professional graphics. The eye-catching design and clear contact information made their vehicles mobile billboards 
            throughout the Chicago area, resulting in significant business growth within just the first three months.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Button asChild className="bg-brand-red hover:bg-red-700">
            <Link to="/contact">Request a Fleet Wrap Quote</Link>
          </Button>
          <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
            <Link to="/gallery">View Our Fleet Wrap Portfolio</Link>
          </Button>
        </div>
      </div>
      
      <div className="prose max-w-none mt-8">
        <h3>Frequently Asked Questions About Fleet Vehicle Wraps in Chicago</h3>
        
        <h4>How much does it cost to wrap a fleet of vehicles in Chicago?</h4>
        <p>
          Fleet vehicle wrap pricing in Chicago depends on several factors, including the number of vehicles, 
          size of each vehicle, complexity of the design, and whether you need full wraps or partial wraps. 
          For a small business fleet of 3-5 vehicles, you can expect to invest anywhere from $7,500 to $25,000 
          for professional vehicle wraps. Larger fleets often qualify for volume discounts. Contact us for a 
          customized quote based on your specific fleet.
        </p>
        
        <h4>How long do fleet vehicle wraps last in Chicago's climate?</h4>
        <p>
          When properly installed and maintained, our premium vehicle wraps typically last 5-7 years in Chicago's 
          climate. Our vehicle wraps are made from high-quality 3M vinyl materials specifically designed to withstand 
          extreme weather conditions, including Chicago's hot summers, cold winters, and road salt. Regular washing 
          and proper care can extend the life of your fleet wraps.
        </p>
        
        <h4>Can I wrap leased fleet vehicles?</h4>
        <p>
          Yes, vehicle wraps are an excellent solution for leased fleet vehicles as they can be safely removed without 
          damaging the original paint when the lease ends. Many Chicago businesses choose to wrap their leased commercial 
          fleet vehicles to maximize their marketing potential while maintaining the vehicle's value. We recommend checking 
          your lease agreement, but most leasing companies allow professional vehicle wrapping.
        </p>
        
        <h4>How long does it take to wrap an entire fleet of vehicles?</h4>
        <p>
          The timeline for wrapping your Chicago business fleet depends on the number of vehicles, their size, and the 
          complexity of the designs. Typically, a single vehicle takes 2-3 days for a full wrap installation. For larger 
          fleets, we can develop a staggered installation schedule to minimize disruption to your operations, wrapping a 
          few vehicles at a time while keeping the rest of your fleet on the road.
        </p>
        
        <h4>Do you offer fleet wrap maintenance programs?</h4>
        <p>
          Yes, we offer fleet wrap maintenance programs for Chicago businesses to ensure your vehicle wraps maintain their 
          professional appearance and maximum longevity. Our maintenance services include regular inspections, cleaning 
          recommendations, touch-ups for minor damage, and repair services. With Chicago's harsh winters and road salt, 
          regular maintenance helps protect your investment and maintain your brand's professional image.
        </p>
      </div>
    </>
  );
};

export default FleetWrapsContent;
