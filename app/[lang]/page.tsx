'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PROVINCES, MOCK_BUSINESSES, SubscriptionPlan } from '@/constants';
import { BusinessCard } from '@/components/BusinessCard';
import { AdUnit } from '@/components/AdUnit';
import { Category } from '@/types';
import { useLanguage } from '@/components/LanguageContext';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, ScaleIn } from '@/components/ui/Motion';

export default function Home() {
    const { t, language } = useLanguage();
    const router = useRouter();

    const handleCategoryClick = (cat: string) => {
        router.push(`/${language}/explorar?categoria=${cat}`);
    };

    return (
        <div className="space-y-32 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[95vh] flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1920"
                    alt="Angola Landscape"
                    fill
                    className="object-cover -z-10"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-angola-black/90 via-angola-black/40 to-transparent"></div>
                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <SlideUp delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6 leading-tight uppercase italic drop-shadow-2xl tracking-tighter">
                            {t('hero_title')} <span className="text-angola-yellow text-transparent bg-clip-text bg-gradient-to-r from-angola-yellow to-angola-gold">Angola</span>
                        </h1>
                    </SlideUp>
                    <SlideUp delay={0.4}>
                        <p className="text-angola-gold font-bold uppercase tracking-[0.4em] text-sm md:text-xl mb-12 drop-shadow-lg">
                            {t('slogan')}
                        </p>
                    </SlideUp>

                    <FadeIn delay={0.6} className="border border-white/10 rounded-2xl p-8 md:p-10 bg-white/5 backdrop-blur-md mb-12 max-w-3xl mx-auto shadow-2xl">
                        <p className="text-lg md:text-2xl text-zinc-100 font-light leading-relaxed">
                            {t('hero_desc')}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href={`/${language}/planeador`} className="group relative bg-angola-red text-white font-black py-4 px-10 rounded-full text-lg shadow-lg shadow-angola-red/30 overflow-hidden transition-all hover:scale-105 active:scale-95">
                            <span className="relative z-10">{t('btn_plan')}</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </Link>
                        <button onClick={() => router.push(`/${language}/explorar`)} className="group bg-white/10 backdrop-blur-sm hover:bg-white text-white hover:text-angola-black font-black py-4 px-10 rounded-full transition-all text-lg border border-white/20 hover:border-white active:scale-95">
                            {t('btn_explore')}
                        </button>
                    </FadeIn>
                </div>
            </section>

            {/* Stats/Highlight */}
            <section className="max-w-7xl mx-auto px-4 -mt-40 relative z-20">
                <ScaleIn>
                    <div className="bg-white rounded-3xl shadow-2xl border border-zinc-100 p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '18', label: t('stats_provinces') },
                            { value: '500+', label: t('stats_businesses') },
                            { value: '10k+', label: t('stats_tourists') },
                            { value: '24/7', label: t('stats_support') }
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:border-r border-zinc-100 last:border-0 relative">
                                <p className="text-5xl font-black text-angola-red mb-2">{stat.value}</p>
                                <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </ScaleIn>
            </section>

            {/* Ad Unit 1 */}
            <section className="max-w-7xl mx-auto px-4">
                <AdUnit slot="home_top" />
            </section>

            {/* Provinces Highlights */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <SlideUp>
                        <h2 className="text-4xl font-display font-black text-zinc-900 italic uppercase tracking-tighter">{t('featured_provinces')}</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-angola-yellow to-angola-red mt-4 rounded-full"></div>
                    </SlideUp>
                    <Link href={`/${language}/explorar`} className="hidden md:block text-angola-red font-bold hover:text-angola-black transition-colors">{t('view_all')}</Link>
                </div>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROVINCES.filter(p => ['luanda', 'benguela', 'malanje'].includes(p.slug)).map(province => (
                        <StaggerItem key={province.id} className="h-full">
                            <Link href={`/${language}/${province.slug}`} className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-xl block">
                                <Image
                                    src={province.heroImage}
                                    alt={province.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-angola-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h3 className="text-4xl font-display font-black text-white italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{province.name}</h3>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 delay-75">
                                        <p className="text-angola-yellow font-bold uppercase tracking-widest text-xs flex items-center">
                                            {t('explore_now')}
                                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
                <div className="mt-8 text-center md:hidden">
                    <Link href={`/${language}/explorar`} className="text-angola-red font-bold uppercase text-sm tracking-widest">{t('view_all')}</Link>
                </div>
            </section>

            {/* Ad Unit 2 */}
            <section className="max-w-7xl mx-auto px-4">
                <AdUnit slot="home_middle" format="fluid" />
            </section>

            {/* Featured Businesses */}
            <section className="bg-zinc-50 py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <SlideUp>
                            <h2 className="text-4xl font-display font-black text-zinc-900 italic uppercase tracking-tighter">{t('recommended_services')}</h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-angola-red to-angola-black mt-4 rounded-full"></div>
                        </SlideUp>
                    </div>
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MOCK_BUSINESSES.map(business => (
                            <StaggerItem key={business.id}>
                                <BusinessCard business={business} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="max-w-7xl mx-auto px-4">
                <ScaleIn className="bg-angola-black rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-angola-red rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-angola-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

                    <div className="relative z-10 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-black italic mb-4 uppercase">{t('find_what_you_need')}</h2>
                    </div>
                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {Object.values(Category).map((cat, i) => (
                            <div
                                key={cat}
                                onClick={() => handleCategoryClick(cat)}
                                className="group bg-zinc-900/50 hover:bg-white/10 p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all text-center cursor-pointer backdrop-blur-sm"
                            >
                                <div className="h-16 w-16 bg-zinc-800 group-hover:bg-angola-yellow group-hover:text-angola-black text-zinc-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 transform group-hover:-translate-y-2">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <span className="font-bold text-xs md:text-sm tracking-widest uppercase group-hover:text-angola-yellow transition-colors">{cat}</span>
                            </div>
                        ))}
                    </div>
                </ScaleIn>
            </section>

            {/* Register Business CTA */}
            <section className="max-w-7xl mx-auto px-4 pb-20">
                <SlideUp className="bg-gradient-to-br from-angola-gold to-angola-yellow rounded-3xl p-16 md:p-24 relative overflow-hidden shadow-2xl text-center">
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-angola-black italic mb-8 uppercase tracking-tight">{t('cta_title')}</h2>
                        <p className="text-angola-black/80 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            {t('cta_desc')}
                        </p>
                        <Link href={`/${language}/anunciar`} className="inline-block bg-angola-black text-white font-black py-5 px-16 rounded-full hover:scale-105 transition-all text-xl shadow-2xl hover:shadow-black/20">
                            {t('btn_register_now')}
                        </Link>
                    </div>
                </SlideUp>
            </section>
        </div>
    );
}
