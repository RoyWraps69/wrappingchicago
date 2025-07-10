import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Wrench, Camera, Users, Phone, FileText, ExternalLink } from 'lucide-react';
import { chicagoMetroArea } from '@/data/metropolitanArea';

const SitemapPage = () => {
  const domain = "https://www.wrappingchicago.com";
  const lastModified = new Date().toISOString();
  
  const sitemapSections = [
    {
      title: "Core Services",
      description: "Professional vehicle wrap services",
      icon: <Wrench className="w-6 h-6" />,
      links: [
        { url: "/services", title: "All Services", description: "Complete vehicle wrap solutions" },
        { url: "/car-wraps", title: "Car Wraps", description: "Premium car wrap installation" },
        { url: "/truck-wraps", title: "Truck Wraps", description: "Commercial truck graphics" },
        { url: "/van-wraps", title: "Van Wraps", description: "Business van advertising" },
        { url: "/fleet-wraps", title: "Fleet Wraps", description: "Multi-vehicle branding" },
        { url: "/luxury-exotic-wraps", title: "Luxury Wraps", description: "Exotic vehicle specialists" },
        { url: "/color-change-wraps", title: "Color Change Wraps", description: "Complete color transformations" },
        { url: "/designer-wraps", title: "Designer Wraps", description: "Custom artistic designs" }
      ]
    },
    {
      title: "Service Areas",
      description: "Chicago metropolitan coverage",
      icon: <MapPin className="w-6 h-6" />,
      links: [
        { url: "/service-areas", title: "All Service Areas", description: "Complete coverage map" },
        ...chicagoMetroArea.slice(0, 12).map(area => ({
          url: `/locations/${area.slug}`,
          title: `${area.name} Vehicle Wraps`,
          description: `Professional wraps in ${area.name}, ${area.state}`
        }))
      ]
    },
    {
      title: "Company Information",
      description: "About our business",
      icon: <Users className="w-6 h-6" />,
      links: [
        { url: "/about", title: "About Us", description: "Our story and expertise" },
        { url: "/gallery", title: "Portfolio", description: "Recent wrap projects" },
        { url: "/pricing", title: "Pricing", description: "Service pricing information" },
        { url: "/faq", title: "FAQ", description: "Frequently asked questions" },
        { url: "/contact", title: "Contact", description: "Get in touch with us" }
      ]
    },
    {
      title: "Resources",
      description: "Helpful information",
      icon: <FileText className="w-6 h-6" />,
      links: [
        { url: "/blog", title: "Blog", description: "Industry insights and tips" },
        { url: "/glossary", title: "Glossary", description: "Vehicle wrap terminology" },
        { url: "/ai-wrap-ideas", title: "AI Wrap Ideas", description: "Design inspiration tool" },
        { url: "/stats", title: "Industry Stats", description: "Market data and trends" }
      ]
    },
    {
      title: "Legal Pages",
      description: "Terms and policies",
      icon: <FileText className="w-6 h-6" />,
      links: [
        { url: "/privacy-policy", title: "Privacy Policy", description: "Data protection policy" },
        { url: "/terms-of-service", title: "Terms of Service", description: "Service terms" },
        { url: "/return-policy", title: "Return Policy", description: "Return and refund policy" },
        { url: "/shipping", title: "Shipping Info", description: "Delivery information" }
      ]
    }
  ];

  // Calculate total pages
  const totalPages = sitemapSections.reduce((total, section) => total + section.links.length, 0);

  return (
    <>
      <PageSEO 
        title="Complete Sitemap | Chicago Vehicle Wraps | Wrapping Chicago"
        description="Comprehensive sitemap for Wrapping Chicago website. Easy navigation to all vehicle wrap services, service areas, portfolio, and company information across Chicago and suburbs. Find exactly what you're looking for with our organized site structure."
        keywords={[
          "sitemap wrapping chicago",
          "vehicle wrap services sitemap",
          "chicago car wraps navigation",
          "site structure vehicle wraps",
          "wrapping chicago pages",
          "vehicle wrap website map",
          "chicago wrap services directory"
        ]}
        canonicalUrl={`${domain}/sitemap`}
        h1="Complete Website Sitemap"
        h2={["Service Categories", "Geographic Coverage", "Company Resources"]}
        h3={["All Services", "Service Areas", "Information Pages"]}
        pageType="service"
        businessSchema={true}
      />
      
      {/* Enhanced Schema for Sitemap */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Wrapping Chicago Website Sitemap",
            "description": "Complete navigation structure for Wrapping Chicago vehicle wrap services",
            "numberOfItems": totalPages,
            "itemListElement": sitemapSections.flatMap((section, sectionIndex) => 
              section.links.map((link, linkIndex) => ({
                "@type": "SiteNavigationElement",
                "position": sectionIndex * 20 + linkIndex + 1,
                "name": link.title,
                "description": link.description,
                "url": `${domain}${link.url}`
              }))
            )
          })}
        </script>
        
        {/* XML Sitemap Reference */}
        <link rel="sitemap" type="application/xml" href={`${domain}/sitemap.xml`} />
        <meta name="robots" content="index, follow" />
        <meta name="last-modified" content={lastModified} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-primary/5">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Complete Website Sitemap
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Navigate our comprehensive vehicle wrap services, service areas, and resources. Everything you need to transform your vehicle in Chicago and surrounding areas.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  {totalPages} Total Pages
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {chicagoMetroArea.length}+ Service Areas
                </span>
                <span className="flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  8 Core Services
                </span>
              </div>
            </div>
            
            {/* Quick Access Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link 
                to="/sitemap.xml" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                target="_blank"
                rel="noopener"
              >
                <ExternalLink className="w-4 h-4" />
                XML Sitemap
              </Link>
              <Link 
                to="/services" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <Wrench className="w-4 h-4" />
                All Services
              </Link>
              <Link 
                to="/service-areas" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Website Navigation Structure
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {sitemapSections.map((section, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {section.icon}
                      </div>
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {section.description} ({section.links.length} pages)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {section.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          to={link.url}
                          className="group flex items-start justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-1">
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                              {link.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {link.description}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Additional Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card>
                <CardHeader>
                  <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Visual Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Browse our extensive gallery of completed vehicle wrap projects across Chicago.
                  </p>
                  <Link to="/gallery" className="inline-flex items-center gap-2 text-primary hover:underline">
                    View Gallery <ExternalLink className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Get Started</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ready to transform your vehicle? Contact us for a free consultation and quote.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-primary hover:underline">
                    Contact Us <ExternalLink className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Learn More</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Explore our FAQ section for answers to common vehicle wrap questions.
                  </p>
                  <Link to="/faq" className="inline-flex items-center gap-2 text-primary hover:underline">
                    Read FAQ <ExternalLink className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO Footer Info */}
        <section className="py-12 px-4 border-t">
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-xl font-semibold mb-4">
              Search Engine Information
            </h3>
            <p className="text-muted-foreground mb-6">
              This HTML sitemap provides easy navigation for visitors. Search engines can access our 
              <Link to="/sitemap.xml" className="text-primary hover:underline mx-1" target="_blank" rel="noopener">
                XML sitemap
              </Link>
              for optimal crawling and indexing of all {totalPages} pages.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Last Updated: {new Date().toLocaleDateString()}</span>
              <span>•</span>
              <span>Chicago Metropolitan Area Coverage</span>
              <span>•</span>
              <span>Mobile Optimized</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;