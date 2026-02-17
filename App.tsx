
import React, { useState } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Planner from './pages/Planner';
import ProvinceDetail from './pages/ProvinceDetail';
import { Category, Business } from './types';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { MOCK_BUSINESSES } from './constants';
import { BusinessCard } from './components/BusinessCard';

const Blog = () => (
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl font-black mb-4 italic uppercase">BLOG EXPLORA ANGOLA</h1>
    <p className="text-zinc-500">Estamos a preparar os melhores artigos para si. Volte em breve!</p>
  </div>
);

const ExplorarGeral = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('categoria');
  
  const filtered = catParam 
    ? MOCK_BUSINESSES.filter(b => b.category === catParam)
    : MOCK_BUSINESSES;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-10 italic uppercase">{t('all_services')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(b => <BusinessCard key={b.id} business={b} />)}
      </div>
    </div>
  );
};

const RegisterBusiness = () => {
  const { t } = useLanguage();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black mb-8 italic uppercase text-center">{t('nav_register')}</h1>
      {isSuccess ? (
        <div className="bg-green-50 border-2 border-green-200 p-12 rounded-3xl text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl">✓</div>
          <h2 className="text-2xl font-black text-green-800 mb-2">Pedido Recebido!</h2>
          <p className="text-green-600">A nossa equipa entrará em contacto para validar o seu registo nas próximas 24h.</p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-200">
          <p className="mb-6 text-zinc-500">{t('cta_desc')}</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Nome da Empresa</label>
              <input required type="text" placeholder="Ex: Safari Tours Angola" className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-angola-red outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{t('categories')}</label>
              <select required className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-angola-red outline-none">
                <option value="">Selecione uma categoria</option>
                {Object.values(Category).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Email</label>
              <input required type="email" placeholder="contacto@empresa.ao" className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-angola-red outline-none" />
            </div>
            <div className="pt-4">
              <button type="submit" className="w-full py-4 bg-angola-red text-white font-black rounded-xl uppercase hover:bg-red-700 transition-all shadow-lg shadow-red-500/20 active:scale-95">
                {t('btn_register_now')}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planeador" element={<Planner />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/explorar" element={<ExplorarGeral />} />
          <Route path="/anunciar" element={<RegisterBusiness />} />
          <Route path="/:slug" element={<ProvinceDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
};

export default App;
