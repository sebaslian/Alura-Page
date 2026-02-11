import React, { useEffect, useState, useRef } from 'react';
import { X, CheckCircle, Zap } from 'lucide-react';
import { useLanguage } from '../App';
import { useModal } from '../contexts/ModalContext';
import { UI_TEXT } from '../constants';

export const NewsletterModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 1. Body Scroll Lock & Escape Key Handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (isModalOpen) {
      // Prevent scrolling of background content
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
      
      // Focus management
      setTimeout(() => {
         inputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen, closeModal]);

  // 2. Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    console.log("Lead Magnet Subscribed:", email);
    
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  if (!isModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop with Fade In */}
      <div 
        className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm animate-fade-in transition-opacity"
        onClick={handleBackdropClick}
      ></div>

      {/* Modal Container: Single Column, Compact, Responsive */}
      <div 
        ref={modalRef}
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up flex flex-col mx-auto"
        style={{ maxHeight: '90vh', overflowY: 'auto' }} // Safety for very small height screens
      >
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-3 right-3 z-20 p-2 bg-white/80 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition-all shadow-sm"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* 1. Visual Header (Top Banner) */}
        <div className="bg-brand-50 p-6 sm:p-8 text-center relative overflow-hidden shrink-0">
           {/* Decorative Blobs */}
           <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-40"></div>
           <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-300 rounded-full blur-2xl opacity-40"></div>
           
           <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur rounded-full shadow-sm text-[10px] md:text-xs font-bold text-brand-700 uppercase tracking-widest mb-4">
                 <Zap size={12} fill="currentColor" />
                 PDF Guide
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight mb-2">
                 {UI_TEXT.modal_title[language]}
              </h3>
              <p className="text-brand-800 font-medium text-sm sm:text-base">
                 {UI_TEXT.modal_subtitle[language]}
              </p>
           </div>
        </div>

        {/* 2. Content Body */}
        <div className="p-6 sm:p-8 bg-white flex flex-col flex-grow justify-center">
           {status === 'success' ? (
             <div className="text-center py-6 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                   <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{UI_TEXT.modal_success_title[language]}</h4>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">{UI_TEXT.modal_success_desc[language]}</p>
                <button 
                  onClick={closeModal} 
                  className="px-6 py-2 rounded-lg bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors text-sm"
                >
                  Cerrar / Close
                </button>
             </div>
           ) : (
             <>
               <p className="text-gray-600 mb-6 text-center leading-relaxed text-sm sm:text-base">
                 {UI_TEXT.modal_desc[language]}
               </p>

               {/* Checklist Benefits - Compact Grid on Desktop, Stack on Mobile */}
               <ul className="space-y-3 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
                 {[UI_TEXT.modal_benefit_1, UI_TEXT.modal_benefit_2, UI_TEXT.modal_benefit_3].map((benefit, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                     <CheckCircle size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                     <span className="leading-snug">{benefit[language]}</span>
                   </li>
                 ))}
               </ul>

               <form onSubmit={handleSubmit} className="space-y-4">
                 <div>
                   <label htmlFor="modal-email" className="sr-only">{UI_TEXT.newsletter_placeholder[language]}</label>
                   <input
                     ref={inputRef}
                     id="modal-email"
                     type="email"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder={UI_TEXT.newsletter_placeholder[language]}
                     className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all shadow-sm text-gray-900 placeholder-gray-400 text-base"
                   />
                 </div>
                 <button
                   type="submit"
                   disabled={status === 'loading'}
                   className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center text-base"
                 >
                   {status === 'loading' ? (
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                   ) : (
                     UI_TEXT.modal_cta[language]
                   )}
                 </button>
               </form>
               
               <p className="text-[10px] sm:text-xs text-center text-gray-400 mt-4">
                  {language === 'es' ? "🔒 Tus datos están seguros. Date de baja cuando quieras." : "🔒 Your data is safe. Unsubscribe anytime."}
               </p>
             </>
           )}
        </div>
      </div>
    </div>
  );
};