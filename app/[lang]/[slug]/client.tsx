'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Province, Business, Category } from '@/types';
import { useLanguage } from '@/components/LanguageContext';
import { BusinessCard } from '@/components/BusinessCard';

interface Props {
    province: Province;
    businesses: Business[];
    lang: string;
}

export default function ProvinceClient({ province, businesses, lang }: Props) {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<Category | 'ALL'>('ALL');

    const filteredBusinesses = activeTab === 'ALL'
        ? businesses
        : businesses.filter(b => b.category === activeTab);

    return (
        <div className="pb-20">
            {/* Hero */}
            <div className="relative h-[60vh] flex items-center justify-center">
                <Image
                    src={province.heroImage}
                    alt={province.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-display font-black italic mb-4">{province.name}</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">{province.description}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-zinc-900">{t('explore')} {province.name}</h2>

                    {/* Tabs */}
                    <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-4 mb-8 border-b border-zinc-100">
                        <button
                            onClick={() => setActiveTab('ALL')}
                            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'ALL' ? 'bg-angola-red text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}
                        >
                            {t('all')}
                        </button>
                        {Object.values(Category).map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === cat ? 'bg-angola-red text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Business Grid */}
                    {filteredBusinesses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredBusinesses.map(b => (
                                <BusinessCard key={b.id} business={b} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-zinc-500">
                            <p>{t('no_results')}</p>
                        </div>
                    )}
                </div>

                {/* Cities */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-zinc-900">Principais Cidades</h3>
                    <div className="flex gap-4">
                        {province.cities.map(city => (
                            <span key={city} className="px-6 py-3 bg-zinc-100 rounded-xl font-medium text-zinc-700">{city}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
