import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kikeroo.com';
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  const pages = [
    { path: '', changeFrequency: 'daily' as const, priority: 1 },
    { path: '/hotels', changeFrequency: 'daily' as const, priority: 0.9 },
    { path: '/events', changeFrequency: 'daily' as const, priority: 0.9 },
    { path: '/activities', changeFrequency: 'daily' as const, priority: 0.9 },
    { path: '/places', changeFrequency: 'daily' as const, priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/support', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/careers', changeFrequency: 'weekly' as const, priority: 0.6 },
    { path: '/login', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/signup', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    {
      path: '/cookie-policy',
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const alternates: Record<string, string> = {};
    for (const locale of locales) {
      alternates[locale] =
        locale === defaultLocale
          ? `${baseUrl}${page.path}`
          : `${baseUrl}/${locale}${page.path}`;
    }

    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: alternates,
      },
    });
  }

  return entries;
}
