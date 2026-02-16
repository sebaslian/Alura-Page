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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    // MÉTODO DEFINITIVO: Envío mediante un formulario oculto para evitar bloqueos de React/CORS
    try {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://assets.mailerlite.com/jsonp/2088407/forms/uHKCPJ/subscribe';
      form.target = 'hidden_iframe'; // Evita que la página se recargue

      const emailInput = document.createElement('input');
      emailInput.type = 'hidden';
      emailInput.name = 'fields[email]';
      emailInput.value = email;
      
      const submitInput = document.createElement('input');
      submitInput.type = 'hidden';
      submitInput.name = 'ml-submit';
      submitInput.value = '1';

      form.appendChild(emailInput);
      form.appendChild(submitInput);
      document.body.appendChild(form);
      
      // Creamos un iframe invisible para recibir la respuesta
      let iframe = document.getElementById('hidden_iframe') as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden_iframe';
        iframe.name = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      form.submit();
      
      // Simulamos el éxito tras el envío
      setTimeout(() => {
        setStatus('success');
        setEmail('');
        document.body.removeChild(form);
      }, 1000);

    } catch (error) {
      console.error("Error en el envío:", error);
      setStatus('idle');
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" onClick={closeModal}></div>

      <div ref={modalRef} className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        <button onClick={closeModal} className="absolute top-3 right-3 z-20 p-2 text-gray-400 hover:text-gray-900">
          <X size={20} />
        </button>

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

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        ref={inputRef}
                        type="email"
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

declare global {
  interface Window {
    ml: any;
  }
}