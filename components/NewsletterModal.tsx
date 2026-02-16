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
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    // CONEXIÓN CON TU CUENTA 2088407 Y FORMULARIO uHKCPJ
    if (window.ml) {
      window.ml('send', 'uHKCPJ', { email: email }, (result: any) => {
        console.log("Registro en MailerLite completado:", result);
        setStatus('success');
        setEmail('');
      });
    } else {
      // Fallback por si el script falla
      const formData = new FormData();
      formData.append('fields[email]', email);
      formData.append('ml-submit', '1');
      fetch('https://assets.mailerlite.com/jsonp/2088407/forms/uHKCPJ/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      }).then(() => setStatus('success'));
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" onClick={closeModal}></div>

      <div ref={modalRef} className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* BOTÓN CERRAR */}
        <button onClick={closeModal} className="absolute top-3 right-3 z-20 p-2 text-gray-400 hover:text-gray-900">
          <X size={20} />
        </button>

        {/* CABECERA */}
        <div className="bg-brand-50 p-8 text-center relative overflow-hidden">
           <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 rounded-full shadow-sm text-xs font-bold text-brand-700 mb-4 uppercase">
                 <Zap size={12} fill="currentColor" /> PDF Guide
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 leading-tight mb-2">
                {UI_TEXT.modal_title[language]}
              </h3>
              <p className="text-brand-800 font-medium">
                {UI_TEXT.modal_subtitle[language]}
              </p>
           </div>
        </div>

        {/* CUERPO DEL MODAL */}
        <div className="p-8 bg-white">
            {status === 'success' ? (
              <div className="text-center py-6 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">¡Casi está listo!</h4>
                <p className="text-gray-500 mb-6 text-sm">
                  Te hemos enviado un correo. **Confirma tu suscripción** para recibir la guía.
                </p>
                <button onClick={closeModal} className="px-6 py-2 rounded-lg bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors">
                  Entendido
                </button>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
                    {UI_TEXT.modal_desc[language]}
                </p>

                {/* FORMULARIO */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        ref={inputRef}
                        type="email"
                        name="fields[email]" // Nombre obligatorio para MailerLite
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={UI_TEXT.newsletter_placeholder[language]}
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all text-gray-900 placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 hover:shadow-lg transition-all flex items-center justify-center disabled:opacity-50"
                    >
                        {status === 'loading' ? 'Registrando...' : UI_TEXT.modal_cta[language]}
                    </button>
                </form>

                <p className="text-[10px] sm:text-xs text-center text-gray-400 mt-4">
                    🔒 {language === 'es' ? "Tus datos están seguros. Date de baja cuando quieras." : "Your data is safe. Unsubscribe anytime."}
                </p>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

// EXTREMADAMENTE IMPORTANTE PARA QUE REACT RECONOZCA EL SCRIPT DE MAILERLITE
declare global {
  interface Window {
    ml: any;
  }
}