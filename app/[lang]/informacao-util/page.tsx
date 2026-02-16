'use client';

import React from 'react';
import { SlideUp, FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { useLanguage } from '@/components/LanguageContext';

export default function TravelInfoPage() {
    const { t } = useLanguage();

    const sections = [
        {
            id: 'visa',
            title: 'Vistos e Fronteiras',
            icon: '🛂',
            content: 'Para entrar em Angola, a maioria dos visitantes necessita de um visto. O visto de turismo é válido por 30 dias e pode ser prorrogado. Cidadãos de alguns países têm isenção ou facilitação de vistos. Consulte o portal do SME (Serviço de Migração e Estrangeiros) para informações atualizadas.',
            link: 'https://www.sme.gov.ao'
        },
        {
            id: 'health',
            title: 'Saúde e Vacinas',
            icon: '💉',
            content: 'A vacina contra a Febre Amarela é obrigatória para todos os viajantes. Recomenda-se também a profilaxia contra a malária, especialmente se visitar zonas fora de Luanda. Beba sempre água engarrafada.',
            link: '#'
        },
        {
            id: 'transport',
            title: 'Transportes',
            icon: '🚌',
            content: 'Luanda tem um sistema de táxis (azul e branco) e serviços de TVDE (Heetch, Yango, Uber). Para viagens interprovinciais, existem autocarros confortáveis (Macon, Huambo Expresso) e voos domésticos com a TAAG.',
            link: '#'
        },
        {
            id: 'weather',
            title: 'Clima e Época',
            icon: '☀️',
            content: 'Angola tem duas estações principais: o Cacimbo (inverno seco, Maio-Setembro) e a época das chuvas (verão quente, Outubro-Abril). O Cacimbo é ideal para safaris e visitar o deserto do Namibe. O verão é óptimo para as praias.',
            link: '#'
        }
    ];

    return (
        <div className="pb-20">
            {/* Header */}
            <div className="bg-angola-black text-white pt-32 pb-20 rounded-b-[3rem] px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <SlideUp>
                        <h1 className="text-4xl md:text-6xl font-display font-black italic mb-6">Guia do Viajante</h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Tudo o que precisa de saber para uma viagem segura e inesquecível por Angola.
                        </p>
                    </SlideUp>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section) => (
                        <StaggerItem key={section.id}>
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 hover:border-angola-gold/50 transition-colors h-full">
                                <div className="text-4xl mb-6 bg-zinc-50 w-16 h-16 rounded-2xl flex items-center justify-center">{section.icon}</div>
                                <h2 className="text-2xl font-bold mb-4 text-angola-black">{section.title}</h2>
                                <p className="text-zinc-600 leading-relaxed mb-6">{section.content}</p>
                                {section.link !== '#' && (
                                    <a href={section.link} target="_blank" rel="noopener noreferrer" className="text-angola-red font-bold hover:underline flex items-center">
                                        Saiba mais
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                )}
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>

            {/* Emergency Contacts */}
            <section className="max-w-4xl mx-auto px-4 mt-20">
                <FadeIn className="bg-angola-red text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Números de Emergência</h3>
                        <p className="text-white/80">Guarde estes números no seu telemóvel.</p>
                    </div>
                    <div className="flex gap-6 text-center">
                        <div>
                            <p className="text-3xl font-black">111</p>
                            <p className="text-xs uppercase font-bold tracking-wider">Polícia/Bombeiros</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black">112</p>
                            <p className="text-xs uppercase font-bold tracking-wider">Emergência Geral</p>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
