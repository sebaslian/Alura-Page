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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen, closeModal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  // ESTA FUNCIÓN CONECTA CON TU CUENTA 2088407
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData();
    formData.append('fields[email]', email);
    formData.append('ml-submit', '1');

    try {
      // Usamos el ID de tu formulario uHKCPJ
      await fetch('https://assets.mailerlite.com/jsonp/2088407/forms/uHKCPJ/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Evita problemas de seguridad del navegador
      });
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error("Error al suscribirse:", error);
      setStatus('idle');
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm animate-fade-in transition-opacity" onClick={handleBackdropClick}></div>

      <div ref={modalRef} className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up flex flex-col mx-auto" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <button onClick={closeModal} className="absolute top-3 right-3 z-20 p-2 bg-white/80 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition-all shadow-sm">
          <X size={20} />
        </button>

        <div className="bg-brand-50 p-6 sm:p-8 text-center relative overflow-hidden shrink-0">
           <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-40"></div>
           <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-300 rounded-full blur-2xl opacity-40"></div>
           <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur rounded-full shadow-sm text-[10px] md:text-xs font-bold text-brand-700 uppercase tracking-widest mb-4">
                 <Zap size={12} fill="currentColor" /> PDF Guide
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight mb-2">{UI_TEXT.modal_title[language]}</h3>
              <p className="text-brand-800 font-medium text-sm sm:text-base">{UI_TEXT.modal_subtitle[language]}</p>
           </div>
        </div>

        <div className="p-6 sm:p-8 bg-white flex flex-col flex-grow justify-center">
            {status === 'success' ? (
              <div className="text-center py-6 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">¡Suscripción exitosa!</h4>
                <p className="text-gray-500 mb-6 text-sm">Revisa tu bandeja de entrada para confirmar y descargar tu PDF.</p>
                <button onClick={closeModal} className="px-6 py-2 rounded-lg bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors">Cerrar</button>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6 text-center leading-relaxed text-sm sm:text-base">{UI_TEXT.modal_desc[language]}</p>
                <ul className="space-y-3 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    {[UI_TEXT.modal_benefit_1, UI_TEXT.modal_benefit_2, UI_TEXT.modal_benefit_3].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit[language]}</span>
                    </li>
                    ))}
                </ul>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        ref={inputRef}
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={UI_TEXT.newsletter_placeholder[language]}
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all text-gray-900"
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-all flex items-center justify-center disabled:opacity-50"
                    >
                        {status === 'loading' ? 'Enviando...' : UI_TEXT.modal_cta[language]}
                    </button>
                </form>
                <p className="text-[10px] sm:text-xs text-center text-gray-400 mt-4">🔒 Tus datos están seguros.</p>
              </>
            )}
        </div>
      </div>
    </div>
  );
};