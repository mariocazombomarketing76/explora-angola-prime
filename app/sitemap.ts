import { MetadataRoute } from 'next';
import { PROVINCES } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://explora-angola-prime.vercel.app';
    const languages = ['pt', 'en', 'fr', 'es'];

    // Base routes
    const routes = [
        '',
        '/planeador',
        '/explorar',
        '/anunciar',
        '/blog',
    ];

    const sitemap: MetadataRoute.Sitemap = [];

    // Generate for all languages and routes
    languages.forEach(lang => {
        routes.forEach(route => {
            sitemap.push({
                url: `${baseUrl}/${lang}${route}`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: route === '' ? 1 : 0.8,
            });
        });

        // Generate for all provinces
        PROVINCES.forEach(province => {
            sitemap.push({
                url: `${baseUrl}/${lang}/${province.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
            });
        });
    });

    return sitemap;
}
