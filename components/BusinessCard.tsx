
import React from 'react';
import { Link } from 'react-router-dom';
import { Business, SubscriptionPlan } from '../types';
import { useLanguage } from '../LanguageContext';

interface Props {
  business: Business;
}

export const BusinessCard: React.FC<Props> = ({ business }) => {
  const { t } = useLanguage();
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden hover:shadow-md transition-all">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={business.image} 
          alt={business.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {business.plan === SubscriptionPlan.PREMIUM && (
            <span className="bg-angola-yellow text-angola-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">{t('premium')}</span>
          )}
          {business.verified && (
            <span className="bg-blue-600 text-white p-1 rounded-full shadow-lg" title={t('verified')}>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest">{business.category}</span>
          <div className="flex items-center text-angola-yellow">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <span className="ml-1 text-xs font-bold text-zinc-700">{business.rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-zinc-900 group-hover:text-angola-red transition-colors">{business.name}</h3>
        <p className="text-zinc-500 text-sm line-clamp-2 mt-1 mb-4">{business.description}</p>
        <div className="flex items-center text-zinc-400 text-xs">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          {business.city}, {business.province}
        </div>
      </div>
    </div>
  );
};
