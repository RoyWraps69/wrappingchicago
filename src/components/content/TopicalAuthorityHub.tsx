
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Truck, Users, Palette, Shield, Wrench, FileText, HelpCircle } from 'lucide-react';

/**
 * Topical Authority Hub Component
 * Creates comprehensive content clusters to demonstrate expertise and authority
 */
const TopicalAuthorityHub: React.FC = () => {
  const topicalClusters = [
    {
      title: "Vehicle Wrap Types & Services",
      icon: <Car className="h-8 w-8 text-brand-red" />,
      description: "Complete guide to all vehicle wrap services and applications",
      mainTopics: [
        { name: "Car Wraps", link: "/car-wraps", description: "Luxury and standard car wrap solutions" },
        { name: "Truck Wraps", link: "/truck-wraps", description: "Commercial and personal truck graphics" },
        { name: "Van Wraps", link: "/van-wraps", description: "Cargo and passenger van branding" },
        { name: "Fleet Wraps", link: "/fleet-wraps", description: "Large-scale fleet branding solutions" }
      ],
      supportingContent: [
        "Partial vs Full Wrap Comparison",
        "Color Change Wrap Options",
        "Protective Film Benefits",
        "Specialty Vehicle Wraps"
      ]
    },
    {
      title: "Design & Customization",
      icon: <Palette className="h-8 w-8 text-brand-red" />,
      description: "Expert guidance on wrap design, colors, and customization options",
      mainTopics: [
        { name: "Custom Graphics", link: "/custom-graphics", description: "Unique design solutions" },
        { name: "Color Options", link: "/color-change-wraps", description: "Premium color change wraps" },
        { name: "Designer Wraps", link: "/designer-wraps", description: "High-end luxury wrap designs" },
        { name: "Commercial Graphics", link: "/commercial-graphics", description: "Business branding solutions" }
      ],
      supportingContent: [
        "Design Consultation Process",
        "Color Matching Services",
        "Brand Guidelines Integration",
        "Logo and Graphics Optimization"
      ]
    },
    {
      title: "Materials & Technology",
      icon: <Shield className="h-8 w-8 text-brand-red" />,
      description: "In-depth coverage of wrap materials, durability, and technology",
      mainTopics: [
        { name: "3M Vinyl Options", link: "/3m-vinyl-wraps", description: "Premium 3M material selection" },
        { name: "Avery Dennison", link: "/avery-wraps", description: "Professional grade materials" },
        { name: "Protective Films", link: "/protective-films", description: "Paint protection solutions" },
        { name: "Specialty Materials", link: "/specialty-materials", description: "Textured and unique finishes" }
      ],
      supportingContent: [
        "Material Durability Comparison",
        "Weather Resistance Testing",
        "Adhesive Technology Guide",
        "Removal and Residue Information"
      ]
    },
    {
      title: "Installation & Maintenance",
      icon: <Wrench className="h-8 w-8 text-brand-red" />,
      description: "Professional installation techniques and maintenance guidance",
      mainTopics: [
        { name: "Installation Process", link: "/installation-process", description: "Step-by-step wrap installation" },
        { name: "Maintenance Guide", link: "/wrap-maintenance", description: "Care and cleaning instructions" },
        { name: "Warranty Information", link: "/warranty", description: "Coverage and protection details" },
        { name: "Removal Services", link: "/wrap-removal", description: "Safe removal procedures" }
      ],
      supportingContent: [
        "Pre-Installation Preparation",
        "Quality Control Standards",
        "Post-Installation Care",
        "Troubleshooting Common Issues"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white" id="topical-authority">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Vehicle Wrap Knowledge Center
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our comprehensive guides and expert insights covering every aspect of vehicle wraps. 
            From material selection to installation techniques, we provide the knowledge you need to make 
            informed decisions about your vehicle wrap project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {topicalClusters.map((cluster, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                {cluster.icon}
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{cluster.title}</h3>
              </div>
              
              <p className="text-gray-700 mb-6">{cluster.description}</p>
              
              {/* Main Topics */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cluster.mainTopics.map((topic, topicIndex) => (
                    <Link 
                      key={topicIndex}
                      to={topic.link}
                      className="block p-3 bg-white rounded border hover:border-brand-red transition-colors"
                    >
                      <div className="font-medium text-gray-900">{topic.name}</div>
                      <div className="text-sm text-gray-600">{topic.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Supporting Content */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Expert Guides</h4>
                <ul className="space-y-2">
                  {cluster.supportingContent.map((content, contentIndex) => (
                    <li key={contentIndex} className="flex items-center text-gray-700">
                      <FileText className="h-4 w-4 text-brand-red mr-2" />
                      {content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Hub Link */}
        <div className="mt-12 text-center">
          <div className="bg-brand-navy text-white p-8 rounded-lg">
            <HelpCircle className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-lg mb-6">
              Get instant answers to common vehicle wrap questions from our expert team
            </p>
            <Link 
              to="/faq" 
              className="inline-block bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Browse All FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicalAuthorityHub;
