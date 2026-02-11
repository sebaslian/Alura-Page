export type Language = 'es' | 'en';

export interface Translation {
  [key: string]: {
    es: string;
    en: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  category: 'nutrition' | 'habits' | 'energy' | 'recipes';
  title: {
    es: string;
    en: string;
  };
  excerpt: {
    es: string;
    en: string;
  };
  content: {
    es: string;
    en: string;
  };
  author: string;
  date: string;
  imageUrl: string;
  readTime: number; // in minutes
}

export interface SiteConfig {
  name: string;
  socialProof: {
    users: number;
    rating: number;
    articles: number;
  };
}