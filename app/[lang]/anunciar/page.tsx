'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { Category } from '@/types';
import { SlideUp, FadeIn, ScaleIn } from '@/components/ui/Motion';

export default function AnunciarPage() {
    const { t } = useLanguage();

    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        email: '',
        type: 'Hotel'
    });

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) newErrors.name = 'O nome do negócio é obrigatório.';
        if (formData.name.length < 3) newErrors.name = 'O nome deve ter pelo menos 3 caracteres.';

        if (!formData.category) newErrors.category = 'Selecione uma categoria.';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) newErrors.email = 'O email é obrigatório.';
        else if (!emailRegex.test(formData.email)) newErrors.email = 'Insira um email válido.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({ name: '', category: '', email: '', type: 'Hotel' });
            }, 5000);
        }
    };

    const plans = [
        {
            name: 'Gratuito',
            price: '0 Kz',
            features: [
                'Listagem básica no diretório',
                'Visualização no mapa',
                'Contactos telefónicos',
                'Limite de 3 fotos'
            ],
            color: 'bg-zinc-100',
            buttonColor: 'bg-zinc-800',
            textColor: 'text-zinc-600'
        },
        {
            name: 'Profissional',
            price: '25.000 Kz/mês',
            features: [
                'Selo "Verificado" ✅',
                'Destaque na página inicial',
                'Galeria ilimitada',
                'Link direto para WhatsApp',
                'Estatísticas de visitas',
                'Resposta a avaliações'
            ],
            recommended: true,
            color: 'bg-angola-black',
            buttonColor: 'bg-angola-red',
            textColor: 'text-zinc-300'
        },
        {
            name: 'Corporativo',
            price: 'Sob Consulta',
            features: [
                'Todas as funcionalidades Profissional',
                'Banner publicitário dedicado',
                'Gestor de conta dedicado',
                'Integração com API de reservas',
                'Relatórios mensais de ROI'
            ],
            color: 'bg-angola-gold',
            buttonColor: 'bg-white text-angola-black',
            textColor: 'text-angola-black/80'
        }
    ];

    return (
        <div className="pb-20">
            {/* Header */}
            <div className="bg-angola-black text-white pt-32 pb-20 rounded-b-[3rem] px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-angola-red/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <SlideUp>
                        <h1 className="text-4xl md:text-7xl font-display font-black italic mb-6">Eleve o Seu Negócio</h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            Junte-se à maior rede de turismo de Angola. Mostre o seu hotel, restaurante ou serviço a milhares de viajantes prontos para explorar.
                        </p>
                    </SlideUp>
                </div>
            </div>

            {/* Plans */}
            <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <ScaleIn key={plan.name} delay={index * 0.1}>
                            <div className={`rounded-3xl p-8 shadow-2xl ${plan.color} ${plan.recommended ? 'transform md:-translate-y-4 border-4 border-angola-red' : ''} h-full flex flex-col`}>
                                {plan.recommended && (
                                    <div className="bg-angola-red text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full self-start mb-4">
                                        Recomendado
                                    </div>
                                )}
                                <h3 className={`text-3xl font-black mb-2 ${plan.name === 'Corporativo' ? 'text-angola-black' : 'text-white'} ${plan.name === 'Gratuito' ? 'text-zinc-900' : ''}`}>{plan.name}</h3>
                                <p className={`text-4xl font-bold mb-8 ${plan.name === 'Corporativo' ? 'text-angola-black' : 'text-white'} ${plan.name === 'Gratuito' ? 'text-zinc-900' : ''}`}>{plan.price}</p>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className={`flex items-start ${plan.textColor}`}>
                                            <svg className={`w-6 h-6 mr-3 flex-shrink-0 ${plan.name === 'Corporativo' ? 'text-angola-black' : 'text-angola-gold'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform ${plan.buttonColor} ${plan.name === 'Gratuito' ? 'text-white text-zinc-900 border border-zinc-200' : 'text-white'}`}>
                                    Começar Agora
                                </button>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-3xl mx-auto px-4 mt-24">
                <FadeIn className="bg-white rounded-3xl shadow-xl p-10 border border-zinc-100">
                    <h2 className="text-3xl font-display font-black text-center mb-8">Registo Rápido</h2>
                    {isSuccess ? (
                        <div className="bg-green-50 border-2 border-green-200 p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">✓</div>
                            <h3 className="text-xl font-black text-green-800 mb-2">Pedido Recebido!</h3>
                            <p className="text-green-600">A nossa equipa entrará em contacto para validar o seu registo nas próximas 24h.</p>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-2">Nome do Negócio</label>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${errors.name ? 'border-red-500' : 'border-zinc-200'} focus:border-angola-red focus:ring-angola-red/20 transition-all font-medium outline-none`}
                                        placeholder="Ex: Hotel Luanda"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-2">Tipo de Negócio</label>
                                    <select
                                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-angola-red focus:ring-angola-red/20 transition-all font-medium outline-none"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    >
                                        <option>Hotel</option>
                                        <option>Restaurante</option>
                                        <option>Agência de Viagens</option>
                                        <option>Experiência Turística</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-2">Categoria</label>
                                <select
                                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${errors.category ? 'border-red-500' : 'border-zinc-200'} focus:border-angola-red focus:ring-angola-red/20 transition-all font-medium outline-none`}
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option value="">Selecione uma categoria...</option>
                                    {Object.values(Category).map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                {errors.category && <p className="text-red-500 text-xs mt-1 font-bold">{errors.category}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-2">Email de Contacto</label>
                                <input
                                    type="email"
                                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${errors.email ? 'border-red-500' : 'border-zinc-200'} focus:border-angola-red focus:ring-angola-red/20 transition-all font-medium outline-none`}
                                    placeholder="geral@seunegocio.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
                            </div>
                            <button type="submit" className="w-full bg-angola-black text-white font-black py-4 rounded-xl text-lg hover:bg-angola-red transition-colors shadow-xl">
                                Enviar Pedido
                            </button>
                        </form>
                    )}
                </FadeIn>
            </div>
        </div>
    );
}
