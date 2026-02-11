import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { MOCK_ARTICLES, CATEGORIES, UI_TEXT } from '../constants';
import { SEOHead } from '../components/SEOHead';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Clock, ArrowRight } from 'lucide-react';

export const Category: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  const category = CATEGORIES.find(c => c.id === id);
  const articles = id === 'all' 
    ? MOCK_ARTICLES 
    : MOCK_ARTICLES.filter(a => a.category === id);

  const title = category ? category.label[language] : (id === 'all' ? 'Blog' : 'Category');
  const Icon = category?.icon;

  return (
    <>
      <SEOHead title={title} />
      
      {/* Category Header */}
      <div className={`bg-gray-50 pt-20 pb-16 border-b border-gray-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {Icon && (
              <div className={`inline-flex p-4 rounded-2xl bg-white shadow-sm mb-6 ${category.color}`}>
                <Icon size={40} />
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">{title}</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {UI_TEXT.cat_hero_desc_prefix[language]} {title.toLowerCase()}. {UI_TEXT.cat_hero_desc_suffix[language]}
            </p>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="flex flex-col group border border-gray-100 rounded-2xl overflow-hidden hover:border-brand-200 hover:shadow-lg transition-all duration-300 bg-white">
                <Link to={`/article/${article.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title[language]} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-3">
                      <Clock size={14} />
                      <span>{article.readTime} {UI_TEXT.min_read[language]}</span>
                   </div>
                   
                   <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif leading-snug group-hover:text-brand-600 transition-colors">
                     <Link to={`/article/${article.slug}`}>{article.title[language]}</Link>
                   </h3>
                   
                   <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">
                     {article.excerpt[language]}
                   </p>

                   <Link to={`/article/${article.slug}`} className="text-brand-600 font-bold text-sm uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                      {UI_TEXT.read_more[language]} <ArrowRight size={14} />
                   </Link>
                </div>
              </article>
            ))}
          </div>
          
          {articles.length === 0 && (
             <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-500">{UI_TEXT.cat_not_found[language]}</p>
                <Link to="/" className="text-brand-600 font-bold mt-2 inline-block">{UI_TEXT.btn_go_home[language]}</Link>
             </div>
          )}

          <div className="mt-20 border-t border-gray-100 pt-10">
             <AdPlaceholder format="horizontal" />
          </div>
        </div>
      </div>
    </>
  );
};