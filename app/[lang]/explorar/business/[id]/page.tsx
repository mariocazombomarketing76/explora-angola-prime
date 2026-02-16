import { notFound } from 'next/navigation';
import { MOCK_BUSINESSES } from '@/constants';
import BusinessDetailClient from './client';

export async function generateStaticParams() {
    const params = [];
    const languages = ['pt', 'en', 'fr', 'es'];

    for (const lang of languages) {
        for (const business of MOCK_BUSINESSES) {
            params.push({ lang, id: business.id });
        }
    }
    return params;
}

export default function BusinessPage({ params }: { params: { id: string } }) {
    const business = MOCK_BUSINESSES.find(b => b.id === params.id);

    if (!business) {
        notFound();
    }

    return <BusinessDetailClient business={business} />;
}
