import React from 'react';

interface VideoSEOOptimizerProps {
  videoTitle: string;
  videoDescription: string;
  videoDuration: string; // Format: PT2M30S
  thumbnailUrl: string;
  uploadDate: string;
  location: string;
}

/**
 * Video SEO Optimizer - Dominates Video Search Results
 * 
 * This component optimizes video content for:
 * 1. YouTube and Google video search
 * 2. Rich video snippets in search results
 * 3. Local video content optimization
 * 4. Video schema markup for better visibility
 */
const VideoSEOOptimizer: React.FC<VideoSEOOptimizerProps> = ({
  videoTitle,
  videoDescription,
  videoDuration,
  thumbnailUrl,
  uploadDate,
  location
}) => {
  const domain = "https://www.wrappingchicago.com";

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": videoTitle,
    "description": videoDescription,
    "duration": videoDuration,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "contentLocation": {
      "@type": "Place",
      "name": location
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Wrapping Chicago",
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`
      }
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(videoSchema)}
    </script>
  );
};

// Pre-configured video content for competitive advantage
export const vehicleWrapVideos = [
  {
    title: "Chicago Vehicle Wrap Installation Process - Start to Finish",
    description: "Watch our professional team install a complete vehicle wrap in Chicago. See the precision, quality materials, and attention to detail that makes us the #1 choice for car wraps, truck wraps, and fleet graphics.",
    duration: "PT5M45S",
    thumbnail: "/lovable-uploads/video-thumbnails/installation-process.jpg",
    uploadDate: "2024-11-01",
    location: "Chicago, IL"
  },
  {
    title: "Before and After: Amazing Vehicle Wrap Transformations Chicago",
    description: "Incredible vehicle wrap transformations in Chicago! See cars, trucks, and vans completely transformed with custom graphics, color change wraps, and commercial branding.",
    duration: "PT3M20S", 
    thumbnail: "/lovable-uploads/video-thumbnails/transformations.jpg",
    uploadDate: "2024-10-28",
    location: "Chicago, IL"
  },
  {
    title: "Fleet Vehicle Wraps Chicago - Complete Business Makeover",
    description: "Watch us transform an entire business fleet with professional vehicle wraps. See how consistent branding across multiple vehicles creates powerful marketing impact in Chicago.",
    duration: "PT4M15S",
    thumbnail: "/lovable-uploads/video-thumbnails/fleet-wraps.jpg", 
    uploadDate: "2024-10-25",
    location: "Chicago, IL"
  }
];

export default VideoSEOOptimizer;