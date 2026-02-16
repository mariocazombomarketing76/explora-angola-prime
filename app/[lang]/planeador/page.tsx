'use client';

import React, { useState } from 'react';
import { generateItinerary } from '@/services/geminiService';
import { useLanguage } from '@/components/LanguageContext';
import { Language } from '@/types';
import { SlideUp, FadeIn, ScaleIn } from '@/components/ui/Motion';
import { PROVINCES } from '@/constants';

export default function Planner() {
    const { t, language } = useLanguage();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        province: 'Huíla',
        dates: '3 dias',
        budget: 'Moderado',
        people: 2,
        type: 'aventura'
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const itinerary = await generateItinerary({
                ...formData,
                language: language as Language
            });
            setResult(itinerary);
        } catch (error) {
            console.error(error);
            setResult('Erro ao gerar roteiro. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pb-20">
            {/* Header */}
            <div className="bg-angola-black text-white pt-32 pb-20 rounded-b-[3rem] px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-angola-yellow/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <SlideUp>
                        <h1 className="text-4xl md:text-7xl font-display font-black italic mb-6">Planeador IA</h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            {t('planner_desc')}
                        </p>
                    </SlideUp>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
                <FadeIn className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-zinc-100">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{t('form_destination')}</label>
                                <select
                                    required
                                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-angola-yellow outline-none font-medium transition-all"
                                    value={formData.province}
                                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                                >
                                    {PROVINCES.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{t('form_duration')}</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ex: 5 dias"
                                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-angola-yellow outline-none font-medium transition-all"
                                    value={formData.dates}
                                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{t('form_budget')}</label>
                                <select
                                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-angola-yellow outline-none font-medium transition-all"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option value="economico">Económico</option>
                                    <option value="moderado">Moderado</option>
                                    <option value="luxo">Luxo</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{t('form_type')}</label>
                                <select
                                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-angola-yellow outline-none font-medium transition-all"
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                >
                                    <option value="aventura">Aventura</option>
                                    <option value="familia">Família</option>
                                    <option value="cultural">Cultural</option>
                                    <option value="negocios">Negócios</option>
                                    <option value="praia">Praia & Relax</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-5 rounded-xl font-black text-xl uppercase tracking-wider transition-all shadow-xl ${loading ? 'bg-zinc-300 cursor-not-allowed text-zinc-500' : 'bg-angola-red text-white hover:scale-[1.02] hover:shadow-angola-red/30'}`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {t('loading_itinerary')}
                                </span>
                            ) : (
                                t('btn_generate')
                            )}
                        </button>
                    </form>
                </FadeIn>

                {result && (
                    <ScaleIn className="mt-12 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-zinc-100">
                        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-angola-black prose-p:text-zinc-600 prose-a:text-angola-red">
                            <h2 className="text-3xl font-black mb-8 border-b border-zinc-100 pb-4">O Seu Roteiro Personalizado</h2>
                            <div className="whitespace-pre-line leading-relaxed">
                                {result}
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-zinc-100 text-center">
                            <button className="bg-zinc-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors" onClick={() => window.print()}>
                                {t('print')}
                            </button>
                        </div>
                    </ScaleIn>
                )}
            </div>
        </div>
    );
}
