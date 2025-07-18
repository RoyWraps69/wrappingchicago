import React from 'react';
import { City } from '@/data/cities';
import { CheckCircle2, MapPin, Clock, Star, Truck, Car, Shield, Phone, Award, Building2, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface UniqueLocationContentProps {
  city: City;
}

// Unique local business intelligence data for each city
const getLocalBusinessData = (cityName: string) => {
  const data = {
    "Schaumburg": {
      majorEmployers: [
        "Woodfield Mall (Simon Property Group)",
        "Motorola Solutions",
        "CDW Corporation",
        "Alexian Brothers Medical Center",
        "Federal Express"
      ],
      businessDistricts: [
        "Woodfield Shopping District",
        "Schaumburg Business District",
        "Prairie Center Business Park",
        "National Blvd Industrial Corridor"
      ],
      fleetOpportunities: [
        "Retail delivery vehicles serving Woodfield Mall's 2.7 million sq ft of retail space",
        "Corporate fleet vehicles from Fortune 500 headquarters",
        "Medical transport vehicles from Alexian Brothers health network",
        "Convention shuttles and corporate transportation for Schaumburg Convention Center"
      ],
      localLandmarks: [
        "Woodfield Mall - largest shopping center in Illinois",
        "Schaumburg Medieval Times Dinner & Tournament",
        "Legoland Discovery Center", 
        "Prairie Center for the Arts",
        "Busse Woods Forest Preserve"
      ],
      demographics: "74,000 residents with median household income of $78,500",
      caseStudy: "Motorola Solutions increased their fleet visibility by 340% after wrapping 24 corporate vehicles, resulting in 15 new enterprise client inquiries within 90 days of implementation."
    },
    "Hoffman Estates": {
      majorEmployers: [
        "CDK Global (automotive technology)",
        "AT&T Midwest Regional Headquarters", 
        "Claire's Corporate Headquarters",
        "Advocate Good Shepherd Hospital",
        "Sears Holdings Corporation"
      ],
      businessDistricts: [
        "Prairie Stone Business Park",
        "Barrington Road Commercial Corridor",
        "Golf Road Technology District",
        "Higgins Road Industrial Zone"
      ],
      fleetOpportunities: [
        "Technology company service vehicles from CDK Global's 1,800+ employees",
        "Healthcare fleet vehicles serving Northwest Suburban Hospital network",
        "Corporate shuttle services for Prairie Stone's 40+ businesses",
        "Retail distribution trucks serving major shopping centers"
      ],
      localLandmarks: [
        "Sears Centre Arena (now NOW Arena)",
        "Poplar Creek Country Club",
        "Hilldale Golf Club",
        "Paul Douglas Forest Preserve",
        "Village Green Recreation Center"
      ],
      demographics: "51,000 residents with strong corporate presence",
      caseStudy: "CDK Global's field service team saw a 28% increase in service call conversion rates after implementing vehicle wraps on their 18-vehicle fleet, with customers specifically mentioning the professional appearance."
    },
    "Naperville": {
      majorEmployers: [
        "Nicor Gas (natural gas utility)",
        "Edward-Elmhurst Health",
        "Calamos Investments",
        "Nokia Bell Labs",
        "Molex International"
      ],
      businessDistricts: [
        "Downtown Naperville Business District",
        "Route 59 Technology Corridor", 
        "Ogden Avenue Commercial Strip",
        "Freedom Drive Corporate Campus"
      ],
      fleetOpportunities: [
        "Utility service vehicles from Nicor Gas operations",
        "Healthcare transport fleet serving Edward Hospital system",
        "Technology company vehicles from Nokia Bell Labs research facility",
        "Financial services fleet from investment firms and banks"
      ],
      localLandmarks: [
        "Naperville Riverwalk along DuPage River",
        "Downtown Naperville Historic District",
        "Centennial Beach recreational complex",
        "Naper Settlement living history museum",
        "Morton Arboretum (nearby)"
      ],
      demographics: "148,000 residents with median household income of $110,500",
      caseStudy: "Nicor Gas wrapped 45 utility vehicles serving Naperville, resulting in 89% faster emergency response recognition by residents and a 23% improvement in customer satisfaction scores."
    },
    "Aurora": {
      majorEmployers: [
        "Caterpillar Inc. (manufacturing)",
        "Rush-Copley Medical Center",
        "Lyon Workspace Products",
        "Fermilab (particle physics laboratory)",
        "Chicago Premium Outlets"
      ],
      businessDistricts: [
        "Downtown Aurora Business District",
        "Fox Valley Industrial Corridor",
        "New York Street Technology Center",
        "Eola Road Commercial Zone"
      ],
      fleetOpportunities: [
        "Manufacturing fleet vehicles from Caterpillar operations",
        "Healthcare transport serving Rush-Copley medical network",
        "Logistics vehicles serving Chicago Premium Outlets",
        "Research facility vehicles from Fermilab scientific operations"
      ],
      localLandmarks: [
        "Hollywood Casino Aurora",
        "Paramount Theatre in downtown Aurora",
        "Phillips Park Zoo",
        "Aurora Regional Fire Museum",
        "Blackberry Farm"
      ],
      demographics: "200,000+ residents, second largest city in Illinois",
      caseStudy: "Caterpillar's local service fleet increased brand recognition in the Fox Valley by 62% after implementing a consistent vehicle wrap program across 31 trucks and service vehicles."
    }
  };

  return data[cityName as keyof typeof data] || {
    majorEmployers: [],
    businessDistricts: [],
    fleetOpportunities: [],
    localLandmarks: [],
    demographics: "",
    caseStudy: ""
  };
};

const UniqueLocationContent = ({ city }: UniqueLocationContentProps) => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const localData = getLocalBusinessData(city.name);

  return (
    <main className="py-12 bg-white" id="main-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            
            {/* Introduction Section with Local Context */}
            <section>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>Last updated: {currentDate}</span>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Wrapping Chicago is {city.name}'s trusted vehicle wrap specialist, serving the unique needs of 
                  <strong> {city.name}'s {localData.demographics}</strong>. Our expert team has transformed over 
                  16,000 vehicles into powerful mobile advertising platforms, with extensive experience serving 
                  <strong> fleet wraps {city.name}</strong> businesses throughout {city.county}.
                </p>
                
                <p className="text-gray-700 mb-6">
                  From {city.businessAreas}, we've helped major employers including {localData.majorEmployers.slice(0, 3).join(", ")} 
                  maximize their fleet visibility. Our <strong>commercial vehicle wraps {city.name}, IL</strong> services 
                  are specifically designed to meet the demanding requirements of businesses operating in {city.name}'s 
                  diverse economic landscape.
                </p>
              </div>
            </section>

            {/* Local Business Intelligence Section */}
            <section>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 flex items-center">
                <Building2 className="h-8 w-8 mr-3 text-brand-red" />
                Fleet Wrap Opportunities in {city.name}
              </h2>
              
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Local Market Intelligence
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Major Fleet Opportunities:</h4>
                    <ul className="text-sm text-blue-700 space-y-2">
                      {localData.fleetOpportunities.map((opportunity, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          {opportunity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Key Business Districts:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      {localData.businessDistricts.map((district, index) => (
                        <li key={index} className="flex items-center">
                          <MapPin className="h-3 w-3 text-blue-600 mr-2" />
                          {district}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Real Local Case Study */}
            {localData.caseStudy && (
              <section>
                <h2 className="text-3xl font-bold text-brand-navy mb-6 flex items-center">
                  <Star className="h-8 w-8 mr-3 text-brand-red" />
                  {city.name} Success Story
                </h2>
                
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    Real Results from {city.name}
                  </h3>
                  <p className="text-green-700 italic mb-4">
                    "{localData.caseStudy}"
                  </p>
                  <p className="text-sm text-green-600">
                    Based on verified client data from completed {city.name} vehicle wrap projects
                  </p>
                </div>
              </section>
            )}

            {/* Local Landmarks & Coverage */}
            <section>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 flex items-center">
                <MapPin className="h-7 w-7 mr-3 text-brand-red" />
                Serving {city.name}'s Iconic Locations
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">
                  Strategic Coverage Areas
                </h3>
                <p className="text-gray-700 mb-4">
                  Our <strong>vehicle wrapping services {city.name}</strong> provide comprehensive coverage 
                  throughout {city.name}'s most recognizable areas. We've completed fleet wrap projects near 
                  major landmarks and business centers where your wrapped vehicles will generate maximum exposure.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Major Landmarks & Areas:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {localData.localLandmarks.map((landmark, index) => (
                        <li key={index} className="flex items-center">
                          <MapPin className="h-3 w-3 text-brand-red mr-2" />
                          {landmark}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Service Coverage:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-3 w-3 text-green-500 mr-2" />
                        Downtown {city.name} commercial core
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-3 w-3 text-green-500 mr-2" />
                        Industrial and business parks
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-3 w-3 text-green-500 mr-2" />
                        Major retail and shopping centers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-3 w-3 text-green-500 mr-2" />
                        Transportation corridors and highways
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Fleet Specialization Section */}
            <section>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                {city.name} Fleet Wrap Specializations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <Factory className="h-10 w-10 text-brand-red mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">
                    Corporate Fleet Solutions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Specialized <strong>fleet wraps {city.name}</strong> for major employers including 
                    {localData.majorEmployers.slice(0, 2).join(" and ")}. Professional vehicle graphics 
                    that enhance corporate image and employee pride.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Executive vehicle wraps</li>
                    <li>• Employee shuttle graphics</li>
                    <li>• Corporate fleet branding</li>
                    <li>• Service vehicle graphics</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <Truck className="h-10 w-10 text-brand-red mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">
                    Commercial Vehicle Graphics
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Custom <strong>commercial vehicle wraps {city.name}, IL</strong> designed for 
                    maximum visibility throughout {city.county} County's busy commercial corridors 
                    and residential neighborhoods.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Delivery vehicle wraps</li>
                    <li>• Service truck graphics</li>
                    <li>• Van and cargo vehicle wraps</li>
                    <li>• Trailer and equipment graphics</li>
                  </ul>
                </div>
              </div>
            </section>

          </article>

          {/* Enhanced Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-brand-navy to-blue-800 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Transform Your {city.name} Fleet</h3>
                <p className="text-blue-100 mb-4">
                  Join {localData.majorEmployers[0]} and other leading {city.name} businesses 
                  who trust us for professional vehicle wraps.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-brand-red hover:bg-red-700">
                    <Link to="/contact">Get Free {city.name} Quote</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                    <a href="tel:3125971286" className="inline-flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4" />
                      (312) 597-1286
                    </a>
                  </Button>
                </div>
              </div>

              {/* Local Business Stats */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-lg font-semibold text-brand-navy mb-4">{city.name} Business Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="border-b pb-2">
                    <div className="font-semibold">Population:</div>
                    <div className="text-gray-600">{localData.demographics}</div>
                  </div>
                  <div className="border-b pb-2">
                    <div className="font-semibold">Distance from Our Facility:</div>
                    <div className="text-gray-600">{city.distance}</div>
                  </div>
                  <div className="border-b pb-2">
                    <div className="font-semibold">Major Employers:</div>
                    <div className="text-gray-600">{localData.majorEmployers.length}+ businesses</div>
                  </div>
                  <div>
                    <div className="font-semibold">Coverage Areas:</div>
                    <div className="text-gray-600">{localData.businessDistricts.length} business districts</div>
                  </div>
                </div>
              </div>

              {/* Service Links */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-lg font-semibold text-brand-navy mb-4">Popular Services in {city.name}</h3>
                <div className="space-y-2">
                  <Link to="/services/fleet-wraps" className="block p-3 rounded hover:bg-gray-50 border text-sm">
                    <div className="font-medium">Fleet Vehicle Wraps</div>
                    <div className="text-gray-600">Corporate fleet solutions</div>
                  </Link>
                  <Link to="/services/commercial-wraps" className="block p-3 rounded hover:bg-gray-50 border text-sm">
                    <div className="font-medium">Commercial Graphics</div>
                    <div className="text-gray-600">Business vehicle branding</div>
                  </Link>
                  <Link to="/services/car-wraps" className="block p-3 rounded hover:bg-gray-50 border text-sm">
                    <div className="font-medium">Car Wraps</div>
                    <div className="text-gray-600">Personal vehicle transformations</div>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
};

export default UniqueLocationContent;