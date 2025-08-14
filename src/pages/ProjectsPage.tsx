import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, Star, Filter, Search } from 'lucide-react';
import Google2025SEOOptimizer from '@/components/seo/Google2025SEOOptimizer';
import { SchemaDeduplicatorProvider } from '@/components/seo/SchemaDeduplicator';

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: "Fleet Transformation - Chicago Plumbing Co.",
      vehicleType: "Commercial Fleet",
      location: "Lincoln Park, Chicago",
      date: "2024-01-15",
      rating: 5,
      beforeImage: "/api/placeholder/400/250",
      afterImage: "/api/placeholder/400/250",
      client: "Mike Thompson, Operations Manager",
      testimonial: "The wrap design perfectly captured our brand identity. We've seen a 40% increase in service calls since the fleet makeover.",
      details: "Complete fleet of 12 service vehicles including vans and trucks. Custom design incorporating company branding with high-visibility safety elements."
    },
    {
      id: 2,
      title: "Luxury Tesla Model S Chrome Delete",
      vehicleType: "Luxury Vehicle",
      location: "Gold Coast, Chicago",
      date: "2024-01-10",
      rating: 5,
      beforeImage: "/api/placeholder/400/250",
      afterImage: "/api/placeholder/400/250",
      client: "Sarah Williams",
      testimonial: "Absolutely stunning transformation. The matte black finish looks incredible and the quality is exceptional.",
      details: "Complete chrome delete and color change from white to matte black. Premium 3M 1080 Series vinyl with 7-year warranty."
    },
    {
      id: 3,
      title: "Food Truck Branding - Tacos El Rey",
      vehicleType: "Food Truck",
      location: "Pilsen, Chicago",
      date: "2023-12-20",
      rating: 5,
      beforeImage: "/api/placeholder/400/250",
      afterImage: "/api/placeholder/400/250",
      client: "Carlos Rodriguez, Owner",
      testimonial: "The vibrant design draws customers from blocks away. Sales have increased 60% since the new wrap was installed.",
      details: "Eye-catching food truck wrap featuring vibrant colors and appetizing food imagery. Weather-resistant materials designed for high-traffic use."
    }
  ];

  const vehicleTypes = ['all', 'Commercial Fleet', 'Luxury Vehicle', 'Food Truck', 'Van', 'Truck'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'all' || project.vehicleType === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const faqData = [
    {
      question: "How long does a typical vehicle wrap project take?",
      answer: "Most vehicle wraps take 2-5 days depending on complexity. Fleet projects are scheduled to minimize business disruption."
    },
    {
      question: "Do you provide design services for custom projects?",
      answer: "Yes! Our in-house design team creates custom artwork for every project, ensuring your wrap perfectly represents your brand."
    },
    {
      question: "What warranty do you offer on your wrap projects?",
      answer: "We provide comprehensive warranties: 5 years on materials and 2 years on installation workmanship."
    }
  ];

  return (
    <SchemaDeduplicatorProvider>
      <Google2025SEOOptimizer
        pageTitle="Vehicle Wrap Projects Gallery - Before & After Transformations"
        pageDescription="Browse our extensive portfolio of vehicle wrap projects in Chicago. See real transformations with before/after photos, client testimonials, and project details."
        primaryKeywords={['vehicle wrap projects', 'Chicago wrap gallery', 'before after wraps', 'fleet transformations']}
        faqData={faqData}
        businessType="general"
      />
      
      <Helmet>
        <title>Vehicle Wrap Projects Gallery - Real Transformations | Wrapping Chicago</title>
        <meta name="description" content="Browse our extensive portfolio of vehicle wrap projects in Chicago. See real transformations with before/after photos, client testimonials, and project details." />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary via-primary-600 to-primary-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Projects Gallery
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Over 16,000 completed vehicle wrap transformations across Chicago
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Time-Stamped Projects
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Chicago Neighborhoods
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <Star className="inline w-4 h-4 mr-2" />
                  Client Reviews
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <select 
                  value={selectedFilter} 
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2"
                >
                  {vehicleTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Vehicle Types' : type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative">
                      <img 
                        src={project.beforeImage} 
                        alt={`Before - ${project.title}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={project.afterImage} 
                        alt={`After - ${project.title}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">
                        AFTER
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <div className="flex items-center">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(project.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {project.vehicleType}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4">{project.details}</p>

                    {/* Client Testimonial */}
                    <blockquote className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <p className="italic text-gray-700 mb-2">"{project.testimonial}"</p>
                      <cite className="text-sm font-medium text-primary">— {project.client}</cite>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">Join over 16,000 satisfied customers across Chicago</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/instant-quote" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Instant Quote
              </a>
              <a href="/contact" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
    </SchemaDeduplicatorProvider>
  );
};

export default ProjectsPage;