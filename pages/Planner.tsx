
import React, { useState } from 'react';
import { generateItinerary } from '../services/geminiService';
import { PROVINCES } from '../constants';
import { useLanguage } from '../LanguageContext';

const Planner: React.FC = () => {
  const { t, language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<string | null>(null);
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
    const result = await generateItinerary({ ...formData, language });
    setItinerary(result || null);
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-black text-zinc-900 italic uppercase">{t('planner_title')}</h1>
            <div className="w-24 h-2 bg-angola-yellow mt-4"></div>
            <p className="mt-6 text-zinc-500 text-lg">{t('planner_desc')}</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-zinc-700 uppercase mb-2">{t('form_destination')}</label>
                <select 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 focus:ring-2 focus:ring-angola-red outline-none"
                  value={formData.province}
                  onChange={(e) => setFormData({...formData, province: e.target.value})}
                >
                  {PROVINCES.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 uppercase mb-2">{t('form_duration')}</label>
                <input 
                  type="text" 
                  placeholder="ex: 5 days"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 focus:ring-2 focus:ring-angola-red outline-none"
                  value={formData.dates}
                  onChange={(e) => setFormData({...formData, dates: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 uppercase mb-2">{t('form_budget')}</label>
                <select 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 focus:ring-2 focus:ring-angola-red outline-none"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                >
                  <option>Económico</option>
                  <option>Moderado</option>
                  <option>Luxo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 uppercase mb-2">{t('form_people')}</label>
                <input 
                  type="number" 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 focus:ring-2 focus:ring-angola-red outline-none"
                  value={formData.people}
                  onChange={(e) => setFormData({...formData, people: parseInt(e.target.value)})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-700 uppercase mb-2">{t('form_type')}</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['aventura', 'familia', 'luxo', 'negocios'].map(t_str => (
                  <button
                    key={t_str}
                    type="button"
                    onClick={() => setFormData({...formData, type: t_str as any})}
                    className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${formData.type === t_str ? 'bg-angola-red border-angola-red text-white' : 'bg-white border-zinc-200 text-zinc-500'}`}
                  >
                    {t_str}
                  </button>
                ))}
              </div>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-angola-black text-white font-black py-4 rounded-xl hover:bg-zinc-800 transition-all text-lg shadow-lg disabled:opacity-50"
            >
              {loading ? t('loading_itinerary') : t('btn_generate')}
            </button>
          </form>
        </div>

        <div className="relative min-h-[500px]">
          {itinerary && !loading && (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-2xl prose prose-zinc max-w-none">
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-zinc-100">
                <h2 className="text-2xl font-black text-zinc-900 m-0 italic uppercase">Your Itinerary</h2>
                <button onClick={() => window.print()} className="text-angola-red font-bold flex items-center text-sm">
                  {t('print')}
                </button>
              </div>
              <div className="text-zinc-700 leading-relaxed whitespace-pre-wrap">
                {itinerary}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Planner;
