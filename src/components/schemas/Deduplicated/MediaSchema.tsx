import React from 'react';
import { useSchemaDeduplicator } from '@/components/seo/SchemaDeduplicator';

interface ImageObject {
  url: string;
  description: string;
  width?: number;
  height?: number;
  caption?: string;
}

interface VideoObject {
  url: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  duration?: string;
  uploadDate?: string;
}

interface MediaSchemaProps {
  images?: ImageObject[];
  videos?: VideoObject[];
  businessName?: string;
  businessUrl?: string;
}

const MediaSchema: React.FC<MediaSchemaProps> = ({
  images = [
    {
      url: "https://www.wrappingchicago.com/lovable-uploads/99d82949-5568-4a29-8a3a-72ff2ee6836e.png",
      description: "Chicago vehicle wrap specialists showcasing professional fleet of wrapped vehicles including trucks, vans, and cars with custom graphics and branding",
      width: 1200,
      height: 800,
      caption: "Professional Vehicle Wrap Gallery - Chicago's Premier Fleet Transformation"
    },
    {
      url: "https://www.wrappingchicago.com/lovable-uploads/b6c498ab-7a00-4a2c-957d-9ff9c4f11e8c.png",
      description: "Stunning blue color change wrap transformation on luxury sedan demonstrating premium vinyl application and flawless finish quality",
      width: 1000,
      height: 667,
      caption: "Color Change Wrap - Luxury Vehicle Transformation"
    }
  ],
  videos = [],
  businessName = "Wrapping Chicago",
  businessUrl = "https://www.wrappingchicago.com"
}) => {
  const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
  
  if (!canRenderSchema('ImageGallery', 'DedupMediaSchema')) {
    return null;
  }
  
  registerSchema('ImageGallery', 'DedupMediaSchema');

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${businessUrl}/#image-gallery`,
    "name": `${businessName} - Vehicle Wrap Portfolio`,
    "description": "Professional vehicle wrap gallery showcasing custom graphics, color changes, and commercial fleet transformations in Chicago",
    "about": {
      "@type": "LocalBusiness",
      "@id": `${businessUrl}/#organization`
    },
    "image": images.map(img => ({
      "@type": "ImageObject",
      "url": img.url,
      "description": img.description,
      "width": img.width,
      "height": img.height,
      "caption": img.caption,
      "creator": {
        "@type": "Organization",
        "name": businessName
      }
    }))
  };

  const schemas: any[] = [imageGallerySchema];

  // Add video schemas if videos exist
  if (videos.length > 0) {
    videos.forEach((video, index) => {
      const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "@id": `${businessUrl}/#video-${index + 1}`,
        "name": video.name,
        "description": video.description,
        "contentUrl": video.url,
        "embedUrl": video.url,
        "duration": video.duration || "PT2M30S",
        "uploadDate": video.uploadDate || "2024-01-01",
        "creator": {
          "@type": "Organization",
          "name": businessName
        }
      };
      schemas.push(videoSchema);
    });
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default MediaSchema;