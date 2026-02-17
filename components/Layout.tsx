
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PROVINCES } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Language } from '../types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProvMenuOpen, setIsProvMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

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
            <Link to="/" className="flex-shrink-0 flex flex-col justify-center perspective-1000 group">
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
              <Link to="/" className={`px-3 py-2 text-sm font-medium ${isActive('/') ? 'text-angola-red' : 'text-zinc-600 hover:text-angola-red'}`}>{t('nav_home')}</Link>
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
                        to={`/${p.slug}`} 
                        className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-angola-red rounded-lg transition-colors font-medium"
                        onClick={() => setIsProvMenuOpen(false)}
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/planeador" className={`px-3 py-2 text-sm font-medium ${isActive('/planeador') ? 'text-angola-red' : 'text-zinc-600 hover:text-angola-red'}`}>{t('nav_planner')}</Link>
              <Link to="/blog" className={`px-3 py-2 text-sm font-medium ${isActive('/blog') ? 'text-angola-red' : 'text-zinc-600 hover:text-angola-red'}`}>{t('nav_blog')}</Link>
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
            
            <Link to="/anunciar" className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-full shadow-sm text-white bg-angola-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-angola-red transition-all">
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
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50">{t('nav_home')}</Link>
            <div className="p-4 bg-zinc-50 rounded-xl my-2">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{t('nav_provinces')}</p>
              <div className="grid grid-cols-2 gap-2">
                {PROVINCES.map(p => (
                  <Link key={p.id} to={`/${p.slug}`} onClick={() => setIsOpen(false)} className="text-sm text-zinc-600 hover:text-angola-red py-1">{p.name}</Link>
                ))}
              </div>
            </div>
            <Link to="/planeador" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50">{t('nav_planner')}</Link>
            <div className="flex justify-center py-4 space-x-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {setLanguage(lang.code); setIsOpen(false);}}
                  className={`px-3 py-1 text-sm font-bold rounded-full ${language === lang.code ? 'bg-angola-red text-white' : 'bg-zinc-100 text-zinc-600'}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <Link to="/anunciar" onClick={() => setIsOpen(false)} className="block px-4 py-4 bg-angola-red text-white font-bold rounded-xl m-2">{t('nav_register')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  const [subscribed, setSubscribed] = useState(false);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-angola-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-angola-red font-display text-2xl font-black italic tracking-tighter">EXPLORA</span>
                <span className="text-white font-display text-2xl font-black italic tracking-tighter">ANGOLA</span>
              </div>
              <span className="text-[10px] text-angola-yellow font-bold uppercase tracking-[0.2em] mt-1">{t('slogan')}</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {t('footer_desc')}
            </p>
          </div>
          <div>
            <h4 className="text-angola-yellow font-bold mb-6">{t('nav_provinces')}</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-zinc-400 text-xs">
              {PROVINCES.slice(0, 10).map(p => <Link key={p.id} to={`/${p.slug}`} className="hover:text-white">{p.name}</Link>)}
              <Link to="/explorar" className="text-angola-yellow font-bold">Ver Todas...</Link>
            </div>
          </div>
          <div>
            <h4 className="text-angola-yellow font-bold mb-6">Empresas</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link to="/anunciar" className="hover:text-white transition-colors">{t('nav_register')}</Link></li>
              <li><Link to="/explorar" className="hover:text-white transition-colors">{t('all_services')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-angola-yellow font-bold mb-6">Newsletter</h4>
            <p className="text-xs text-zinc-500 mb-4">Receba dicas exclusivas de viagem.</p>
            {subscribed ? (
              <div className="bg-zinc-800 p-3 rounded-lg border border-green-500 text-green-500 text-sm animate-pulse">
                ✓ Subscrito com sucesso!
              </div>
            ) : (
              <form className="flex" onSubmit={handleSub}>
                <input type="email" required placeholder="Email" className="bg-zinc-800 border-none rounded-l-md px-4 py-2 w-full text-sm focus:ring-1 focus:ring-angola-red" />
                <button type="submit" className="bg-angola-red hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors font-bold">OK</button>
              </form>
            )}
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>&copy; 2024 Explora Angola Prime. {t('slogan')}.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);
