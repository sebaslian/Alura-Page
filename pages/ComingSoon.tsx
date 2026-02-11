import React from 'react';
import { useLanguage } from '../App';
import { SEOHead } from '../components/SEOHead';
import { UI_TEXT } from '../constants';
import { Dumbbell, ShoppingBag, Download, Trophy, Gift, Star, Handshake } from 'lucide-react';

export const ComingSoon: React.FC = () => {
  const { language } = useLanguage();

  const items = [
    { icon: Dumbbell, label: UI_TEXT.cs_trainings },
    { icon: ShoppingBag, label: UI_TEXT.cs_brands },
    { icon: Download, label: UI_TEXT.cs_guides },
    { icon: Trophy, label: UI_TEXT.cs_challenges },
    { icon: Gift, label: UI_TEXT.cs_resources },
    { icon: Star, label: UI_TEXT.cs_premium },
    { icon: Handshake, label: UI_TEXT.cs_collabs },
  ];

  return (
    <>
      <SEOHead 
        title={UI_TEXT.nav_coming_soon[language]} 
        description={UI_TEXT.cs_subtitle[language]} 
      />
      
      {/* Hero Header */}
      <div className="bg-brand-50/50 py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
             {UI_TEXT.cs_title[language]}
           </h1>
           <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
             {UI_TEXT.cs_subtitle[language]}
           </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="p-4 bg-brand-50 rounded-full text-brand-600 mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {item.label[language]}
                </h3>
                <div className="mt-4 inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {UI_TEXT.nav_coming_soon[language]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};