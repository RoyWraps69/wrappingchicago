
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import CustomerTestimonials from '@/components/testimonials/CustomerTestimonials';
import CallToAction from '@/components/CallToAction';
import SEOMaster from '@/components/seo/SEOMaster';
import AdvancedSEOOptimizer from '@/components/seo/AdvancedSEOOptimizer';
import VoiceSearchOptimizer from '@/components/seo/VoiceSearchOptimizer';
import EntityOptimizer from '@/components/seo/EntityOptimizer';
import SemanticContentEnhancer from '@/components/seo/SemanticContentEnhancer';
import EEATContent from '@/components/content/EEATContent';
import { useGalleryImages } from '@/hooks/useGalleryImages';

const Index = () => {
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();
  
  const homeKeywords = [
    'vehicle wraps Chicago',
    'car wraps Chicago',
    'truck wraps Chicago',
    'van wraps Chicago',
    'fleet wraps Chicago',
    'commercial vehicle graphics',
    'vehicle branding Chicago',
    '3M vehicle wraps',
    'professional vehicle wraps',
    'Chicago vehicle wrap company',
    'custom vehicle wraps',
    'vehicle lettering Chicago',
    'commercial vehicle wraps',
    'fleet graphics Chicago',
    'color change wraps',
    'vinyl vehicle wraps',
    'vehicle advertising Chicago',
    'mobile marketing Chicago',
    'business vehicle wraps',
    'vehicle wrap installation',
    'vehicle wraps near me',
    'best vehicle wrap company Chicago',
    'certified vehicle wrap installer',
    'premium vinyl wraps Chicago',
    'luxury vehicle wraps Chicago'
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/', position: 1 }
  ];

  const expertiseAreas = [
    '20+ Years Experience',
    'Certified 3M Installer', 
    'Avery Dennison Certified',
    '16,000+ Vehicles Wrapped',
    'Master Vehicle Wrap Technician'
  ];

  const trustSignals = [
    'Licensed & Insured Business',
    'Premium 3M Materials Only',
    '5-Year Warranty Coverage',
    '98% Customer Satisfaction',
    'Same-Week Installation',
    'Free Design Consultation'
  ];

  return (
    <>
      <SEOMaster
        title="Vehicle Wraps Chicago | Premium Car, Truck & Fleet Wraps | Wrapping Chicago"
        description="Chicago's premier vehicle wrap company with 20+ years experience. Custom car wraps, truck wraps, van wraps & fleet graphics using premium 3M materials. 16,000+ vehicles wrapped. Free quotes!"
        keywords={homeKeywords}
        canonicalUrl="https://www.wrappingchicago.com/"
        ogType="website"
        schemaType="WebPage"
        breadcrumbs={breadcrumbs}
        priority="critical"
        isHomepage={true}
      />
      
      <AdvancedSEOOptimizer
        pageTitle="Vehicle Wraps Chicago | Premium Car, Truck & Fleet Wraps"
        pageDescription="Chicago's premier vehicle wrap company with 20+ years experience and 16,000+ completed projects"
        keywords={homeKeywords}
        contentType="service"
        expertise={expertiseAreas}
        trustSignals={trustSignals}
      />
      
      <VoiceSearchOptimizer 
        cityName="Chicago"
        serviceName="Vehicle Wraps"
      />
      
      <EntityOptimizer />
      
      <main role="main">
        <Hero />
        
        <SemanticContentEnhancer semanticType="service" importance="high">
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <header className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black mb-4 speakable voice-optimized" data-speakable="true">
                  Professional Vehicle Wrap Services in Chicago
                </h2>
                <h3 className="text-2xl text-gray-600 mb-6 max-w-3xl mx-auto speakable voice-optimized" data-speakable="true">
                  Transform Your Vehicle Into a Mobile Billboard with Expert Installation
                </h3>
                <div className="text-lg text-gray-700 max-w-4xl mx-auto speakable" data-speakable="true">
                  <p itemProp="description">
                    With over 20 years of experience and 16,000+ completed projects, Wrapping Chicago 
                    delivers premium vehicle wraps using only the finest 3M materials and certified installation techniques.
                  </p>
                  <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                    <div className="speakable" data-speakable="true">
                      <strong>Expertise:</strong> Certified 3M & Avery Installers
                    </div>
                    <div className="speakable" data-speakable="true">
                      <strong>Experience:</strong> 16,000+ Vehicles Wrapped
                    </div>
                    <div className="speakable" data-speakable="true">
                      <strong>Warranty:</strong> 5-Year Material & Installation
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </section>
        </SemanticContentEnhancer>
        
        <SemanticContentEnhancer semanticType="service" importance="high">
          <ServicesSection 
            fleetWrapVan={fleetWrapVan}
            colorChangeVan={colorChangeVan}
            commercialGraphics={commercialGraphics}
          />
        </SemanticContentEnhancer>
        
        <SemanticContentEnhancer semanticType="benefit" importance="medium">
          <WhyChooseUsSection />
        </SemanticContentEnhancer>
        
        <SemanticContentEnhancer semanticType="feature" importance="medium">
          <EEATContent />
        </SemanticContentEnhancer>
        
        <CustomerTestimonials />
        <CallToAction />
      </main>
    </>
  );
};

export default Index;
