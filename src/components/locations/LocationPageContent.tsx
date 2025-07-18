import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, Clock, CheckCircle, Users, DollarSign } from "lucide-react";
import { Location } from "@/data/locations";

interface LocationPageContentProps {
  location: Location;
}

const LocationPageContent: React.FC<LocationPageContentProps> = ({ location }) => {
  // Location-specific services with tailored descriptions
  const getLocationServices = () => {
    const baseServices = [
      { 
        name: "Premium Car Wraps", 
        description: `Transform your personal vehicle with stunning custom wraps perfect for ${location.name}'s discerning drivers`,
        price: "From $2,500",
        details: `Whether you're cruising past ${location.landmarks[0]} or parking at ${location.landmarks[1]}, make your vehicle stand out with our premium car wrap solutions.`
      },
      { 
        name: "Commercial Vehicle Wraps", 
        description: `Professional truck and van wraps that help ${location.name} businesses advertise while they drive`,
        price: "From $3,500",
        details: `Perfect for businesses serving the ${location.county} area, our commercial wraps turn your vehicles into mobile billboards.`
      },
      { 
        name: "Fleet Branding Solutions", 
        description: `Consistent, professional fleet graphics for ${location.name} companies of all sizes`,
        price: "Custom quote",
        details: `From small business fleets to large corporate vehicles, we ensure brand consistency across your entire fleet in ${location.name}.`
      },
      { 
        name: "Luxury & Exotic Wraps", 
        description: `High-end vehicle transformations for ${location.name}'s luxury car enthusiasts`,
        price: "From $4,500",
        details: `Specializing in premium finishes, color changes, and protective films for luxury vehicles throughout ${location.county}.`
      },
      { 
        name: "Paint Protection Film", 
        description: `Invisible protection to keep your vehicle looking pristine in ${location.name}'s climate`,
        price: "From $1,800",
        details: `Protect your investment from road debris, weather, and daily wear with our premium PPF installations.`
      },
      { 
        name: "Partial Wraps & Graphics", 
        description: `Cost-effective advertising solutions for ${location.name} small businesses`,
        price: "From $1,200",
        details: `Strategic partial wraps that maximize your marketing budget while delivering professional results.`
      }
    ];
    return baseServices;
  };

  const getLocationBenefits = () => [
    `Local expertise serving ${location.name} for over 10 years`,
    "Premium 3M and Avery Dennison materials only",
    "Certified 3M Preferred Installation specialists", 
    "Comprehensive 5-year material and installation warranty",
    `Mobile service available throughout ${location.county}`,
    "Free design consultation and same-day quotes",
    `Climate-specific installation perfect for ${location.name}'s weather`,
    "Insurance work and fleet discounts available"
  ];

  const getLocationStory = () => {
    const stories = {
      "River North": "In the heart of Chicago's premier business district, River North represents the pinnacle of urban sophistication. Our vehicle wrap services cater to the discerning professionals and luxury car enthusiasts who call this vibrant neighborhood home. From the towering condos overlooking the Chicago River to the bustling art galleries and upscale dining establishments, River North demands vehicles that match its elevated status.",
      "Lincoln Park": "Lincoln Park embodies the perfect blend of urban convenience and family-friendly charm. Home to young professionals, growing families, and established residents, this lakefront community values quality and reliability. Our vehicle wrap services reflect these values, offering everything from practical family vehicle graphics to sophisticated business branding for the area's thriving professional community.",
      "Wicker Park": "Wicker Park pulses with creative energy and artistic expression. This trendy neighborhood, known for its vibrant music scene, independent businesses, and artistic community, calls for vehicle wraps that are as unique and bold as the people who live here. We specialize in custom designs that capture the neighborhood's creative spirit while maintaining professional quality.",
      "The Loop": "As Chicago's central business district, The Loop is where commerce, culture, and innovation converge. From the iconic Willis Tower to the stunning architecture that defines the city's skyline, this area demands vehicle graphics that command respect and convey professionalism. Our corporate fleet services and executive vehicle wraps are designed to meet the exacting standards of Loop businesses.",
      "Schaumburg": "Schaumburg represents the ideal suburban community, where families thrive and businesses flourish. With Woodfield Mall as a central hub and numerous corporate headquarters calling this area home, vehicle wrap needs span from family-friendly designs to corporate fleet graphics. We understand the suburban lifestyle and provide solutions that enhance both personal and professional image.",
      "Naperville": "Naperville stands as one of America's premier suburban communities, known for excellent schools, beautiful neighborhoods, and a thriving business environment. Our vehicle wrap services cater to this affluent, educated community with solutions ranging from luxury personal vehicle transformations to sophisticated business graphics that reflect Naperville's high standards.",
      "Oak Brook": "Oak Brook epitomizes executive elegance and corporate success. Home to numerous Fortune 500 companies and upscale shopping at Oakbrook Center, this community demands the highest quality in everything, including vehicle appearance. Our premium wrap services are designed to meet the exacting standards of Oak Brook's business leaders and affluent residents.",
      "Evanston": "Evanston's unique character as a university town creates a diverse community of students, faculty, professionals, and families. Home to Northwestern University and a thriving downtown area, vehicle wrap needs range from budget-friendly student options to sophisticated professional graphics. We understand this diversity and offer solutions for every segment of the Evanston community."
    };
    return stories[location.name] || `${location.name} is a unique community with its own character and vehicle wrap needs. Our experienced team understands the local market and provides tailored solutions.`;
  };

  const services = getLocationServices();
  const benefits = getLocationBenefits();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Serving {location.name} • {location.county}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Vehicle Wraps {location.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote: (312) 597-1286
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Population</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-primary">{location.population}</p>
                <p className="text-sm text-muted-foreground">residents</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Median Income</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-primary">{location.medianIncome}</p>
                <p className="text-sm text-muted-foreground">household</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Zip Codes</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm font-medium">
                  {location.zipCodes.join(", ")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Service Rating</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-primary">4.9/5</p>
                <p className="text-sm text-muted-foreground">Google Reviews</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Local Landmarks We Serve</CardTitle>
                <CardDescription>
                  Popular destinations near our {location.name} service area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {location.landmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{landmark}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Us in {location.name}</CardTitle>
                <CardDescription>
                  Local expertise and premium service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vehicle Wraps in {location.name}: Your Local Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding our community means delivering better results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {getLocationStory()}
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  Our team understands the unique vehicle wrap needs of {location.name} residents and businesses. 
                  From climate considerations to local business requirements, we tailor our approach to deliver 
                  exceptional results that last. Whether you're looking to advertise your business throughout {location.county} 
                  or simply want to transform your personal vehicle, we have the expertise and materials to exceed your expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Vehicle Wrap Services in {location.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete vehicle transformation services designed specifically for {location.name} drivers and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.details}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                  <Button className="w-full">Get Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our {location.name} Vehicle Wrap Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From consultation to completion, we ensure every detail meets our high standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <CardTitle>Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We visit your {location.name} location to assess your vehicle and discuss your vision, providing an accurate quote on the spot.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <CardTitle>Custom Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our design team creates a custom wrap design that reflects your style or brand, perfect for the {location.name} market.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <CardTitle>Professional Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Certified technicians install your wrap using premium materials, ensuring durability in {location.name}'s climate.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">4</span>
                </div>
                <CardTitle>Quality Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We stand behind our work with comprehensive warranties and ongoing support for all {location.name} customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vehicle Wrap Questions from {location.name} Customers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answers to the most common questions we receive from {location.name} residents and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long do vehicle wraps last in {location.name}?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our premium 3M and Avery materials are designed to last 5-7 years in {location.name}'s climate. 
                  We use materials specifically rated for Midwest weather conditions, including temperature fluctuations 
                  and seasonal changes common in {location.county}.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer mobile service in {location.name}?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We provide mobile vehicle wrap services throughout {location.name} and surrounding {location.county} areas. 
                  Our mobile unit is fully equipped for on-site installations at your home or business location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the cost of vehicle wraps in {location.name}?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pricing varies based on vehicle size and design complexity. Partial wraps start at $1,200, 
                  full car wraps from $2,500, and commercial vehicles from $3,500. We provide free quotes 
                  for all {location.name} customers with same-day estimates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can wraps be removed without damaging paint?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely! Our professional-grade adhesives are designed for clean removal. We guarantee 
                  no paint damage when removed by our certified technicians. Many {location.name} customers 
                  use wraps to protect their original paint finish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What {location.name} Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real testimonials from satisfied customers in {location.name} and {location.county}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">Outstanding Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "The team did an incredible job on my BMW. The wrap looks factory-perfect and has held up beautifully 
                  through two {location.name} winters. Highly recommend their work!"
                </p>
                <p className="text-sm font-medium">- Sarah M., {location.name} Resident</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">Perfect for Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Our delivery van wrap has been a game-changer for our {location.name} business. 
                  Professional installation and the design perfectly represents our brand throughout {location.county}."
                </p>
                <p className="text-sm font-medium">- Mike T., Local Business Owner</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">Exceptional Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "From consultation to completion, the process was seamless. They really understand 
                  the {location.name} market and delivered exactly what we needed for our fleet."
                </p>
                <p className="text-sm font-medium">- Jennifer L., Fleet Manager</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proudly Serving {location.name} Since 2014
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep local knowledge and personalized service for every customer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Why {location.name} Chooses Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We've built our reputation in {location.name} by consistently delivering exceptional results. 
                  Our team understands the unique character of this community, from the local business environment 
                  to the specific challenges of the {location.county} climate.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">{location.name} Community Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.keyFeatures.map((feature, index) => (
                      <Badge key={index} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Whether you're a longtime resident or new to {location.name}, we're here to help transform 
                  your vehicle with professional wraps that reflect the quality and character of our community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Monday-Friday: 8AM-6PM | Saturday: 9AM-4PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Call for Free Quote</p>
                      <p className="text-lg font-bold text-primary">(312) 597-1286</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Serving All of {location.name}</p>
                      <p className="text-sm text-muted-foreground">Mobile service available • Same-day quotes</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <Button className="w-full">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Gallery
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Vehicle in {location.name} Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers throughout {location.name} and {location.county} who trust 
            us for premium vehicle wrap services. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call (312) 597-1286
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Schedule Consultation
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Free quotes • Same-day response • Mobile service available in {location.name}
          </p>
        </div>
      </section>
    </div>
  );
};

export default LocationPageContent;