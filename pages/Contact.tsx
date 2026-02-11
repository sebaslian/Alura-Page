import React from 'react';
import { useLanguage } from '../App';
import { SEOHead } from '../components/SEOHead';
import { UI_TEXT } from '../constants';
import { Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead 
        title={language === 'es' ? 'Contacto' : 'Contact Us'} 
        description={language === 'es' 
          ? "Ponte en contacto con Alura. Preguntas, sugerencias o colaboraciones de salud y bienestar." 
          : "Get in touch with Alura. Health and wellness questions, suggestions, or collaborations."} 
      />
      
      {/* Hero Header */}
      <div className="bg-brand-50/50 py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
             {UI_TEXT.contact_title[language]}
           </h1>
           <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
             {UI_TEXT.contact_subtitle[language]}
           </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
          {/* Main Visual & Info */}
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-4">
                   <div className="p-4 bg-brand-50 rounded-xl text-brand-600">
                      <Instagram size={32} />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-xl">Instagram</h4>
                      <p className="text-gray-600 font-medium text-lg">@alura.page</p>
                      <p className="text-sm text-gray-400 mt-1">
                        {language === 'es' ? 'Síguenos para tips diarios.' : 'Follow us for daily tips.'}
                      </p>
                   </div>
                   <div className="md:ml-auto">
                     <a 
                       href="https://www.instagram.com/alura.page/" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-block bg-gray-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-black transition-all shadow-md"
                     >
                       {language === 'es' ? 'Ir al Perfil' : 'Go to Profile'}
                     </a>
                   </div>
                </div>
             </div>
          </div>

      </div>
    </>
  );
};