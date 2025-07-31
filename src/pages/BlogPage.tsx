
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '@/components/seo/PageSEO';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MetaTags from '@/components/seo/MetaTags';
import BlogHero from '@/components/heroes/BlogHero';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "2024 Vehicle Wrap Trends: What's Hot in Chicago",
      excerpt: "Discover the latest vehicle wrap design trends taking Chicago by storm, from bold geometric patterns to sustainable materials.",
      author: "Design Team",
      date: "2024-01-15",
      category: "Trends",
      image: "/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png",
      slug: "2024-vehicle-wrap-trends"
    },
    {
      id: 2,
      title: "How to Care for Your Vehicle Wrap in Chicago Weather",
      excerpt: "Essential tips for maintaining your vehicle wrap through Chicago's harsh winters and hot summers to maximize longevity.",
      author: "Installation Team",
      date: "2024-01-10",
      category: "Maintenance",
      image: "/lovable-uploads/199b8977-07e4-488c-8e27-0ad83b25af33.jpg",
      slug: "vehicle-wrap-care-chicago-weather"
    },
    {
      id: 3,
      title: "ROI of Fleet Wraps: Real Chicago Business Success Stories",
      excerpt: "See how Chicago businesses increased their revenue by 30-70% with professional fleet wraps and mobile advertising.",
      author: "Marketing Team",
      date: "2024-01-05",
      category: "Business",
      image: "/lovable-uploads/5003af4f-76a6-441a-9f2c-8c1bcade2af7.jpg",
      slug: "fleet-wrap-roi-chicago-businesses"
    },
    {
      id: 4,
      title: "Color Change Wraps vs Paint: Which is Right for You?",
      excerpt: "Compare the pros and cons of color change wraps versus traditional paint jobs for your vehicle transformation project.",
      author: "Technical Team",
      date: "2023-12-28",
      category: "Education",
      image: "/lovable-uploads/38f1a5ce-45bd-4ebc-83bd-709dc1a2f9ce.jpg",
      slug: "color-change-wraps-vs-paint"
    },
    {
      id: 5,
      title: "Vehicle Wrap Design Mistakes to Avoid",
      excerpt: "Learn about common design pitfalls that can make your vehicle wrap less effective and how to create impactful mobile advertising.",
      author: "Design Team",
      date: "2023-12-20",
      category: "Design",
      image: "/lovable-uploads/c4a531de-bb9d-47ee-8771-598051ce485e.jpg",
      slug: "vehicle-wrap-design-mistakes"
    },
    {
      id: 6,
      title: "The Complete Guide to Vehicle Wrap Materials",
      excerpt: "Understanding different vinyl types, finishes, and durability options to choose the perfect material for your project.",
      author: "Technical Team",
      date: "2023-12-15",
      category: "Education",
      image: "/lovable-uploads/cd4478b4-fa5c-4fa2-843e-fa0f1c043adf.jpg",
      slug: "vehicle-wrap-materials-guide"
    }
  ];

  const categories = ["All", "Trends", "Maintenance", "Business", "Education", "Design"];

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Enhanced SEO structured data
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.wrappingchicago.com/blog#blog",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.wrappingchicago.com/blog"
    },
    "name": "Vehicle Wrap Blog - Wrapping Chicago",
    "description": "Expert insights, trends, and tips from Chicago's premier vehicle wrap professionals",
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "@id": "https://www.wrappingchicago.com/#organization"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "@id": `https://www.wrappingchicago.com/blog/${post.slug}`,
      "headline": post.title,
      "description": post.excerpt,
      "image": `https://www.wrappingchicago.com${post.image}`,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Wrapping Chicago"
      },
      "url": `https://www.wrappingchicago.com/blog/${post.slug}`
    }))
  };

  return (
    <>
      <PageSEO 
        title="Vehicle Wrap Blog - Tips, Trends & Insights | Wrapping Chicago"
        description="Stay updated with the latest vehicle wrap trends, maintenance tips, business insights, and design ideas from Chicago's premier wrap experts and professionals."
        keywords={["vehicle wrap blog", "wrap trends chicago", "car wrap tips", "truck wrap maintenance", "fleet wrap ROI", "vehicle wrap design", "chicago vehicle wraps", "wrap care tips"]}
        canonicalUrl="https://www.wrappingchicago.com/blog"
        h1="Vehicle Wrap Blog - Expert Tips & Insights"
        h2={["Latest Vehicle Wrap Trends", "Professional Wrap Tips", "Business Growth Insights"]}
        h3={["Wrap Maintenance Guide", "Design Best Practices", "ROI Case Studies"]}
        pageType="service"
      />
      
      <div className="flex flex-col min-h-screen">
        <BreadcrumbNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <BlogHero />

          {/* Blog Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === selectedCategory ? "default" : "outline"}
                    className={category === selectedCategory ? "bg-brand-red hover:bg-red-700" : ""}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <Tag className="h-4 w-4 mr-2" />
                    {category}
                  </Button>
                ))}
              </div>

              {/* Results Count */}
              <div className="text-center mb-8">
                <p className="text-gray-600">
                  Showing {filteredPosts.length} of {blogPosts.length} articles
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow group">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                      <span className="inline-block bg-brand-red/10 text-brand-red px-2 py-1 rounded-full text-xs font-medium mb-2">
                        {post.category}
                      </span>
                      <CardTitle className="group-hover:text-brand-red transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="outline" className="group/btn">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-16">
                <Card className="bg-gradient-to-r from-brand-red to-red-600 text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      Stay Updated with Vehicle Wrap Trends
                    </h3>
                    <p className="mb-6 text-red-100">
                      Get the latest vehicle wrap tips, trends, and exclusive offers delivered to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                      />
                      <Button variant="secondary">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default BlogPage;
