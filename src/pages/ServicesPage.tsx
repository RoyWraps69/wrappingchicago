
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { useLocation } from 'react-router-dom';

const ServicesPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const isSpecificService = path.includes('/services/');
  
  // Determine which service to display based on the URL
  let serviceTitle = "Our Services";
  let serviceDescription = "Professional vehicle wrapping services in Chicago";
  let serviceKeywords = "vehicle wraps, fleet wraps, car wraps, Chicago";
  let serviceContent = null;
  
  if (isSpecificService) {
    if (path.includes('fleet-wraps')) {
      serviceTitle = "Fleet Wraps";
      serviceDescription = "Transform your business vehicles with professional fleet wrapping services from Chicago's top vehicle wrap company.";
      serviceKeywords = "fleet wraps, business vehicle wraps, fleet branding, Chicago fleet wraps";
      serviceContent = (
        <>
          <h2 className="text-2xl font-semibold text-brand-navy mb-4">Fleet Vehicle Wrapping Services</h2>
          <p className="mb-6">
            Make your company vehicles work harder for your business with our professional fleet wrapping services. 
            A wrapped fleet creates thousands of impressions every day, turning your vehicles into powerful mobile 
            billboards that generate leads and build brand recognition 24/7.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Benefits of Fleet Wraps</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Create thousands of impressions daily</li>
                <li>Lower cost-per-impression than traditional advertising</li>
                <li>Build brand consistency across your entire fleet</li>
                <li>Protect your vehicles' original paint</li>
                <li>Easy to update or remove without damage</li>
                <li>Typically lasts 5-7 years with proper care</li>
              </ul>
            </div>
            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Our Fleet Wrap Process</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Initial consultation to understand your needs</li>
                <li>Professional design tailored to your brand</li>
                <li>Vehicle measurement and template creation</li>
                <li>High-quality printing on premium 3M vinyl</li>
                <li>Expert installation by certified technicians</li>
                <li>Final inspection and quality assurance</li>
              </ol>
            </div>
          </div>
        </>
      );
    } else if (path.includes('color-change-wraps')) {
      serviceTitle = "Color Change Wraps";
      serviceDescription = "Transform your vehicle with our premium color change wraps. Get a new look without the permanence of paint.";
      serviceKeywords = "color change wraps, vehicle color change, car wrap colors, Chicago color change";
      serviceContent = (
        <>
          <h2 className="text-2xl font-semibold text-brand-navy mb-4">Premium Color Change Wraps</h2>
          <p className="mb-6">
            Want a new look for your vehicle without the permanence of paint? Our color change wraps allow you to 
            completely transform your vehicle's appearance with premium vinyl wraps available in virtually any color or finish.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Available Finishes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Gloss - High-shine, paint-like finish</li>
                <li>Matte - Sophisticated, non-reflective look</li>
                <li>Satin - Subtle sheen between gloss and matte</li>
                <li>Metallic - Eye-catching metallic effects</li>
                <li>Carbon Fiber - Textured, technical appearance</li>
                <li>Color Shift - Changes color depending on viewing angle</li>
              </ul>
            </div>
            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Benefits of Color Change Wraps</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Non-permanent alternative to paint</li>
                <li>Protects original paint and resale value</li>
                <li>Fraction of the cost of a quality paint job</li>
                <li>Easily removable when you want a change</li>
                <li>Typically lasts 3-5 years with proper care</li>
                <li>Unique finishes not possible with traditional paint</li>
              </ul>
            </div>
          </div>
        </>
      );
    } else if (path.includes('commercial-graphics')) {
      serviceTitle = "Commercial Graphics";
      serviceDescription = "Enhance your business vehicles with eye-catching commercial graphics and lettering. Make your brand visible on the road.";
      serviceKeywords = "commercial vehicle graphics, business vehicle lettering, Chicago truck graphics, company van wraps";
      serviceContent = (
        <>
          <h2 className="text-2xl font-semibold text-brand-navy mb-4">Professional Commercial Graphics</h2>
          <p className="mb-6">
            From simple lettering to complex designs, our commercial graphics solutions help businesses create 
            professional vehicle identities that stand out on the road and drive brand recognition.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Commercial Graphics Options</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Vehicle lettering and logos</li>
                <li>Cut vinyl graphics</li>
                <li>Window graphics and perforated film</li>
                <li>Magnetic vehicle signs</li>
                <li>Reflective graphics for increased visibility</li>
                <li>DOT numbers and regulatory markings</li>
              </ul>
            </div>
            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Perfect For</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Service vehicles and contractor trucks</li>
                <li>Delivery vans and box trucks</li>
                <li>Food trucks and mobile businesses</li>
                <li>Real estate and sales vehicles</li>
                <li>Small business fleets on a budget</li>
                <li>Temporary or seasonal promotions</li>
              </ul>
            </div>
          </div>
        </>
      );
    } else if (path.includes('partial-wraps')) {
      serviceTitle = "Partial Wraps";
      serviceDescription = "Cost-effective partial vehicle wraps that deliver maximum impact for your business on a budget.";
      serviceKeywords = "partial vehicle wraps, half wraps, Chicago partial wraps, budget vehicle graphics";
      serviceContent = (
        <>
          <h2 className="text-2xl font-semibold text-brand-navy mb-4">Effective Partial Vehicle Wraps</h2>
          <p className="mb-6">
            Partial wraps provide an excellent balance of visual impact and affordability. By strategically covering 
            portions of your vehicle with eye-catching graphics, you can achieve great brand visibility without the cost 
            of a full wrap.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Partial Wrap Options</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Quarter wraps (25% coverage)</li>
                <li>Half wraps (50% coverage)</li>
                <li>Three-quarter wraps (75% coverage)</li>
                <li>Tailgate wraps for pickup trucks</li>
                <li>Hood wraps for added impact</li>
                <li>Side panel wraps for vans and box trucks</li>
              </ul>
            </div>
            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Benefits of Partial Wraps</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Lower cost than full vehicle wraps</li>
                <li>Great visual impact when strategically designed</li>
                <li>Less installation time means faster turnaround</li>
                <li>Can incorporate existing vehicle color into design</li>
                <li>Easy to update or modify for different campaigns</li>
                <li>Excellent entry option for small businesses</li>
              </ul>
            </div>
          </div>
        </>
      );
    }
  }

  // Schema markup for the page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceTitle,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chicago Fleet Wraps",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4711 N. Lamon Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60630",
        "addressCountry": "US"
      },
      "telephone": "(312) 597-1286",
      "priceRange": "$$"
    },
    "description": serviceDescription,
    "serviceType": serviceTitle,
    "areaServed": {
      "@type": "City",
      "name": "Chicago"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": `https://chicagofleetwraps.com${path}`,
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{serviceTitle} | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content={serviceDescription}
        />
        <meta name="keywords" content={serviceKeywords} />
        <link rel="canonical" href={`https://chicagofleetwraps.com${path}`} />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-brand-navy mb-6">{serviceTitle}</h1>
            <p className="text-lg mb-8">
              At Chicago Fleet Wraps, we provide premium quality vehicle wrapping services
              throughout the greater Chicago area. Our team of experienced professionals
              uses only the highest quality materials to ensure your wrap looks great and lasts.
            </p>
            
            {/* Service content - either generic or specific */}
            {serviceContent ? (
              serviceContent
            ) : (
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Professional Installers</h2>
                  <p>
                    Our certified installers have years of experience wrapping vehicles of all types.
                    From compact cars to large commercial trucks, we have the expertise to handle any project.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Premium Materials</h2>
                  <p>
                    We use only the highest quality 3M and Avery vinyl wraps, ensuring your vehicle
                    wrap will look great and stand up to the harsh Chicago weather for years to come.
                  </p>
                </div>
              </div>
            )}
            
            <div className="bg-brand-light p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-brand-navy mb-4">Our Vehicle Wrap Services</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <a href="/services/fleet-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy mb-2">Fleet Wraps</h3>
                  <p className="text-sm">Transform your business fleet into mobile billboards</p>
                </a>
                <a href="/services/color-change-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy mb-2">Color Change Wraps</h3>
                  <p className="text-sm">Change your vehicle's color without paint</p>
                </a>
                <a href="/services/commercial-graphics" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy mb-2">Commercial Graphics</h3>
                  <p className="text-sm">Logos, lettering, and graphics for business vehicles</p>
                </a>
                <a href="/services/partial-wraps" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy mb-2">Partial Wraps</h3>
                  <p className="text-sm">Budget-friendly partial vehicle wrapping</p>
                </a>
              </div>
            </div>
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
