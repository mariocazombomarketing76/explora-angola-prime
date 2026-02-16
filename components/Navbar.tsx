'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PROVINCES } from '@/constants';
import { useLanguage } from './LanguageContext';
import { Language } from '@/types';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProvMenuOpen, setIsProvMenuOpen] = useState(false);
    const pathname = usePathname();
    const { language, setLanguage, t } = useLanguage();

    const isActive = (path: string) => {
        // Remove locale from pathname for comparison
        // e.g. /pt/planeador -> /planeador
        const pathWithoutLocale = pathname.replace(`/${language}`, '') || '/';
        return pathWithoutLocale === path;
    };

    const languages: { code: Language; label: string }[] = [
        { code: 'pt', label: 'PT' },
        { code: 'en', label: 'EN' },
        { code: 'fr', label: 'FR' },
        { code: 'es', label: 'ES' }
    ];

    return (
        <nav className="sticky top-0 z-50 glass-effect border-b border-zinc-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href={`/${language}`} className="flex-shrink-0 flex flex-col justify-center perspective-1000 group">
                            <div className="animate-flip-3d transform-gpu group-hover:pause">
                                <div className="flex items-center space-x-1">
                                    <span className="text-angola-red font-display text-2xl font-black italic tracking-tighter leading-none text-3d">EXPLORA</span>
                                    <span className="text-zinc-900 font-display text-2xl font-black italic tracking-tighter leading-none text-3d">ANGOLA</span>
                                    <span className="hidden sm:inline-block bg-angola-yellow text-angola-black text-[10px] font-bold px-1 rounded-sm ml-1 leading-none">PRIME</span>
                                </div>
                                <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.2em] leading-none mt-2 block drop-shadow-sm">
                                    {t('slogan')}
                                </span>
                            </div>
                        </Link>
                        <div className="hidden md:ml-8 md:flex md:space-x-6">
                            <Link href={`/${language}`} className={`px-3 py-2 text-sm font-medium ${isActive('/') ? 'text-angola-red' : 'text-zinc-600 hover:text-angola-red'}`}>{t('nav_home')}</Link>
                            <div
                                className="relative group/menu"
                                onMouseEnter={() => setIsProvMenuOpen(true)}
                                onMouseLeave={() => setIsProvMenuOpen(false)}
                            >
                                <button className="px-3 py-2 text-sm font-medium text-zinc-600 group-hover/menu:text-angola-red flex items-center h-20">
                                    {t('nav_provinces')}
                                    <svg className={`ml-1 w-4 h-4 transition-transform ${isProvMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </button>
                                {isProvMenuOpen && (
                                    <div className="absolute left-0 mt-0 w-[600px] rounded-2xl shadow-2xl bg-white border border-zinc-100 p-6 grid grid-cols-3 gap-2">
                                        {PROVINCES.map(p => (
                                            <Link
                                                key={p.id}
                                                href={`/${language}/${p.slug}`}
                                                className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-angola-red rounded-lg transition-colors font-medium"
                                                onClick={() => setIsProvMenuOpen(false)}
                                            >
                                                {p.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Link href={`/${language}/planeador`} className={`px-3 py-2 text-sm font-medium ${isActive('/planeador') ? 'text-angola-red' : 'text-zinc-600 hover:text-angola-red'}`}>{t('nav_planner')}</Link>
                            <Link href={`/${language}/blog`} className={`px-3 py-2 text-sm font-medium ${isActive('/blog') ? 'text-angola-red' : 'text-zinc-600 hover:text-angola-red'}`}>{t('nav_blog')}</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="hidden sm:flex items-center space-x-2 bg-zinc-100 p-1 rounded-full">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setLanguage(lang.code)}
                                    className={`px-2 py-1 text-[10px] font-bold rounded-full transition-all ${language === lang.code ? 'bg-white text-angola-red shadow-sm' : 'text-zinc-500 hover:text-zinc-800'}`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>

                        <Link href={`/${language}/anunciar`} className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-full shadow-sm text-white bg-angola-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-angola-red transition-all">
                            {t('nav_register')}
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-b border-zinc-200 h-screen overflow-y-auto">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        <Link href={`/${language}`} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50">{t('nav_home')}</Link>
                        <div className="p-4 bg-zinc-50 rounded-xl my-2">
                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{t('nav_provinces')}</p>
                            <div className="grid grid-cols-2 gap-2">
                                {PROVINCES.map(p => (
                                    <Link key={p.id} href={`/${language}/${p.slug}`} onClick={() => setIsOpen(false)} className="text-sm text-zinc-600 hover:text-angola-red py-1">{p.name}</Link>
                                ))}
                            </div>
                        </div>
                        <Link href={`/${language}/planeador`} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50">{t('nav_planner')}</Link>
                        <div className="flex justify-center py-4 space-x-4">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
                                    className={`px-3 py-1 text-sm font-bold rounded-full ${language === lang.code ? 'bg-angola-red text-white' : 'bg-zinc-100 text-zinc-600'}`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                        <Link href={`/${language}/anunciar`} onClick={() => setIsOpen(false)} className="block px-4 py-4 bg-angola-red text-white font-bold rounded-xl m-2">{t('nav_register')}</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
