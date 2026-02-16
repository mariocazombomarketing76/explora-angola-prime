'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROVINCES } from '@/constants';
import { useLanguage } from './LanguageContext';

export default function Footer() {
    const { t, language } = useLanguage();
    const [subscribed, setSubscribed] = useState(false);

    const handleSub = (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 5000);
    };

    return (
        <footer className="bg-angola-black text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href={`/${language}`} className="flex flex-col mb-6">
                            <div className="flex items-center space-x-2">
                                <span className="text-angola-red font-display text-2xl font-black italic tracking-tighter">EXPLORA</span>
                                <span className="text-white font-display text-2xl font-black italic tracking-tighter">ANGOLA</span>
                            </div>
                            <span className="text-[10px] text-angola-yellow font-bold uppercase tracking-[0.2em] mt-1">{t('slogan')}</span>
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {t('footer_desc')}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-angola-yellow font-bold mb-6">{t('nav_provinces')}</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-zinc-400 text-xs">
                            {PROVINCES.slice(0, 10).map(p => <Link key={p.id} href={`/${language}/${p.slug}`} className="hover:text-white">{p.name}</Link>)}
                            <Link href={`/${language}/explorar`} className="text-angola-yellow font-bold">Ver Todas...</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-angola-yellow font-bold mb-6">Empresas</h4>
                        <ul className="space-y-4 text-zinc-400 text-sm">
                            <li><Link href={`/${language}/anunciar`} className="hover:text-white transition-colors">{t('nav_register')}</Link></li>
                            <li><Link href={`/${language}/explorar`} className="hover:text-white transition-colors">{t('all_services')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-angola-yellow font-bold mb-6">Newsletter</h4>
                        <p className="text-xs text-zinc-500 mb-4">Receba dicas exclusivas de viagem.</p>
                        {subscribed ? (
                            <div className="bg-zinc-800 p-3 rounded-lg border border-green-500 text-green-500 text-sm animate-pulse">
                                ✓ Subscrito com sucesso!
                            </div>
                        ) : (
                            <form className="flex" onSubmit={handleSub}>
                                <input type="email" required placeholder="Email" className="bg-zinc-800 border-none rounded-l-md px-4 py-2 w-full text-sm focus:ring-1 focus:ring-angola-red" />
                                <button type="submit" className="bg-angola-red hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors font-bold">OK</button>
                            </form>
                        )}
                    </div>
                </div>
                <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
                    <p>&copy; 2024 Explora Angola Prime. {t('slogan')}.</p>
                </div>
            </div>
        </footer>
    );
}
