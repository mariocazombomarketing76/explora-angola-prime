'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MOCK_BUSINESSES, SubscriptionPlan } from '@/constants';
import { BusinessCard } from '@/components/BusinessCard';
import { PremiumSpot } from '@/components/PremiumSpot';
import { AdUnit } from '@/components/AdUnit';
import { Category } from '@/types';
import { useLanguage } from '@/components/LanguageContext';
import { SlideUp, StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/Motion';

export default function ExplorarPage() {
    const { t } = useLanguage();
    const searchParams = useSearchParams();
    const cat = searchParams.get('categoria');

    const selectedCategory = (cat === 'ALL' || !cat) ? 'ALL' : cat;

    const filteredBusinesses = selectedCategory === 'ALL'
        ? MOCK_BUSINESSES
        : MOCK_BUSINESSES.filter(b => b.category === selectedCategory);

    const premiumBusiness = MOCK_BUSINESSES.find(b => b.plan === SubscriptionPlan.PREMIUM);

    return (
        <div className="pb-20">
            {/* Header */}
            <div className="bg-zinc-900 text-white pt-32 pb-20 rounded-b-[3rem] px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-angola-red/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <SlideUp>
                        <h1 className="text-4xl md:text-6xl font-display font-black italic mb-6 uppercase">{t('nav_explore')}</h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Descubra os melhores hotéis, restaurantes e experiências em toda Angola.
                        </p>
                    </SlideUp>
                </div>
            </div>

            {/* Premium Spot */}
            {premiumBusiness && (
                <div className="max-w-7xl mx-auto px-4 mt-12 mb-8">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 ml-2">Destaque do Mês</p>
                    <PremiumSpot business={premiumBusiness} />
                </div>
            )}

            {/* Ad Unit */}
            <div className="max-w-7xl mx-auto px-4">
                <AdUnit slot="explore_top" />
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-4 mt-8 mb-12">
                <SlideUp>
                    <CategoryFilter current={selectedCategory} />
                </SlideUp>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBusinesses.map(business => (
                        <StaggerItem key={business.id}>
                            <BusinessCard business={business} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {filteredBusinesses.length === 0 && (
                    <FadeIn className="text-center py-20">
                        <p className="text-2xl text-zinc-400 font-bold">{t('no_results')}</p>
                    </FadeIn>
                )}
            </div>
        </div>
    );
}

function CategoryFilter({ current }: { current: string }) {
    const { t } = useLanguage();
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            <a
                href="?categoria=ALL"
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${current === 'ALL' ? 'bg-angola-red text-white shadow-lg shadow-angola-red/30 scale-105' : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}
            >
                {t('all')}
            </a>
            {Object.values(Category).map(cat => (
                <a
                    key={cat}
                    href={`?categoria=${cat}`}
                    className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${current === cat ? 'bg-angola-red text-white shadow-lg shadow-angola-red/30 scale-105' : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}
                >
                    {cat}
                </a>
            ))}
        </div>
    )
}
