import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: 'https://www.woverasolutions.com/sitemap.xml',
    host: 'https://www.woverasolutions.com',
  };
} 