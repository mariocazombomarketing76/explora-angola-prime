
export enum Category {
  HOTELS = 'Hotéis',
  RESORTS = 'Resorts',
  RESTAURANTS = 'Restaurantes',
  AGENCIES = 'Agências de Turismo',
  TRANSPORT = 'Transportes',
  HOSPITALS = 'Hospitais',
  POLICE = 'Postos Policiais',
  ATTRACTIONS = 'Áreas Turísticas'
}

export enum SubscriptionPlan {
  FREE = 'Gratuito',
  PREMIUM = 'Premium'
}

export type Language = 'pt' | 'en' | 'fr' | 'es';

export interface Business {
  id: string;
  name: string;
  description: string;
  category: Category;
  province: string;
  city: string;
  image: string;
  phone: string;
  whatsapp: string;
  email: string;
  website?: string;
  location: string;
  verified: boolean;
  plan: SubscriptionPlan;
  rating: number;
  reviewCount: number;
}

export interface Province {
  id: string;
  name: string;
  slug: string;
  description: string;
  heroImage: string;
  cities: string[];
}

export interface TravelPlan {
  id: string;
  userId?: string;
  province: string;
  dates: string;
  budget: string;
  people: number;
  type: 'aventura' | 'familia' | 'luxo' | 'negocios';
  createdAt: string;
}

export interface Review {
  id: string;
  businessId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}
