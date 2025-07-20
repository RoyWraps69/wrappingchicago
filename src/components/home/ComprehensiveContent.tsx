import React from 'react';

const ComprehensiveContent = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Chicago's Premier Vehicle Wrap Specialists Since 2000
            </h2>
            <p className="text-lg mb-4 text-muted-foreground">
              Wrapping Chicago has been transforming vehicles across the Chicagoland area for over 20 years, completing more than 16,000 successful vehicle wrap projects. Our team of certified installers specializes in custom car wraps, commercial truck graphics, fleet branding, and protective films using premium 3M and Avery Dennison materials.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Whether you're a plumber in Schaumburg looking to increase service calls, an electrician in Evanston needing professional van graphics, or a business owner in Naperville wanting to brand your entire fleet, we deliver exceptional results that drive real business growth.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Commercial Vehicle Wraps</h3>
                <p className="text-muted-foreground mb-4">
                  Transform your work vehicles into mobile billboards that generate leads 24/7. Our commercial vehicle wraps deliver measurable ROI through increased brand visibility and customer calls.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Truck wraps for contractors and trades</li>
                  <li>• Van graphics for service professionals</li>
                  <li>• Fleet branding for multi-vehicle businesses</li>
                  <li>• Partial wraps for budget-conscious businesses</li>
                </ul>
              </div>
              
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Personal Vehicle Wraps</h3>
                <p className="text-muted-foreground mb-4">
                  Express your personality and protect your investment with custom car wraps, color change films, and protective coatings that preserve your vehicle's value.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Color change wraps in matte, gloss, and satin</li>
                  <li>• Designer graphics and custom artwork</li>
                  <li>• Paint protection films for high-end vehicles</li>
                  <li>• Racing stripes and accent packages</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Chicago Businesses Choose Wrapping Chicago
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              With over two decades of experience and thousands of satisfied customers, we've earned our reputation as Chicago's most trusted vehicle wrap company. Our commitment to quality, customer service, and business results sets us apart from the competition.
            </p>
            
            <div className="space-y-4">
              <div className="bg-background p-4 rounded-lg border border-l-4 border-l-primary">
                <h4 className="font-semibold mb-2">Guaranteed Quality</h4>
                <p className="text-muted-foreground text-sm">Premium materials, expert installation, and comprehensive warranties ensure your investment is protected.</p>
              </div>
              
              <div className="bg-background p-4 rounded-lg border border-l-4 border-l-primary">
                <h4 className="font-semibold mb-2">Fast Turnaround</h4>
                <p className="text-muted-foreground text-sm">Most projects completed within 2-3 days, with same-day service available for simple graphics and lettering.</p>
              </div>
              
              <div className="bg-background p-4 rounded-lg border border-l-4 border-l-primary">
                <h4 className="font-semibold mb-2">Local Expertise</h4>
                <p className="text-muted-foreground text-sm">Deep understanding of Chicago market needs and regulations, serving clients throughout Chicagoland.</p>
              </div>
              
              <div className="bg-background p-4 rounded-lg border border-l-4 border-l-primary">
                <h4 className="font-semibold mb-2">Mobile Installation</h4>
                <p className="text-muted-foreground text-sm">24/7 mobile installation service brings professional wrapping directly to your location for maximum convenience.</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-primary/10 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Service Areas Throughout Chicagoland</h3>
              <p className="text-muted-foreground mb-3">
                Based in Chicago, we proudly serve vehicle wrap customers throughout Cook County and surrounding areas.
              </p>
              <p className="text-sm text-muted-foreground">
                Service areas include Chicago, Evanston, Naperville, Schaumburg, Skokie, Arlington Heights, Palatine, Oak Park, Cicero, Berwyn, Wheaton, Downers Grove, Aurora, Joliet, and dozens of other Chicagoland communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContent;