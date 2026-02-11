import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Clock, Calendar, User, Share2, Bookmark } from 'lucide-react';
import { useLanguage } from '../App';
import { MOCK_ARTICLES, UI_TEXT, CATEGORIES, ARTICLE_TAGS } from '../constants';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { SEOHead } from '../components/SEOHead';
import { useModal } from '../contexts/ModalContext';

export const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const { openModal } = useModal();
  const article = MOCK_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  const category = CATEGORIES.find(c => c.id === article.category);
  
  // Fallback image in case the main image fails
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Prevent infinite loop if fallback fails
    if (e.currentTarget.src.includes('photo-1498837167922')) return;
    
    e.currentTarget.src = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1200"; // Generic healthy food/table
    e.currentTarget.alt = "Fallback image";
  };

  return (
    <>
      <SEOHead 
        title={article.title[language]} 
        description={article.excerpt[language]} 
      />
      
      {/* Article Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-gray-100">
         <div className="h-full bg-brand-500 w-[0%] animate-[width_1s_ease-out_forwards]" style={{width: '30%'}}></div> 
      </div>

      <div className="bg-white min-h-screen pb-20">
        
        {/* Header - Editorial Style with heavy spacing */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:pt-20 md:pb-16 text-center md:text-left">
           <Link to={`/category/${article.category}`} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${category?.color.replace('text-', 'bg-').replace('600', '50')} ${category?.color} text-xs font-bold uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity`}>
             <span className={`w-1.5 h-1.5 rounded-full bg-current`}></span>
             {category?.label[language]}
           </Link>
           
           <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
             {article.title[language]}
           </h1>
           
           <p className="text-xl md:text-2xl text-gray-500 font-sans leading-relaxed mb-10 max-w-3xl">
             {article.excerpt[language]}
           </p>

           <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 border-y border-gray-100 py-6">
              <div className="flex items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden ring-2 ring-white shadow-sm">
                    <img 
                      src="/sebastian.jpg" 
                      alt={article.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${article.author}&background=random`;
                      }}
                    />
                 </div>
                 <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 leading-none mb-1">{article.author}</p>
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">{UI_TEXT.article_author_role[language]}</p>
                 </div>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block mx-2"></div>
              <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                 <div className="flex items-center gap-2">
                   <Calendar size={18} className="text-gray-400" />
                   <span>{article.date}</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <Clock size={18} className="text-gray-400" />
                   <span>{article.readTime} {UI_TEXT.min_read[language]}</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Feature Image - Wide and separate (Kept wide for visual impact as Hero) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
           <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-xl bg-gray-100">
             <img 
               src={article.imageUrl} 
               alt={article.title[language]} 
               className="w-full h-full object-cover"
               onError={handleImageError}
             />
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 lg:col-start-1">
               {/* 
                  PROSE CONFIGURATION UPDATED FOR IMAGE OPTIMIZATION:
                  - prose-img rules applied to target <img> tags inside the content.
                  - Mobile: max-w-[90%]
                  - Tablet (sm): max-w-[80%]
                  - Desktop (md): max-w-[400px]
                  - Centered (mx-auto)
                  - Styling: Rounded, Shadow, Border
               */}
               <article className="
                  prose prose-base md:prose-lg max-w-none 
                  prose-gray
                  prose-p:text-gray-700 prose-p:leading-8 prose-p:my-6 
                  prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 
                  prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                  prose-ul:my-6 prose-li:my-2 prose-li:marker:text-brand-500
                  prose-strong:text-brand-700 prose-strong:font-bold

                  /* IMAGE OPTIMIZATION RULES */
                  prose-img:mx-auto prose-img:block
                  prose-img:w-full 
                  prose-img:max-w-[90%] sm:prose-img:max-w-[80%] md:prose-img:max-w-[400px]
                  prose-img:h-auto
                  prose-img:rounded-xl 
                  prose-img:shadow-md 
                  prose-img:border prose-img:border-gray-100
                  prose-img:my-8
               ">
                 
                 {/* Dynamic Content Rendering */}
                 <div dangerouslySetInnerHTML={{ __html: article.content[language] }} />

                 {/* Content Footer CTA */}
                 <div className="not-prose mt-16 p-1 rounded-3xl bg-gradient-to-br from-brand-100 to-accent-100 shadow-xl">
                    <div className="bg-white rounded-[20px] p-8 md:p-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-gray-900">
                            {UI_TEXT.article_liked_title[language]}
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                            {UI_TEXT.article_liked_subtitle[language]}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={openModal}
                                className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 hover:shadow-lg hover:-translate-y-1 transition-all"
                            >
                                {UI_TEXT.cta_guide[language]}
                            </button>
                        </div>
                    </div>
                 </div>
               </article>

               {/* Tags */}
               <div className="mt-16 pt-8 border-t border-gray-100">
                  <span className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{UI_TEXT.article_tags_label[language]}</span>
                  <div className="flex flex-wrap gap-3">
                    {Object.values(ARTICLE_TAGS).map(tag => (
                        <span key={tag[language]} className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 cursor-pointer transition-colors">
                            #{tag[language]}
                        </span>
                    ))}
                  </div>
               </div>

               {/* Author Bio Box */}
               <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                 <div>
                    <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Sebastián</h4>
                    <p className="text-base text-gray-600 mb-6 leading-relaxed">
                      {language === 'es' 
                        ? "Hola, soy Sebastián. No soy un gurú, solo alguien que busca equilibrar la salud con la vida real. Aquí comparto herramientas prácticas para recuperar tu energía, sin juicios ni extremos."
                        : "Hi, I'm Sebastián. I'm not a guru, just someone trying to balance health with real life. Here I share practical tools to reclaim your energy, without judgment or extremes."}
                    </p>
                    <Link to="/about" className="inline-flex items-center gap-2 text-brand-700 font-bold text-sm uppercase tracking-wide hover:underline">
                       {UI_TEXT.article_bio_link[language]} <Share2 size={16} />
                    </Link>
                 </div>
               </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-10">
              <div className="sticky top-28 space-y-10">
                
                {/* Popular Posts Widget */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h4 className="font-bold text-gray-900 mb-8 font-serif flex items-center gap-3 text-lg">
                    <span className="w-1.5 h-6 bg-brand-500 rounded-full"></span>
                    {UI_TEXT.sidebar_trending[language]}
                  </h4>
                  <div className="space-y-8">
                     {MOCK_ARTICLES.slice(0, 3).map((a, i) => (
                       <Link key={a.id} to={`/article/${a.slug}`} className="flex gap-5 group items-start">
                          <span className="text-3xl font-black text-gray-100 font-serif group-hover:text-brand-100 transition-colors leading-none mt-1">0{i+1}</span>
                          <div>
                             <h5 className="text-base font-bold text-gray-900 group-hover:text-brand-600 transition-colors leading-snug mb-2">
                               {a.title[language]}
                             </h5>
                             <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{a.readTime} {UI_TEXT.min_read[language]}</span>
                          </div>
                       </Link>
                     ))}
                  </div>
                </div>

                {/* Vertical Ad */}
                <AdPlaceholder format="rectangle" />

                {/* Sticky CTA - Small Banner - CONNECTED TO MODAL */}
                <div className="bg-gray-900 rounded-2xl p-6 text-center text-white relative overflow-hidden">
                   <div className="relative z-10">
                      <h4 className="font-bold text-lg mb-2">{UI_TEXT.sidebar_cta_title[language]}</h4>
                      <p className="text-sm text-gray-400 mb-4">{UI_TEXT.sidebar_cta_desc[language]}</p>
                      <button 
                        onClick={openModal}
                        className="w-full py-3 bg-brand-600 rounded-xl font-bold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-900/50"
                      >
                        {UI_TEXT.sidebar_cta_btn[language]}
                      </button>
                   </div>
                   
                   {/* Abstract Pattern */}
                   <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-500 rounded-full blur-2xl"></div>
                   </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
};