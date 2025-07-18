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
        description: `Transform your personal vehicle with stunning custom carwraps that turn heads throughout ${location.name}`,
        price: "From $2,500",
        details: `Picture this: You're driving past ${location.landmarks[0]}, and instead of blending into traffic, your vehicle commands attention with a flawless custom wrap. Our car wraps don't just change your vehicle's appearance—they transform how people see you and your success.`
      },
      { 
        name: "Commercial Truck Wraps", 
        description: `Professional truck wraps that make every mile a marketing opportunity for Chicago-area trades and fleets`,
        price: "From $3,500",
        details: `Every contractor knows: if your truck looks amateur, potential customers assume your work is too. Our commercial vehicle wraps give your business the credibility it deserves, whether you're serving ${location.name} families or navigating Chicago's bustling construction sites.`
      },
      { 
        name: "Fleet Branding Solutions", 
        description: `Dominate the ${location.county} market with consistent, professional fleet graphics that multiply your brand presence`,
        price: "Custom quote",
        details: `Imagine your competition's reaction when they see your professionally wrapped fleet vehicles everywhere—from downtown Chicago to ${location.name} neighborhoods. That's the power of coordinated fleet branding that makes your business impossible to ignore.`
      },
      { 
        name: "Trade Vehicle Wraps", 
        description: `Specialized wraps for plumbers, electricians, HVAC contractors, and other trades serving Chicagoland`,
        price: "From $2,800",
        details: `Your work truck is your mobile office, your billboard, and your first impression all rolled into one. Our trade-specific vehicle wraps help you win more jobs by positioning you as the established, professional choice in ${location.name}'s competitive market.`
      },
      { 
        name: "Luxury Vehicle Wraps", 
        description: `Exclusive transformations for high-end vehicles that reflect ${location.name}'s sophisticated taste`,
        price: "From $4,500",
        details: `Success deserves to be seen. Our luxury vehicle wraps combine cutting-edge materials with artistic design to create automotive statements worthy of ${location.name}'s most discerning residents.`
      },
      { 
        name: "Partial Wraps & Graphics", 
        description: `Strategic partial vehicle wraps that maximize your marketing budget without compromising impact`,
        price: "From $1,200",
        details: `Not every business needs a full wrap to make a big impression. Our partial wraps focus on high-impact areas that catch attention while you're parked at job sites, client meetings, or anywhere in ${location.county}.`
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
      "River North": "Last Tuesday, a contractor pulled up to a million-dollar River North condo renovation in a beat-up truck with faded lettering. The doorman almost turned him away. That same week, another contractor arrived in a professionally wrapped vehicle—clean, branded, impressive. Guess who got the referral for three more units? In River North, where first impressions determine whether you get past the front desk, your vehicle wrap isn't just decoration—it's your business card, your reputation, and your competitive edge all rolling down Michigan Avenue.",
      "Lincoln Park": "Picture this: You're a Lincoln Park family considering two plumbers for your kitchen renovation. One drives a rusted van with duct-taped bumpers. The other pulls up in a spotless, professionally wrapped vehicle with customer testimonials right on the side. Which one feels safer inviting into your home? Lincoln Park families invest heavily in their properties and their peace of mind. Your vehicle wrap signals that you're the professional choice they can trust with their most valuable asset—their home.",
      "Wicker Park": "The boutique owner in Wicker Park thought she couldn't compete with the chains. Then she wrapped her delivery van with stunning graphics that perfectly captured her brand's artistic vibe. Suddenly, every delivery became mobile advertising. Customers started flagging her down on Division Street, asking about her products. Her vehicle wrap didn't just transport inventory—it transported her brand story throughout Chicago's most creative neighborhood, turning routine errands into customer acquisition opportunities.",
      "The Loop": "A fleet manager for a Loop-based consulting firm was tired of explaining why their company cars looked shabby next to competitors' vehicles at client meetings. Six months after wrapping their fleet with cohesive branding, they landed their biggest contract yet. The prospect later admitted that seeing their professional-looking vehicles parked outside gave the confidence that this was a company that handled details—exactly what they needed in a consultant. In The Loop, where million-dollar deals happen over lunch, your vehicle fleet speaks before you even enter the room.",
      "Schaumburg": "The HVAC contractor struggled to stand out in Schaumburg's competitive market until he wrapped his truck with before-and-after photos of his work. Now homeowners actively seek him out when they see his impressive truck in their neighborhoods. His vehicle wrap became his portfolio, his testimonial, and his appointment setter all in one. In suburban Schaumburg, where neighbors talk and referrals matter, a well-designed truck wrap doesn't just advertise—it starts conversations that turn into contracts.",
      "Naperville": "A Naperville electrical contractor was frustrated watching lesser-skilled competitors win jobs simply because they looked more professional. After wrapping his work truck with clean graphics highlighting his certifications and guarantees, he saw an immediate shift. Homeowners began choosing him over flashier competitors because his vehicle communicated competence and reliability. In Naperville's educated market, vehicle wraps don't just catch attention—they communicate the professionalism that wins business.",
      "Oak Brook": "The corporate executive was embarrassed every time clients saw his company's unmarked, aging fleet vehicles. After investing in professional vehicle wraps for the entire fleet, client perceptions shifted overnight. The wrapped vehicles now project the same premium image as their Oak Brook headquarters, ensuring brand consistency whether meeting at the office or on-site. In Oak Brook's executive environment, every touchpoint matters—including what clients see in the parking lot.",
      "Evanston": "A small Evanston business owner discovered that her food truck's success wasn't just about the food—it was about being impossible to miss. Her eye-catching vehicle wrap draws lines of Northwestern students and local professionals wherever she parks. The wrap pays for itself every month by turning her truck into a beacon that hungry customers can spot from blocks away. In Evanston's diverse, fast-paced environment, standing out isn't optional—it's survival."
    };
    return stories[location.name] || `${location.name} business owners know that in today's competitive market, every advantage matters. A professionally wrapped vehicle transforms routine drives into powerful marketing opportunities, helping local businesses stand out and win more customers throughout ${location.county}.`;
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
              Professional carwraps, truck wraps, and fleet graphics that turn your vehicles into powerful marketing assets throughout Chicago and {location.county}. Transform your business presence with custom vehicle wraps designed for {location.name}'s competitive market.
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
              Why {location.name} Businesses Choose Our Vehicle Wraps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real businesses who transformed their success with professional vehicle wraps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-l-4 border-l-primary">
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground italic">
                  {getLocationStory()}
                </p>
                <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">The Chicago Advantage: Built for Chicagoland's Unique Challenges</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Chicago's weather isn't for the weak—and neither are our vehicle wraps. From brutal winters that crack inferior materials to sweltering summers that fade cheap inks, we've engineered our carwraps and truck wraps specifically for Chicagoland's demanding climate. Our 3M and Avery Dennison materials don't just survive here—they thrive, maintaining their vibrant appearance year after year.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                    Whether you're a plumber racing between {location.name} service calls, a contractor building Chicago's skyline, or a business owner growing your local presence, your vehicle wrap needs to work as hard as you do. That's why we focus on fleet solutions and trade-specific designs that actually drive business results, not just pretty pictures.
                  </p>
                </div>
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
              Chicago-Tested Vehicle Wrap Services That Drive Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From carwraps that command attention to truck wraps that win contracts, we deliver vehicle graphics that work as hard as Chicago's trades and business professionals
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