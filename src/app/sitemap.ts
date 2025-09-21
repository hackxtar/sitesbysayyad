
import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sitesbysayyad.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/quote', '/privacy-policy', '/terms-of-service'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
