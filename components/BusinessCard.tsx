'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Business, SubscriptionPlan } from '@/types';
import { useLanguage } from './LanguageContext';

interface Props {
  business: Business;
}

export const BusinessCard: React.FC<Props> = ({ business }) => {
  const { language, t } = useLanguage();

  return (
    <div className="group bg-white rounded-3xl shadow-lg border border-zinc-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={business.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80&w=800'}
          alt={business.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          {business.plan === SubscriptionPlan.PREMIUM && (
            <span className="bg-angola-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              Premium
            </span>
          )}
          {business.verified && (
            <span className="bg-blue-600 text-white p-1.5 rounded-full shadow-md" title={t('verified')}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-white/90 text-xs font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
            {business.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-zinc-900 group-hover:text-angola-red transition-colors leading-tight">{business.name}</h3>
          <div className="flex items-center bg-zinc-50 px-2 py-1 rounded-lg border border-zinc-100">
            <span className="text-angola-gold font-black mr-1">{business.rating}</span>
            <svg className="w-3 h-3 text-angola-gold fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          </div>
        </div>

        <p className="text-zinc-600 text-sm line-clamp-2 mb-4 leading-relaxed">{business.description}</p>

        <div className="flex items-center text-zinc-400 text-xs mb-6">
          <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span className="truncate">{business.city}, {business.province}</span>
        </div>

        <Link
          href={`/${language}/explorar/business/${business.id}`}
          className="block w-full bg-zinc-900 text-white py-3 rounded-xl font-bold text-center text-sm hover:bg-angola-red transition-all shadow-lg hover:shadow-angola-red/25"
        >
          {t('view_details')}
        </Link>
      </div>
    </div>
  );
};
