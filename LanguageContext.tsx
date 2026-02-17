
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from './types';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  nav_home: { pt: 'Início', en: 'Home', fr: 'Accueil', es: 'Inicio' },
  nav_provinces: { pt: 'Províncias', en: 'Provinces', fr: 'Provinces', es: 'Provincias' },
  nav_planner: { pt: 'Planeador', en: 'Planner', fr: 'Planificateur', es: 'Planificador' },
  nav_blog: { pt: 'Blog', en: 'Blog', fr: 'Blog', es: 'Blog' },
  nav_register: { pt: 'Registar Empresa', en: 'Register Business', fr: 'Enregistrer Entreprise', es: 'Registrar Empresa' },
  slogan: { pt: 'Juntos pelo turismo', en: 'Together for tourism', fr: 'Ensemble pour le tourisme', es: 'Juntos por el turismo' },
  hero_title: { pt: 'Descubra o Coração de', en: 'Discover the Heart of', fr: 'Découvrez le Cœur de', es: 'Descubra el Corazón de' },
  hero_desc: { 
    pt: 'A principal infraestrutura digital para o turismo em todas as 18 províncias de Angola.', 
    en: 'The leading digital infrastructure for tourism across all 18 provinces of Angola.', 
    fr: "La principale infrastructure numérique pour le tourisme dans les 18 provinces de l'Angola.", 
    es: 'La principal infraestructura digital para el turismo en las 18 provincias de Angola.' 
  },
  btn_plan: { pt: 'Planear Viagem', en: 'Plan Trip', fr: 'Planifier Voyage', es: 'Planificar Viaje' },
  btn_explore: { pt: 'Explorar Províncias', en: 'Explore Provinces', fr: 'Explorer Provinces', es: 'Explorar Provincias' },
  stats_businesses: { pt: 'Empresas Registadas', en: 'Registered Businesses', fr: 'Entreprises Enregistrées', es: 'Empresas Registradas' },
  stats_provinces: { pt: 'Províncias (Nacionais)', en: 'Provinces (National)', fr: 'Provinces (Nationales)', es: 'Provincias (Nacionales)' },
  stats_tourists: { pt: 'Turistas Mensais', en: 'Monthly Tourists', fr: 'Touristes Mensuels', es: 'Turistas Mensuales' },
  stats_support: { pt: 'Suporte ao Viajante', en: 'Traveler Support', fr: 'Support Voyageur', es: 'Soporte al Viajero' },
  featured_provinces: { pt: 'Províncias em Destaque', en: 'Featured Provinces', fr: 'Provinces en Vedette', es: 'Provincias Destacadas' },
  explore_now: { pt: 'Explorar Agora', en: 'Explore Now', fr: 'Explorer Maintenant', es: 'Explorar Ahora' },
  recommended_services: { pt: 'Serviços Recomendados', en: 'Recommended Services', fr: 'Services Recommandés', es: 'Servicios Recomendados' },
  view_all: { pt: 'Ver Todos', en: 'View All', fr: 'Voir Tout', es: 'Ver Todo' },
  find_what_you_need: { pt: 'Encontre o que precisa', en: 'Find what you need', fr: 'Trouvez ce dont vous avez besoin', es: 'Encuentre lo que necesita' },
  cta_title: { pt: 'Tem um negócio turístico?', en: 'Have a tourism business?', fr: 'Avez-vous une entreprise touristique?', es: '¿Tiene un negocio turístico?' },
  cta_desc: { pt: 'Junte-se à maior plataforma de turismo de Angola. Ganhe visibilidade, atraia mais clientes.', en: 'Join the largest tourism platform in Angola. Gain visibility, attract more customers.', fr: "Rejoignez la plus grande plateforme touristique d'Angola. Gagnez en visibilité, attirez plus de clients.", es: 'Únase a la mayor plataforma turística de Angola. Gane visibilidad, atraiga más clientes.' },
  btn_register_now: { pt: 'Registar Agora', en: 'Register Now', fr: 'S\'inscrire Maintenant', es: 'Registrarse Ahora' },
  footer_desc: { pt: 'A principal infraestrutura digital de turismo em Angola.', en: 'The leading digital tourism infrastructure in Angola.', fr: "La principale infrastructure numérique de tourisme en Angola.", es: 'La principal infraestructura digital de turismo en Angola.' },
  planner_title: { pt: 'Planeador de Viagem AI', en: 'AI Travel Planner', fr: 'Planificateur de Voyage AI', es: 'Planificador de Viaje IA' },
  planner_desc: { pt: 'Deixe a nossa inteligência artificial criar o roteiro perfeito.', en: 'Let our AI create the perfect itinerary.', fr: "Laissez notre IA créer l'itinéraire parfait.", es: 'Deje que nuestra IA cree el itinerario perfecto.' },
  form_destination: { pt: 'Destino', en: 'Destination', fr: 'Destination', es: 'Destino' },
  form_duration: { pt: 'Duração', en: 'Duration', fr: 'Durée', es: 'Duración' },
  form_budget: { pt: 'Orçamento', en: 'Budget', fr: 'Budget', es: 'Presupuesto' },
  form_people: { pt: 'Pessoas', en: 'People', fr: 'Personnes', es: 'Personas' },
  form_type: { pt: 'Tipo de Viagem', en: 'Trip Type', fr: 'Type de Voyage', es: 'Tipo de Viaje' },
  btn_generate: { pt: 'Gerar Roteiro Inteligente', en: 'Generate Smart Itinerary', fr: 'Générer Itinéraire Intelligent', es: 'Generar Itinerario Inteligente' },
  loading_itinerary: { pt: 'A processar o seu roteiro...', en: 'Processing your itinerary...', fr: 'Traitement de votre itinéraire...', es: 'Procesando su itinerario...' },
  print: { pt: 'Imprimir', en: 'Print', fr: 'Imprimer', es: 'Imprimir' },
  filter_city: { pt: 'Filtrar por Cidade', en: 'Filter by City', fr: 'Filtrer par Ville', es: 'Filtrar por Ciudad' },
  categories: { pt: 'Categorias', en: 'Categories', fr: 'Catégories', es: 'Categorías' },
  all_services: { pt: 'Todos os Serviços', en: 'All Services', fr: 'Tous les Services', es: 'Todos os Servicios' },
  results_in: { pt: 'Resultados em', en: 'Results in', fr: 'Résultats dans', es: 'Resultados en' },
  businesses_found: { pt: 'empresas encontradas', en: 'businesses found', fr: 'entreprises trouvées', es: 'empresas encontradas' },
  clear_filters: { pt: 'Limpar Filtros', en: 'Clear Filters', fr: 'Effacer les Filtres', es: 'Limpiar Filtros' },
  faq_title: { pt: 'Perguntas Frequentes', en: 'Frequently Asked Questions', fr: 'Questions Fréquentes', es: 'Preguntas Frecuentes' },
  premium: { pt: 'Premium', en: 'Premium', fr: 'Premium', es: 'Premium' },
  verified: { pt: 'Verificada', en: 'Verified', fr: 'Vérifiée', es: 'Verificada' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
