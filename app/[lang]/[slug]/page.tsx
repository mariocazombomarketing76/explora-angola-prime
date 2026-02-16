import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PROVINCES, MOCK_BUSINESSES } from '@/constants';
import ProvinceClient from './client';

interface Props {
    params: {
        lang: string;
        slug: string;
    };
}

export async function generateStaticParams() {
    const params = [];
    const languages = ['pt', 'en', 'fr', 'es'];
    for (const lang of languages) {
        for (const p of PROVINCES) {
            params.push({ lang, slug: p.slug });
        }
    }
    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const province = PROVINCES.find(p => p.slug === params.slug);
    if (!province) return { title: 'Not Found' };

    return {
        title: `${province.name} | Explora Angola Prime`,
        description: province.description,
        openGraph: {
            images: [province.heroImage],
        }
    };
}

export default function ProvincePage({ params }: Props) {
    const province = PROVINCES.find(p => p.slug === params.slug);

    if (!province) {
        notFound();
    }

    const businesses = MOCK_BUSINESSES.filter(b => b.province === province.name);

    return <ProvinceClient province={province} businesses={businesses} lang={params.lang} />;
}
