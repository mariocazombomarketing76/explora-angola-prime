
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PROVINCES, MOCK_BUSINESSES } from '../constants';
import { BusinessCard } from '../components/BusinessCard';
import { Category } from '../types';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleCategoryClick = (cat: string) => {
    navigate(`/explorar?categoria=${cat}`);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center gradient-hero">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-display font-black text-white mb-2 leading-tight uppercase italic drop-shadow-2xl">
            {t('hero_title')} <span className="text-angola-yellow">Angola</span>
          </h1>
          <p className="text-angola-yellow font-bold uppercase tracking-[0.4em] text-sm md:text-xl mb-8 drop-shadow-lg">
            {t('slogan')}
          </p>
          
          {/* General Descriptive Box */}
          <div className="border-2 border-angola-yellow/50 md:border-4 rounded-xl md:rounded-2xl p-6 md:p-8 bg-black/30 backdrop-blur-sm mb-10 max-w-3xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed drop-shadow-md">
              {t('hero_desc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/planeador" className="bg-angola-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all text-lg shadow-xl hover:shadow-red-500/20 active:scale-95">
              {t('btn_plan')}
            </Link>
            <button onClick={() => navigate('/explorar')} className="bg-white hover:bg-zinc-100 text-angola-black font-bold py-4 px-10 rounded-full transition-all text-lg active:scale-95 shadow-lg">
              {t('btn_explore')}
            </button>
          </div>
        </div>
      </section>

      {/* Stats/Highlight */}
      <section className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { value: '18', label: t('stats_provinces') },
            { value: '500+', label: t('stats_businesses') },
            { value: '10k+', label: t('stats_tourists') },
            { value: '24/7', label: t('stats_support') }
          ].map((stat, i) => (
            <div key={i} className="text-center md:border-r border-zinc-100 last:border-0">
              <p className="text-4xl font-black text-angola-red">{stat.value}</p>
              <p className="text-zinc-500 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Provinces Highlights */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-display font-black text-zinc-900 italic uppercase">{t('featured_provinces')}</h2>
            <div className="w-20 h-1.5 bg-angola-yellow mt-2"></div>
          </div>
          <Link to="/explorar" className="text-angola-red font-bold hover:underline">{t('view_all')}</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROVINCES.filter(p => ['luanda', 'benguela', 'malanje'].includes(p.slug)).map(province => (
            <Link key={province.id} to={`/${province.slug}`} className="group relative h-[350px] rounded-3xl overflow-hidden shadow-xl active:scale-[0.98] transition-transform">
              <img src={province.heroImage} alt={province.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-display font-black text-white italic">{province.name}</h3>
                <div className="mt-4 inline-flex items-center text-angola-yellow font-bold uppercase tracking-widest text-xs">
                  {t('explore_now')}
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-display font-black text-zinc-900 italic uppercase">{t('recommended_services')}</h2>
            <div className="w-20 h-1.5 bg-angola-red mt-2"></div>
          </div>
          <Link to="/explorar" className="text-angola-red font-bold hover:underline">{t('view_all')}</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_BUSINESSES.map(business => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20 bg-angola-black rounded-[40px] text-white">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-display font-black italic mb-4 uppercase">{t('find_what_you_need')}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-10">
          {Object.values(Category).map((cat) => (
            <div 
              key={cat} 
              onClick={() => handleCategoryClick(cat)}
              className="bg-zinc-900/50 hover:bg-angola-red p-8 rounded-2xl border border-zinc-800 transition-all text-center group cursor-pointer active:scale-95"
            >
              <div className="h-12 w-12 bg-zinc-800 group-hover:bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                 <svg className="w-6 h-6 text-angola-yellow group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="font-bold text-xs tracking-widest uppercase">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Register Business CTA */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-angola-yellow rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-black text-angola-black italic mb-6 uppercase">{t('cta_title')}</h2>
            <p className="text-angola-black/70 text-lg mb-10 max-w-2xl mx-auto font-medium">
              {t('cta_desc')}
            </p>
            <Link to="/anunciar" className="bg-angola-black text-white font-black py-4 px-12 rounded-full hover:scale-105 transition-all text-xl shadow-xl active:scale-95">
              {t('btn_register_now')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
