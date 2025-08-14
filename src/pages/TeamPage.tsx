import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Calendar, MapPin, Phone, Mail, Wrench, Users, Star } from 'lucide-react';
import Google2025SEOOptimizer from '@/components/seo/Google2025SEOOptimizer';
import { SchemaDeduplicatorProvider } from '@/components/seo/SchemaDeduplicator';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Roy Hakim",
      title: "Founder & Master Installer",
      yearsExperience: 15,
      certifications: ["3M Certified", "Avery Dennison Certified", "UASG Master"],
      image: "/api/placeholder/300/300",
      bio: "Roy founded Wrapping Chicago in 2014 with a vision to bring premium vehicle wrapping to the Midwest. His expertise spans custom design, complex installations, and team leadership.",
      specialty: "Luxury & Exotic Vehicles",
      projectsCompleted: 3500,
      email: "roy@chicagofleetwraps.com",
      phone: "(312) 597-1286"
    },
    {
      name: "Mike Thompson",
      title: "Lead Installation Specialist",
      yearsExperience: 12,
      certifications: ["3M Certified", "Avery Dennison Certified"],
      image: "/api/placeholder/300/300",
      bio: "Mike specializes in commercial fleet installations and has perfected techniques for complex vehicle geometries. His attention to detail ensures every wrap meets our quality standards.",
      specialty: "Commercial Fleets",
      projectsCompleted: 2800,
      email: "mike@wrappingchicago.com",
      phone: "(312) 597-1286"
    },
    {
      name: "Sarah Chen",
      title: "Creative Design Director", 
      yearsExperience: 8,
      certifications: ["Adobe Certified", "Vehicle Graphics Institute"],
      image: "/api/placeholder/300/300",
      bio: "Sarah brings artistic vision to life through innovative wrap designs. Her background in graphic design and understanding of vehicle aesthetics creates stunning visual solutions.",
      specialty: "Custom Design & Branding",
      projectsCompleted: 2200,
      email: "sarah@wrappingchicago.com",
      phone: "(312) 597-1286"
    },
    {
      name: "Carlos Rodriguez",
      title: "Quality Control Manager",
      yearsExperience: 10,
      certifications: ["PDAA Certified", "3M Certified"],
      image: "/api/placeholder/300/300",
      bio: "Carlos ensures every wrap meets our stringent quality standards. His meticulous inspection process and industry knowledge guarantee customer satisfaction.",
      specialty: "Quality Assurance & Training",
      projectsCompleted: 2500,
      email: "carlos@wrappingchicago.com",
      phone: "(312) 597-1286"
    }
  ];

  const shopImages = [
    {
      url: "/api/placeholder/600/400",
      title: "State-of-the-Art Installation Bay",
      description: "Climate-controlled environment with professional lighting"
    },
    {
      url: "/api/placeholder/600/400", 
      title: "Design Studio",
      description: "Creative space where custom designs come to life"
    },
    {
      url: "/api/placeholder/600/400",
      title: "Quality Control Station",
      description: "Final inspection ensures perfection before delivery"
    }
  ];

  const faqData = [
    {
      question: "What certifications do your installers have?",
      answer: "All our installers are certified by major manufacturers including 3M, Avery Dennison, and industry organizations like UASG and PDAA."
    },
    {
      question: "How experienced is your team?",
      answer: "Our team averages 11+ years of experience each, with over 11,000 combined projects completed across Chicago."
    },
    {
      question: "Can I meet the team before my project?",
      answer: "Absolutely! We encourage shop visits and consultations where you can meet our team and see our facility."
    }
  ];

  return (
    <SchemaDeduplicatorProvider>
      <Google2025SEOOptimizer
        pageTitle="Meet Our Expert Vehicle Wrap Team - Certified Installers Chicago"
        pageDescription="Meet the certified professionals behind Chicago's premier vehicle wrap services. 11+ years average experience, 3M & Avery Dennison certified installers."
        primaryKeywords={['vehicle wrap team', 'certified installers Chicago', 'wrap professionals', 'expert installation']}
        faqData={faqData}
        businessType="general"
      />
      
      <Helmet>
        <title>Meet Our Expert Team - Certified Vehicle Wrap Installers | Wrapping Chicago</title>
        <meta name="description" content="Meet the certified professionals behind Chicago's premier vehicle wrap services. 11+ years average experience, 3M & Avery Dennison certified installers." />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary via-primary-600 to-primary-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet Our Expert Team
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Certified professionals with 11+ years average experience
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <Award className="inline w-4 h-4 mr-2" />
                  Industry Certified
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <Users className="inline w-4 h-4 mr-2" />
                  11,000+ Combined Projects
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <Star className="inline w-4 h-4 mr-2" />
                  5-Star Rated Team
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-primary font-semibold mb-2">{member.title}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {member.yearsExperience} years
                        </span>
                        <span className="flex items-center">
                          <Wrench className="w-4 h-4 mr-1" />
                          {member.projectsCompleted.toLocaleString()} projects
                        </span>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.certifications.map((cert, i) => (
                            <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Specialty:</h4>
                        <p className="text-primary font-medium">{member.specialty}</p>
                      </div>

                      <p className="text-gray-700 mb-4">{member.bio}</p>

                      <div className="flex flex-col gap-2 text-sm">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center text-gray-600 hover:text-primary"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {member.email}
                        </a>
                        <a 
                          href={`tel:${member.phone}`}
                          className="flex items-center text-gray-600 hover:text-primary"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop Verification */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Professional Facility</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {shopImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{image.title}</h3>
                    <p className="text-gray-600">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Shop Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-2">Address:</h4>
                    <p className="text-gray-700 flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      4711 N. Lamon Ave<br />
                      Chicago, IL 60630
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business License:</h4>
                    <p className="text-gray-700">#CHI-VW-2014-001</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Operating Hours:</h4>
                    <p className="text-gray-700">
                      Mon-Fri: 8:00 AM - 5:00 PM<br />
                      Sat: 9:00 AM - 3:00 PM
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Facility Size:</h4>
                    <p className="text-gray-700">8,500 sq ft<br />Climate Controlled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Team Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">11,000+</div>
                <div className="text-white/80">Combined Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">45+</div>
                <div className="text-white/80">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-white/80">Industry Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <div className="text-white/80">Average Team Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work with Our Team?</h2>
            <p className="text-xl mb-8 text-gray-600">Experience the difference that certified professionals make</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                Schedule Shop Visit
              </a>
              <a href="/instant-quote" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                Get Expert Quote
              </a>
            </div>
          </div>
        </section>
      </main>
    </SchemaDeduplicatorProvider>
  );
};

export default TeamPage;