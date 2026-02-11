import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Users, Zap, Clock } from 'lucide-react';
import { useLanguage } from '../App';
import { UI_TEXT, SITE_CONFIG, MOCK_ARTICLES, CATEGORIES } from '../constants';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { SEOHead } from '../components/SEOHead';
import { useModal } from '../contexts/ModalContext';
import { Article } from '../types';

const TRUST_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
];

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const { language } = useLanguage();
  const category = CATEGORIES.find(c => c.id === article.category);
  return (
    <article className="flex flex-col h-full group">
      <Link to={`/article/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden rounded-2xl mb-5 shadow-sm">
        <img 
          src={article.imageUrl} 
          alt={article.title[language]} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          width="800"
          height="500"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
        <div className="absolute top-4 left-4">
           <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide bg-white/95 backdrop-blur shadow-sm ${category?.color.replace('text-', 'text-')}`}>
             {category?.label[language]}
           </span>
        </div>
      </Link>
      
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-xs font-semibold text-gray-400 mb-3">
          <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime} {UI_TEXT.min_read[language]}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span>{article.date}</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-serif leading-tight group-hover:text-brand-700 transition-colors">
          <Link to={`/article/${article.slug}`}>
            {article.title[language]}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-2 mb-4">
          {article.excerpt[language]}
        </p>
        
        <div className="mt-auto pt-4 flex items-center gap-2 text-brand-600 font-bold text-sm">
          {UI_TEXT.read_more[language]} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
};

export const Home: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useModal();

  // Logic for "Trending Articles" (Manual curation or specific criteria)
  const trendingArticles = MOCK_ARTICLES.slice(0, 3);
  
  // Logic for "Latest Articles" (Date based)
  // 1. Filter out trending articles to avoid duplication
  // 2. Sort by date descending
  // 3. Take next 3
  const trendingIds = new Set(trendingArticles.map(a => a.id));
  const latestArticles = MOCK_ARTICLES
    .filter(a => !trendingIds.has(a.id))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <SEOHead />
      
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-24 md:pb-32 relative z-10">
          <div className="flex flex-col items-center text-center">
            
            {/* Content (Centered) */}
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                {UI_TEXT.hero_verified_badge[language]}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                {UI_TEXT.hero_title[language]}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                {UI_TEXT.hero_subtitle[language]}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* CTA 1: Navigation to All Articles */}
                <Link 
                  to="/category/all"
                  className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg shadow-xl shadow-gray-200 hover:bg-black hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                  aria-label={language === 'es' ? 'Explorar todos los artículos' : 'Explore all articles'}
                >
                  {UI_TEXT.cta_explore[language]}
                  <ArrowRight size={20} />
                </Link>

                {/* CTA 2: Open Newsletter Modal */}
                <button 
                  onClick={openModal}
                  className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all"
                  aria-label={language === 'es' ? 'Obtener guía gratuita' : 'Get free guide'}
                >
                  {UI_TEXT.cta_guide[language]}
                </button>
              </div>

              {/* Trust Signals */}
              <div className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex -space-x-3">
                   {TRUST_AVATARS.map((avatar, i) => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                       <img 
                         src={avatar} 
                         alt={`Reader ${i+1}`} 
                         className="w-full h-full object-cover" 
                         width="40"
                         height="40"
                         loading="lazy"
                       />
                     </div>
                   ))}
                </div>
                <div className="flex flex-col">
                   <div className="flex text-yellow-400 text-xs mb-0.5 justify-center sm:justify-start">
                     {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                   </div>
                   <span className="font-medium text-gray-700">{UI_TEXT.hero_readers_count[language]}</span>
                </div>
              </div>
            </div>

            {/* Visual (Right) Removed as requested */}

          </div>
        </div>
      </section>

      {/* Visual Categories Grid */}
      <section className="py-12 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {CATEGORIES.map((cat) => (
              <Link 
                to={`/category/${cat.id}`} 
                key={cat.id} 
                className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all">
                   <cat.icon size={60} className={cat.color} />
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${cat.color} bg-opacity-10 group-hover:bg-opacity-20`}>
                  <cat.icon size={24} className={cat.color} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{cat.label[language]}</h3>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-brand-600 transition-colors flex items-center gap-1">
                   {UI_TEXT.cat_explore_label[language]} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Slot 1 - High Visibility */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdPlaceholder format="horizontal" />
      </div>

      {/* SECTION: TRENDING ARTICLES (Previously Featured) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">{UI_TEXT.section_trending[language]}</h2>
              <p className="text-gray-500 mt-2 text-sm md:text-base">{UI_TEXT.section_trending_sub[language]}</p>
            </div>
            {/* View All hidden on mobile here to save space */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: LATEST ARTICLES (New Section) */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">{UI_TEXT.section_latest[language]}</h2>
              <p className="text-gray-500 mt-2 text-sm md:text-base">{UI_TEXT.section_latest_sub[language]}</p>
            </div>
            <Link to="/category/all" className="flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-800 bg-white border border-gray-200 px-4 py-2 rounded-full transition-all hover:shadow-sm">
              {UI_TEXT.btn_view_all[language]} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {latestArticles.map((article) => (
               <ArticleCard key={article.id} article={article} />
             ))}
          </div>

          <div className="mt-8 md:hidden text-center">
             <Link to="/category/all" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 border border-brand-200 px-6 py-3 rounded-full bg-white shadow-sm">
              {UI_TEXT.btn_view_all[language]} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Slot 2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-8">
        <AdPlaceholder format="horizontal" />
      </div>
    </>
  );
};