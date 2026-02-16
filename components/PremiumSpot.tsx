'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Business, SubscriptionPlan } from '@/types';
import { useLanguage } from './LanguageContext';
import { SlideUp } from '@/components/ui/Motion';

interface Props {
    business: Business;
}

export const PremiumSpot: React.FC<Props> = ({ business }) => {
    const { language, t } = useLanguage();

    if (business.plan !== SubscriptionPlan.PREMIUM) return null;

    return (
        <SlideUp className="relative bg-gradient-to-r from-angola-black to-zinc-900 rounded-3xl p-1 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-angola-gold/20 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="bg-zinc-900 rounded-[1.4rem] p-6 h-full flex flex-col md:flex-row gap-6 items-center relative z-10">
                <div className="relative w-full md:w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                        src={business.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80&w=800'}
                        alt={business.name}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-angola-gold text-angola-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                        Destaque
                    </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl font-black text-white italic mb-2">{business.name}</h3>
                    <div className="flex items-center justify-center md:justify-start text-angola-gold mb-4">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                    </div>
                    <p className="text-zinc-400 text-sm line-clamp-2 mb-6">
                        {business.description}
                    </p>
                    <Link
                        href={`/${language}/explorar/business/${business.id}`}
                        className="inline-block bg-angola-gold text-angola-black font-bold py-3 px-8 rounded-full hover:bg-white transition-colors"
                    >
                        {t('view_details')}
                    </Link>
                </div>
            </div>
        </SlideUp>
    );
};
