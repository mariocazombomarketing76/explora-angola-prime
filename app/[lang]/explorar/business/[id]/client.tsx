'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Business, SubscriptionPlan } from '@/types';
import { useLanguage } from '@/components/LanguageContext';
import { SlideUp, FadeIn } from '@/components/ui/Motion';

interface Props {
    business: Business;
}

export default function BusinessDetailClient({ business }: Props) {
    const { t } = useLanguage();

    return (
        <div className="pb-20">
            {/* Header/Hero */}
            <div className="relative h-[60vh] lg:h-[70vh]">
                <Image
                    src={business.image}
                    alt={business.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
                    <SlideUp>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <span className="bg-angola-red text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                                {business.category}
                            </span>
                            {business.verified && (
                                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                    {t('verified')}
                                </span>
                            )}
                            {business.plan === SubscriptionPlan.PREMIUM && (
                                <span className="bg-angola-gold text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
                                    ★ Premium
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-7xl font-display font-black text-white mb-4 italic">{business.name}</h1>
                        <div className="flex items-center text-white/90 text-lg">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            {business.location}, {business.city}, {business.province}
                        </div>
                    </SlideUp>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <FadeIn>
                        <h2 className="text-3xl font-display font-black mb-6 border-b border-zinc-200 pb-4">Sobre</h2>
                        <p className="text-zinc-600 text-lg leading-relaxed whitespace-pre-line">
                            {business.description}
                        </p>
                    </FadeIn>

                    {/* Reviews Section */}
                    <FadeIn>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-display font-black">Avaliações</h2>
                            <div className="flex items-center bg-zinc-50 px-4 py-2 rounded-2xl">
                                <span className="text-4xl font-black text-angola-gold mr-2">{business.rating}</span>
                                <div className="flex flex-col">
                                    <div className="flex text-angola-gold">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className={`w-4 h-4 ${i < Math.floor(business.rating) ? 'fill-current' : 'text-zinc-300'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{business.reviewCount} Opiniões</span>
                                </div>
                            </div>
                        </div>

                        {/* Mock Reviews */}
                        <div className="space-y-6">
                            {[1, 2].map((i) => (
                                <div key={i} className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center font-bold text-zinc-500 mr-3">
                                                {i === 1 ? 'JP' : 'MA'}
                                            </div>
                                            <div>
                                                <p className="font-bold text-zinc-900">{i === 1 ? 'João Pereira' : 'Maria António'}</p>
                                                <p className="text-xs text-zinc-400">Há {i} semana</p>
                                            </div>
                                        </div>
                                        <div className="flex text-angola-gold">
                                            {[...Array(5)].map((_, width) => (
                                                <svg key={width} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-zinc-600">
                                        {i === 1 ? 'Excelente serviço e localização fantástica! Recomendo vivamente a todos.' : 'Muito bom, mas o atendimento poderia ser um pouco mais rápido. A comida estava deliciosa.'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                {/* Sidebar / Contact Info */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 sticky top-32">
                        <h3 className="text-xl font-black mb-6 uppercase italic">Contactos</h3>

                        <div className="space-y-6 mb-8">
                            <div>
                                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Telefone</p>
                                <p className="font-bold text-zinc-900 text-lg">{business.phone}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Email</p>
                                <p className="font-bold text-zinc-900 text-lg truncate">{business.email}</p>
                            </div>
                            {business.website && (
                                <div>
                                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Website</p>
                                    <a href={business.website} target="_blank" className="font-bold text-angola-red hover:underline text-lg truncate block">{business.website}</a>
                                </div>
                            )}
                        </div>

                        <a
                            href={`https://wa.me/${business.whatsapp}`}
                            target="_blank"
                            className="w-full bg-[#25D366] text-white font-black py-4 rounded-xl mb-4 flex items-center justify-center hover:bg-[#20b85c] transition-colors shadow-lg shadow-green-500/20"
                        >
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
