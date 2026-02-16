import { PROVINCES } from '@/constants';
import { notFound } from 'next/navigation';
import ProvinceClient from './client';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const province = PROVINCES.find(p => p.slug === params.slug);

    if (!province) {
        return {
            title: 'Província não encontrada',
        };
    }

    return {
        title: `${province.name} | Explora Angola Prime`,
        description: province.description,
    };
}

export function generateStaticParams() {
    return PROVINCES.map((province) => ({
        slug: province.slug,
    }));
}

export default function ProvincePage({ params }: { params: { slug: string } }) {
    const province = PROVINCES.find(p => p.slug === params.slug);

    if (!province) {
        notFound();
    }

    return <ProvinceClient province={province} />;
}
