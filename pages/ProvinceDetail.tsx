
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROVINCES, MOCK_BUSINESSES } from '../constants';
import { BusinessCard } from '../components/BusinessCard';
import { Category } from '../types';
import { useLanguage } from '../LanguageContext';

const ProvinceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [selectedCity, setSelectedCity] = useState<string>('Todas');

  const province = PROVINCES.find(p => p.slug === slug);
  
  if (!province) {
    return <div className="text-center py-20">Província não encontrada.</div>;
  }

  const filteredBusinesses = MOCK_BUSINESSES.filter(b => {
    const isProvince = b.province === province.name;
    const isCategory = selectedCategory === 'Todos' || b.category === selectedCategory;
    const isCity = selectedCity === 'Todas' || b.city === selectedCity;
    return isProvince && isCategory && isCity;
  });

  return (
    <div className="pb-20">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-end">
        <img src={province.heroImage} alt={province.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 pb-16 w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black text-white italic uppercase">{province.name}</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mt-4 leading-relaxed">{province.description}</p>
        </div>
      </section>

      {/* Filters & Content */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-lg font-black text-zinc-900 uppercase italic mb-4">{t('filter_city')}</h3>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedCity('Todas')}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase border transition-all ${selectedCity === 'Todas' ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-white border-zinc-200 text-zinc-500'}`}
                >
                  Todas
                </button>
                {province.cities.map(city => (
                  <button 
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase border transition-all ${selectedCity === city ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-white border-zinc-200 text-zinc-500'}`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-black text-zinc-900 uppercase italic mb-4">{t('categories')}</h3>
              <div className="space-y-1">
                <button 
                  onClick={() => setSelectedCategory('Todos')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${selectedCategory === 'Todos' ? 'bg-angola-red text-white' : 'text-zinc-600 hover:bg-zinc-50'}`}
                >
                  {t('all_services')}
                </button>
                {Object.values(Category).map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-angola-red text-white' : 'text-zinc-600 hover:bg-zinc-50'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Results */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8 border-b border-zinc-100 pb-4">
              <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-tight">{t('results_in')} <span className="text-angola-red">{province.name}</span></h2>
              <span className="text-sm text-zinc-400 font-medium">{filteredBusinesses.length} {t('businesses_found')}</span>
            </div>

            {filteredBusinesses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBusinesses.map(business => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-zinc-50 rounded-3xl border-2 border-dashed border-zinc-200">
                <button onClick={() => {setSelectedCategory('Todos'); setSelectedCity('Todas');}} className="mt-4 text-angola-red font-bold underline">{t('clear_filters')}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvinceDetail;
