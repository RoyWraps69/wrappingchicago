import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Camera } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const CallToAction = ({ city = 'your area' }: { city?: string }) => {
  const location = useLocation();
  
  // Get unique CTA content based on the current page
  const getCtaContent = (pathname: string) => {
    if (pathname === '/') {
      return {
        title: `Start Your Vehicle Transformation Journey in ${city}`,
        description: `Join thousands of satisfied customers who've elevated their brand with professional vehicle wraps. From initial concept to final installation, we make the process seamless.`
      };
    }
    if (pathname === '/car-wraps') {
      return {
        title: `Bring Your Car Wrap Vision to Life in ${city}`,
        description: `Whether it's a subtle logo placement or a full custom design, our car wrap specialists turn your ideas into stunning mobile advertising that drives results.`
      };
    }
    if (pathname === '/truck-wraps') {
      return {
        title: `Maximize Your Business Impact in ${city}`,
        description: `Every mile your truck travels becomes a marketing opportunity. Our commercial truck wraps are designed to generate leads and build brand recognition wherever you go.`
      };
    }
    if (pathname === '/fleet-wraps') {
      return {
        title: `Unify Your Fleet's Brand Message in ${city}`,
        description: `Consistent fleet branding builds trust and professionalism. Let us create a cohesive look across your entire vehicle fleet that reinforces your business identity.`
      };
    }
    if (pathname === '/color-change-wraps') {
      return {
        title: `Reimagine Your Vehicle's Style in ${city}`,
        description: `Paint protection meets personal expression. Our color change wraps give you endless possibilities while preserving your vehicle's original finish.`
      };
    }
    if (pathname === '/contact') {
      return {
        title: `Let's Discuss Your Project in ${city}`,
        description: `Every vehicle wrap project is unique. Share your vision with our team and discover how we can bring your ideas to life with precision and creativity.`
      };
    }
    if (pathname === '/about') {
      return {
        title: `Experience the Difference in ${city}`,
        description: `With over 16,000 completed projects, we've perfected our process. Join the growing list of businesses that trust us to represent their brand on the road.`
      };
    }
    if (pathname.includes('/plumbing')) {
      return {
        title: `Get More Service Calls in ${city}`,
        description: `Professional plumbing van wraps that build instant credibility. Show homeowners you're the established, trustworthy plumber they should call first.`
      };
    }
    if (pathname.includes('/hvac')) {
      return {
        title: `Build Trust in Your HVAC Services in ${city}`,
        description: `When comfort is on the line, customers choose contractors they trust. Our HVAC vehicle wraps communicate professionalism and reliability at every service call.`
      };
    }
    if (pathname.includes('/electrical')) {
      return {
        title: `Spark New Business Opportunities in ${city}`,
        description: `Electrical work requires trust and expertise. Our vehicle wraps help establish your credibility before you even ring the doorbell.`
      };
    }
    // Default fallback
    return {
      title: `Discover Your Vehicle's Potential in ${city}`,
      description: `From concept to completion, our vehicle wrap experts are here to help you create something extraordinary. Let's explore what's possible for your project.`
    };
  };

  const ctaContent = getCtaContent(location.pathname);

  return (
    <section className="bg-brand-red text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-3">{ctaContent.title}</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          {ctaContent.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            variant="white"
            className="text-lg px-8 py-5 h-auto"
          >
            <Link to="/contact" className="inline-flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Get Your Free Quote
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-lg px-8 py-5 h-auto bg-transparent border-white text-white hover:bg-white hover:text-brand-red"
          >
            <Link to="/gallery" className="inline-flex items-center">
              <Camera className="mr-2 h-5 w-5" />
              View Our Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;